
import React, {PropTypes} from 'react'

const PlaybackSelector = ({mode, onPlaybackChange}) => {
  var types = ['fastBackward','backward','pause','forward','fastForward']
  var buttons = types.map(function(s,i){
    var className = 'playbackButton ' + (s === mode ?'active':'inactive')
    return (
      <li className={className} key={i} onClick={()=>onPlaybackChange(s)}>
        <img width="16" height="16"/>
      </li>
    )
  })
  return (
    <ul className="playbackSelector buttonRow">
      {buttons}
    </ul>
  )
}


PlaybackSelector.propTypes = {
  mode: PropTypes.string.isRequired,
  onPlaybackChange: PropTypes.func.isRequired
}

export default PlaybackSelector