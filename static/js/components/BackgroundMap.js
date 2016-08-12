import React, { PropTypes } from 'react'
import MapGL from 'react-map-gl'
import autobind from 'autobind-decorator'
import * as d3 from 'd3'
import * as utils from '../utils'
import MapStateOverlay from './MapStateOverlay'
import ViewportMercator from 'viewport-mercator-project'
import { DeckGLOverlay, ScatterplotLayer } from 'deck.gl'

class BackgroundMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      animate: false,
      coordinates: [-122.4376, 37.7577]
    }
  }

  @autobind
  tick () {
    const {animate, expedition, fetchDay, setControl, isFetching, updateMap} = this.props
    var b1, b2
    if (animate && !isFetching) {
      // increment time
      var dateOffset = 0
      var forward = expedition.playback === 'fastForward' || expedition.playback === 'forward' || expedition.playback === 'pause'
      if (this.state.beaconIndex === (forward ? 0 : 1) || this.state.beaconIndex === (forward ? d3.values(this.state.day.beacons).length - 2 : d3.values(this.state.day.beacons).length - 1)) {
        var offset = this.state.timeToNextBeacon > 0 ? Math.min(100000, this.state.timeToNextBeacon + 1) : 100000
        if (expedition.playback === 'fastBackward' || expedition.playback === 'backward') dateOffset = -1 * offset
        if (expedition.playback === 'forward' || expedition.playback === 'fastForward') dateOffset = offset
      } else {
        if (expedition.playback === 'fastBackward') dateOffset = -20000
        if (expedition.playback === 'backward') dateOffset = -2000
        if (expedition.playback === 'forward') dateOffset = 2000
        if (expedition.playback === 'fastForward') dateOffset = 20000
      }
      var currentDate = new Date(Math.min(expedition.end.getTime() - 1, (Math.max(expedition.start.getTime() + 1, this.state.currentDate.getTime() + dateOffset))))

      if ((currentDate.getTime() === expedition.end.getTime() - 1 && (expedition.playback === 'forward' || expedition.playback === 'fastForward')) || (currentDate.getTime() === expedition.start.getTime() + 1 && (expedition.playback === 'backward' || expedition.playback === 'fastBackward'))) setControl('playback', 'pause')

      var currentDay = Math.floor((currentDate.getTime() - expedition.start.getTime()) / (1000 * 3600 * 24))
      if (currentDay !== this.state.currentDay) {
        // new day
        fetchDay(currentDate)
      }

      // look for current beacons
      const day = expedition.days[currentDay]
      var beacons = d3.values(day.beacons).sort((a, b) => {
        return new Date(a.properties.DateTime).getTime() - new Date(b.properties.DateTime).getTime()
      })
      var beaconCount = beacons.length
      var beaconIndex
      var timeToNextBeacon = 0
      var ratioBetweenBeacons = 0
      if (expedition.playback === 'forward' || expedition.playback === 'fastForward' || expedition.playback === 'pause') {
        for (var i = 0; i < beaconCount - 1; i++) {
          b1 = new Date(beacons[i].properties.DateTime).getTime()
          b2 = new Date(beacons[i + 1].properties.DateTime).getTime()
          if (currentDate.getTime() >= b1 && currentDate.getTime() < b2) {
            beaconIndex = i
            timeToNextBeacon = b2 - currentDate.getTime()
            ratioBetweenBeacons = (currentDate.getTime() - b1) / (b2 - b1)
            break
          }
        }
        if (beaconIndex < 0) beaconIndex = beaconCount - 1
      } else {
        for (i = beaconCount - 1; i > 0; i--) {
          b1 = new Date(beacons[i].properties.DateTime).getTime()
          b2 = new Date(beacons[i - 1].properties.DateTime).getTime()
          if (currentDate.getTime() <= b1 && currentDate.getTime() > b2) {
            beaconIndex = i
            timeToNextBeacon = currentDate.getTime() - b2
            ratioBetweenBeacons = (currentDate.getTime() - b1) / (b2 - b1)
            break
          }
        }
        if (beaconIndex < 0) beaconIndex = 0
      }

      var currentBeacon = beacons[beaconIndex + (forward ? 0 : 0)]
      var nextBeacon = beacons[beaconIndex + (forward ? 1 : -1)]
      var coordinates = [
        utils.lerp(currentBeacon.geometry.coordinates[0], nextBeacon.geometry.coordinates[0], ratioBetweenBeacons),
        utils.lerp(currentBeacon.geometry.coordinates[1], nextBeacon.geometry.coordinates[1], ratioBetweenBeacons)
      ]

      // if (this.state.frameCount % 30 === 0) console.log(currentBeacon.id, nextBeacon.id)

      this.setState({
        currentDate: currentDate,
        coordinates: coordinates,
        animate: animate,
        currentDay: currentDay,
        day: day,
        beaconIndex: beaconIndex,
        timeToNextBeacon: timeToNextBeacon
      })

      if (this.state.frameCount % 10 === 0 && expedition.playback !== 'pause') {
        // console.log(currentBeacon.id, nextBeacon.id)
      }
      if (this.state.frameCount % 60 === 0 && expedition.playback !== 'pause') {

        const { unproject } = ViewportMercator({
          longitude: this.state.coordinates[0],
          latitude: this.state.coordinates[1],
          width: window.innerWidth,
          height: window.innerHeight,
          zoom: 14
        })
        const nw = unproject([0, 0])
        const se = unproject([window.innerWidth, window.innerHeight])
        const viewGeoBounds = [nw[0], nw[1], se[0], se[1]]
        updateMap(this.state.currentDate, this.state.coordinates, viewGeoBounds)

        // update app state
        // console.log('aga', this.state.currentDate, this.state.currentDay, this.state.beaconIndex, d3.values(this.state.day.beacons).length, this.state.timeToNextBeacon)
        // console.log('aga', beaconIndex, beacons[beaconIndex], beacons[+beaconIndex+1])
        // console.log(this.state.coordinates)
      }
    }
    this.state.animate = animate
    this.state.frameCount++
    // if (this.state.frameCount % 60 === 0) console.log(this.state.frameCount)
    requestAnimationFrame(this.tick)
  }

  componentWillReceiveProps (nextProps) {
    const {animate, expedition, mapStateNeedsUpdate} = nextProps
    if (animate) {
      const currentDate = expedition.currentDate
      // note: currentDay has a 1 day offset with API expeditionDay, which starts at 1
      const currentDay = Math.floor((currentDate.getTime() - expedition.start.getTime()) / (1000 * 3600 * 24))
      const day = expedition.days[currentDay]

      if (mapStateNeedsUpdate) {
        this.state.currentDate = currentDate
        this.state.currentDay = currentDay
        this.state.day = day
        this.state.frameCount = 0
      }

      if (!this.state.animate) {
        this.state.animate = animate
        console.log('starting animation')
        this.tick()
      }
    }
  }

  render () {
    const {coordinates} = this.state

    const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiaWFhYWFuIiwiYSI6ImNpbXF1ZW4xOTAwbnl3Ymx1Y2J6Mm5xOHYifQ.6wlNzSdcTlonLBH-xcmUdQ'
    const MAPBOX_STYLE = 'mapbox://styles/iaaaan/ciodi8ggn0002a6nf5mb3i4y4'

    return (
      <div id="mapbox">
        <MapGL
          mapStyle={MAPBOX_STYLE}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          width={window.innerWidth}
          height={window.innerHeight}
          longitude={coordinates[0]}
          latitude={coordinates[1]}
          zoom={14}
        >
          <DeckGLOverlay
            width={window.innerWidth}
            height={window.innerHeight}
            longitude={coordinates[0]}
            latitude={coordinates[1]}
            zoom={14}
            layers={[
              new ScatterplotLayer({
                id: 'sightings',
                width: window.innerWidth,
                height: window.innerHeight,
                latitude: coordinates[1],
                longitude: coordinates[0],
                zoom: 14,
                data: [
                  {position:{x:coordinates[0],y:coordinates[1],z:0}, color:[255,0,0]}
                ],
                radius: 20
                // isPickable: true,
                // onHover: this._handleScatterplotHovered,
                // onClick: this._handleScatterplotClicked
              })
            ]}
            onAfterRender={(aga) => {console.log('aga', aga)}}
          />
        </MapGL>
      </div>
    )
  }
}

BackgroundMap.propTypes = {
  animate: PropTypes.bool.isRequired,
  expedition: PropTypes.object,
  updateMap: PropTypes.func.isRequired,
  fetchDay: PropTypes.func.isRequired,
  setControl: PropTypes.func.isRequired,
  mapStateNeedsUpdate: PropTypes.bool.isRequired
}

export default BackgroundMap
