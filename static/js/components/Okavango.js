import React, { PropTypes } from 'react'
import BackgroundMap from './BackgroundMap'

import LightBox from './LightBox'
import Timeline from './Timeline'
import Navigation from './Navigation'

export default class Okavango extends React.Component {

  render () {
    const {children, expedition, animate, updateMap, fetchDay, setControl, jumpTo, isFetching, mapStateNeedsUpdate} = this.props
    var height = {height: window.innerHeight - 100}

    // const nightOpacity = () => {
    //   console.log('opacity')
    //   if (!expedition) return { opacity: 0 }
    //   var currentDate = expedition.currentDate.getTime() + 2 * (1000 * 3600)
    //   var currentTime = currentDate % (1000 * 3600 * 24)
    //   var opacity = Math.floor(currentTime / (1000 * 3600 * 24) * 100)
    //   console.log('opacity', opacity)
    //   return {
    //     { opacity: opacity + '%' }
    //   }
    // }

    return (
      <div id="root">
        <BackgroundMap isFetching={isFetching} animate={animate} expedition={expedition} updateMap={updateMap} fetchDay={fetchDay} setControl={setControl} mapStateNeedsUpdate={mapStateNeedsUpdate}/>
        <div id="mapOverlay"></div>
        <div id="nightOverlay"></div>
        <Navigation pathName={location.pathname}/>
        <div id="content" style={height}>
          {isFetching ? <div id="loadingWheel"></div> : null}
          <LightBox active={false}/>
          <Timeline expedition={expedition} jumpTo={jumpTo}/>
          <div id="pageContainer">
            {children}
          </div>
        </div>
      </div>
    )
  }
}

Okavango.propTypes = {
  animate: PropTypes.bool,
  children: PropTypes.node.isRequired,
  expedition: PropTypes.object,
  updateMap: PropTypes.func.isRequired,
  fetchDay: PropTypes.func.isRequired,
  setControl: PropTypes.func.isRequired,
  jumpTo: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  mapStateNeedsUpdate: PropTypes.bool.isRequired
}
