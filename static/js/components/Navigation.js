import React, { PropTypes } from 'react'
import NavigationItem from './NavigationItem'

const Navigation = ({pathName, setPage}) => {
  return (
    <div id="header">
      <div id="navigation">
        <ul>
          <NavigationItem setPage={setPage} active={pathName === '/' || pathName === '/map'}>Map</NavigationItem>
          <NavigationItem setPage={setPage} active={pathName === '/journal'}>Journal</NavigationItem>
          <NavigationItem setPage={setPage} active={pathName === '/data'}>Data</NavigationItem>
          <NavigationItem setPage={setPage} active={pathName === '/about'}>About</NavigationItem>
          <NavigationItem active={pathName === '/share'}>Share</NavigationItem>
        </ul>
      </div>
      <h1>INTO THE OKAVANGO</h1>
      <img id="logo" src="static/img/logo.svg" alt="Into the Okavango"/>
    </div>
  )
}

Navigation.propTypes = {
  pathName: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

export default Navigation