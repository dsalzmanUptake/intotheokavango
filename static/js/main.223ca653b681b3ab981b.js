webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(331);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _redux = __webpack_require__(469);
	
	var _reactRedux = __webpack_require__(483);
	
	var _reduxThunk = __webpack_require__(492);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _actions = __webpack_require__(493);
	
	var _reducers = __webpack_require__(498);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _reactRouter = __webpack_require__(500);
	
	var _OkavangoContainer = __webpack_require__(561);
	
	var _OkavangoContainer2 = _interopRequireDefault(_OkavangoContainer);
	
	var _MapPage = __webpack_require__(1035);
	
	var _MapPage2 = _interopRequireDefault(_MapPage);
	
	var _JournalPageContainer = __webpack_require__(1047);
	
	var _JournalPageContainer2 = _interopRequireDefault(_JournalPageContainer);
	
	var _DataPage = __webpack_require__(1050);
	
	var _DataPage2 = _interopRequireDefault(_DataPage);
	
	var _AboutPage = __webpack_require__(1053);
	
	var _AboutPage2 = _interopRequireDefault(_AboutPage);
	
	var _SharePage = __webpack_require__(1054);
	
	var _SharePage2 = _interopRequireDefault(_SharePage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// const loggerMiddleware = createLogger()
	
	// This hack allows saving 20% weight on tiles for browsers other than Chrome
	(function (open) {
	  XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
	    url = url.replace(/(\.png\?access)|(\.jpg\?access)|(\.jpeg\?access)/, '.jpg70?access');
	    open.call(this, method, url, async, user, pass);
	  };
	})(XMLHttpRequest.prototype.open);
	/*
	
	  move 360 videos to side
	
	  GENERAL
	    expedition year selection
	    deep linking
	    Fix intro
	    animate timeline cursor and direction
	  MAP
	    separate normal map interaction vs introduction
	    round sightings location
	    rollover member markers
	    map interactions
	  JOURNAL
	    bind timeline
	    permalinks and location buttons
	    grid visualization
	  API
	    Data explorer
	  MISC
	    Upgrade react-three-renderer to NPM version
	  CODE
	    switch state and props to immutable.js
	    properly set key props
	    swith to sylus
	
	*/
	
	document.getElementById('root').remove();
	
	var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));
	
	var routes = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _OkavangoContainer2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _MapPage2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'map', component: _MapPage2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'journal', component: _JournalPageContainer2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'data', component: _DataPage2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _AboutPage2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: 'share', component: _SharePage2.default })
	);
	
	var render = function render() {
	  _reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: routes })
	  ), document.getElementById('okavango'));
	};
	
	store.subscribe(render);
	store.dispatch((0, _actions.fetchExpeditions)());
	
	window.onclick = function (event) {
	  if (!event.target.matches('.dropbtn')) {
	    var dropdowns = document.getElementsByClassName('dropdown-content');
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
	  }
	};

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UNSELECT_FEATURE = exports.SELECT_FEATURE = exports.RECEIVE_FEATURES = exports.RECEIVE_DAY = exports.REQUEST_DAY = exports.SET_CONTROL = exports.SET_EXPEDITION = exports.RECEIVE_TOTAL_SIGHTINGS = exports.RECEIVE_EXPEDITIONS = exports.UPDATE_MAP = exports.UPDATE_TIME = exports.REQUEST_EXPEDITIONS = exports.START = exports.JUMP_TO = exports.HIDE_LOADING_WHEEL = exports.SHOW_LOADING_WHEEL = exports.COMPLETE_DAYS = exports.RECEIVE_POSTS = exports.FETCH_POSTS_BY_DAY = exports.SET_PAGE = exports.ENABLE_CONTENT = exports.SHOW_360_PICTURE = exports.CLOSE_LIGHTBOX = undefined;
	exports.closeLightBox = closeLightBox;
	exports.show360Picture = show360Picture;
	exports.enableContent = enableContent;
	exports.setPage = setPage;
	exports.checkFeedContent = checkFeedContent;
	exports.fetchPostsByDay = fetchPostsByDay;
	exports.receivePosts = receivePosts;
	exports.completeDays = completeDays;
	exports.showLoadingWheel = showLoadingWheel;
	exports.hideLoadingWheel = hideLoadingWheel;
	exports.jumpTo = jumpTo;
	exports.startAnimation = startAnimation;
	exports.requestExpeditions = requestExpeditions;
	exports.updateTime = updateTime;
	exports.updateMap = updateMap;
	exports.receiveExpeditions = receiveExpeditions;
	exports.fetchExpeditions = fetchExpeditions;
	exports.fetchTotalSightings = fetchTotalSightings;
	exports.receiveTotalSightings = receiveTotalSightings;
	exports.fetchDay = fetchDay;
	exports.setExpedition = setExpedition;
	exports.setControl = setControl;
	exports.requestDay = requestDay;
	exports.receiveDay = receiveDay;
	exports.receiveFeatures = receiveFeatures;
	exports.selectFeature = selectFeature;
	exports.unselectFeature = unselectFeature;
	
	var _isomorphicFetch = __webpack_require__(494);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _d = __webpack_require__(496);
	
	var d3 = _interopRequireWildcard(_d);
	
	var _utils = __webpack_require__(497);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import { animate } from './animation'
	
	function timestampToString(t) {
	  var d = new Date(t);
	  var year = d.getUTCFullYear();
	  var month = d.getUTCMonth() + 1 + '';
	  if (month.length === 1) month = '0' + month;
	  var date = d.getUTCDate() + '';
	  if (date.length === 1) date = '0' + date;
	  return year + '-' + month + '-' + date;
	}
	
	var CLOSE_LIGHTBOX = exports.CLOSE_LIGHTBOX = 'CLOSE_LIGHTBOX';
	
	function closeLightBox() {
	  return {
	    type: CLOSE_LIGHTBOX
	  };
	}
	
	var SHOW_360_PICTURE = exports.SHOW_360_PICTURE = 'SHOW_360_PICTURE';
	
	function show360Picture(post) {
	  return {
	    type: SHOW_360_PICTURE,
	    post: post
	  };
	}
	
	var ENABLE_CONTENT = exports.ENABLE_CONTENT = 'ENABLE_CONTENT';
	
	function enableContent() {
	  return {
	    type: ENABLE_CONTENT
	  };
	}
	
	var SET_PAGE = exports.SET_PAGE = 'SET_PATH';
	
	function setPage() {
	  return function (dispatch, getState) {
	    dispatch({
	      type: SET_PAGE,
	      location: location.pathname
	    });
	    if (location.pathname === '/journal') dispatch(checkFeedContent());
	  };
	}
	
	function checkFeedContent() {
	  return function (dispatch, getState) {
	    var state = getState();
	    var expeditionID = state.selectedExpedition;
	    var expedition = state.expeditions[expeditionID];
	    var dayCount = expedition.dayCount;
	    var posts = d3.values(expedition.features);
	    var postsByDay = expedition.postsByDay;
	    var contentHeight = d3.select('#content').node().offsetHeight;
	    var scrollTop = d3.select('#content').node().scrollTop;
	    var feedElement = d3.select('#feed').node();
	    var viewRange = [scrollTop, scrollTop + contentHeight];
	
	    if (feedElement) {
	      var postElements = d3.select(feedElement).selectAll('div.post')._groups[0];
	      var visibleDays = [];
	      var visibleElements = [];
	      if (postElements) {
	        postElements.forEach(function (p) {
	          var postRange = [p.offsetTop - 100, p.offsetTop + p.offsetHeight - 100];
	          if (viewRange[0] > postRange[0] && viewRange[0] <= postRange[1] || viewRange[0] <= postRange[0] && viewRange[1] > postRange[0] || viewRange[1] > postRange[0] && viewRange[1] <= postRange[1]) {
	            visibleElements.push(p.className.split(' ')[1]);
	          }
	        });
	      }
	      visibleElements.forEach(function (p) {
	        var feature = expedition.features[p];
	        var day = Math.floor(((0, _utils.parseDate)(feature.properties.DateTime).getTime() - expedition.start.getTime()) / (1000 * 3600 * 24));
	        if (visibleDays.indexOf(day) === -1) visibleDays.push(day);
	      });
	      for (var i = 0; i < visibleDays.length - 1; i++) {
	        if (Math.abs(visibleDays[i] - visibleDays[i + 1])) {
	          dispatch(fetchPostsByDay(expeditionID, null, i));
	          break;
	        }
	      }
	
	      var feedHeight = feedElement.offsetHeight;
	      if (posts.length === 0 || feedHeight < contentHeight || scrollTop <= 100 && !postsByDay[dayCount] || scrollTop >= feedHeight - contentHeight - 100 && !postsByDay[0]) {
	        dispatch(fetchPostsByDay(expeditionID, expedition.currentDate));
	      }
	    } else {
	      if (posts.length === 0 || scrollTop <= 100 && !postsByDay[dayCount]) {
	        dispatch(fetchPostsByDay(expeditionID, expedition.currentDate));
	      }
	    }
	  };
	}
	
	var FETCH_POSTS_BY_DAY = exports.FETCH_POSTS_BY_DAY = 'FETCH_POSTS_BY_DAY';
	
	function fetchPostsByDay(_expeditionID, date, expeditionDay) {
	  return function (dispatch, getState) {
	    var i;
	    var state = getState();
	    // if (state.isFetchingPosts > 0) return
	    var expeditionID = _expeditionID || state.selectedExpedition;
	    var expedition = state.expeditions[expeditionID];
	    if (!expeditionDay) {
	      if (!date) date = expedition.currentDate;
	      expeditionDay = Math.floor((date.getTime() - expedition.start.getTime()) / (1000 * 3600 * 24));
	    }
	
	    var daysToFetch = [];
	
	    if (!expedition.postsByDay[expeditionDay]) daysToFetch.push(expeditionDay);else if (expedition.postsByDay[expeditionDay] === 'loading') return;else {
	      for (i = expeditionDay - 1; i >= 0; i--) {
	        if (expedition.postsByDay[i] === 'loading') break;
	        if (!expedition.postsByDay[i]) {
	          daysToFetch.push(i);
	          daysToFetch[0] = i;
	          break;
	        }
	      }
	      for (i = expeditionDay + 1; i < expedition.dayCount; i++) {
	        if (expedition.postsByDay[i] === 'loading') break;
	        if (!expedition.postsByDay[i]) {
	          daysToFetch.push(i);
	          break;
	        }
	      }
	    }
	
	    if (daysToFetch.length === 0) return;
	    var datesToFetch = [];
	    daysToFetch.forEach(function (d, i) {
	      var t = expedition.start.getTime() + d * (1000 * 3600 * 24);
	      datesToFetch[i] = t;
	    });
	    var range = [timestampToString(d3.min(datesToFetch)), timestampToString(d3.max(datesToFetch) + 1000 * 3600 * 24)];
	
	    dispatch({
	      type: FETCH_POSTS_BY_DAY,
	      expeditionID: expeditionID,
	      daysToFetch: daysToFetch
	    });
	
	    var queryString = 'https://intotheokavango.org/api/features?limit=0&FeatureType=blog,audio,image,tweet&limit=0&Expedition=' + state.selectedExpedition + '&startDate=' + range[0] + '&endDate=' + range[1];
	    // console.log('querying posts:', queryString)
	    (0, _isomorphicFetch2.default)(queryString).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      var results = json.results.features;
	      // console.log('done with post query! Received:' + results.length + ' features.')
	      return dispatch(receivePosts(expeditionID, results, range));
	    }).then(function () {
	      dispatch(checkFeedContent());
	    });
	  };
	}
	
	var RECEIVE_POSTS = exports.RECEIVE_POSTS = 'RECEIVE_POSTS';
	
	function receivePosts(expeditionID, data, timeRange) {
	  return {
	    type: RECEIVE_POSTS,
	    expeditionID: expeditionID,
	    data: data,
	    timeRange: timeRange
	  };
	}
	
	var COMPLETE_DAYS = exports.COMPLETE_DAYS = 'COMPLETE_DAYS';
	
	function completeDays(expeditionID) {
	  return {
	    type: COMPLETE_DAYS,
	    expeditionID: expeditionID
	  };
	}
	
	var SHOW_LOADING_WHEEL = exports.SHOW_LOADING_WHEEL = 'SHOW_LOADING_WHEEL';
	
	function showLoadingWheel() {
	  return {
	    type: SHOW_LOADING_WHEEL
	  };
	}
	
	var HIDE_LOADING_WHEEL = exports.HIDE_LOADING_WHEEL = 'HIDE_LOADING_WHEEL';
	
	function hideLoadingWheel() {
	  return {
	    type: HIDE_LOADING_WHEEL
	  };
	}
	
	var JUMP_TO = exports.JUMP_TO = 'JUMP_TO';
	
	function jumpTo(date, expeditionID) {
	  return function (dispatch, getState) {
	    var state = getState();
	    var expedition = state.expeditions[expeditionID];
	    var expeditionDay = Math.floor((date.getTime() - expedition.start.getTime()) / (1000 * 3600 * 24));
	    if (expedition.days[expeditionDay]) {
	      dispatch(updateTime(date, true, expeditionID));
	      return dispatch(fetchDay(date));
	    } else {
	      dispatch(showLoadingWheel());
	      return dispatch(fetchDay(date));
	    }
	  };
	}
	
	var START = exports.START = 'START';
	
	function startAnimation() {
	  console.log('start animation');
	  return {
	    type: START
	  };
	}
	
	var REQUEST_EXPEDITIONS = exports.REQUEST_EXPEDITIONS = 'REQUEST_EXPEDITIONS';
	
	function requestExpeditions() {
	  return {
	    type: REQUEST_EXPEDITIONS
	  };
	}
	
	var UPDATE_TIME = exports.UPDATE_TIME = 'UPDATE_TIME';
	
	function updateTime(currentDate, updateMapState, expeditionID) {
	  return {
	    type: UPDATE_TIME,
	    currentDate: currentDate,
	    updateMapState: updateMapState,
	    expeditionID: expeditionID
	  };
	}
	
	var UPDATE_MAP = exports.UPDATE_MAP = 'UPDATE_MAP';
	
	function updateMap(currentDate, coordinates, viewGeoBounds, zoom, expeditionID) {
	  return function (dispatch, getState) {
	    var state = getState();
	    var expedition = state.expeditions[expeditionID];
	    var tiles = expedition.featuresByTile;
	    var tileResolution = Math.floor((expedition.geoBounds[2] - expedition.geoBounds[0]) * 111 / 10);
	
	    var coordinatesToTile = function coordinatesToTile(coordinates, geoBounds) {
	      var x = Math.floor((coordinates[0] - geoBounds[0]) * 111 / 10);
	      var y = Math.floor((coordinates[1] - geoBounds[3]) * 111 / 10);
	      return { x: x, y: y };
	    };
	
	    var tileToCoordinates = function tileToCoordinates(tile, geoBounds) {
	      var lng = tile.x * 10 / 111 + geoBounds[0];
	      var lat = tile.y * 10 / 111 + geoBounds[3];
	      return [lng, lat];
	    };
	
	    var west = viewGeoBounds[0];
	    var north = viewGeoBounds[1];
	    var east = viewGeoBounds[2];
	    var south = viewGeoBounds[3];
	
	    // TODO TEMPORARY: limiting max range
	    var centroid = [(west + east) / 2, (south + north) / 2];
	    west = centroid[0] + Math.max(west - centroid[0], -0.1);
	    east = centroid[0] + Math.min(east - centroid[0], 0.1);
	    north = centroid[1] + Math.min(north - centroid[1], 0.1);
	    south = centroid[1] + Math.max(south - centroid[1], -0.1);
	    // TEMPORARY
	
	    var northWestTile = coordinatesToTile([west, north], expedition.geoBounds);
	    var southEastTile = Object.assign({}, northWestTile);
	    while (tileToCoordinates(southEastTile, expedition.geoBounds)[0] <= east) {
	      southEastTile.x++;
	    }
	    while (tileToCoordinates(southEastTile, expedition.geoBounds)[1] >= south) {
	      southEastTile.y--;
	    }
	
	    var tileRange = [];
	    var tilesInView = [];
	    for (var x = northWestTile.x; x <= southEastTile.x; x++) {
	      for (var y = northWestTile.y; y >= southEastTile.y; y--) {
	        var tile = x + y * tileResolution;
	        if (!tiles[tile]) tileRange.push({ x: x, y: y });
	        tilesInView.push(x + y * tileResolution);
	      }
	    }
	
	    var queryNorthWest = [180, -90];
	    var querySouthEast = [-180, 90];
	    tileRange.forEach(function (t) {
	      var northWest = tileToCoordinates(t, expedition.geoBounds);
	      var southEast = tileToCoordinates({ x: t.x + 1, y: t.y - 1 }, expedition.geoBounds);
	      if (queryNorthWest[0] > northWest[0]) queryNorthWest[0] = northWest[0];
	      if (queryNorthWest[1] < northWest[1]) queryNorthWest[1] = northWest[1];
	      if (querySouthEast[0] < southEast[0]) querySouthEast[0] = southEast[0];
	      if (querySouthEast[1] > southEast[1]) querySouthEast[1] = southEast[1];
	    });
	    var queryGeoBounds = [queryNorthWest[0], queryNorthWest[1], querySouthEast[0], querySouthEast[1]];
	
	    tileRange.forEach(function (t, i, a) {
	      a[i] = t.x + t.y * tileResolution;
	    });
	
	    if (tileRange.length > 0) {
	      var queryString = 'https://intotheokavango.org/api/features?limit=0&FeatureType=blog,audio,image,tweet,sighting&Expedition=' + state.selectedExpedition + '&geoBounds=' + queryGeoBounds.toString();
	      // console.log('querying features by tile:', queryString)
	      (0, _isomorphicFetch2.default)(queryString).then(function (response) {
	        return response.json();
	      }).then(function (json) {
	        var results = json.results.features;
	        // console.log('done with feature query! Received ' + results.length + ' features.')
	        dispatch(receiveFeatures(state.selectedExpedition, results, tileRange));
	      });
	    }
	
	    return dispatch({
	      type: UPDATE_MAP,
	      expeditionID: expeditionID,
	      currentDate: currentDate,
	      coordinates: coordinates,
	      viewGeoBounds: viewGeoBounds,
	      tilesInView: tilesInView,
	      zoom: zoom,
	      tileRange: tileRange
	    });
	  };
	}
	
	var RECEIVE_EXPEDITIONS = exports.RECEIVE_EXPEDITIONS = 'RECEIVE_EXPEDITIONS';
	
	function receiveExpeditions(data) {
	  for (var k in data.results) {
	    if (data.results[k].Days < 1) {
	      delete data.results[k];
	    }
	  }
	
	  return {
	    type: RECEIVE_EXPEDITIONS,
	    data: data
	  };
	}
	
	function fetchExpeditions() {
	  return function (dispatch, getState) {
	    dispatch(requestExpeditions());
	    return (0, _isomorphicFetch2.default)('https://intotheokavango.org/api/expeditions').then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      return dispatch(receiveExpeditions(json));
	    }).then(function () {
	      return dispatch(fetchDay((0, _utils.parseDate)('2016-08-30 09:30:00+00:00'), null, null, true));
	    }).then(function () {
	      var state = getState();
	      // Object.keys(state.expeditions).forEach((id) => {
	      //   if (id !== state.selectedExpedition) {
	      //     dispatch(fetchDay(null, null, id, false))
	      //   }
	      // })
	      dispatch(fetchTotalSightings(state.selectedExpedition));
	      if (location.pathname === '/journal') {
	        dispatch(checkFeedContent());
	      }
	    });
	  };
	}
	
	function fetchTotalSightings(id) {
	  return function (dispatch, getState) {
	    return (0, _isomorphicFetch2.default)('https://intotheokavango.org/api/sightings?FeatureType=sighting&limit=0&Expedition=' + id).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      return dispatch(receiveTotalSightings(id, json));
	    });
	  };
	}
	
	var RECEIVE_TOTAL_SIGHTINGS = exports.RECEIVE_TOTAL_SIGHTINGS = 'RECEIVE_TOTAL_SIGHTINGS';
	
	function receiveTotalSightings(id, data) {
	  return {
	    type: RECEIVE_TOTAL_SIGHTINGS,
	    id: id,
	    data: data
	  };
	}
	
	function fetchDay(date, initialDate, _expeditionID, initialize) {
	  if (!initialDate) initialDate = date;
	  return function (dispatch, getState) {
	    var state = getState();
	    var expeditionID = _expeditionID || state.selectedExpedition;
	    var expedition = state.expeditions[expeditionID];
	    if (!date) date = expedition.currentDate;
	    var expeditionDay = Math.floor((date.getTime() - expedition.start.getTime()) / (1000 * 3600 * 24));
	    var daysToFetch = [];
	    if (!expedition.days[expeditionDay - 1] && expeditionDay - 1 >= 0) daysToFetch.push(expeditionDay - 1);
	    if (!expedition.days[expeditionDay]) daysToFetch.push(expeditionDay);
	    if (!expedition.days[expeditionDay + 1] && expeditionDay + 1 < expedition.dayCount) daysToFetch.push(expeditionDay + 1);
	
	    if (daysToFetch.length === 0) return;
	
	    daysToFetch.forEach(function (d, i, a) {
	      var t = expedition.start.getTime() + d * (1000 * 3600 * 24);
	      a[i] = t;
	    });
	    var range = [timestampToString(d3.min(daysToFetch)), timestampToString(d3.max(daysToFetch) + 1000 * 3600 * 24)];
	
	    var goFetch = function goFetch(featureTypes, results, expeditionID) {
	      var type = featureTypes.shift();
	      var queryString = 'https://intotheokavango.org/api/features?limit=0&FeatureType=' + type + '&Expedition=' + expeditionID + '&startDate=' + range[0] + '&endDate=' + range[1];
	      if (type === 'ambit_geo') queryString += '&resolution=2';
	      // console.log('querying:', queryString)
	      (0, _isomorphicFetch2.default)(queryString).then(function (response) {
	        return response.json();
	      }).then(function (json) {
	        results = results.concat(json.results.features);
	        if (featureTypes.length > 0) {
	          // console.log('received ' + json.results.features.length + ' ' + type)
	          goFetch(featureTypes, results, expeditionID);
	        } else {
	          // console.log('done with query! Received ' + json.results.features.length + ' ' + type, initialize)
	          dispatch(receiveDay(expeditionID, results, range));
	          dispatch(completeDays(expeditionID));
	          var state = getState();
	          var expedition = state.expeditions[state.selectedExpedition];
	          var days = expedition.days;
	          var incompleteDays = [];
	          d3.keys(expedition.days).forEach(function (k) {
	            if (expedition.days[k].incomplete) incompleteDays.push(k);
	          });
	          if (incompleteDays.length === 0) {
	            // not sure why I need this '|| date'
	            if (!state.animate && initialize) dispatch(startAnimation());
	            // dispatch(updateTime(initialDate || date, false, expeditionID))
	            dispatch(updateTime((0, _utils.parseDate)('2016-08-30 09:30:00+00:00'), false, expeditionID));
	            dispatch(hideLoadingWheel());
	          } else {
	            // console.log('incomplete days', incompleteDays)
	            var nextTarget = -1;
	            for (var i = 0; i < incompleteDays.length; i++) {
	              var id = incompleteDays[i];
	              for (var j = Math.max(0, id - 1); j < expedition.dayCount; j++) {
	                if (!days[j]) {
	                  nextTarget = j;
	                  break;
	                }
	              }
	              if (nextTarget > -1) break;
	            }
	            if (nextTarget > -1) {
	              nextTarget = new Date(expedition.start.getTime() + nextTarget * (1000 * 3600 * 24));
	              dispatch(fetchDay(nextTarget, null, expeditionID, initialize));
	            }
	          }
	        }
	      });
	    };
	    goFetch(['ambit_geo', 'beacon'], [], expeditionID);
	  };
	}
	
	var SET_EXPEDITION = exports.SET_EXPEDITION = 'SET_EXPEDITION';
	
	function setExpedition(id) {
	  return function (dispatch, getState) {
	    var state = getState();
	    var expedition = state.expeditions[id];
	    if (expedition.totalSightings.length === 0) {
	      dispatch(fetchTotalSightings(id));
	    }
	    dispatch({
	      type: SET_EXPEDITION,
	      id: id
	    });
	  };
	}
	
	var SET_CONTROL = exports.SET_CONTROL = 'SET_CONTROL';
	
	function setControl(target, mode) {
	  return {
	    type: SET_CONTROL,
	    target: target,
	    mode: mode
	  };
	}
	
	var REQUEST_DAY = exports.REQUEST_DAY = 'REQUEST_DAY';
	
	function requestDay(expeditionID, dayID) {
	  return {
	    type: REQUEST_DAY,
	    expeditionID: expeditionID,
	    dayID: dayID
	  };
	}
	
	var RECEIVE_DAY = exports.RECEIVE_DAY = 'RECEIVE_DAY';
	
	function receiveDay(expeditionID, data, dateRange) {
	  return {
	    type: RECEIVE_DAY,
	    expeditionID: expeditionID,
	    data: data,
	    dateRange: dateRange
	  };
	}
	
	var RECEIVE_FEATURES = exports.RECEIVE_FEATURES = 'RECEIVE_FEATURES';
	
	function receiveFeatures(expeditionID, data, tileRange) {
	  return {
	    type: RECEIVE_FEATURES,
	    expeditionID: expeditionID,
	    data: data,
	    tileRange: tileRange
	  };
	}
	
	var SELECT_FEATURE = exports.SELECT_FEATURE = 'SELECT_FEATURE';
	
	function selectFeature() {
	  return {
	    type: SELECT_FEATURE
	  };
	}
	
	var UNSELECT_FEATURE = exports.UNSELECT_FEATURE = 'UNSELECT_FEATURE';
	
	function unselectFeature() {
	  return {
	    type: UNSELECT_FEATURE
	  };
	}

/***/ },

/***/ 497:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parseDate = parseDate;
	exports.dateToString = dateToString;
	exports.lerp = lerp;
	exports.rgb2hex = rgb2hex;
	
	function validateDate(d) {
	  if (Object.prototype.toString.call(d) === '[object Date]') {
	    if (isNaN(d.getTime())) {
	      return false;
	    } else {
	      return true;
	    }
	  } else {
	    return false;
	  }
	}
	
	function parseDate(d) {
	  if (validateDate(d)) return d;
	
	  var dd = new Date(d);
	  if (validateDate(dd)) return dd;
	
	  dd = d.slice(0, -2).split(/[^0-9]/);
	  d = new Date(Date.UTC(dd[0], dd[1] - 1, dd[2], dd[3], dd[4], dd[5]) - dd[6] * 3600000);
	  if (validateDate(d)) return d;else throw 'invalid date', d;
	}
	
	function dateToString(d, short) {
	  var month = d.getUTCMonth() + 1;
	  var day = d.getUTCDate();
	  var hour = d.getUTCHours() + '';
	  if (hour.length === 1) hour = '0' + hour;
	  var minute = d.getUTCMinutes() + '';
	  if (minute.length === 1) minute = '0' + minute;
	
	  var monthString = '';
	  if (month === 1) monthString = 'January';
	  if (month === 2) monthString = 'February';
	  if (month === 3) monthString = 'March';
	  if (month === 4) monthString = 'April';
	  if (month === 5) monthString = 'May';
	  if (month === 6) monthString = 'June';
	  if (month === 7) monthString = 'July';
	  if (month === 8) monthString = 'August';
	  if (month === 9) monthString = 'September';
	  if (month === 10) monthString = 'October';
	  if (month === 11) monthString = 'November';
	  if (month === 12) monthString = 'December';
	  if (short) monthString = monthString.slice(0, 3);
	
	  return monthString + ' ' + day + ', ' + hour + ':' + minute;
	}
	
	function lerp(start, end, ratio) {
	  return start + (end - start) * ratio;
	}
	
	function rgb2hex(rgb) {
	  return (rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + rgb[2] * 255;
	}

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _actions = __webpack_require__(493);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _d = __webpack_require__(496);
	
	var d3 = _interopRequireWildcard(_d);
	
	var _randomcolor = __webpack_require__(499);
	
	var _randomcolor2 = _interopRequireDefault(_randomcolor);
	
	var _utils = __webpack_require__(497);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var okavangoReducer = function okavangoReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {
	    mapStateNeedsUpdate: false,
	    animate: false,
	    isFetching: false,
	    selectedExpedition: null,
	    expeditions: {},
	    speciesColors: {},
	    contentActive: !(location.pathname === '/' || location.pathname === '/map'),
	    initialPage: location.pathname,
	    lightBoxActive: false,
	    lightBoxID: ''
	  } : arguments[0];
	  var action = arguments[1];
	
	  var expeditions, features, id, expeditionID, expedition, days;
	  var timeRange;
	  var postsByDay;
	  var start;
	  var end;
	  var startDay;
	  var endDay;
	  var latestDate;
	  var latestExpedition;
	  var selectedExpedition;
	  var members;
	  var featuresByMember;
	  var featuresByDay;
	  var ambitsByTile;
	  var dateRange;
	  var i;
	  var tileResolution;
	  var coordinatesToTile;
	  var d;
	  var tileRange;
	  var featuresByTile;
	  var tileResolution;
	  var coordinatesToTile;
	  var k;
	  var feature;
	
	  var _ret = function () {
	    switch (action.type) {
	      case actions.CLOSE_LIGHTBOX:
	        return {
	          v: _extends({}, state, {
	            lightBoxActive: false,
	            lightBoxID: ''
	          })
	        };
	      case actions.SHOW_360_PICTURE:
	        return {
	          v: _extends({}, state, {
	            lightBoxActive: true,
	            lightBoxPost: action.post
	          })
	        };
	      case actions.HIDE_360_PICTURE:
	        return {
	          v: _extends({}, state, {
	            lightBoxActive: false,
	            lightBoxID: ''
	          })
	        };
	      case actions.SET_PAGE:
	        return {
	          v: _extends({}, state, {
	            lightBoxActive: false
	          })
	        };
	      case actions.ENABLE_CONTENT:
	        return {
	          v: _extends({}, state, {
	            contentActive: true
	          })
	        };
	      case actions.RECEIVE_POSTS:
	        // console.log('RECEIVED', action.data)
	        expeditionID = action.expeditionID;
	        expedition = state.expeditions[expeditionID];
	
	        // initializing days
	        timeRange = action.timeRange;
	        postsByDay = {};
	        start = new Date(timeRange[0]);
	        end = new Date(timeRange[1]);
	        startDay = Math.floor((start.getTime() - expedition.start.getTime()) / (1000 * 3600 * 24));
	        endDay = Math.floor((end.getTime() - expedition.start.getTime()) / (1000 * 3600 * 24));
	
	        for (i = startDay; i <= endDay; i++) {
	          postsByDay[i] = {};
	        }
	
	        features = {};
	        action.data.forEach(function (f) {
	          var id = f.id;
	          var flag = true;
	          if (!f.geometry) flag = false;
	          // console.log(f.properties)
	          if (f.properties.FeatureType === 'image' && f.properties.Make === 'RICOH') flag = false;
	          if (flag) {
	            features[id] = featureReducer(expedition.features[id], action, f);
	          }
	        });
	
	        Object.keys(features).forEach(function (id) {
	          var feature = features[id];
	          var day = Math.floor(((0, _utils.parseDate)(feature.properties.DateTime).getTime() - expedition.start.getTime()) / (1000 * 3600 * 24));
	          if (!postsByDay[day]) postsByDay[day] = {};
	          postsByDay[day][id] = feature;
	        });
	        Object.keys(postsByDay).forEach(function (k) {
	          postsByDay[k] = Object.assign({}, expedition.postsByDay[k], postsByDay[k]);
	        });
	
	        return {
	          v: Object.assign({}, state, {
	            // isFetchingPosts: state.isFetchingPosts - 1,
	            mapStateNeedsUpdate: false,
	            expeditions: Object.assign({}, state.expeditions, _defineProperty({}, expeditionID, Object.assign({}, expedition, {
	              features: Object.assign({}, expedition.features, features),
	              postsByDay: Object.assign({}, expedition.postsByDay, postsByDay)
	            })))
	          })
	        };
	
	      case actions.FETCH_POSTS_BY_DAY:
	        id = action.expeditionID;
	        return {
	          v: Object.assign({}, state, {
	            // isFetchingPosts: state.isFetchingPosts + 1,
	            expeditions: Object.assign({}, state.expeditions, _defineProperty({}, id, expeditionReducer(state.expeditions[id], action)))
	          })
	        };
	
	      case actions.RECEIVE_TOTAL_SIGHTINGS:
	        id = action.id;
	        return {
	          v: Object.assign({}, state, {
	            expeditions: Object.assign({}, state.expeditions, _defineProperty({}, id, Object.assign({}, state.expeditions[action.id], {
	              totalSightings: action.data.results
	            })))
	          })
	        };
	
	      case actions.COMPLETE_DAYS:
	        id = action.expeditionID;
	        return {
	          v: Object.assign({}, state, {
	            mapStateNeedsUpdate: false,
	            expeditions: Object.assign({}, state.expeditions, _defineProperty({}, id, expeditionReducer(state.expeditions[id], action)))
	          })
	        };
	
	      case actions.SHOW_LOADING_WHEEL:
	        return {
	          v: Object.assign({}, state, {
	            mapStateNeedsUpdate: false,
	            isFetching: true
	          })
	        };
	
	      case actions.HIDE_LOADING_WHEEL:
	        return {
	          v: Object.assign({}, state, {
	            mapStateNeedsUpdate: true,
	            isFetching: false
	          })
	        };
	
	      case actions.START:
	        return {
	          v: Object.assign({}, state, {
	            mapStateNeedsUpdate: true,
	            animate: true
	          })
	        };
	
	      case actions.UPDATE_TIME:
	        expeditionID = action.expeditionID;
	        return {
	          v: Object.assign({}, state, {
	            mapStateNeedsUpdate: action.updateMapState,
	            expeditions: Object.assign({}, state.expeditions, _defineProperty({}, expeditionID, expeditionReducer(state.expeditions[expeditionID], action)))
	          })
	        };
	
	      case actions.UPDATE_MAP:
	        expeditionID = action.expeditionID;
	        return {
	          v: Object.assign({}, state, {
	            mapStateNeedsUpdate: true,
	            expeditions: Object.assign({}, state.expeditions, _defineProperty({}, expeditionID, expeditionReducer(state.expeditions[expeditionID], action)))
	          })
	        };
	
	      case actions.RECEIVE_EXPEDITIONS:
	        expeditions = {};
	        latestDate = new Date(0);
	
	        Object.keys(action.data.results).forEach(function (id) {
	          var e = action.data.results[id];
	          expeditions[id] = expeditionReducer(state.expeditions[id], action, e);
	          if (expeditions[id].start.getTime() + expeditions[id].dayCount * (1000 * 3600 * 24) > latestDate.getTime()) {
	            latestDate = new Date(expeditions[id].start.getTime() + expeditions[id].dayCount * (1000 * 3600 * 24));
	            // latestExpedition = id
	            latestExpedition = 'okavango_16';
	          }
	        });
	
	        return {
	          v: Object.assign({}, state, {
	            expeditions: Object.assign({}, state.expeditions, expeditions),
	            isFetching: false,
	            selectedExpedition: latestExpedition
	          })
	        };
	
	      case actions.SET_EXPEDITION:
	        selectedExpedition = action.id;
	
	        return {
	          v: Object.assign({}, state, {
	            mapStateNeedsUpdate: true,
	            selectedExpedition: selectedExpedition
	          })
	        };
	
	      case actions.SET_CONTROL:
	        id = state.selectedExpedition;
	        expeditions = _defineProperty({}, id, expeditionReducer(state.expeditions[id], action));
	        return {
	          v: Object.assign({}, state, {
	            mapStateNeedsUpdate: action.target === 'zoom',
	            expeditions: Object.assign({}, state.expeditions, expeditions)
	          })
	        };
	
	      case actions.RECEIVE_DAY:
	        expeditionID = action.expeditionID;
	        expedition = state.expeditions[expeditionID];
	
	        // initialize feature buckets
	        members = _extends({}, expedition.members);
	        featuresByMember = {};
	        featuresByDay = {};
	        ambitsByTile = {};
	        dateRange = action.dateRange.map(function (d) {
	          return Math.floor((new Date(d).getTime() - expedition.start.getTime()) / (1000 * 3600 * 24));
	        });
	
	        for (i = dateRange[0]; i <= dateRange[1]; i++) {
	          featuresByDay[i] = {};
	        }
	
	        // initialize features
	        features = {};
	        action.data.forEach(function (f) {
	          var id = f.id;
	          if (f.properties.Team === 'RiverMain') {
	            if (f.properties.FeatureType !== 'ambit_geo' || f.properties.Member === 'Steve' || f.properties.Member === 'GB' || f.properties.Member === 'Jer' || f.properties.Member === 'Shah') {
	              features[id] = featureReducer(expedition.features[id], action, f);
	              if (f.properties.FeatureType === 'ambit_geo') {
	                if (!members[f.properties.Member]) {
	                  members[f.properties.Member] = {
	                    color: expedition.memberColors[d3.values(members).length % expedition.memberColors.length]
	                  };
	                }
	              }
	            }
	          }
	        });
	
	        tileResolution = Math.floor((expedition.geoBounds[2] - expedition.geoBounds[0]) * 111 / 10);
	
	        coordinatesToTile = function coordinatesToTile(coordinates, geoBounds) {
	          var x = Math.floor((coordinates[0] - geoBounds[0]) * 111 / 10);
	          var y = Math.floor((coordinates[1] - geoBounds[3]) * 111 / 10);
	          return { x: x, y: y };
	        };
	
	        // assign feature to day, tile and member
	
	
	        Object.keys(features).forEach(function (id) {
	          var feature = features[id];
	          // assign feature to day
	          var day = Math.floor(((0, _utils.parseDate)(feature.properties.DateTime).getTime() - expedition.start.getTime()) / (1000 * 3600 * 24));
	          var type = feature.properties.FeatureType;
	          if (!featuresByDay[day]) featuresByDay[day] = {};
	          if (!featuresByDay[day][type]) featuresByDay[day][type] = {};
	          featuresByDay[day][type][id] = feature;
	
	          if (feature.properties.FeatureType === 'ambit_geo') {
	            // assign feature to member
	            var memberID = feature.properties.Member;
	            if (!members[memberID]) {
	              members[memberID] = {
	                name: memberID,
	                color: expedition.memberColors[d3.values(members).length % expedition.memberColors.length]
	              };
	            }
	            var dayID = Math.floor(((0, _utils.parseDate)(feature.properties.DateTime).getTime() - expedition.start.getTime()) / (1000 * 3600 * 24));
	            if (!featuresByMember[memberID]) featuresByMember[memberID] = {};
	            if (!featuresByMember[memberID][dayID]) featuresByMember[memberID][dayID] = {};
	            featuresByMember[memberID][dayID][id] = feature;
	
	            // assign feature to tile
	            var tileCoordinates = coordinatesToTile(feature.geometry.coordinates, expedition.geoBounds);
	            var tileID = tileCoordinates.x + tileCoordinates.y * tileResolution;
	            if (!ambitsByTile[tileID]) ambitsByTile[tileID] = {};
	            ambitsByTile[tileID][id] = feature;
	          }
	        });
	
	        var extendFeatures = function extendFeatures(bucket) {
	          if (d3.values(bucket).length > 0) {
	            // pick the two earliest and latest features
	            var timeRange = [new Date(), new Date(0)];
	            var featureRange = [];
	            d3.values(bucket).forEach(function (f) {
	              var dateTime = (0, _utils.parseDate)(f.properties.DateTime);
	              if (timeRange[0].getTime() > dateTime.getTime()) {
	                timeRange[0] = dateTime;
	                featureRange[0] = f;
	              }
	              if (timeRange[1].getTime() < dateTime.getTime()) {
	                timeRange[1] = dateTime;
	                featureRange[1] = f;
	              }
	            });
	
	            // clone features with new dates
	            var start = new Date(timeRange[0].getTime() - timeRange[0].getTime() % (1000 * 3600 * 24));
	            var end = new Date(start.getTime() + 1000 * 3600 * 24);
	            id = Date.now() + Math.floor(Math.random() * 10000) / 10000;
	            bucket[id] = Object.assign({}, featureRange[0]);
	            bucket[id].properties = Object.assign({}, bucket[id].properties, {
	              DateTime: start.toString()
	            });
	            id = Date.now() + Math.floor(Math.random() * 10000) / 10000;
	            bucket[id] = Object.assign({}, featureRange[1]);
	            bucket[id].properties = Object.assign({}, bucket[id].properties, {
	              DateTime: end.toString()
	            });
	          }
	        };
	        Object.keys(featuresByDay).forEach(function (d) {
	          featuresByDay[d] = Object.assign({}, expedition.featuresByDay[d], featuresByDay[d]);
	          extendFeatures(featuresByDay[d].beacon);
	        });
	        Object.keys(featuresByMember).forEach(function (m) {
	          Object.keys(featuresByMember[m]).forEach(function (d) {
	            extendFeatures(featuresByMember[m][d]);
	          });
	        });
	
	        featuresByDay = Object.assign({}, expedition.featuresByDay, featuresByDay);
	        days = Object.assign({}, featuresByDay);
	        for (d in days) {
	          days[d] = dayReducer(expedition.days[d], action, featuresByDay[d]);
	        }
	
	        Object.keys(featuresByMember).forEach(function (k) {
	          featuresByMember[k] = Object.assign({}, expedition.featuresByMember[k], featuresByMember[k]);
	        });
	
	        Object.keys(ambitsByTile).forEach(function (k) {
	          ambitsByTile[k] = Object.assign({}, expedition.ambitsByTile[k], ambitsByTile[k]);
	        });
	
	        return {
	          v: Object.assign({}, state, {
	            mapStateNeedsUpdate: false,
	            expeditions: Object.assign({}, state.expeditions, _defineProperty({}, expeditionID, Object.assign({}, expedition, {
	              days: Object.assign({}, expedition.days, days),
	              // features: Object.assign({}, expedition.features, features),
	              featuresByDay: featuresByDay,
	              featuresByMember: Object.assign({}, expedition.featuresByMember, featuresByMember),
	              ambitsByTile: Object.assign({}, expedition.ambitsByTile, ambitsByTile),
	              members: members
	            })))
	          })
	        };
	
	      case actions.RECEIVE_FEATURES:
	        expeditionID = action.expeditionID;
	        expedition = state.expeditions[expeditionID];
	
	        tileRange = action.tileRange;
	        featuresByTile = {};
	
	        tileRange.forEach(function (t, i) {
	          featuresByTile[t] = {};
	        });
	
	        features = {};
	        action.data.forEach(function (f) {
	          var id = f.id;
	          if (f.properties.Team === 'RiverMain') {
	            var flag = true;
	            if (f.properties.FeatureType === 'sighting') {
	              if (!f.properties.Taxonomy) f.properties.color = 0xb4b4b4;else {
	                var taxClass = f.properties.Taxonomy.Class;
	                if (!state.speciesColors[taxClass]) {
	                  state.speciesColors[taxClass] = parseInt((0, _randomcolor2.default)({ luminosity: 'light', format: 'hex' }).slice(1), 16);
	                }
	                f.properties.color = state.speciesColors[taxClass];
	              }
	            }
	            if (f.properties.FeatureType === 'tweet' && f.properties.Text && f.properties.Text[0] === '@') flag = false;
	            // if (f.properties.FeatureType === 'image' && f.properties.Make === 'RICOH') flag = false
	            if (flag) {
	              features[id] = featureReducer(expedition.features[id], action, f);
	            }
	          }
	        });
	
	        tileResolution = Math.floor((expedition.geoBounds[2] - expedition.geoBounds[0]) * 111 / 10);
	
	        coordinatesToTile = function coordinatesToTile(coordinates, geoBounds) {
	          var x = Math.floor((coordinates[0] - geoBounds[0]) * 111 / 10);
	          var y = Math.floor((coordinates[1] - geoBounds[3]) * 111 / 10);
	          return { x: x, y: y };
	        };
	
	        Object.keys(features).forEach(function (id) {
	          var feature = features[id];
	          var tileCoordinates = coordinatesToTile(feature.geometry.coordinates, expedition.geoBounds);
	          var tileID = tileCoordinates.x + tileCoordinates.y * tileResolution;
	          if (!featuresByTile[tileID]) featuresByTile[tileID] = {};
	          featuresByTile[tileID][id] = feature;
	        });
	        Object.keys(featuresByTile).forEach(function (k) {
	          featuresByTile[k] = Object.assign({}, expedition.featuresByTile[k], featuresByTile[k]);
	        });
	
	        for (k in features) {
	          feature = features[k];
	
	          if (feature.properties.FeatureType === 'sighting') {
	            delete features[k];
	          }
	        }
	
	        return {
	          v: Object.assign({}, state, {
	            mapStateNeedsUpdate: false,
	            expeditions: Object.assign({}, state.expeditions, _defineProperty({}, expeditionID, Object.assign({}, expedition, {
	              features: Object.assign({}, expedition.features, features),
	              featuresByTile: Object.assign({}, expedition.featuresByTile, featuresByTile)
	            })))
	          })
	        };
	
	      case actions.SELECT_FEATURE:
	        break;
	
	      case actions.UNSELECT_FEATURE:
	        break;
	      default:
	        return {
	          v: state
	        };
	    }
	  }();
	
	  if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  return state;
	};
	
	var expeditionReducer = function expeditionReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {
	    name: '',
	    playback: 'forward',
	    layout: 'rows',
	    initialZoom: 4,
	    targetZoom: 15,
	    zoom: 15,
	    isFetching: false,
	    geoBounds: [-8, -21.5, 25.5, 12],
	    tileSize: 10,
	    start: new Date(),
	    end: new Date(0),
	    currentDate: new Date(),
	    dayCount: 0,
	    days: [],
	    features: {},
	    featuresByTile: {},
	    ambitsByTile: {},
	    featuresByDay: {},
	    postsByDay: {},
	    featuresByMember: {},
	    mainFocus: 'Explorers',
	    secondaryFocus: 'Steve',
	    coordinates: [0, 0],
	    current360Images: [],
	    currentGeoBounds: [0, 0],
	    currentPosts: [],
	    currentSightings: [],
	    currentAmbits: [],
	    totalSightings: [],
	    members: {},
	    currentMembers: [],
	    memberColors: [0xFDBF6F, 0xA6CEE3, 0xB2DF8A, 0xFB9A99, 0xCAB2D6, 0xFCEA97, 0xB4F0D1, 0xBFBFFF, 0xFFABD5]
	    // memberColors: [
	    //   'rgba(253, 191, 111, 1)',
	    //   'rgba(166, 206, 227, 1)',
	    //   'rgba(178, 223, 138, 1)',
	    //   'rgba(251, 154, 153, 1)',
	    //   'rgba(202, 178, 214, 1)',
	    //   'rgba(252, 234, 151, 1)',
	    //   'rgba(180, 240, 209, 1)',
	    //   'rgba(191, 191, 255, 1)',
	    //   'rgba(255, 171, 213, 1)'
	    // ],
	  } : arguments[0];
	  var action = arguments[1];
	  var data = arguments[2];
	
	  var i;
	  switch (action.type) {
	    case actions.FETCH_POSTS_BY_DAY:
	      var postsByDay = [];
	      // var start = new Date(action.range[0])
	      // var end = new Date(action.range[1])
	      // var startDay = Math.floor((start.getTime() - state.start.getTime()) / (1000 * 3600 * 24))
	      // var endDay = Math.floor((end.getTime() - state.start.getTime()) / (1000 * 3600 * 24))
	      // for (i = startDay; i <= endDay; i++) {
	      action.daysToFetch.forEach(function (d) {
	        postsByDay[d] = 'loading';
	      });
	      return Object.assign({}, state, {
	        postsByDay: Object.assign({}, state.postsByDay, postsByDay)
	      });
	
	    case actions.COMPLETE_DAYS:
	      var days = Object.assign({}, state.days);
	
	      // add mock days at both ends of the expedition
	      for (i = 0; i < state.dayCount; i++) {
	        if (days[i] && !days[i].incomplete) {
	          days[-1] = Object.assign({}, days[i]);
	          break;
	        }
	      }
	      for (i = state.dayCount; i >= 0; i--) {
	        if (days[i] && !days[i].incomplete) {
	          days[state.dayCount] = Object.assign({}, days[i]);
	          break;
	        }
	      }
	
	      // detect incomplete days
	      var incompleteRange = [-1, -1];
	      var completedDays = [];
	      for (i = 0; i < state.dayCount; i++) {
	        var day = days[i];
	        if (!day) {
	          incompleteRange = [-1, -1];
	        } else {
	          if (day.incomplete && days[i - 1] && !days[i - 1].incomplete) {
	            incompleteRange[0] = i;
	            incompleteRange[1] = -1;
	          }
	          if (day.incomplete && days[i + 1] && !days[i + 1].incomplete) {
	            incompleteRange[1] = i;
	          }
	        }
	
	        // full data gap detected, filling in
	        if (incompleteRange[0] > -1 && incompleteRange[1] > -1) {
	          // look for filling values bordering the gap
	          var fillingDays = [days[+incompleteRange[0] - 1], days[+incompleteRange[1] + 1]];
	          var fillingBeacons = [d3.values(fillingDays[0].beacons).slice(0).sort(function (a, b) {
	            return (0, _utils.parseDate)(b.properties.DateTime).getTime() - (0, _utils.parseDate)(a.properties.DateTime).getTime();
	          })[0], d3.values(fillingDays[1].beacons).slice(0).sort(function (a, b) {
	            return (0, _utils.parseDate)(a.properties.DateTime).getTime() - (0, _utils.parseDate)(b.properties.DateTime).getTime();
	          })[0]];
	
	          // fill in gaps
	          var l2 = Math.ceil((incompleteRange[1] - incompleteRange[0] + 1) / 2);
	          for (var j = 0; j < l2; j++) {
	            var dayIndex = [+incompleteRange[0] + j, +incompleteRange[1] - j];
	            for (var k = 0; k < 2; k++) {
	              for (var l = 0; l < 2; l++) {
	                // here k === 0 removes gradual translation between day 1 to day 2
	                if (k === 0 || days[dayIndex[0]] !== days[dayIndex[1]] || l === 0) {
	                  var dayID = dayIndex[k];
	                  day = days[dayID];
	                  var date = new Date(state.start.getTime() + 1000 * 3600 * 24 * (dayID + (k === l ? 0 : 1)));
	                  var beaconID = Date.now() + Math.floor(Math.random() * 10000) / 10000;
	                  day.beacons[beaconID] = Object.assign({}, fillingBeacons[k]);
	                  day.beacons[beaconID].properties = Object.assign({}, day.beacons[beaconID].properties, {
	                    DateTime: date
	                  });
	                  day.incomplete = false;
	                  if (completedDays.indexOf(dayID) === -1) completedDays.push(dayID);
	                }
	              }
	            }
	          }
	          incompleteRange = [-1, -1];
	        }
	      }
	
	      // remove mock days at both ends of the expedition
	      delete days[-1];
	      delete days[state.dayCount];
	
	      // console.log('fill following days:', completedDays, days)
	      return Object.assign({}, state, {
	        days: days
	      });
	
	    case actions.UPDATE_TIME:
	      return Object.assign({}, state, {
	        currentDate: action.currentDate
	      });
	
	    case actions.UPDATE_MAP:
	
	      // initializing featuresByTile entries so they won't be queried multiple times
	      action.tileRange.forEach(function (t) {
	        if (!state.featuresByTile[t]) state.featuresByTile[t] = {};
	      });
	
	      var currentSightings = [];
	      var current360Images = [];
	      var currentPosts = [];
	      var currentDays = [];
	      var currentAmbits = {};
	      var currentMembers = [];
	
	      var allAmbits = [];
	      action.tilesInView.forEach(function (t) {
	        // sort features by type
	        var features = {};
	        d3.values(state.featuresByTile[t]).forEach(function (f) {
	          if (!features[f.properties.FeatureType]) features[f.properties.FeatureType] = [];
	          features[f.properties.FeatureType].push(f);
	          var day = Math.floor(((0, _utils.parseDate)(f.properties.DateTime).getTime() - state.start.getTime()) / (1000 * 3600 * 24));
	          if (currentDays.indexOf(day) === -1) currentDays.push(day);
	        });
	
	        // this def could be written more elegantly...
	        d3.values(state.ambitsByTile[t]).forEach(function (f) {
	          var day = Math.floor(((0, _utils.parseDate)(f.properties.DateTime).getTime() - state.start.getTime()) / (1000 * 3600 * 24));
	          if (currentDays.indexOf(day) === -1) currentDays.push(day);
	        });
	
	        if (features.sighting) {
	          var sightings = features.sighting.map(function (f) {
	            return {
	              position: {
	                x: f.geometry.coordinates[0],
	                y: f.geometry.coordinates[1],
	                z: 0
	              },
	              radius: f.properties.radius,
	              color: f.properties.color,
	              type: f.properties.FeatureType,
	              date: (0, _utils.parseDate)(f.properties.DateTime),
	              name: f.properties.SpeciesName,
	              count: f.properties.Count
	            };
	          });
	          currentSightings = currentSightings.concat(sightings);
	        }
	
	        if (features.image) {
	          var images = features.image.filter(function (i) {
	            return i.properties.Make === 'RICOH';
	          });
	          current360Images = current360Images.concat(images);
	        }
	
	        current360Images.forEach(function (image, i) {
	          image.properties.next = current360Images[i - 1];
	          image.properties.previous = current360Images[i + 1];
	        });
	
	        var allPosts = [];
	        if (features.tweet) allPosts = allPosts.concat(features.tweet);
	        if (features.audio) allPosts = allPosts.concat(features.audio);
	        if (features.blog) allPosts = allPosts.concat(features.blog);
	        if (features.image) allPosts = allPosts.concat(features.image);
	        if (allPosts) {
	          var posts = allPosts.map(function (f) {
	            return {
	              position: [f.geometry.coordinates[0], f.geometry.coordinates[1]],
	              type: f.properties.FeatureType,
	              id: f.id,
	              properties: f.properties
	            };
	          });
	          currentPosts = currentPosts.concat(posts);
	        }
	      });
	
	      var paddingDays = [];
	      currentDays.forEach(function (d) {
	        var flag = false;
	        for (i = d - 1; i <= d + 1; i++) {
	          if (currentDays.indexOf(i) === -1 && paddingDays.indexOf(i) === -1) {
	            paddingDays.push(i);
	            flag = true;
	          }
	        }
	        if (flag) actions.fetchDay(new Date(state.start.getTime() + 1000 * 3600 * 24 * d));
	      });
	      currentDays = currentDays.concat(paddingDays);
	
	      currentDays = currentDays.sort(function (a, b) {
	        return a - b;
	      }).forEach(function (d) {
	        if (state.featuresByDay[d]) {
	          allAmbits = allAmbits.concat(d3.values(state.featuresByDay[d].ambit_geo));
	        }
	      });
	
	      allAmbits.sort(function (a, b) {
	        return (0, _utils.parseDate)(a.properties.DateTime).getTime() - (0, _utils.parseDate)(b.properties.DateTime).getTime();
	      }).forEach(function (f) {
	        var name = f.properties.Member;
	        if (!currentAmbits[name]) {
	          currentAmbits[name] = {
	            color: state.members[name].color,
	            coordinates: [],
	            dates: []
	          };
	        }
	        if (!currentMembers[name]) currentMembers[name] = {};
	        currentAmbits[name].coordinates.push(f.geometry.coordinates);
	        currentAmbits[name].dates.push(f.properties.DateTime);
	      });
	
	      currentAmbits = d3.values(currentAmbits);
	
	      return Object.assign({}, state, {
	        coordinates: action.coordinates,
	        currentAmbits: currentAmbits,
	        currentDate: action.currentDate,
	        currentGeoBounds: action.viewGeoBounds,
	        currentMembers: currentMembers,
	        currentPosts: currentPosts,
	        currentSightings: currentSightings,
	        current360Images: current360Images,
	        zoom: action.zoom
	      });
	
	    case actions.RECEIVE_EXPEDITIONS:
	      var dayCount = data.Days + 1;
	      // removing +1 here because we receive beacons before any other features on current day
	      // var dayCount = data.Days
	
	      var start = new Date((0, _utils.parseDate)(data.StartDate).getTime() + 2 * (1000 * 3600));
	      var end = new Date(start.getTime() + dayCount * (1000 * 3600 * 24));
	      // currentDate is 2 days before last beacon
	      var currentDate = new Date(end.getTime() - 2 * (1000 * 3600 * 24));
	
	      var name = data.Name;
	
	      // 111 km per latitude degree
	      // ~ 10km per screen at zoom level 14
	      // [west, north, east, south]
	      var geoBounds = data.GeoBounds;
	      // var geoBoundsDistance = [(geoBounds[2] - geoBounds[0]) * 111, (geoBounds[3] - geoBounds[1]) * 111]
	
	      return Object.assign({}, state, {
	        name: name,
	        start: start,
	        currentDate: currentDate,
	        end: end,
	        dayCount: dayCount,
	        geoBounds: geoBounds
	      });
	
	    case actions.SET_CONTROL:
	      if (action.target === 'zoom') {
	        if (action.mode === 'increment') action.mode = Math.max(1, Math.min(15, state.zoom + 1));
	        if (action.mode === 'decrement') action.mode = Math.max(1, Math.min(15, state.zoom - 1));
	      }
	      return Object.assign({}, state, _defineProperty({}, action.target, action.mode));
	
	    default:
	      break;
	  }
	  return state;
	};
	
	var dayReducer = function dayReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {
	    isFetching: false,
	    start: new Date(),
	    end: new Date(0),
	    beacons: {},
	    ambits: {},
	    incomplete: true
	  } : arguments[0];
	  var action = arguments[1];
	  var features = arguments[2];
	
	  var start, end;
	  switch (action.type) {
	    case actions.RECEIVE_DAY:
	      start = new Date();
	      end = new Date(0);
	      if (!features.beacon) break;
	      var incomplete = Object.keys(features.beacon).length === 0;
	
	      Object.keys(features.beacon).forEach(function (k) {
	        var f = features.beacon[k];
	        var d = (0, _utils.parseDate)(f.properties.DateTime);
	        if (d.getTime() < start.getTime()) start = d;
	        if (d.getTime() > end.getTime()) end = d;
	      });
	
	      return Object.assign({}, state, {
	        isFetching: false,
	        start: start,
	        end: end,
	        beacons: Object.assign({}, state.beacons, features.beacon),
	        ambits: Object.assign({}, state.ambits, features.ambit),
	        incomplete: incomplete
	      });
	
	    default:
	      break;
	  }
	
	  return state;
	};
	
	var featureReducer = function featureReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];
	  var feature = arguments[2];
	
	  switch (action.type) {
	    case actions.RECEIVE_POSTS:
	      feature.properties.scatter = [(Math.random() * 2 - 1) * 0.00075, (Math.random() * 2 - 1) * 0.00075];
	      return Object.assign({}, state, feature);
	    case actions.RECEIVE_DAY:
	      return Object.assign({}, state, feature);
	    case actions.RECEIVE_FEATURES:
	      feature.properties.scatter = [(Math.random() * 2 - 1) * 0.00075, (Math.random() * 2 - 1) * 0.00075];
	      if (feature.properties.FeatureType === 'sighting') {
	        feature.properties.radius = 2 + Math.sqrt(feature.properties.Count) * 2;
	      }
	      return Object.assign({}, state, feature);
	    default:
	      break;
	  }
	
	  return state;
	};
	
	exports.default = okavangoReducer;

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(483);
	
	var _Okavango = __webpack_require__(562);
	
	var _Okavango2 = _interopRequireDefault(_Okavango);
	
	var _actions = __webpack_require__(493);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _utils = __webpack_require__(497);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    expedition: state.expeditions[state.selectedExpedition],
	    children: ownProps.children,
	    animate: state.animate,
	    isFetching: state.isFetching,
	    mapStateNeedsUpdate: state.mapStateNeedsUpdate,
	    expeditionID: state.selectedExpedition,
	    contentActive: state.contentActive,
	    initialPage: state.initialPage,
	    lightBoxActive: state.lightBoxActive,
	    lightBoxPost: state.lightBoxPost ? formatPost(state.lightBoxPost, state.selectedExpedition) : null
	  };
	};
	
	var formatPost = function formatPost(p, expeditionID) {
	  var key = p.id;
	  var type = p.properties.FeatureType;
	  var date = (0, _utils.parseDate)(p.properties.DateTime);
	  var location = p.geometry.coordinates;
	  var author = p.properties.Member;
	  var title, content, images, link, dimensions, next, previous;
	
	  if (type === 'tweet') {
	    if (expeditionID !== 'okavango_14') {
	      content = p.properties.Text;
	      images = p.properties.Images.map(function (i) {
	        return i.Url.replace('http://', 'https://');
	      });
	      link = p.properties.Url.replace('http://', 'https://');
	    } else {
	      content = p.properties.Tweet.text;
	    }
	  }
	
	  if (type === 'image') {
	    if (expeditionID !== 'okavango_14') {
	      content = p.properties.Notes;
	      images = [p.properties.Url.replace('http://', 'https://')];
	      link = p.properties.InstagramID;
	      dimensions = p.properties.Dimensions;
	    } else {
	      content = p.properties.Notes;
	      images = [p.properties.Url.replace('http://', 'https://')];
	      link = p.properties.InstagramID;
	      dimensions = p.properties.Size;
	    }
	    if (p.properties.Make === 'RICOH') {
	      type = '360Image';
	      next = p.properties.next;
	      previous = p.properties.previous;
	    }
	  }
	
	  if (type === 'blog') {
	    title = p.properties.Title;
	    content = p.properties.Summary;
	    link = p.properties.Url.replace('http://', 'https://');
	  }
	
	  if (type === 'audio') {
	    title = p.properties.Title;
	    link = p.properties.SoundCloudURL.replace('http://', 'https://');
	  }
	
	  return {
	    key: key,
	    type: type,
	    title: title,
	    content: content,
	    images: images,
	    link: link,
	    date: date,
	    location: location,
	    author: author,
	    dimensions: dimensions,
	    next: next,
	    previous: previous
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    fetchDay: function fetchDay(currentDate) {
	      return dispatch(actions.fetchDay(currentDate));
	    },
	    updateMap: function updateMap(currentDate, coordinates, viewGeoBounds, zoom, expeditionID) {
	      return dispatch(actions.updateMap(currentDate, coordinates, viewGeoBounds, zoom, expeditionID));
	    },
	    setControl: function setControl(target, mode) {
	      return dispatch(actions.setControl(target, mode));
	    },
	    jumpTo: function jumpTo(date, expeditionID) {
	      return dispatch(actions.jumpTo(date, expeditionID));
	    },
	    setPage: function setPage() {
	      return dispatch(actions.setPage());
	    },
	    enableContent: function enableContent() {
	      return dispatch(actions.enableContent());
	    },
	    show360Picture: function show360Picture(post) {
	      return dispatch(actions.show360Picture(post));
	    },
	    closeLightBox: function closeLightBox() {
	      return dispatch(actions.closeLightBox());
	    }
	  };
	};
	
	var OkavangoContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Okavango2.default);
	
	exports.default = OkavangoContainer;

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BackgroundMap = __webpack_require__(563);
	
	var _BackgroundMap2 = _interopRequireDefault(_BackgroundMap);
	
	var _LightBox = __webpack_require__(1021);
	
	var _LightBox2 = _interopRequireDefault(_LightBox);
	
	var _Timeline = __webpack_require__(1023);
	
	var _Timeline2 = _interopRequireDefault(_Timeline);
	
	var _Navigation = __webpack_require__(1025);
	
	var _Navigation2 = _interopRequireDefault(_Navigation);
	
	var _IntroductionBox = __webpack_require__(1027);
	
	var _IntroductionBox2 = _interopRequireDefault(_IntroductionBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Okavango = function (_React$Component) {
	  _inherits(Okavango, _React$Component);
	
	  function Okavango() {
	    _classCallCheck(this, Okavango);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Okavango).apply(this, arguments));
	  }
	
	  _createClass(Okavango, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var expedition = _props.expedition;
	      var animate = _props.animate;
	      var updateMap = _props.updateMap;
	      var fetchDay = _props.fetchDay;
	      var setControl = _props.setControl;
	      var jumpTo = _props.jumpTo;
	      var isFetching = _props.isFetching;
	      var mapStateNeedsUpdate = _props.mapStateNeedsUpdate;
	      var setPage = _props.setPage;
	      var expeditionID = _props.expeditionID;
	      var contentActive = _props.contentActive;
	      var enableContent = _props.enableContent;
	      var initialPage = _props.initialPage;
	      var show360Picture = _props.show360Picture;
	      var lightBoxActive = _props.lightBoxActive;
	      var lightBoxPost = _props.lightBoxPost;
	      var closeLightBox = _props.closeLightBox;
	
	      var height = { height: window.innerWidth > 768 ? window.innerHeight - 100 : window.innerHeight - 120 };
	
	      return _react2.default.createElement(
	        'div',
	        { id: 'root' },
	        _react2.default.createElement(_BackgroundMap2.default, {
	          initialPage: initialPage,
	          expeditionID: expeditionID,
	          isFetching: isFetching,
	          animate: animate,
	          expedition: expedition,
	          updateMap: updateMap,
	          fetchDay: fetchDay,
	          setControl: setControl,
	          mapStateNeedsUpdate: mapStateNeedsUpdate,
	          contentActive: contentActive,
	          show360Picture: show360Picture,
	          lightBoxActive: lightBoxActive
	        }),
	        _react2.default.createElement('div', {
	          id: 'nightOverlay',
	          style: {
	            opacity: (location.pathname === '/map' || location.pathname === '/') && !lightBoxActive ? 0 : 1,
	            zIndex: lightBoxActive ? 1 : 0
	          }
	        }),
	        _react2.default.createElement(_Navigation2.default, {
	          setPage: setPage,
	          pathName: location.pathname
	        }),
	        _react2.default.createElement(
	          'div',
	          {
	            id: 'content',
	            style: height,
	            className: contentActive ? '' : 'hidden',
	            onMouseDown: function onMouseDown() {
	              if (lightBoxActive) closeLightBox();
	            }
	          },
	          isFetching ? _react2.default.createElement(
	            'div',
	            { id: 'loadingWheel' },
	            _react2.default.createElement('div', { className: 'wheel' })
	          ) : null,
	          _react2.default.createElement(_Timeline2.default, {
	            expeditionID: expeditionID,
	            expedition: expedition,
	            jumpTo: jumpTo
	          }),
	          _react2.default.createElement(
	            'div',
	            {
	              id: 'pageContainer',
	              className: location.pathname === '/map' || location.pathname === '/' ? 'disabled' : ''
	            },
	            _react2.default.createElement(_LightBox2.default, {
	              active: lightBoxActive,
	              post: lightBoxPost,
	              closeLightBox: closeLightBox,
	              show360Picture: show360Picture
	            }),
	            children
	          ),
	          _react2.default.createElement(
	            'div',
	            {
	              className: 'logos',
	              style: { display: location.pathname === '/map' || location.pathname === '/' ? 'block' : 'none' }
	            },
	            _react2.default.createElement(
	              'a',
	              {
	                href: 'http://www.nationalgeographic.com/'
	              },
	              _react2.default.createElement('img', {
	                src: 'static/img/natgeoLogo.svg',
	                alt: 'National Geographic Logo',
	                height: '35px'
	              })
	            ),
	            _react2.default.createElement(
	              'a',
	              {
	                href: 'http://conservify.org/'
	              },
	              _react2.default.createElement('img', {
	                src: 'static/img/conservify.png',
	                alt: 'Conservify Logo',
	                height: '35px'
	              })
	            ),
	            _react2.default.createElement(
	              'a',
	              {
	                href: 'http://www.o-c-r.org/'
	              },
	              _react2.default.createElement('img', {
	                src: 'static/img/ocrLogo.svg',
	                alt: 'The Office for Creative Research Logo',
	                height: '35px'
	              })
	            ),
	            _react2.default.createElement(
	              'a',
	              {
	                href: 'http://www.wildbirdtrust.com/'
	              },
	              _react2.default.createElement('img', {
	                src: 'static/img/wbtLogo.png',
	                alt: 'Wild Bird Trust Logo',
	                height: '35px'
	              })
	            )
	          )
	        ),
	        _react2.default.createElement(_IntroductionBox2.default, {
	          enableContent: enableContent,
	          animate: animate
	        })
	      );
	    }
	  }]);
	
	  return Okavango;
	}(_react2.default.Component);
	
	exports.default = Okavango;
	
	
	Okavango.propTypes = {
	  animate: _react.PropTypes.bool,
	  children: _react.PropTypes.node.isRequired,
	  expedition: _react.PropTypes.object,
	  expeditionID: _react.PropTypes.string,
	  updateMap: _react.PropTypes.func.isRequired,
	  fetchDay: _react.PropTypes.func.isRequired,
	  setControl: _react.PropTypes.func.isRequired,
	  jumpTo: _react.PropTypes.func.isRequired,
	  isFetching: _react.PropTypes.bool.isRequired,
	  mapStateNeedsUpdate: _react.PropTypes.bool.isRequired,
	  setPage: _react.PropTypes.func.isRequired,
	  contentActive: _react.PropTypes.bool.isRequired,
	  enableContent: _react.PropTypes.func.isRequired,
	  initialPage: _react.PropTypes.string.isRequired,
	  show360Picture: _react.PropTypes.func.isRequired,
	  lightBoxActive: _react.PropTypes.bool.isRequired,
	  lightBoxPost: _react.PropTypes.object,
	  closeLightBox: _react.PropTypes.func.isRequired
	};

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _desc, _value, _class;
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _autobindDecorator = __webpack_require__(564);
	
	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
	
	var _d = __webpack_require__(496);
	
	var d3 = _interopRequireWildcard(_d);
	
	var _viewportMercatorProject = __webpack_require__(565);
	
	var _viewportMercatorProject2 = _interopRequireDefault(_viewportMercatorProject);
	
	var _utils = __webpack_require__(497);
	
	var _WebGLOverlay = __webpack_require__(566);
	
	var _WebGLOverlay2 = _interopRequireDefault(_WebGLOverlay);
	
	var _reactMapGl = __webpack_require__(776);
	
	var _reactMapGl2 = _interopRequireDefault(_reactMapGl);
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;
	
	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }
	
	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);
	
	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }
	
	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }
	
	  return desc;
	}
	
	var BackgroundMap = (_class = function (_React$Component) {
	  _inherits(BackgroundMap, _React$Component);
	
	  function BackgroundMap(props) {
	    _classCallCheck(this, BackgroundMap);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BackgroundMap).call(this, props));
	
	    _this.state = {
	      frameCount: 0,
	      contentActive: false,
	      animate: false,
	      coordinates: [0, 0],
	      viewport: {
	        latitude: -18.5699229,
	        longitude: 22.115456,
	        zoom: 4,
	        width: window.innerWidth,
	        height: window.innerHeight,
	        startDragLngLat: null,
	        isDragging: false
	      }
	    };
	    return _this;
	  }
	
	  _createClass(BackgroundMap, [{
	    key: 'tick',
	    value: function tick(pastFrameDate) {
	      var _this2 = this;
	
	      var newState = {};
	      var speedFactor = (Date.now() - pastFrameDate) / (1000 / 60);
	      var currentFrameDate = Date.now();
	      var _props = this.props;
	      var expeditionID = _props.expeditionID;
	      var animate = _props.animate;
	      var expedition = _props.expedition;
	      var fetchDay = _props.fetchDay;
	      var setControl = _props.setControl;
	      var isFetching = _props.isFetching;
	      var updateMap = _props.updateMap;
	      var initialPage = _props.initialPage;
	
	      var b1, b2;
	      if (animate && !isFetching && location.pathname === '/map' || location.pathname === '/') {
	        var dateOffset;
	        var forward;
	        var offset;
	        var currentDate;
	        var currentDay;
	        var beacons;
	        var beaconCount;
	        var beaconIndex;
	        var timeToNextBeacon;
	        var ratioBetweenBeacons;
	        var i;
	        var currentBeacon;
	        var nextBeacon;
	        var coordinates;
	        var zoom;
	
	        (function () {
	          // increment time
	          dateOffset = 0;
	          forward = expedition.playback === 'fastForward' || expedition.playback === 'forward' || expedition.playback === 'pause';
	
	          if (_this2.state.beaconIndex === (forward ? 0 : 1) || _this2.state.beaconIndex === (forward ? d3.values(_this2.state.day.beacons).length - 2 : d3.values(_this2.state.day.beacons).length - 1)) {
	            offset = _this2.state.timeToNextBeacon > 0 ? Math.min(100000, _this2.state.timeToNextBeacon + 1) : 100000;
	
	            if (expedition.playback === 'fastBackward' || expedition.playback === 'backward') dateOffset = -1 * offset;
	            if (expedition.playback === 'forward' || expedition.playback === 'fastForward') dateOffset = offset;
	          } else {
	            if (expedition.playback === 'fastBackward') dateOffset = -25000;
	            if (expedition.playback === 'backward') dateOffset = -4000;
	            if (expedition.playback === 'forward') dateOffset = 4000;
	            if (expedition.playback === 'fastForward') dateOffset = 25000;
	          }
	          currentDate = new Date(Math.min(expedition.end.getTime() - 1, Math.max(expedition.start.getTime() + 1, _this2.state.currentDate.getTime() + dateOffset)));
	
	          // pause playback if time reaches beginning or end
	
	          if (currentDate.getTime() === expedition.end.getTime() - 1 && (expedition.playback === 'forward' || expedition.playback === 'fastForward') || currentDate.getTime() === expedition.start.getTime() + 1 && (expedition.playback === 'backward' || expedition.playback === 'fastBackward')) setControl('playback', 'pause');
	
	          // checks current day
	          currentDay = Math.floor((currentDate.getTime() - expedition.start.getTime()) / (1000 * 3600 * 24));
	
	          if (currentDay !== _this2.state.currentDay) {
	            // new day
	            fetchDay(currentDate);
	          }
	
	          // look for most current beacon
	          var day = expedition.days[currentDay];
	          beacons = d3.values(day.beacons).sort(function (a, b) {
	            return (0, _utils.parseDate)(a.properties.DateTime).getTime() - (0, _utils.parseDate)(b.properties.DateTime).getTime();
	          });
	          beaconCount = beacons.length;
	          timeToNextBeacon = 0;
	          ratioBetweenBeacons = 0;
	
	          if (expedition.playback === 'forward' || expedition.playback === 'fastForward' || expedition.playback === 'pause') {
	            for (i = 0; i < beaconCount - 1; i++) {
	              b1 = (0, _utils.parseDate)(beacons[i].properties.DateTime).getTime();
	              b2 = (0, _utils.parseDate)(beacons[i + 1].properties.DateTime).getTime();
	              if (currentDate.getTime() >= b1 && currentDate.getTime() < b2) {
	                beaconIndex = i;
	                timeToNextBeacon = b2 - currentDate.getTime();
	                ratioBetweenBeacons = (currentDate.getTime() - b1) / (b2 - b1);
	                break;
	              }
	            }
	            if (beaconIndex < 0) beaconIndex = beaconCount - 1;
	          } else {
	            for (i = beaconCount - 1; i > 0; i--) {
	              b1 = (0, _utils.parseDate)(beacons[i].properties.DateTime).getTime();
	              b2 = (0, _utils.parseDate)(beacons[i - 1].properties.DateTime).getTime();
	              if (currentDate.getTime() <= b1 && currentDate.getTime() > b2) {
	                beaconIndex = i;
	                timeToNextBeacon = currentDate.getTime() - b2;
	                ratioBetweenBeacons = (currentDate.getTime() - b1) / (b2 - b1);
	                break;
	              }
	            }
	            if (beaconIndex < 0) beaconIndex = 0;
	          }
	          // set map coordinates to current beacon
	          currentBeacon = beacons[beaconIndex + (forward ? 0 : 0)];
	          nextBeacon = beacons[beaconIndex + (forward ? 1 : -1)];
	          coordinates = [(0, _utils.lerp)(currentBeacon.geometry.coordinates[0], nextBeacon.geometry.coordinates[0], ratioBetweenBeacons), (0, _utils.lerp)(currentBeacon.geometry.coordinates[1], nextBeacon.geometry.coordinates[1], ratioBetweenBeacons)];
	
	          // look for most current ambit_geo
	
	          var members = _extends({}, expedition.members);
	          Object.keys(members).forEach(function (memberID) {
	            var member = members[memberID];
	            var ambits = d3.values(expedition.featuresByMember[memberID][currentDay]).sort(function (a, b) {
	              return (0, _utils.parseDate)(a.properties.DateTime).getTime() - (0, _utils.parseDate)(b.properties.DateTime).getTime();
	            });
	            var ambitCount = ambits.length;
	            var ambitIndex = -1;
	            var ratioBetweenAmbits = 0;
	            if (expedition.playback === 'forward' || expedition.playback === 'fastForward' || expedition.playback === 'pause') {
	              for (var i = 0; i < ambitCount - 1; i++) {
	                b1 = (0, _utils.parseDate)(ambits[i].properties.DateTime).getTime();
	                b2 = (0, _utils.parseDate)(ambits[i + 1].properties.DateTime).getTime();
	                if (currentDate.getTime() >= b1 && currentDate.getTime() < b2) {
	                  ambitIndex = i;
	                  ratioBetweenAmbits = (currentDate.getTime() - b1) / (b2 - b1);
	                  break;
	                }
	              }
	              if (ambitIndex < 0) {
	                ambitIndex = ambitCount - 2;
	                ratioBetweenAmbits = 1;
	              }
	            } else {
	              for (i = ambitCount - 1; i > 0; i--) {
	                b1 = (0, _utils.parseDate)(ambits[i].properties.DateTime).getTime();
	                b2 = (0, _utils.parseDate)(ambits[i - 1].properties.DateTime).getTime();
	                if (currentDate.getTime() <= b1 && currentDate.getTime() > b2) {
	                  ambitIndex = i;
	                  ratioBetweenAmbits = (currentDate.getTime() - b1) / (b2 - b1);
	                  break;
	                }
	              }
	              if (ambitIndex < 0) {
	                ambitIndex = 1;
	                ratioBetweenAmbits = 1;
	              }
	            }
	            // set member coordinates
	            var currentID = ambitIndex;
	            var nextID = ambitIndex + (forward ? 1 : -1);
	            if (currentID >= 0 && currentID < ambits.length && nextID >= 0 && nextID < ambits.length) {
	              var currentAmbits = ambits[currentID];
	              var nextAmbit = ambits[nextID];
	              member.coordinates = [(0, _utils.lerp)(currentAmbits.geometry.coordinates[0], nextAmbit.geometry.coordinates[0], ratioBetweenAmbits), (0, _utils.lerp)(currentAmbits.geometry.coordinates[1], nextAmbit.geometry.coordinates[1], ratioBetweenAmbits)];
	            } else {
	              member.coordinates = [-180, 90];
	            }
	          });
	
	          zoom = (0, _utils.lerp)(_this2.state.viewport.zoom, _this2.state.viewport.targetZoom, Math.pow(_this2.state.viewport.zoom / _this2.state.viewport.targetZoom, 2) / 250 * speedFactor);
	          // if (!(initialPage === '/' || initialPage === '/map') || (!this.state.contentActive && this.props.contentActive)) zoom = this.state.viewport.targetZoom
	
	          if (!(initialPage === '/' || initialPage === '/map')) zoom = _this2.state.viewport.targetZoom;
	
	          newState = _extends({}, newState, {
	            currentDate: currentDate,
	            animate: animate,
	            currentDay: currentDay,
	            day: day,
	            beaconIndex: beaconIndex,
	            timeToNextBeacon: timeToNextBeacon,
	            members: members,
	            contentActive: _this2.props.contentActive,
	            viewport: _extends({}, _this2.state.viewport, {
	              longitude: coordinates[0],
	              latitude: coordinates[1],
	              zoom: zoom
	            })
	          });
	
	          if (_this2.state.frameCount % 60 === 0) {
	            var _ViewportMercator = (0, _viewportMercatorProject2.default)(_extends({}, _this2.state.viewport));
	
	            var unproject = _ViewportMercator.unproject;
	
	            var nw = unproject([0, 0]);
	            var se = unproject([window.innerWidth, window.innerHeight]);
	            var viewGeoBounds = [nw[0], nw[1], se[0], se[1]];
	            updateMap(_this2.state.currentDate, [_this2.state.viewport.longitude, _this2.state.viewport.latitude], viewGeoBounds, _this2.state.viewport.zoom, expeditionID);
	          }
	        })();
	      }
	
	      this.setState(_extends({}, this.state, newState, {
	        animate: animate,
	        frameCount: this.state.frameCount + 1
	      }));
	
	      requestAnimationFrame(function () {
	        _this2.tick(currentFrameDate);
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	
	      return !!(this.props.expedition && this.props.expedition.playback !== 'pause' && nextState.frameCount !== this.state.frameCount);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var animate = nextProps.animate;
	      var expedition = nextProps.expedition;
	      var mapStateNeedsUpdate = nextProps.mapStateNeedsUpdate;
	      // console.log('new', animate, this.state.animate)
	
	      if (animate) {
	        var currentDate = expedition.currentDate;
	        // note: currentDay has a 1 day offset with API expeditionDay, which starts at 1
	        var currentDay = Math.floor((currentDate.getTime() - expedition.start.getTime()) / (1000 * 3600 * 24));
	        var day = expedition.days[currentDay];
	
	        if (mapStateNeedsUpdate) {
	          this.state.currentDate = currentDate;
	          this.state.currentDay = currentDay;
	          this.state.day = day;
	          this.state.frameCount = 0;
	        }
	
	        if (!this.state.animate) {
	          this.state.animate = animate;
	          this.state.viewport = _extends({}, this.state.viewport, {
	            zoom: expedition.initialZoom,
	            targetZoom: expedition.targetZoom
	          });
	          // console.log('starting animation')
	          this.tick(Math.round(Date.now() - 1000 / 60));
	        }
	      }
	    }
	  }, {
	    key: 'redrawGLOverlay',
	    value: function redrawGLOverlay(_ref) {
	      var _this3 = this;
	
	      var unproject = _ref.unproject;
	
	      var screenBounds = [[0, 0], [window.innerWidth, window.innerHeight]].map(unproject);
	      return function (particles, paths) {
	        var expedition = _this3.props.expedition;
	        var currentGeoBounds = expedition.currentGeoBounds;
	
	        var west = currentGeoBounds[0] + (currentGeoBounds[0] - currentGeoBounds[2]) * 0.25;
	        var north = currentGeoBounds[1] + (currentGeoBounds[1] - currentGeoBounds[3]) * 0.25;
	        var east = currentGeoBounds[2] + (currentGeoBounds[2] - currentGeoBounds[0]) * 0.25;
	        var south = currentGeoBounds[3] + (currentGeoBounds[3] - currentGeoBounds[1]) * 0.25;
	        var gb = [west, north, east, south];
	
	        if (expedition.zoom < 14) {
	          return {
	            particles: particles,
	            paths: paths
	          };
	        } else {
	          return {
	            particles: _extends({}, particles, {
	              // pictures360: this.render360Images(particles.pictures360, screenBounds, expedition, gb),
	              sightings: _this3.renderSightings(particles.sightings, screenBounds, expedition, gb),
	              members: _this3.renderMembers(particles.members, screenBounds, expedition, gb)
	            }),
	            paths: {
	              ambitGeo: _this3.renderAmbitGeo(paths.ambitGeo, screenBounds, expedition, gb)
	            }
	          };
	        }
	      };
	    }
	  }, {
	    key: 'mapToScreen',
	    value: function mapToScreen(p, screenBounds) {
	      return [0 + (window.innerWidth - 0) * ((p[0] - screenBounds[0][0]) / (screenBounds[1][0] - screenBounds[0][0])), 0 + (window.innerHeight - 0) * ((p[1] - screenBounds[0][1]) / (screenBounds[1][1] - screenBounds[0][1]))];
	    }
	  }, {
	    key: 'renderAmbitGeo',
	    value: function renderAmbitGeo(pathGeometry, screenBounds, expedition, gb) {
	      var _this4 = this;
	
	      var checkGeoBounds = function checkGeoBounds(p, gb) {
	        return p[0] >= gb[0] && p[0] < gb[2] && p[1] >= gb[3] && p[1] < gb[1];
	      };
	
	      return expedition.currentAmbits.map(function (route) {
	
	        var vertices = route.coordinates.filter(function (p, i) {
	          if (route.coordinates[i - 1] && checkGeoBounds(route.coordinates[i - 1], gb)) return true;
	          if (checkGeoBounds(route.coordinates[i], gb)) return true;
	          if (route.coordinates[i + 1] && checkGeoBounds(route.coordinates[i + 1], gb)) return true;
	          return false;
	        }).map(function (p) {
	          return _this4.mapToScreen(p, screenBounds);
	        }).map(function (p, i) {
	          return new _three2.default.Vector3(p[0], p[1], 0);
	        });
	
	        var lastVertex = vertices[vertices.length - 1].clone();
	        for (var i = vertices.length; i < 200; i++) {
	          vertices[i] = lastVertex;
	        }
	
	        return {
	          color: route.color,
	          vertices: vertices
	        };
	      });
	    }
	  }, {
	    key: 'render360Images',
	    value: function render360Images(particleGeometry, screenBounds, expedition, gb) {
	
	      var images = expedition.current360Images.filter(function (image) {
	        var coords = image.geometry.coordinates;
	        return coords[0] >= gb[0] && coords[0] < gb[2] && coords[1] >= gb[3] && coords[1] < gb[1];
	      });
	
	      for (var i = 0; i < particleGeometry.count; i++) {
	        var image = images[i];
	        if (image) {
	          var coords = this.mapToScreen([image.geometry.coordinates[0], image.geometry.coordinates[1]], screenBounds);
	          particleGeometry.position.array[i * 3 + 0] = coords[0];
	          particleGeometry.position.array[i * 3 + 1] = coords[1];
	          particleGeometry.position.array[i * 3 + 2] = 0;
	          particleGeometry.color.array[i * 4 + 0] = 0.62;
	          particleGeometry.color.array[i * 4 + 1] = 0.6;
	          particleGeometry.color.array[i * 4 + 2] = 0.7;
	          particleGeometry.color.array[i * 4 + 3] = 1;
	        } else {
	          particleGeometry.position.array[i * 3 + 0] = 0;
	          particleGeometry.position.array[i * 3 + 1] = 0;
	          particleGeometry.position.array[i * 3 + 2] = 0;
	          particleGeometry.color.array[i * 4 + 0] = 0;
	          particleGeometry.color.array[i * 4 + 1] = 0;
	          particleGeometry.color.array[i * 4 + 2] = 0;
	          particleGeometry.color.array[i * 4 + 3] = 0;
	        }
	      }
	
	      particleGeometry.position.needsUpdate = true;
	      particleGeometry.color.needsUpdate = true;
	      particleGeometry.data = images;
	      return particleGeometry;
	    }
	  }, {
	    key: 'renderSightings',
	    value: function renderSightings(particleGeometry, screenBounds, expedition, gb) {
	      var sightings = expedition.currentSightings.filter(function (sighting, i) {
	        var position = sighting.position;
	
	        return position.x >= gb[0] && position.x < gb[2] && position.y >= gb[3] && position.y < gb[1];
	      });
	
	      for (var i = 0; i < particleGeometry.count; i++) {
	        var sighting = sightings[i];
	        if (sighting) {
	          var position = sighting.position;
	          var radius = sighting.radius;
	
	          var coords = this.mapToScreen([position.x, position.y], screenBounds);
	          var color = new _three2.default.Color(sighting.color);
	          particleGeometry.position.array[i * 3 + 0] = coords[0];
	          particleGeometry.position.array[i * 3 + 1] = coords[1];
	          particleGeometry.position.array[i * 3 + 2] = radius * 2;
	          particleGeometry.color.array[i * 4 + 0] = color.r;
	          particleGeometry.color.array[i * 4 + 1] = color.g;
	          particleGeometry.color.array[i * 4 + 2] = color.b;
	          particleGeometry.color.array[i * 4 + 3] = 1;
	        } else {
	          particleGeometry.position.array[i * 3 + 0] = 0;
	          particleGeometry.position.array[i * 3 + 1] = 0;
	          particleGeometry.position.array[i * 3 + 2] = 0;
	          particleGeometry.color.array[i * 4 + 0] = 0;
	          particleGeometry.color.array[i * 4 + 1] = 0;
	          particleGeometry.color.array[i * 4 + 2] = 0;
	          particleGeometry.color.array[i * 4 + 3] = 0;
	        }
	      }
	
	      particleGeometry.position.needsUpdate = true;
	      particleGeometry.color.needsUpdate = true;
	      particleGeometry.data = sightings;
	      return particleGeometry;
	    }
	  }, {
	    key: 'renderMembers',
	    value: function renderMembers(geometry, screenBounds, expedition, gb) {
	      var _this5 = this;
	
	      if (!this.state.members) return geometry;
	      var members = Object.keys(this.state.members).map(function (name) {
	        var member = _this5.state.members[name];
	        var position = _this5.mapToScreen(member.coordinates, screenBounds);
	        return {
	          name: name,
	          position: position
	        };
	      });
	      return members;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var expedition = _props2.expedition;
	      var show360Picture = _props2.show360Picture;
	      var lightBoxActive = _props2.lightBoxActive;
	      var _state = this.state;
	      var viewport = _state.viewport;
	      var currentDate = _state.currentDate;
	
	      var MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiaWFhYWFuIiwiYSI6ImNpbXF1ZW4xOTAwbnl3Ymx1Y2J6Mm5xOHYifQ.6wlNzSdcTlonLBH-xcmUdQ';
	      var MAPBOX_STYLE = 'mapbox://styles/mapbox/satellite-v9?format=jpg70';
	
	      return _react2.default.createElement(
	        'div',
	        { id: 'mapbox', style: { zIndex: !lightBoxActive && (location.pathname === '/map' || location.pathname === '/') ? 0 : -100 } },
	        _react2.default.createElement(
	          _reactMapGl2.default,
	          _extends({}, viewport, {
	            mapStyle: MAPBOX_STYLE,
	            mapboxApiAccessToken: MAPBOX_ACCESS_TOKEN
	          }),
	          expedition ? _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_WebGLOverlay2.default, _extends({}, viewport, {
	              startDragLngLat: [0, 0],
	              redraw: this.redrawGLOverlay,
	              show360Picture: show360Picture,
	              currentDate: currentDate
	            }))
	          ) : ''
	        )
	      );
	    }
	  }]);
	
	  return BackgroundMap;
	}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'tick', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'tick'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'redrawGLOverlay', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'redrawGLOverlay'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'mapToScreen', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'mapToScreen'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'renderAmbitGeo', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'renderAmbitGeo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'render360Images', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'render360Images'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'renderSightings', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'renderSightings'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'renderMembers', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'renderMembers'), _class.prototype)), _class);
	
	
	BackgroundMap.propTypes = {
	  animate: _react.PropTypes.bool.isRequired,
	  expedition: _react.PropTypes.object,
	  updateMap: _react.PropTypes.func.isRequired,
	  fetchDay: _react.PropTypes.func.isRequired,
	  setControl: _react.PropTypes.func.isRequired,
	  mapStateNeedsUpdate: _react.PropTypes.bool.isRequired,
	  initialPage: _react.PropTypes.string.isRequired,
	  contentActive: _react.PropTypes.bool,
	  show360Picture: _react.PropTypes.func.isRequired,
	  lightBoxActive: _react.PropTypes.bool.isRequired
	};
	
	exports.default = BackgroundMap;

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _desc, _value, _class;
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _viewportMercatorProject = __webpack_require__(565);
	
	var _viewportMercatorProject2 = _interopRequireDefault(_viewportMercatorProject);
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _reactThreeRenderer = __webpack_require__(568);
	
	var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);
	
	var _autobindDecorator = __webpack_require__(564);
	
	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;
	
	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }
	
	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);
	
	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }
	
	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }
	
	  return desc;
	}
	
	var WebGLOverlay = (_class = function (_Component) {
	  _inherits(WebGLOverlay, _Component);
	
	  function WebGLOverlay(props) {
	    _classCallCheck(this, WebGLOverlay);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WebGLOverlay).call(this, props));
	
	    var paths = {
	      ambitGeo: []
	    };
	
	    var particles = {
	      members: [],
	      sightings: {
	        count: 1000,
	        position: new _three2.default.BufferAttribute(new Float32Array(1000 * 3), 3),
	        color: new _three2.default.BufferAttribute(new Float32Array(1000 * 4), 4),
	        index: new _three2.default.BufferAttribute(new Uint16Array(1000 * 1), 1),
	        data: [],
	        vertexShader: ['attribute vec4 color;', 'varying vec4 vColor;', 'void main() {', '    vColor = color;', '    vec4 mvPosition = modelViewMatrix * vec4( position.xy, 0.0 , 1.0 );', '    gl_PointSize = float( position.z );', '    gl_Position = projectionMatrix * mvPosition;', '}'].join('\n'),
	        fragmentShader: ['varying vec4 vColor;', 'uniform sampler2D texture;', 'vec4 vFragColor;', 'void main() {', '    vFragColor = vColor * texture2D( texture, gl_PointCoord );', '    if (vFragColor.w > 0.25) {', '      gl_FragColor = vFragColor;', '    } else {', '      discard;', '    }', '}'].join('\n')
	      },
	      pictures360: {
	        count: 1000,
	        position: new _three2.default.BufferAttribute(new Float32Array(1000 * 3), 3),
	        color: new _three2.default.BufferAttribute(new Float32Array(1000 * 4), 4),
	        index: new _three2.default.BufferAttribute(new Uint16Array(1000 * 1), 1),
	        data: [],
	        vertexShader: ['attribute vec4 color;', 'varying vec4 vColor;', 'void main() {', '    vColor = color;', '    vec4 mvPosition = modelViewMatrix * vec4( position.xy, 0.0 , 1.0 );', '    gl_PointSize = 20.0;', '    gl_Position = projectionMatrix * mvPosition;', '}'].join('\n'),
	        fragmentShader: ['varying vec4 vColor;', 'uniform sampler2D texture;', 'vec4 vFragColor;', 'void main() {', '    vFragColor = vColor * texture2D( texture, gl_PointCoord );', '    if (vFragColor.w > 0.35) {', '      gl_FragColor = vFragColor;', '    } else {', '      discard;', '    }', '}'].join('\n')
	      }
	    };
	
	    for (var k in particles) {
	      for (var i = 0; i < particles[k].count; i++) {
	        particles[k].index.array[i] = i;
	      }
	    }
	
	    _this.state = {
	      paths: paths,
	      particles: particles,
	      render: function render() {},
	
	      sightingTexture: new _three2.default.TextureLoader().load('static/img/sighting.png'),
	      picture360Texture: new _three2.default.TextureLoader().load('static/img/picture360.png'),
	      mousePosition: [0, 0],
	      hoveredPicture: -1
	    };
	    return _this;
	  }
	
	  _createClass(WebGLOverlay, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _ViewportMercator = (0, _viewportMercatorProject2.default)(nextProps);
	
	      var unproject = _ViewportMercator.unproject;
	
	      var render = nextProps.redraw({ unproject: unproject });
	
	      if (!render) {
	        this.setState(_extends({}, this.state, {
	          particles: null
	        }));
	        return;
	      }
	
	      var _render = render(this.state.particles, this.state.paths);
	
	      var particles = _render.particles;
	      var paths = _render.paths;
	
	
	      var hoveredPicture = -1;
	      if (this.state.mousePosition[0] > 0 || this.state.mousePosition[1] > 0) {
	        var positions = particles.pictures360.position.array;
	        for (var i = 0; i < particles.pictures360.count; i++) {
	          var pos = [positions[i * 3 + 0], positions[i * 3 + 1]];
	          var dist = Math.sqrt(Math.pow(this.state.mousePosition[0] - pos[0], 2) + Math.pow(this.state.mousePosition[1] - pos[1], 2));
	          if (dist < 15) {
	            particles.pictures360.color.array[i * 4 + 0] = 1;
	            particles.pictures360.color.array[i * 4 + 1] = 1;
	            particles.pictures360.color.array[i * 4 + 2] = 1;
	            particles.pictures360.color.array[i * 4 + 3] = 1;
	            hoveredPicture = i;
	            particles.pictures360.color.needsUpdate = true;
	            break;
	          }
	          if (particles.pictures360.color.array[i * 4 + 3] === 0) break;
	        }
	      }
	
	      this.setState(_extends({}, this.state, {
	        particles: particles,
	        paths: paths,
	        render: render,
	        hoveredPicture: hoveredPicture
	      }));
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(event) {
	      this.setState(_extends({}, this.state, {
	        mousePosition: [event.pageX, event.pageY]
	      }));
	    }
	  }, {
	    key: 'onMouseOut',
	    value: function onMouseOut(event) {
	      this.setState(_extends({}, this.state, {
	        mousePosition: [0, 0]
	      }));
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(event) {
	      var show360Picture = this.props.show360Picture;
	      // const { particles } = this.state
	
	      if (this.state.hoveredPicture > -1) {
	        show360Picture(this.state.particles.pictures360.data[this.state.hoveredPicture]);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _ViewportMercator2 = (0, _viewportMercatorProject2.default)(this.props);
	
	      var project = _ViewportMercator2.project;
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var longitude = _props.longitude;
	      var latitude = _props.latitude;
	      var _state = this.state;
	      var particles = _state.particles;
	      var paths = _state.paths;
	
	
	      var point = project([longitude, latitude]);
	      var startPoint = project([this.state.longitude, this.state.latitude]);
	      var left = point[0] - startPoint[0];
	      var top = 0 - (point[1] - startPoint[1]);
	      var cameraProps = {
	        left: 0,
	        right: width,
	        top: 0,
	        bottom: height,
	        near: 1,
	        far: 5000,
	        position: new _three2.default.Vector3(left, top, 600),
	        lookAt: new _three2.default.Vector3(left, top, 0)
	      };
	
	      var memberMarkers = particles.members.map(function (m, i) {
	        var x = Math.round((m.position[0] - 27 / 2) * 10) / 10;
	        var y = Math.round((m.position[1] - 34) * 10) / 10;
	        return _react2.default.createElement(
	          'div',
	          {
	            key: m.name,
	            className: 'member-marker',
	            style: {
	              left: x,
	              top: y
	            }
	          },
	          _react2.default.createElement('img', {
	            src: 'static/img/member.svg',
	            width: 27,
	            height: 32
	          }),
	          _react2.default.createElement(
	            'span',
	            null,
	            m.name.charAt(0).toUpperCase()
	          )
	        );
	      });
	
	      var sightingLabels = particles.sightings.data.map(function (p, i) {
	        var x = particles.sightings.position.array[i * 3 + 0];
	        var y = particles.sightings.position.array[i * 3 + 1];
	        if (x >= window.innerWidth / 3 && x < 2 * window.innerWidth / 3 && y >= window.innerHeight / 3 && y < 2 * window.innerHeight / 3) {
	          // if ((currentDate.getTime() - p.date.getTime()) < 200000 && (currentDate.getTime() - p.date.getTime()) > -200000) {
	          return _react2.default.createElement(
	            'div',
	            {
	              key: i,
	              className: 'sighting-label',
	              style: {
	                left: x,
	                top: y
	              }
	            },
	            _react2.default.createElement(
	              'div',
	              {
	                className: 'arrow-box'
	              },
	              p.count + ' ' + p.name
	            )
	          );
	        } else {
	          return null;
	        }
	      });
	
	      var lines = paths.ambitGeo.map(function (p, i) {
	
	        return _react2.default.createElement(
	          'line',
	          { key: i },
	          _react2.default.createElement('geometry', {
	            vertices: p.vertices,
	            dynamic: true
	          }),
	          _react2.default.createElement('lineBasicMaterial', {
	            linewidth: 2,
	            opacity: 0.7,
	            transparent: true,
	            color: p.color
	          })
	        );
	      });
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('div', {
	          className: 'hitbox' + (this.state.hoveredPicture > -1 ? ' hover' : ''),
	          onMouseMove: this.onMouseMove,
	          onMouseOut: this.onMouseOut,
	          onClick: this.onClick
	        }),
	        _react2.default.createElement(
	          'div',
	          {
	            id: 'html-renderer',
	            style: {
	              position: 'absolute',
	              width: '100%',
	              height: '100%'
	            }
	          },
	          sightingLabels,
	          memberMarkers
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'three-renderer'
	          },
	          _react2.default.createElement(
	            _reactThreeRenderer2.default,
	            {
	              mainCamera: 'camera',
	              width: width,
	              height: height,
	              onAnimate: this._onAnimate,
	              alpha: true,
	              antialias: true
	            },
	            _react2.default.createElement(
	              'scene',
	              null,
	              _react2.default.createElement('orthographicCamera', _extends({
	                name: 'camera'
	              }, cameraProps)),
	              lines,
	              particles && _react2.default.createElement(
	                'points',
	                null,
	                _react2.default.createElement('bufferGeometry', {
	                  position: particles.sightings.position,
	                  index: particles.sightings.index,
	                  color: particles.sightings.color
	                }),
	                _react2.default.createElement('shaderMaterial', {
	                  vertexShader: particles.sightings.vertexShader,
	                  fragmentShader: particles.sightings.fragmentShader,
	                  uniforms: { texture: { type: 't', value: this.state.sightingTexture } }
	                })
	              ),
	              particles && _react2.default.createElement(
	                'points',
	                null,
	                _react2.default.createElement('bufferGeometry', {
	                  position: particles.pictures360.position,
	                  index: particles.pictures360.index,
	                  color: particles.pictures360.color
	                }),
	                _react2.default.createElement('shaderMaterial', {
	                  vertexShader: particles.pictures360.vertexShader,
	                  fragmentShader: particles.pictures360.fragmentShader,
	                  uniforms: { texture: { type: 't', value: this.state.picture360Texture } }
	                })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return WebGLOverlay;
	}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'onMouseMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onMouseOut', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onMouseOut'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onClick', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onClick'), _class.prototype)), _class);
	exports.default = WebGLOverlay;
	
	
	WebGLOverlay.propTypes = {
	  show360Picture: _react.PropTypes.func.isRequired,
	  currentDate: _react.PropTypes.object,
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  latitude: _react.PropTypes.number.isRequired,
	  longitude: _react.PropTypes.number.isRequired,
	  zoom: _react.PropTypes.number.isRequired,
	  redraw: _react.PropTypes.func.isRequired,
	  isDragging: _react.PropTypes.bool.isRequired
	};

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _class, _temp;
	
	var _react = __webpack_require__(569);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ReactComponentWithPureRenderMixin = __webpack_require__(601);
	
	var _ReactComponentWithPureRenderMixin2 = _interopRequireDefault(_ReactComponentWithPureRenderMixin);
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _React3Renderer = __webpack_require__(604);
	
	var _React3Renderer2 = _interopRequireDefault(_React3Renderer);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var PropTypes = _react2.default.PropTypes;
	var React3 = (_temp = _class = function (_React$Component) {
	  _inherits(React3, _React$Component);
	
	  function React3(props, context) {
	    _classCallCheck(this, React3);
	
	    var _this = _possibleConstructorReturn(this, (React3.__proto__ || Object.getPrototypeOf(React3)).call(this, props, context));
	
	    _this.shouldComponentUpdate = _ReactComponentWithPureRenderMixin2.default.shouldComponentUpdate;
	
	    _this._onRecreateCanvas = function () {
	      _this.setState({
	        // changing the key will recreate the element
	        canvasKey: _this.state.canvasKey + 1
	      });
	    };
	
	    _this._canvasRef = function (c) {
	      _this._canvas = c;
	      if (_this.props.canvasRef) {
	        _this.props.canvasRef(c);
	      }
	    };
	
	    _this.state = {
	      canvasKey: 0
	    };
	    return _this;
	  }
	
	  _createClass(React3, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.react3Renderer = new _React3Renderer2.default();
	
	      this._render();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._render();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.react3Renderer.dispose();
	      delete this.react3Renderer;
	    }
	  }, {
	    key: '_render',
	    value: function _render() {
	      var canvas = this._canvas;
	
	      var propsToClone = _extends({}, this.props);
	
	      delete propsToClone.canvasStyle;
	      delete propsToClone.canvasRef;
	
	      this.react3Renderer.render(_react2.default.createElement('react3', _extends({}, propsToClone, {
	        onRecreateCanvas: this._onRecreateCanvas
	      }), this.props.children), canvas);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var canvasKey = this.state.canvasKey;
	
	      return _react2.default.createElement('canvas', {
	        ref: this._canvasRef,
	        key: canvasKey,
	        width: this.props.width,
	        height: this.props.height,
	        style: _extends({}, this.props.canvasStyle, {
	          width: this.props.width,
	          height: this.props.height
	        })
	      });
	    }
	  }]);
	
	  return React3;
	}(_react2.default.Component), _class.propTypes = {
	  context: PropTypes.string,
	  width: PropTypes.number.isRequired,
	  height: PropTypes.number.isRequired,
	  children: PropTypes.any,
	  canvasStyle: PropTypes.any,
	  gammaInput: PropTypes.bool,
	  gammaOutput: PropTypes.bool,
	  sortObjects: PropTypes.bool,
	  mainCamera: PropTypes.string,
	  onAnimate: PropTypes.func,
	  clearColor: PropTypes.oneOfType([(0, _propTypeInstanceOf2.default)(_three2.default.Color), PropTypes.number, PropTypes.string]),
	  shadowMapEnabled: PropTypes.bool,
	  shadowMapType: PropTypes.oneOf([_three2.default.BasicShadowMap, _three2.default.PCFShadowMap, _three2.default.PCFSoftShadowMap]),
	  shadowMapCullFace: PropTypes.oneOf([_three2.default.CullFaceNone, _three2.default.CullFaceBack, _three2.default.CullFaceFront, _three2.default.CullFaceFrontBack]),
	  shadowMapDebug: PropTypes.bool,
	  pixelRatio: PropTypes.number,
	  antialias: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
	  canvasRef: PropTypes.func
	}, _class.defaultProps = {
	  context: '3d'
	}, _class.findTHREEObject = _React3Renderer2.default.findTHREEObject, _class.eventDispatcher = _React3Renderer2.default.eventDispatcher, _temp);
	
	module.exports = React3;

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _class, _temp, _class2, _temp2;
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactElement = __webpack_require__(576);
	
	var _ReactElement2 = _interopRequireDefault(_ReactElement);
	
	var _ReactInstanceMap = __webpack_require__(605);
	
	var _ReactInstanceMap2 = _interopRequireDefault(_ReactInstanceMap);
	
	var _ReactInstanceHandles = __webpack_require__(606);
	
	var _ReactInstanceHandles2 = _interopRequireDefault(_ReactInstanceHandles);
	
	var _ReactReconciler = __webpack_require__(607);
	
	var _ReactReconciler2 = _interopRequireDefault(_ReactReconciler);
	
	var _ReactUpdates = __webpack_require__(618);
	
	var _ReactUpdates2 = _interopRequireDefault(_ReactUpdates);
	
	var _ReactCurrentOwner = __webpack_require__(577);
	
	var _ReactCurrentOwner2 = _interopRequireDefault(_ReactCurrentOwner);
	
	var _ReactUpdateQueue = __webpack_require__(622);
	
	var _ReactUpdateQueue2 = _interopRequireDefault(_ReactUpdateQueue);
	
	var _ReactComponent2 = __webpack_require__(584);
	
	var _ReactComponent3 = _interopRequireDefault(_ReactComponent2);
	
	var _ReactInjection = __webpack_require__(623);
	
	var _ReactInjection2 = _interopRequireDefault(_ReactInjection);
	
	var _ReactReconcileTransaction = __webpack_require__(640);
	
	var _ReactReconcileTransaction2 = _interopRequireDefault(_ReactReconcileTransaction);
	
	var _ReactDefaultBatchingStrategy = __webpack_require__(650);
	
	var _ReactDefaultBatchingStrategy2 = _interopRequireDefault(_ReactDefaultBatchingStrategy);
	
	var _KeyEscapeUtils = __webpack_require__(583);
	
	var _KeyEscapeUtils2 = _interopRequireDefault(_KeyEscapeUtils);
	
	var _traverseAllChildren = __webpack_require__(581);
	
	var _traverseAllChildren2 = _interopRequireDefault(_traverseAllChildren);
	
	var _getHostComponentFromComposite = __webpack_require__(651);
	
	var _getHostComponentFromComposite2 = _interopRequireDefault(_getHostComponentFromComposite);
	
	var _shouldUpdateReactComponent = __webpack_require__(653);
	
	var _shouldUpdateReactComponent2 = _interopRequireDefault(_shouldUpdateReactComponent);
	
	var _ReactInstrumentation = __webpack_require__(610);
	
	var _ReactInstrumentation2 = _interopRequireDefault(_ReactInstrumentation);
	
	var _emptyObject = __webpack_require__(586);
	
	var _emptyObject2 = _interopRequireDefault(_emptyObject);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _warning = __webpack_require__(578);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _React3ContainerInfo = __webpack_require__(654);
	
	var _React3ContainerInfo2 = _interopRequireDefault(_React3ContainerInfo);
	
	var _EventDispatcher = __webpack_require__(655);
	
	var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);
	
	var _InternalComponent = __webpack_require__(656);
	
	var _InternalComponent2 = _interopRequireDefault(_InternalComponent);
	
	var _React3ComponentTree = __webpack_require__(669);
	
	var _React3ComponentTree2 = _interopRequireDefault(_React3ComponentTree);
	
	var _ElementDescriptorContainer = __webpack_require__(670);
	
	var _ElementDescriptorContainer2 = _interopRequireDefault(_ElementDescriptorContainer);
	
	var _React3CompositeComponentWrapper = __webpack_require__(665);
	
	var _React3CompositeComponentWrapper2 = _interopRequireDefault(_React3CompositeComponentWrapper);
	
	var _idPropertyName = __webpack_require__(664);
	
	var _idPropertyName2 = _interopRequireDefault(_idPropertyName);
	
	var _removeDevTool = __webpack_require__(666);
	
	var _removeDevTool2 = _interopRequireDefault(_removeDevTool);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var getDeclarationErrorAddendum = void 0;
	var staticDebugIdHack = void 0;
	var ReactComponentTreeHook = void 0;
	
	if (process.env.NODE_ENV !== 'production') {
	  /* eslint-disable global-require */
	
	  if (!ReactComponentTreeHook) {
	    ReactComponentTreeHook = __webpack_require__(595);
	  }
	
	  /* eslint-enable global-require */
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  staticDebugIdHack = 0;
	  // prop type helpers
	  // the warnings for propTypes will not say <anonymous>.
	  // Some performance is sacrificed for this.
	
	  // TODO: could have an env variable to disable this?
	  if (!_three2.default._renamed) {
	    _three2.default._renamed = true;
	
	    _three2.default.Vector2.displayName = 'THREE.Vector2';
	    _three2.default.Vector3.displayName = 'THREE.Vector3';
	    _three2.default.Quaternion.displayName = 'THREE.Quaternion';
	    _three2.default.Color.displayName = 'THREE.Color';
	    _three2.default.Shape.displayName = 'THREE.Shape';
	    _three2.default.Euler.displayName = 'THREE.Euler';
	    _three2.default.Fog.displayName = 'THREE.Fog';
	  }
	
	  getDeclarationErrorAddendum = function getDeclarationErrorAddendum(owner) {
	    if (owner) {
	      var name = owner.getName();
	      if (name) {
	        return ' Check the render method of `' + name + '`.';
	      }
	    }
	    return '';
	  };
	}
	
	/**
	 * Unmounts a component and removes it from the DOM.
	 *
	 * @param {ReactComponent} instance React component instance.
	 * @param {*} container DOM element to unmount from.
	 * @param {bool} safely
	 * @final
	 * @internal
	 * @see {ReactMount.unmountComponentAtNode}
	 */
	function unmountComponentFromNode(instance, container, safely) {
	  if (process.env.NODE_ENV !== 'production') {
	    _ReactInstrumentation2.default.debugTool.onBeginFlush();
	  }
	
	  _ReactReconciler2.default.unmountComponent(instance, safely);
	
	  if (process.env.NODE_ENV !== 'production') {
	    _ReactInstrumentation2.default.debugTool.onEndFlush();
	  }
	}
	
	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	
	var TopLevelWrapper = (_temp = _class = function (_ReactComponent) {
	  _inherits(TopLevelWrapper, _ReactComponent);
	
	  function TopLevelWrapper() {
	    _classCallCheck(this, TopLevelWrapper);
	
	    return _possibleConstructorReturn(this, (TopLevelWrapper.__proto__ || Object.getPrototypeOf(TopLevelWrapper)).apply(this, arguments));
	  }
	
	  _createClass(TopLevelWrapper, [{
	    key: 'render',
	    value: function render() {
	      // this.props is actually a ReactElement
	      return this.props;
	    }
	  }]);
	
	  return TopLevelWrapper;
	}(_ReactComponent3.default), _class.isReactComponent = {}, _temp);
	
	if (process.env.NODE_ENV !== 'production') {
	  TopLevelWrapper.displayName = 'TopLevelWrapper';
	}
	
	function internalGetID(markup) {
	  return markup && markup[_idPropertyName2.default] || '';
	}
	
	// see ReactMount.js:getReactRootElementInContainer
	/**
	 * @param {THREE.Object3D|HTMLCanvasElement} container That may contain
	 * a React component
	 * @return {?*} The markup that may have the reactRoot ID, or null.
	 */
	function getReactRootMarkupInContainer(container) {
	  if (!container) {
	    return null;
	  }
	
	  // in ReactMount this is container.firstChild.
	
	  return container.userData && container.userData.markup && container.userData.markup.childrenMarkup[0] || null;
	}
	
	/**
	 * Check if the type reference is a known internal type. I.e. not a user
	 * provided composite type.
	 *
	 * @param {function} type
	 * @return {boolean} Returns true if this is a valid internal type.
	 */
	function isInternalComponentType(type) {
	  return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
	}
	
	var React3Renderer = (_temp2 = _class2 = function () {
	  _createClass(React3Renderer, [{
	    key: 'updateChildren',
	
	    /**
	     * @see ReactChildReconciler.updateChildren
	     *
	     * Cloned because it uses
	     * @see React3Renderer.instantiateReactComponent
	     *
	     * Updates the rendered children and returns a new set of children.
	     *
	     * @param {?object} prevChildren Previously initialized set of children.
	     * @param {?object} nextChildren Flat child element maps.
	     * @param mountImages
	     * @param {?object} removedMarkups The map for removed nodes.
	     * @param {ReactReconcileTransaction} transaction
	     * @param hostParent
	     * @param hostContainerInfo
	     * @param {object} context
	     * @param selfDebugID
	     * @return {?object} A new set of child instances.
	     * @internal
	     */
	    value: function updateChildren(prevChildren, nextChildren, mountImages, removedMarkups, transaction, hostParent, hostContainerInfo, context, selfDebugID // 0 in production and for roots
	    ) {
	      // We currently don't have a way to track moves here but if we use iterators
	      // instead of for..in we can zip the iterators and check if an item has
	      // moved.
	      // TODO: If nothing has changed, return the prevChildren object so that we
	      // can quickly bailout.
	      if (!nextChildren && !prevChildren) {
	        return null;
	      }
	
	      if (nextChildren) {
	        var nextChildrenKeys = Object.keys(nextChildren);
	
	        for (var i = 0; i < nextChildrenKeys.length; ++i) {
	          var childName = nextChildrenKeys[i];
	
	          var prevChild = prevChildren && prevChildren[childName];
	          var prevElement = prevChild && prevChild._currentElement;
	          var nextElement = nextChildren[childName];
	          if (prevChild !== null && prevChild !== undefined && (0, _shouldUpdateReactComponent2.default)(prevElement, nextElement)) {
	            _ReactReconciler2.default.receiveComponent(prevChild, nextElement, transaction, context);
	
	            if (prevChild._forceRemountOfComponent) {
	              removedMarkups[childName] = prevChild.getHostMarkup();
	
	              _ReactReconciler2.default.unmountComponent(prevChild, false);
	              var nextChildInstance = this.instantiateReactComponent(nextElement, true);
	              nextChildren[childName] = nextChildInstance;
	
	              // Creating mount image now ensures refs are resolved in right order
	              // (see https://github.com/facebook/react/pull/7101 for explanation).
	              var nextChildMountImage = _ReactReconciler2.default.mountComponent(nextChildInstance, transaction, hostParent, hostContainerInfo, context, selfDebugID);
	
	              mountImages.push(nextChildMountImage);
	            } else {
	              nextChildren[childName] = prevChild;
	            }
	          } else {
	            if (prevChild) {
	              removedMarkups[childName] = prevChild.getHostMarkup();
	
	              _ReactReconciler2.default.unmountComponent(prevChild, false);
	            }
	            // The child must be instantiated before it's mounted.
	            var _nextChildInstance = this.instantiateReactComponent(nextElement, true);
	
	            nextChildren[childName] = _nextChildInstance;
	
	            // Creating mount image now ensures refs are resolved in right order
	            // (see https://github.com/facebook/react/pull/7101 for explanation).
	            var _nextChildMountImage = _ReactReconciler2.default.mountComponent(_nextChildInstance, transaction, hostParent, hostContainerInfo, context, selfDebugID /* parentDebugID */
	            );
	
	            mountImages.push(_nextChildMountImage);
	          }
	        }
	      }
	
	      if (prevChildren) {
	        // Unmount children that are no longer present.
	        var prevChildrenKeys = Object.keys(prevChildren);
	        for (var _i = 0; _i < prevChildrenKeys.length; ++_i) {
	          var _childName = prevChildrenKeys[_i];
	
	          if (!(nextChildren && nextChildren.hasOwnProperty(_childName))) {
	            var _prevChild = prevChildren[_childName];
	
	            removedMarkups[_childName] = _prevChild.getHostMarkup();
	
	            _ReactReconciler2.default.unmountComponent(_prevChild, false);
	          }
	        }
	      }
	
	      return nextChildren;
	    }
	  }, {
	    key: 'getElementDescriptor',
	    value: function getElementDescriptor(name) {
	      return this.threeElementDescriptors[name];
	    }
	  }], [{
	    key: 'findTHREEObject',
	
	    /**
	     * Returns the THREE.js object rendered by this element.
	     *
	     * @param {React.Component|THREE.Object3D|HTMLCanvasElement} componentOrElement
	     * @return {?THREE.Object3D} The root node of this element.
	     */
	    value: function findTHREEObject(componentOrElement) {
	      if (process.env.NODE_ENV !== 'production') {
	        var owner = _ReactCurrentOwner2.default.current;
	        if (owner !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            (0, _warning2.default)(owner._warnedAboutRefsInRender, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component');
	          }
	          owner._warnedAboutRefsInRender = true;
	        }
	      }
	
	      if (componentOrElement === null) {
	        return null;
	      }
	
	      if (componentOrElement instanceof _three2.default.Object3D || componentOrElement instanceof HTMLCanvasElement) {
	        return componentOrElement;
	      }
	
	      if (_ReactInstanceMap2.default.has(componentOrElement)) {
	        var instance = _ReactInstanceMap2.default.get(componentOrElement);
	
	        instance = (0, _getHostComponentFromComposite2.default)(instance);
	
	        return instance ? _React3ComponentTree2.default.getMarkupFromInstance(instance).threeObject : null;
	      }
	
	      if (!(componentOrElement.render === null || typeof componentOrElement.render !== 'function')) {
	        if (process.env.NODE_ENV !== 'production') {
	          (0, _invariant2.default)(false, 'Component (with keys: %s) contains `render` method ' + 'but is not mounted', Object.keys(componentOrElement));
	        } else {
	          (0, _invariant2.default)(false);
	        }
	      }
	
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(false, 'Element appears to be neither ReactComponent, ' + 'a THREE.js object, nor a HTMLCanvasElement (keys: %s)', Object.keys(componentOrElement));
	      } else {
	        (0, _invariant2.default)(false);
	      }
	
	      return null;
	    }
	    // to be used by modules e.g. mouse input ( see examples )
	
	  }]);
	
	  function React3Renderer() {
	    var _this2 = this;
	
	    _classCallCheck(this, React3Renderer);
	
	    this.instantiateChild = function (childInstances, child, name, selfDebugID) {
	      // We found a component instance.
	      var keyUnique = childInstances[name] === undefined;
	      if (process.env.NODE_ENV !== 'production') {
	        if (!keyUnique) {
	          (0, _warning2.default)(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', _KeyEscapeUtils2.default.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID));
	        }
	      }
	
	      if (child !== null && keyUnique) {
	        childInstances[name] = _this2.instantiateReactComponent(child, true);
	      }
	    };
	
	    this.findNodeHandle = function (instance) {
	      var inst = _React3ComponentTree2.default.getRenderedHostOrTextFromComponent(instance);
	
	      if (!inst || !inst._threeObject) {
	        return null;
	      }
	
	      var markup = _React3ComponentTree2.default.getMarkupFromInstance(inst);
	
	      _this2._highlightCache = markup;
	      return _this2._highlightElement;
	    };
	
	    this.nativeTagToRootNodeID = function () {
	      return 0;
	    };
	
	    this.hostTagToRootNodeID = function () {
	      return 0;
	    };
	
	    this.batchedMountComponentIntoNode = function (componentInstance, container, shouldReuseMarkup, context) {
	      var transaction = _ReactUpdates2.default.ReactReconcileTransaction.getPooled(!shouldReuseMarkup);
	      transaction.perform(_this2.mountComponentIntoNode, null, componentInstance, container, transaction, shouldReuseMarkup, context);
	      _ReactUpdates2.default.ReactReconcileTransaction.release(transaction);
	    };
	
	    this.mountComponentIntoNode = function (wrapperInstance, container, transaction, shouldReuseMarkup, context) {
	      var markup = _ReactReconciler2.default.mountComponent(wrapperInstance, transaction, null, (0, _React3ContainerInfo2.default)(wrapperInstance, container), context, 0 /* parentDebugID */
	      );
	
	      wrapperInstance._renderedComponent._topLevelWrapper = wrapperInstance;
	      _this2._mountImageIntoNode(markup, container, wrapperInstance, shouldReuseMarkup, transaction);
	    };
	
	    this._instancesByReactRootID = {};
	    if (process.env.NODE_ENV !== 'production') {
	      this.rootMarkupsByReactRootID = {};
	    }
	    this.nextMountID = 1;
	    this.globalIdCounter = 1;
	    this.nextReactRootIndex = 0;
	
	    this.threeElementDescriptors = new _ElementDescriptorContainer2.default(this).descriptors;
	
	    this._highlightElement = document.createElement('div');
	    this._highlightCache = null;
	
	    if (process.env.NODE_ENV !== 'production') {
	      this._nextDebugID = 1;
	      this._debugIdPrefix = staticDebugIdHack++;
	    }
	
	    if (process.env.NODE_ENV !== 'production' || process.env.ENABLE_REACT_ADDON_HOOKS === 'true') {
	      this._agent = null;
	
	      this._onHideHighlightFromInspector = function () {
	        if (_this2._highlightCache && _this2._highlightCache.threeObject.userData.react3internalComponent) {
	          var internalComponent = _this2._highlightCache.threeObject.userData.react3internalComponent;
	
	          internalComponent.hideHighlight();
	
	          _this2._highlightCache = null;
	        }
	      };
	
	      this._onHighlightFromInspector = function (highlightInfo) {
	        if (highlightInfo.node === _this2._highlightElement) {
	          if (_this2._highlightCache && _this2._highlightCache.threeObject.userData.react3internalComponent) {
	            var internalComponent = _this2._highlightCache.threeObject.userData.react3internalComponent;
	
	            internalComponent.highlightComponent();
	          }
	        }
	      };
	
	      this._hookAgent = function (agent) {
	        _this2._agent = agent;
	
	        // agent.on('startInspecting', (...args) => {
	        //   console.log('start inspecting?', args);
	        // });
	        // agent.on('setSelection', (...args) => {
	        //   console.log('set selection?', args);
	        // });
	        // agent.on('selected', (...args) => {
	        //   console.log('selected?', args);
	        // });
	        agent.on('highlight', _this2._onHighlightFromInspector);
	        agent.on('hideHighlight', _this2._onHideHighlightFromInspector);
	        // agent.on('highlightMany', (...args) => {
	        //   console.log('highlightMany?', args);
	        // });
	      };
	
	      // Inject the runtime into a devtools global hook regardless of browser.
	      // Allows for debugging when the hook is injected on the page.
	      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
	        this._devToolsRendererDefinition = {
	          CurrentOwner: _ReactCurrentOwner2.default,
	          InstanceHandles: _ReactInstanceHandles2.default,
	          Mount: this,
	          Reconciler: _ReactReconciler2.default,
	          TextComponent: _InternalComponent2.default
	        };
	
	        var rendererListener = function rendererListener(info) {
	          _this2._reactDevtoolsRendererId = info.id;
	          _this2._rendererListenerCleanup();
	
	          delete _this2._rendererListenerCleanup;
	        };
	
	        this._rendererListenerCleanup = __REACT_DEVTOOLS_GLOBAL_HOOK__.sub('renderer', rendererListener);
	        __REACT_DEVTOOLS_GLOBAL_HOOK__.inject(this._devToolsRendererDefinition);
	
	        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.reactDevtoolsAgent !== 'undefined' && __REACT_DEVTOOLS_GLOBAL_HOOK__.reactDevtoolsAgent) {
	          var agent = __REACT_DEVTOOLS_GLOBAL_HOOK__.reactDevtoolsAgent;
	          this._hookAgent(agent);
	        } else {
	          this._devtoolsCallbackCleanup = __REACT_DEVTOOLS_GLOBAL_HOOK__.sub('react-devtools', function (agent) {
	            _this2._devtoolsCallbackCleanup();
	
	            _this2._hookAgent(agent);
	          });
	        }
	      }
	    }
	  }
	
	  /**
	   * @see ReactChildReconciler.instantiateChild
	   * Cloned because it uses
	   * @see React3Renderer.instantiateReactComponent
	   *
	   * @param childInstances
	   * @param child
	   * @param name
	   * @param selfDebugID
	   */
	
	  _createClass(React3Renderer, [{
	    key: 'instantiateChildren',
	
	    /**
	     * @see ReactChildReconciler.instantiateChildren
	     * Cloned because it uses
	     * @see React3Renderer.instantiateChild
	     *
	     * Generates a "mount image" for each of the supplied children. In the case
	     * of `ReactDOMComponent`, a mount image is a string of markup.
	     *
	     * @param {?object} nestedChildNodes Nested child maps.
	     * @param transaction
	     * @param context
	     * @param selfDebugID
	     * @return {?object} A set of child instances.
	     * @internal
	     */
	    value: function instantiateChildren(nestedChildNodes, transaction, context, selfDebugID // 0 in production and for roots
	    ) {
	      var _this3 = this;
	
	      if (nestedChildNodes === null) {
	        return null;
	      }
	
	      var childInstances = {};
	
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _traverseAllChildren2.default)(nestedChildNodes, function (childInsts, child, name) {
	          return _this3.instantiateChild(childInsts, child, name, selfDebugID);
	        }, childInstances);
	      } else {
	        (0, _traverseAllChildren2.default)(nestedChildNodes, this.instantiateChild, childInstances);
	      }
	
	      return childInstances;
	    }
	  }, {
	    key: 'containsChild',
	    value: function containsChild(container, markup) {
	      var childrenMarkup = container.userData.markup.childrenMarkup;
	      for (var i = 0; i < childrenMarkup.length; i++) {
	        if (childrenMarkup[i] === markup) {
	          return true;
	        }
	      }
	
	      return false;
	    }
	
	    // DO NOT RENAME
	    // used by react devtools!
	
	
	    // used by react devtools
	
	  }, {
	    key: '_mountImageIntoNode',
	    value: function _mountImageIntoNode(markup, container, instance, shouldReuseMarkup, transaction) {
	      // eslint-disable-line no-unused-vars
	      // TODO try to do server-side rendering for THREE
	
	      if (!container.userData) {
	        // it has to be a HTMLCanvasElement I guess?
	        (0, _invariant2.default)(container instanceof HTMLCanvasElement, 'The root container can only be a THREE.js object ' + '(with an userData property) or HTMLCanvasElement.');
	        container.userData = {
	          _createdByReact3: true
	        };
	      }
	
	      var rootImage = markup;
	
	      var rootMarkup = {
	        threeObject: container,
	        parentMarkup: null,
	        childrenMarkup: [rootImage],
	        toJSON: function toJSON() {
	          return '---MARKUP---';
	        }
	      };
	
	      Object.assign(container.userData, {
	        object3D: container,
	        toJSON: function toJSON() {
	          return '---USERDATA---';
	        },
	        markup: rootMarkup
	      });
	
	      rootImage.parentMarkup = rootMarkup;
	
	      var descriptorForChild = this.threeElementDescriptors[rootImage.elementType];
	      descriptorForChild.setParent(rootImage.threeObject, rootMarkup.threeObject);
	
	      // all objects now added can be marked as added to scene now!
	
	      rootImage.threeObject.mountedIntoRoot();
	
	      var firstChild = container.userData.markup.childrenMarkup[0];
	      _React3ComponentTree2.default.precacheMarkup(instance, firstChild);
	
	      if (process.env.NODE_ENV !== 'production') {
	        var hostInstance = _React3ComponentTree2.default.getInstanceFromMarkup(firstChild);
	        if (hostInstance._debugID !== 0) {
	          _ReactInstrumentation2.default.debugTool.onHostOperation(hostInstance._debugID, 'mount', markup.toString());
	        }
	      }
	    }
	
	    /**
	     *
	     * @param nextElement A react element
	     * @param container A canvas or a THREE.js object
	     * @param callback The callback function
	     * @returns {*}
	     */
	
	  }, {
	    key: 'render',
	    value: function render(nextElement, container, callback) {
	      return this._renderSubtreeIntoContainer(null, nextElement, container, callback);
	    }
	  }, {
	    key: 'getHostRootInstanceInContainer',
	    value: function getHostRootInstanceInContainer(container) {
	      var rootMarkup = getReactRootMarkupInContainer(container);
	      var prevHostInstance = rootMarkup && _React3ComponentTree2.default.getInstanceFromMarkup(rootMarkup);
	      return prevHostInstance && !prevHostInstance._hostParent ? prevHostInstance : null;
	    }
	  }, {
	    key: 'getTopLevelWrapperInContainer',
	    value: function getTopLevelWrapperInContainer(container) {
	      var root = this.getHostRootInstanceInContainer(container);
	      if (root) {
	        (0, _invariant2.default)(!!root._hostContainerInfo, 'Root should have native container info %s', ' but it does not');
	      }
	      return root ? root._hostContainerInfo._topLevelWrapper : null;
	    }
	  }, {
	    key: '_renderSubtreeIntoContainer',
	    value: function _renderSubtreeIntoContainer(parentComponent, nextElement, container, callback) {
	      var _this4 = this;
	
	      if (!_ReactElement2.default.isValidElement(nextElement)) {
	        if (process.env.NODE_ENV !== 'production') {
	          if (typeof nextElement === 'string') {
	            (0, _invariant2.default)(false, 'React3Renderer.render(): Invalid component element.%s', ' Instead of passing an element string, make sure to instantiate ' + 'it by passing it to React.createElement.');
	          } else if (typeof nextElement === 'function') {
	            (0, _invariant2.default)(false, 'React3Renderer.render(): Invalid component element.%s', ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.');
	          } else if (nextElement !== null && nextElement.props !== undefined) {
	            (0, _invariant2.default)(false, 'React3Renderer.render(): Invalid component element.%s', ' This may be caused by unintentionally loading two independent ' + 'copies of React.');
	          } else {
	            (0, _invariant2.default)(false, 'React3Renderer.render(): Invalid component element.');
	          }
	        } else {
	          (0, _invariant2.default)(false);
	        }
	      }
	
	      var nextWrappedElement = (0, _ReactElement2.default)(TopLevelWrapper, null, null, null, null, null, nextElement);
	
	      var nextContext = void 0;
	      if (parentComponent) {
	        var parentInst = _ReactInstanceMap2.default.get(parentComponent);
	        nextContext = parentInst._processChildContext(parentInst._context);
	      } else {
	        nextContext = _emptyObject2.default;
	      }
	
	      var prevComponent = this.getTopLevelWrapperInContainer(container);
	
	      if (prevComponent) {
	        var prevWrappedElement = prevComponent._currentElement;
	        var prevElement = prevWrappedElement.props;
	        if ((0, _shouldUpdateReactComponent2.default)(prevElement, nextElement)) {
	          var _ret = function () {
	            var publicInst = prevComponent._renderedComponent.getPublicInstance();
	            var updatedCallback = callback && function () {
	              callback.call(publicInst);
	            };
	
	            _this4._updateRootComponent(prevComponent, nextWrappedElement, nextContext, container, updatedCallback);
	
	            return {
	              v: publicInst
	            };
	          }();
	
	          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	        }
	
	        this.unmountComponentAtNode(container);
	      }
	
	      // aka first child
	      var reactRootMarkup = getReactRootMarkupInContainer(container);
	      var containerHasReactMarkup = reactRootMarkup && !!internalGetID(reactRootMarkup);
	
	      // containerHasNonRootReactChild not implemented
	
	      var shouldReuseMarkup = containerHasReactMarkup && !prevComponent;
	
	      var component = this._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, nextContext)._renderedComponent.getPublicInstance();
	
	      if (callback) {
	        callback.call(component);
	      }
	
	      return component;
	    }
	  }, {
	    key: 'dispose',
	    value: function dispose() {
	      var rootIds = Object.keys(this._instancesByReactRootID);
	
	      for (var i = 0; i < rootIds.length; ++i) {
	        this.unmountComponentAtNode(this._instancesByReactRootID[rootIds[i]].getHostMarkup().parentMarkup.threeObject);
	      }
	
	      delete this._instancesByReactRootID;
	      if (process.env.NODE_ENV !== 'production') {
	        delete this.rootMarkupsByReactRootID;
	      }
	      delete this._highlightElement;
	      this.nextMountID = 1;
	      this.nextReactRootIndex = 0;
	
	      if (process.env.NODE_ENV !== 'production' || process.env.ENABLE_REACT_ADDON_HOOKS === 'true') {
	        if (this._devtoolsCallbackCleanup) {
	          this._devtoolsCallbackCleanup();
	
	          delete this._devtoolsCallbackCleanup;
	        }
	
	        if (this._rendererListenerCleanup) {
	          this._rendererListenerCleanup();
	
	          delete this._rendererListenerCleanup;
	        }
	
	        if (this._devToolsRendererDefinition) {
	          if (this._agent) {
	            this._agent.onUnmounted(this._devToolsRendererDefinition);
	            this._agent.removeListener('highlight', this._onHighlightFromInspector);
	            this._agent.removeListener('hideHighlight', this._onHideHighlightFromInspector);
	          }
	
	          if (this._reactDevtoolsRendererId) {
	            delete __REACT_DEVTOOLS_GLOBAL_HOOK__._renderers[this._reactDevtoolsRendererId];
	            delete this._reactDevtoolsRendererId;
	          }
	
	          delete this._devToolsRendererDefinition;
	          delete this._agent;
	        }
	
	        delete this._onHighlightFromInspector;
	        delete this._onHideHighlightFromInspector;
	        delete this._hookAgent;
	      }
	    }
	  }, {
	    key: '_updateRootComponent',
	    value: function _updateRootComponent(prevComponent, nextElement, nextContext, container, callback) {
	      _ReactUpdateQueue2.default.enqueueElementInternal(prevComponent, nextElement, nextContext);
	      if (callback) {
	        _ReactUpdateQueue2.default.enqueueCallbackInternal(prevComponent, callback);
	      }
	
	      return prevComponent;
	    }
	
	    /**
	     * True if the supplied DOM node has a direct React-rendered child that is
	     * not a React root element. Useful for warning in `render`,
	     * `unmountComponentAtNode`, etc.
	     *
	     * @param {?*} container The container.
	     * @return {boolean} True if the DOM element contains a direct child that was
	     * rendered by React but is not a root element.
	     * @internal
	     */
	
	  }, {
	    key: 'hasNonRootReactChild',
	    value: function hasNonRootReactChild(container) {
	      var rootMarkup = getReactRootMarkupInContainer(container);
	      if (rootMarkup) {
	        var inst = _React3ComponentTree2.default.getInstanceFromMarkup(rootMarkup);
	        return !!(inst && inst._hostParent);
	      }
	
	      return false;
	    }
	  }, {
	    key: 'unmountComponentAtNode',
	    value: function unmountComponentAtNode(container) {
	      // Various parts of our code (such as ReactCompositeComponent's
	      // _renderValidatedComponent) assume that calls to render aren't nested;
	      // verify that that's the case. (Strictly speaking, unmounting won't cause a
	      // render but we still don't expect to be in a render call here.)
	
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _warning2.default)(_ReactCurrentOwner2.default.current === null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', _ReactCurrentOwner2.default.current && _ReactCurrentOwner2.default.current.getName() || 'ReactCompositeComponent');
	      }
	
	      var prevComponent = this.getTopLevelWrapperInContainer(container);
	      if (!prevComponent) {
	        // Check if the node being unmounted was rendered by React, but isn't a
	        // root node.
	        var containerHasNonRootReactChild = this.hasNonRootReactChild(container);
	
	        // Check if the container itself is a React root node.
	        var isContainerReactRoot = !!(container && container.userData && container.userData.markup && container.userData.markup[_idPropertyName2.default]);
	
	        if (process.env.NODE_ENV !== 'production') {
	          (0, _warning2.default)(!containerHasNonRootReactChild, 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.');
	        }
	
	        return false;
	      }
	
	      delete this._instancesByReactRootID[prevComponent._instance.rootID];
	
	      _ReactUpdates2.default.batchedUpdates(unmountComponentFromNode, prevComponent, container, false);
	
	      if (container && container.userData && container.userData._createdByReact3) {
	        delete container.userData;
	      }
	
	      return true;
	    }
	
	    /**
	     * @param {THREE.Object3D|HTMLCanvasElement} container THREE Object
	     *   or HTML Canvas Element that may contain a React component.
	     * @return {?string} A "reactRoot" ID, if a React component is rendered.
	     */
	
	  }, {
	    key: 'getReactRootID',
	    value: function getReactRootID(container) {
	      var rootMarkup = getReactRootMarkupInContainer(container);
	      return rootMarkup && this.getID(rootMarkup);
	    }
	
	    // see instantiateReactComponent.js
	    /**
	     * @see #instantiateReactComponent
	     *
	     * Cloned because it uses
	     * @see InternalComponent
	     *
	     * @param _node ( from createElement )
	     * @param {boolean} shouldHaveDebugID
	     * @return {object} A new instance of the element's constructor.
	     */
	
	  }, {
	    key: 'instantiateReactComponent',
	    value: function instantiateReactComponent(_node, shouldHaveDebugID) {
	      var instance = void 0;
	
	      var node = _node;
	
	      var isEmptyNode = node === null || node === false;
	
	      if (isEmptyNode) {
	        // Create an object3D node so that empty components can be added anywhere
	        instance = new _InternalComponent2.default(_ReactElement2.default.createElement('object3D', {
	          visible: false
	        }), this);
	        // original: instance = new ReactDOMEmptyComponent(this.instantiateReactComponent);
	      } else if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) === 'object') {
	        var _element = node;
	
	        if (!(_element && (typeof _element.type === 'function' || typeof _element.type === 'string'))) {
	          if (process.env.NODE_ENV !== 'production') {
	            if (_element.type == null) {
	              (0, _invariant2.default)(false, 'Element type is invalid:' + ' expected a string (for built-in components)' + ' or a class/function (for composite components)' + ' but got: %s.%s', _element.type, getDeclarationErrorAddendum(_element._owner));
	            } else {
	              (0, _invariant2.default)(false, 'Element type is invalid:' + ' expected a string (for built-in components)' + ' or a class/function (for composite components)' + ' but got: %s.%s', _typeof(_element.type), getDeclarationErrorAddendum(_element._owner));
	            }
	          } else if (_element.type == null) {
	            (0, _invariant2.default)(_element.type, getDeclarationErrorAddendum(_element._owner));
	          } else {
	            (0, _invariant2.default)(_typeof(_element.type), getDeclarationErrorAddendum(_element._owner));
	          }
	        }
	
	        // Special case string values
	        if (typeof _element.type === 'string') {
	          // original: instance = ReactHostComponent.createInternalComponent(element);
	          instance = new _InternalComponent2.default(_element, this);
	        } else if (isInternalComponentType(_element.type)) {
	          // This is temporarily available for custom components that are not string
	          // representations. I.e. ART. Once those are updated to use the string
	          // representation, we can drop this code path.
	          var Constructor = _element.type;
	
	          instance = new Constructor(_element);
	
	          // We renamed this. Allow the old name for compat. :(
	          if (!instance.getHostNode) {
	            instance.getHostNode = instance.getNativeNode;
	          }
	        } else {
	          instance = new _React3CompositeComponentWrapper2.default(_element, this);
	        }
	      } else if (typeof node === 'string' || typeof node === 'number') {
	        // TODO create instance for text
	        if (process.env.NODE_ENV !== 'production') {
	          (0, _invariant2.default)(false, 'Encountered invalid React node of type %s : %s', typeof node === 'undefined' ? 'undefined' : _typeof(node), node);
	        } else {
	          (0, _invariant2.default)(false);
	        }
	      } else if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(false, 'Encountered invalid React node of type %s', typeof element === 'undefined' ? 'undefined' : _typeof(element));
	      } else {
	        (0, _invariant2.default)(false);
	      }
	
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _warning2.default)(typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.getHostMarkup === 'function' && typeof instance.unmountComponent === 'function', 'Only React 3 Components can be mounted.');
	      }
	
	      // These two fields are used by the DOM and ART diffing algorithms
	      // respectively. Instead of using expandos on components, we should be
	      // storing the state needed by the diffing algorithms elsewhere.
	      instance._mountIndex = 0;
	      instance._mountImage = null;
	
	      if (process.env.NODE_ENV !== 'production') {
	        if (shouldHaveDebugID) {
	          var debugID = 'r3r' + this._debugIdPrefix + '-' + this._nextDebugID++;
	          instance._debugID = debugID;
	        } else {
	          instance._debugID = 0;
	        }
	      }
	
	      // Internal instances should fully constructed at this point, so they should
	      // not get any new fields added to them at this point.
	      if (process.env.NODE_ENV !== 'production') {
	        if (Object.preventExtensions) {
	          Object.preventExtensions(instance);
	        }
	      }
	
	      return instance;
	    }
	
	    /**
	     * @see ReactMount._renderNewRootComponent
	     *
	     * Cloned because it uses
	     * @see React3Renderer.instantiateReactComponent
	     *
	     * @param nextElement
	     * @param {THREE.Object3D | HTMLCanvasElement} container
	     * @param shouldReuseMarkup
	     * @param context
	     * @returns {*}
	     * @private
	     */
	
	  }, {
	    key: '_renderNewRootComponent',
	    value: function _renderNewRootComponent(nextElement, container, shouldReuseMarkup, context) {
	      // Various parts of our code (such as ReactCompositeComponent's
	      // _renderValidatedComponent) assume that calls to render aren't nested;
	      // verify that that's the case.
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _warning2.default)(_ReactCurrentOwner2.default.current === null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', _ReactCurrentOwner2.default.current && _ReactCurrentOwner2.default.current.getName() || 'ReactCompositeComponent');
	      }
	
	      var componentInstance = this.instantiateReactComponent(nextElement, false);
	
	      if (!_ReactUpdates2.default.ReactReconcileTransaction) {
	        // If the ReactReconcileTransaction has not been injected
	        // let's just use the defaults from ReactMount.
	        _ReactInjection2.default.Updates.injectReconcileTransaction(_ReactReconcileTransaction2.default);
	        _ReactInjection2.default.Updates.injectBatchingStrategy(_ReactDefaultBatchingStrategy2.default);
	      }
	
	      var devToolRemoved = void 0;
	      if (process.env.NODE_ENV !== 'production') {
	        devToolRemoved = (0, _removeDevTool2.default)();
	      }
	
	      // The initial render is synchronous but any updates that happen during
	      // rendering, in componentWillMount or componentDidMount, will be batched
	      // according to the current batching strategy.
	
	      _ReactUpdates2.default.batchedUpdates(this.batchedMountComponentIntoNode, componentInstance, container, shouldReuseMarkup, context);
	
	      if (process.env.NODE_ENV !== 'production') {
	        if (devToolRemoved) {
	          _removeDevTool2.default.restore();
	        }
	      }
	
	      var wrapperID = componentInstance._instance.rootID;
	      this._instancesByReactRootID[wrapperID] = componentInstance;
	
	      return componentInstance;
	    }
	
	    /**
	     * Batched mount.
	     *
	     * @param {ReactComponent} componentInstance The instance to mount.
	     * @param {*} container Container.
	     * @param {boolean} shouldReuseMarkup If true, do not insert markup
	     * @param {*} context que?
	     */
	
	    /**
	     * @see #mountComponentIntoNode
	     *
	     * Mounts this component and inserts it into the DOM.
	     *
	     * @param {ReactComponent} wrapperInstance The instance to mount.
	     * @param {*} container container to mount into.
	     * @param {ReactReconcileTransaction} transaction
	     * @param {boolean} shouldReuseMarkup If true, do not insert markup
	     * @param {*} context
	     */
	
	  }, {
	    key: 'createReactRootID',
	    value: function createReactRootID() {
	      return this.nextReactRootIndex++;
	    }
	  }, {
	    key: 'getID',
	    value: function getID(markup) {
	      return internalGetID(markup);
	    }
	  }]);
	
	  return React3Renderer;
	}(), _class2.eventDispatcher = new _EventDispatcher2.default(), _temp2);
	
	module.exports = React3Renderer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 654:
/***/ function(module, exports) {

	"use strict";
	
	function React3ContainerInfo(topLevelWrapper, instance) {
	  // eslint-disable-line no-unused-vars
	  var info = {
	    _topLevelWrapper: topLevelWrapper,
	    _idCounter: 1
	  };
	
	  return info;
	}
	
	module.exports = React3ContainerInfo;

/***/ },

/***/ 655:
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var EventDispatcher = function () {
	  function EventDispatcher() {
	    _classCallCheck(this, EventDispatcher);
	  }
	
	  _createClass(EventDispatcher, [{
	    key: "dispatchEvent",
	    value: function dispatchEvent(threeObject, eventName) {
	      var eventCallbacks = threeObject.userData._eventCallbacks;
	      var callback = eventCallbacks && eventCallbacks[eventName];
	
	      if (callback) {
	        for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	          params[_key - 2] = arguments[_key];
	        }
	
	        callback.apply(undefined, params);
	      }
	    }
	  }]);
	
	  return EventDispatcher;
	}();
	
	module.exports = EventDispatcher;

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _class, _temp;
	
	var _ReactReconciler = __webpack_require__(607);
	
	var _ReactReconciler2 = _interopRequireDefault(_ReactReconciler);
	
	var _ReactMultiChild = __webpack_require__(657);
	
	var _ReactMultiChild2 = _interopRequireDefault(_ReactMultiChild);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _emptyFunction = __webpack_require__(579);
	
	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
	
	var _flattenChildren = __webpack_require__(662);
	
	var _flattenChildren2 = _interopRequireDefault(_flattenChildren);
	
	var _ReactCurrentOwner = __webpack_require__(577);
	
	var _ReactCurrentOwner2 = _interopRequireDefault(_ReactCurrentOwner);
	
	var _ReactInstrumentation = __webpack_require__(610);
	
	var _ReactInstrumentation2 = _interopRequireDefault(_ReactInstrumentation);
	
	var _React3ComponentFlags = __webpack_require__(663);
	
	var _React3ComponentFlags2 = _interopRequireDefault(_React3ComponentFlags);
	
	var _idPropertyName = __webpack_require__(664);
	
	var _idPropertyName2 = _interopRequireDefault(_idPropertyName);
	
	var _React3CompositeComponentWrapper = __webpack_require__(665);
	
	var _React3CompositeComponentWrapper2 = _interopRequireDefault(_React3CompositeComponentWrapper);
	
	var _React3ComponentTree = __webpack_require__(669);
	
	var _React3ComponentTree2 = _interopRequireDefault(_React3ComponentTree);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function processChildContext(context) {
	  return context;
	}
	
	var RemountTrigger = function RemountTrigger() {
	  var _this = this;
	
	  _classCallCheck(this, RemountTrigger);
	
	  this.wantRemount = false;
	  this.onTrigger = function onTrigger() {};
	
	  this.trigger = function () {
	    _this.wantRemount = true;
	
	    _this.onTrigger();
	  };
	};
	
	var registrationNameModules = {};
	
	function deleteListener(rootNodeID, propKey) {
	  console.log('deleteListener', rootNodeID, propKey); // eslint-disable-line
	  debugger; // eslint-disable-line
	}
	
	function enqueuePutListener(rootNodeID, propKey, nextProp, transaction) {
	  console.log('enqueuePutListener', rootNodeID, propKey, nextProp, transaction); // eslint-disable-line
	  debugger; // eslint-disable-line
	}
	
	function _arrayMove(array, oldIndex, newIndex) {
	  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
	}
	
	var setChildrenForInstrumentation = _emptyFunction2.default;
	var setContentChildForInstrumentation = _emptyFunction2.default;
	var getDebugID = void 0;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    /* eslint-disable global-require */
	
	    var ReactInstanceMap = __webpack_require__(605);
	
	    /* eslint-enable global-require */
	
	    getDebugID = function _(inst) {
	      if (!inst._debugID) {
	        // Check for ART-like instances. TODO: This is silly/gross.
	        var internal = ReactInstanceMap.get(inst);
	        if (internal) {
	          return internal._debugID;
	        }
	      }
	      return inst._debugID;
	    };
	
	    setChildrenForInstrumentation = function _(children) {
	      _ReactInstrumentation2.default.debugTool.onSetChildren(this._debugID, children ? Object.keys(children).map(function (key) {
	        return children[key]._debugID;
	      }) : []);
	    };
	
	    setContentChildForInstrumentation = function _(content) {
	      var hasExistingContent = this._contentDebugID !== null && this._contentDebugID !== undefined;
	      var debugID = this._debugID;
	      // This ID represents the inlined child that has no backing instance:
	      var contentDebugID = 'CDID-' + debugID;
	
	      if (content == null) {
	        if (hasExistingContent) {
	          _ReactInstrumentation2.default.debugTool.onUnmountComponent(this._contentDebugID);
	        }
	        this._contentDebugID = null;
	        return;
	      }
	
	      this._contentDebugID = contentDebugID;
	      if (hasExistingContent) {
	        _ReactInstrumentation2.default.debugTool.onBeforeUpdateComponent(contentDebugID, content);
	        _ReactInstrumentation2.default.debugTool.onUpdateComponent(contentDebugID);
	      } else {
	        _ReactInstrumentation2.default.debugTool.onBeforeMountComponent(contentDebugID, content, debugID);
	        _ReactInstrumentation2.default.debugTool.onMountComponent(contentDebugID);
	        _ReactInstrumentation2.default.debugTool.onSetChildren(debugID, [contentDebugID]);
	      }
	    };
	  })();
	}
	
	var getThreeObjectFromMountImage = function getThreeObjectFromMountImage(img) {
	  return img.threeObject;
	};
	
	var ReactMultiChildMixin = _ReactMultiChild2.default.Mixin;
	
	// TODO sync ReactDOMComponent
	var InternalComponent = (_temp = _class = function () {
	  function InternalComponent(element, react3RendererInstance) {
	    var _this2 = this;
	
	    _classCallCheck(this, InternalComponent);
	
	    this.updateChildren = ReactMultiChildMixin.updateChildren.bind(this);
	    this._mountChildAtIndex = ReactMultiChildMixin._mountChildAtIndex.bind(this);
	    this._unmountChild = ReactMultiChildMixin._unmountChild.bind(this);
	    this.unmountChildren = ReactMultiChildMixin.unmountChildren.bind(this);
	
	    this._currentElement = element;
	    /**
	     * @type React3Renderer
	     */
	    this._react3RendererInstance = react3RendererInstance;
	
	    this._elementType = element.type; // _tag
	    this._renderedChildren = [];
	    this._hostMarkup = null; // _hostNode
	    this._hostParent = null;
	    this._rootNodeID = 0;
	    this._hostID = 0; // _domID
	    this._hostContainerInfo = null;
	    this._threeObject = null;
	    this._topLevelWrapper = null;
	    this._markup = null;
	    this._nodeWithLegacyProperties = null;
	    this._forceRemountOfComponent = false;
	    this._flags = 0;
	
	    if (process.env.NODE_ENV !== 'production') {
	      this._ancestorInfo = null;
	
	      setContentChildForInstrumentation.call(this, null);
	    }
	
	    this.threeElementDescriptor = react3RendererInstance.threeElementDescriptors[element.type];
	    if (!this.threeElementDescriptor) {
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(false, 'No constructor for ' + element.type);
	      } else {
	        (0, _invariant2.default)(false);
	      }
	    }
	
	    if (process.env.NODE_ENV !== 'production' || process.env.ENABLE_REACT_ADDON_HOOKS === 'true') {
	      this.highlightComponent = function () {
	        _this2.threeElementDescriptor.highlight(_this2._threeObject);
	      };
	
	      this.hideHighlight = function () {
	        _this2.threeElementDescriptor.hideHighlight(_this2._threeObject);
	      };
	    }
	
	    this.remountTrigger = new RemountTrigger();
	
	    this.remountTrigger.onTrigger = function () {
	      _this2._forceRemountOfComponent = true;
	    };
	  }
	
	  _createClass(InternalComponent, [{
	    key: 'getHostMarkup',
	    value: function getHostMarkup() {
	      return this._markup;
	    }
	  }, {
	    key: 'getHostNode',
	    value: function getHostNode() {
	      // console.warn('host node?'); // eslint-disable-line no-console
	      return this._markup;
	    }
	
	    /**
	     * Generates root tag markup then recurses. This method has side effects and
	     * is not idempotent.
	     *
	     * @internal
	     * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	     * @param {?InternalComponent} hostParent the containing DOM component instance
	     * @param {?React3ContainerInfo} hostContainerInfo info about the host container
	     * @param {object} context
	     * @return {object} The computed markup.
	     */
	
	  }, {
	    key: 'mountComponent',
	    value: function mountComponent(transaction, hostParent, hostContainerInfo, context) {
	      var _markup;
	
	      this._rootNodeID = this._react3RendererInstance.globalIdCounter++;
	      this._hostID = hostContainerInfo._idCounter++;
	      this._hostParent = hostParent;
	      this._hostContainerInfo = hostContainerInfo;
	
	      var element = this._currentElement;
	
	      if (process.env.NODE_ENV !== 'production') {
	        this.threeElementDescriptor.checkPropTypes(element, this._currentElement._owner, this._debugID, element.props);
	      }
	
	      this._threeObject = this.threeElementDescriptor.construct(element.props);
	      this.threeElementDescriptor.applyInitialProps(this._threeObject, element.props);
	
	      this.threeElementDescriptor.placeRemountTrigger(this._threeObject, this.remountTrigger.trigger);
	
	      // create initial children
	      var childrenToUse = element.props.children;
	
	      var mountImages = void 0;
	      if (childrenToUse) {
	        mountImages = this.mountChildren(childrenToUse, transaction, context);
	      } else {
	        mountImages = [];
	      }
	
	      var markup = (_markup = {}, _defineProperty(_markup, _idPropertyName2.default, this._hostID), _defineProperty(_markup, '_rootInstance', null), _defineProperty(_markup, 'elementType', element.type), _defineProperty(_markup, 'threeObject', this._threeObject), _defineProperty(_markup, 'parentMarkup', null), _defineProperty(_markup, 'childrenMarkup', mountImages), _defineProperty(_markup, 'toJSON', function toJSON() {
	        return '---MARKUP---';
	      }), _markup);
	
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(!!this._threeObject.userData, 'No userdata present in threeobject for %s', element.type);
	      } else {
	        (0, _invariant2.default)(!!this._threeObject.userData);
	      }
	
	      Object.assign(this._threeObject.userData, {
	        object3D: this._threeObject,
	        react3internalComponent: this, // used for highlighting etc
	        toJSON: function toJSON() {
	          return '---USERDATA---';
	        },
	        markup: markup
	      });
	
	      var threeElementDescriptors = this._react3RendererInstance.threeElementDescriptors;
	
	      if (mountImages && mountImages.length > 0) {
	        this.threeElementDescriptor.addChildren(this._threeObject, mountImages.map(getThreeObjectFromMountImage));
	
	        for (var i = 0; i < mountImages.length; ++i) {
	          var mountImage = mountImages[i];
	
	          var descriptorForChild = threeElementDescriptors[mountImage.elementType];
	
	          mountImage.parentMarkup = markup;
	
	          descriptorForChild.setParent(mountImage.threeObject, this._threeObject);
	        }
	      }
	
	      this._markup = markup;
	
	      _React3ComponentTree2.default.precacheMarkup(this, this._markup);
	      this._flags |= _React3ComponentFlags2.default.hasCachedChildMarkups;
	
	      return markup;
	    }
	
	    /**
	     * @see ReactMultiChild._reconcilerInstantiateChildren
	     * Cloned because it uses
	     * @see React3Renderer.instantiateChildren
	     *
	     * @param nestedChildren
	     * @param transaction
	     * @param context
	     * @returns {*}
	     * @private
	     */
	
	  }, {
	    key: '_reconcilerInstantiateChildren',
	    value: function _reconcilerInstantiateChildren(nestedChildren, transaction, context) {
	      if (process.env.NODE_ENV !== 'production') {
	        var selfDebugID = getDebugID(this);
	
	        if (this._currentElement) {
	          var previousCurrent = _ReactCurrentOwner2.default.current;
	
	          try {
	            _ReactCurrentOwner2.default.current = this._currentElement._owner;
	            return this._react3RendererInstance.instantiateChildren(nestedChildren, transaction, context, selfDebugID);
	          } finally {
	            _ReactCurrentOwner2.default.current = previousCurrent;
	          }
	        }
	      }
	      return this._react3RendererInstance.instantiateChildren(nestedChildren, transaction, context, 0);
	    }
	
	    /**
	     * @see ReactMultiChild._reconcilerUpdateChildren
	     * Cloned because it uses
	     * @see React3Renderer.updateChildren
	     *
	     * @param prevChildren
	     * @param nextNestedChildrenElements
	     * @param mountImages
	     * @param removedMarkups
	     * @param transaction
	     * @param context
	     * @returns {?Object}
	     * @private
	     */
	
	  }, {
	    key: '_reconcilerUpdateChildren',
	    value: function _reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, mountImages, removedMarkups, transaction, context) {
	      var nextChildren = void 0;
	      var selfDebugID = 0;
	
	      if (process.env.NODE_ENV !== 'production') {
	        selfDebugID = getDebugID(this);
	
	        if (this._currentElement) {
	          var previousCurrent = _ReactCurrentOwner2.default.current;
	
	          try {
	            _ReactCurrentOwner2.default.current = this._currentElement._owner;
	            nextChildren = (0, _flattenChildren2.default)(nextNestedChildrenElements, selfDebugID);
	          } finally {
	            _ReactCurrentOwner2.default.current = previousCurrent;
	          }
	
	          this._react3RendererInstance.updateChildren(prevChildren, nextChildren, mountImages, removedMarkups, transaction, this, this._hostContainerInfo, context, selfDebugID);
	
	          return nextChildren;
	        }
	      }
	
	      nextChildren = (0, _flattenChildren2.default)(nextNestedChildrenElements, selfDebugID);
	
	      this._react3RendererInstance.updateChildren(prevChildren, nextChildren, mountImages, removedMarkups, transaction, this, this._hostContainerInfo, context, selfDebugID);
	
	      return nextChildren;
	    }
	
	    /**
	     * @see ReactMultiChild.mountChildren
	     *
	     * Generates a "mount image" for each of the supplied children. In the case
	     * of `ReactDOMComponent`, a mount image is a string of markup.
	     *
	     * @param {?object} nestedChildren Nested child maps.
	     * @param transaction
	     * @param context
	     * @return {array} An array of mounted representations.
	     * @internal
	     */
	
	  }, {
	    key: 'mountChildren',
	    value: function mountChildren(nestedChildren, transaction, context) {
	      var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
	      this._renderedChildren = children;
	
	      var mountImages = [];
	      var index = 0;
	
	      if (children) {
	        var childrenNames = Object.keys(children);
	        for (var i = 0; i < childrenNames.length; ++i) {
	          var name = childrenNames[i];
	          var child = children[name];
	          var selfDebugID = 0;
	
	          if (process.env.NODE_ENV !== 'production') {
	            selfDebugID = getDebugID(this);
	          }
	
	          var mountImage = _ReactReconciler2.default.mountComponent(child, transaction, this, this._hostContainerInfo, context, selfDebugID);
	
	          // const mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
	          child._mountIndex = index;
	          mountImages.push(mountImage);
	          index++;
	        }
	      }
	
	      if (process.env.NODE_ENV !== 'production') {
	        setChildrenForInstrumentation.call(this, children);
	      }
	
	      return mountImages;
	    }
	  }, {
	    key: 'moveChild',
	    value: function moveChild(child, toIndex, lastIndex) {
	      if (child._mountIndex === toIndex) {
	        return;
	      }
	
	      this.threeElementDescriptor.moveChild(this._threeObject, child._threeObject, toIndex, child._mountIndex);
	
	      var markup = this._markup;
	
	      _arrayMove(markup.childrenMarkup, lastIndex, toIndex);
	    }
	  }, {
	    key: 'receiveComponent',
	    value: function receiveComponent(nextElement, transaction, context) {
	      // console.log('receive component');
	
	      var prevElement = this._currentElement;
	      this._currentElement = nextElement;
	
	      this.updateComponent(transaction, prevElement, nextElement, context);
	
	      if (this._forceRemountOfComponent) {
	        this._currentElement = null;
	      }
	    }
	
	    /**
	     * @see ReactDOMComponent.updateComponent
	     *
	     * Updates a DOM component after it has already been allocated and
	     * attached to the DOM. Reconciles the root DOM node, then recurses.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @param {ReactElement} prevElement
	     * @param {ReactElement} nextElement
	     * @param context
	     * @internal
	     * @overridable
	     */
	
	  }, {
	    key: 'updateComponent',
	    value: function updateComponent(transaction, prevElement, nextElement, context) {
	      var lastProps = prevElement.props;
	      var nextProps = this._currentElement.props;
	
	      if (prevElement.type !== nextElement.type) {
	        if (process.env.NODE_ENV !== 'production') {
	          (0, _invariant2.default)(false, 'The component type changed unexpectedly');
	        } else {
	          (0, _invariant2.default)(false);
	        }
	      }
	
	      this._updateObjectProperties(lastProps, nextProps, transaction, context);
	      if (!this._forceRemountOfComponent) {
	        this._updateChildrenObjects(nextProps, transaction, processChildContext(context, this));
	      }
	    }
	
	    // see _updateDOMChildren
	
	  }, {
	    key: '_updateChildrenObjects',
	    value: function _updateChildrenObjects(nextProps, transaction, context) {
	      var nextChildren = nextProps.children || null;
	
	      if (process.env.NODE_ENV !== 'production') {
	        setContentChildForInstrumentation.call(this, null);
	      }
	
	      this.updateChildren(nextChildren, transaction, context);
	    }
	
	    // original: _updateDOMProperties
	
	  }, {
	    key: '_updateObjectProperties',
	    value: function _updateObjectProperties(lastProps, nextProps, transaction) {
	      var remountTrigger = this.remountTrigger;
	
	      remountTrigger.wantRemount = false;
	
	      this.threeElementDescriptor.beginPropertyUpdates(this._threeObject);
	
	      if (process.env.NODE_ENV !== 'production') {
	        this.threeElementDescriptor.checkPropTypes(this._currentElement, this._currentElement._owner, this._debugID, nextProps);
	      }
	
	      var lastPropKeys = Object.keys(lastProps);
	
	      // https://jsperf.com/object-keys-vs-for-in-with-closure/3
	      for (var i = 0; i < lastPropKeys.length; ++i) {
	        var propKey = lastPropKeys[i];
	
	        if (nextProps.hasOwnProperty(propKey)) {
	          continue;
	        }
	
	        if (propKey === 'children') {
	          continue;
	        }
	
	        if (remountTrigger.wantRemount) {
	          break;
	        }
	
	        if (registrationNameModules.hasOwnProperty(propKey)) {
	          if (lastProps[propKey]) {
	            // Only call deleteListener if there was a listener previously or
	            // else willDeleteListener gets called when there wasn't actually a
	            // listener (e.g., onClick={null})
	            deleteListener(this._rootNodeID, propKey);
	          }
	        } else {
	          this.threeElementDescriptor.deleteProperty(this._threeObject, propKey);
	        }
	      }
	
	      var nextPropKeys = Object.keys(nextProps);
	
	      for (var _i = 0; _i < nextPropKeys.length; ++_i) {
	        var _propKey = nextPropKeys[_i];
	
	        if (_propKey === 'children') {
	          continue;
	        }
	
	        if (remountTrigger.wantRemount) {
	          break;
	        }
	
	        var nextProp = nextProps[_propKey];
	        var lastProp = lastProps[_propKey];
	
	        if (nextProp === lastProp) {
	          continue;
	        }
	
	        if (registrationNameModules.hasOwnProperty(_propKey)) {
	          if (nextProp) {
	            enqueuePutListener(this._rootNodeID, _propKey, nextProp, transaction);
	          } else if (lastProp) {
	            deleteListener(this._rootNodeID, _propKey);
	          }
	        } else {
	          this.threeElementDescriptor.updateProperty(this._threeObject, _propKey, nextProp);
	        }
	      }
	
	      this.threeElementDescriptor.completePropertyUpdates(this._threeObject);
	    }
	
	    /**
	     * @see ReactDOMComponent.Mixin.unmountComponent
	     */
	
	  }, {
	    key: 'unmountComponent',
	    value: function unmountComponent(safely) {
	      if (this._threeObject !== null) {
	        this.threeElementDescriptor.componentWillUnmount(this._threeObject);
	      }
	
	      this.unmountChildren(safely);
	      _React3ComponentTree2.default.uncacheMarkup(this);
	
	      if (this._threeObject !== null) {
	        this.threeElementDescriptor.unmount(this._threeObject);
	        // delete this._threeObject.userData.markup;
	      }
	
	      this._markup = null;
	      this._rootNodeID = 0;
	
	      if (this._nodeWithLegacyProperties) {
	        var node = this._nodeWithLegacyProperties;
	        node._reactInternalComponent = null;
	        this._nodeWithLegacyProperties = null;
	      }
	
	      if (process.env.NODE_ENV !== 'production') {
	        setContentChildForInstrumentation.call(this, null);
	      }
	    }
	  }, {
	    key: 'emptyJson',
	    value: function emptyJson() {
	      debugger; // eslint-disable-line
	      return '...';
	    }
	  }, {
	    key: 'getPublicInstance',
	    value: function getPublicInstance() {
	      return this._markup.threeObject;
	    }
	
	    /**
	     * @see ReactMultiChildMixin._updateChildren
	     *
	     * Improve performance by isolating this hot code path from the try/catch
	     * block in `updateChildren`.
	     *
	     * @param {?object} nextNestedChildrenElements Nested child maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @param {any} context
	     * @final
	     * @protected
	     */
	
	  }, {
	    key: '_updateChildren',
	    value: function _updateChildren(nextNestedChildrenElements, transaction, context) {
	      var prevChildren = this._renderedChildren;
	      var removedMarkups = {};
	      var mountImages = [];
	      var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, mountImages, removedMarkups, transaction, context);
	
	      if (!nextChildren && !prevChildren) {
	        return;
	      }
	
	      var remountTrigger = this.remountTrigger;
	
	      remountTrigger.wantRemount = false;
	
	      this.threeElementDescriptor.beginChildUpdates(this._threeObject);
	
	      // `nextIndex` will increment for each child in `nextChildren`, but
	      // `lastIndex` will be the last index visited in `prevChildren`.
	      var nextIndex = 0;
	      var lastIndex = 0;
	      // `nextMountIndex` will increment for each newly mounted child.
	      var nextMountIndex = 0;
	
	      if (nextChildren) {
	        var nextChildrenNames = Object.keys(nextChildren);
	
	        for (var i = 0; i < nextChildrenNames.length; ++i) {
	          var childName = nextChildrenNames[i];
	
	          if (remountTrigger.wantRemount) {
	            // This component will be remounted, (see extrude geometry)
	            // No need to update children any more as they will also be remounted!
	            continue;
	          }
	
	          var prevChild = prevChildren && prevChildren[childName];
	          var nextChild = nextChildren[childName];
	
	          if (prevChild === nextChild) {
	            this.moveChild(prevChild, nextIndex, lastIndex);
	            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	            prevChild._mountIndex = nextIndex;
	          } else {
	            if (prevChild) {
	              // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
	              lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	
	              var removedChildMarkup = removedMarkups[childName];
	
	              // handle removal here to allow replacing of components that are expected to be present
	              // only once in the parent
	              (0, _invariant2.default)(!!removedChildMarkup, 'Removed markup map should contain this child');
	
	              delete removedMarkups[childName];
	
	              this._unmountChild(prevChild, removedChildMarkup);
	            }
	
	            if (!remountTrigger.wantRemount) {
	              // The remount can be triggered by unmountChild as well (see extrude geometry)
	
	              // The child must be instantiated before it's mounted.
	              this._mountChildAtIndex(nextChild, mountImages[nextMountIndex], null, nextIndex, transaction, context);
	
	              nextMountIndex++;
	            }
	          }
	
	          nextIndex++;
	        }
	      }
	
	      var removedMarkupNames = Object.keys(removedMarkups);
	
	      for (var _i2 = 0; _i2 < removedMarkupNames.length; ++_i2) {
	        var removedMarkupName = removedMarkupNames[_i2];
	
	        this._unmountChild(prevChildren[removedMarkupName], removedMarkups[removedMarkupName]);
	      }
	
	      this._renderedChildren = nextChildren;
	
	      if (process.env.NODE_ENV !== 'production') {
	        setChildrenForInstrumentation.call(this, nextChildren);
	      }
	
	      this.threeElementDescriptor.completeChildUpdates(this._threeObject);
	    }
	
	    // afterNode unused
	
	  }, {
	    key: 'createChild',
	    value: function createChild(child, afterNode, mountImage) {
	      var mountIndex = child._mountIndex;
	
	      this._markup.childrenMarkup.splice(mountIndex, 0, mountImage);
	      mountImage.parentMarkup = this._markup;
	
	      this.threeElementDescriptor.addChild(this._threeObject, mountImage.threeObject, mountIndex);
	
	      var descriptorForChild = this._react3RendererInstance.threeElementDescriptors[mountImage.elementType];
	
	      descriptorForChild.setParent(mountImage.threeObject, this._threeObject);
	    }
	
	    /**
	     * Removes a child component.
	     *
	     * @param {ReactComponent} child Child to remove.
	     * @param {*} markup The markup for the child.
	     * @protected
	     */
	
	  }, {
	    key: 'removeChild',
	    value: function removeChild(child, markup) {
	      // eslint-disable-line no-unused-vars
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(!!markup && !!markup.threeObject, 'The child markup to replace has no threeObject');
	      }
	
	      this.threeElementDescriptor.removeChild(this._threeObject, markup.threeObject);
	
	      if (child instanceof InternalComponent) {
	        child.threeElementDescriptor.removedFromParent(markup.threeObject);
	      } else if (child instanceof _React3CompositeComponentWrapper2.default) {
	        markup.threeObject.userData.react3internalComponent.threeElementDescriptor.removedFromParent(markup.threeObject);
	      } else if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(false, 'Cannot remove child because it is not a known component type');
	      } else {
	        (0, _invariant2.default)(false);
	      }
	
	      var childrenMarkup = this._markup.childrenMarkup;
	
	      for (var i = 0; i < childrenMarkup.length; i++) {
	        var childMarkup = childrenMarkup[i];
	
	        if (childMarkup.threeObject === markup.threeObject) {
	          childrenMarkup.splice(i, 1);
	
	          delete childMarkup.parentMarkup;
	          return;
	        }
	      }
	
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(false, 'Trying to remove a child that is not mounted');
	      } else {
	        (0, _invariant2.default)(false);
	      }
	    }
	  }]);
	
	  return InternalComponent;
	}(), _class.displayName = 'React3Component', _temp);
	
	module.exports = InternalComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 663:
/***/ function(module, exports) {

	"use strict";
	
	// see ReactDOMComponentFlags
	
	var React3ComponentFlags = {
	  hasCachedChildMarkups: 1 << 0
	};
	
	module.exports = React3ComponentFlags;

/***/ },

/***/ 664:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = 'data-reactid';

/***/ },

/***/ 665:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _ReactCompositeComponent = __webpack_require__(661);
	
	var _ReactCompositeComponent2 = _interopRequireDefault(_ReactCompositeComponent);
	
	var _ReactElement = __webpack_require__(576);
	
	var _ReactElement2 = _interopRequireDefault(_ReactElement);
	
	var _ReactCurrentOwner = __webpack_require__(577);
	
	var _ReactCurrentOwner2 = _interopRequireDefault(_ReactCurrentOwner);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ReactInstanceMap = __webpack_require__(605);
	
	var _ReactInstanceMap2 = _interopRequireDefault(_ReactInstanceMap);
	
	var _ReactInstrumentation = __webpack_require__(610);
	
	var _ReactInstrumentation2 = _interopRequireDefault(_ReactInstrumentation);
	
	var _emptyObject = __webpack_require__(586);
	
	var _emptyObject2 = _interopRequireDefault(_emptyObject);
	
	var _warning = __webpack_require__(578);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _removeDevTool = __webpack_require__(666);
	
	var _removeDevTool2 = _interopRequireDefault(_removeDevTool);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var ReactCompositeComponentMixinImpl = function ReactCompositeComponentMixinImpl() {
	  _classCallCheck(this, ReactCompositeComponentMixinImpl);
	};
	
	ReactCompositeComponentMixinImpl.prototype = _extends({}, ReactCompositeComponentMixinImpl.prototype, _ReactCompositeComponent2.default.Mixin);
	
	function warnIfInvalidElement(Component, element) {
	  if (process.env.NODE_ENV !== 'production') {
	    (0, _warning2.default)(element === null || element === false || _ReactElement2.default.isValidElement(element), '%s(...): A valid React element (or null) must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component');
	  }
	}
	
	var CompositeTypes = {
	  ImpureClass: 0,
	  PureClass: 1,
	  StatelessFunctional: 2
	};
	
	function shouldConstruct(Component) {
	  return !!Component.prototype && Component.prototype.isReactComponent;
	}
	
	function isPureComponent(Component) {
	  return !!(Component.prototype && Component.prototype.isPureReactComponent);
	}
	
	var invokeComponentDidMountWithTimer = void 0;
	
	if (process.env.NODE_ENV !== 'production') {
	  invokeComponentDidMountWithTimer = function _invokeComponentDidMountWithTimer() {
	    var publicInstance = this._instance;
	    if (this._debugID !== 0) {
	      _ReactInstrumentation2.default.debugTool.onBeginLifeCycleTimer(this._debugID, 'componentDidMount');
	    }
	    publicInstance.componentDidMount();
	    if (this._debugID !== 0) {
	      _ReactInstrumentation2.default.debugTool.onEndLifeCycleTimer(this._debugID, 'componentDidMount');
	    }
	  };
	}
	
	var StatelessComponent = function () {
	  function StatelessComponent() {
	    _classCallCheck(this, StatelessComponent);
	  }
	
	  _createClass(StatelessComponent, [{
	    key: 'render',
	    value: function render() {
	      var componentCreator = _ReactInstanceMap2.default.get(this)._currentElement.type;
	      var element = componentCreator(this.props, this.context, this.updater);
	      warnIfInvalidElement(componentCreator, element);
	      return element;
	    }
	  }]);
	
	  return StatelessComponent;
	}();
	
	var React3CompositeComponentWrapper = function (_ReactCompositeCompon) {
	  _inherits(React3CompositeComponentWrapper, _ReactCompositeCompon);
	
	  function React3CompositeComponentWrapper(element, react3RendererInstance) {
	    _classCallCheck(this, React3CompositeComponentWrapper);
	
	    var _this = _possibleConstructorReturn(this, (React3CompositeComponentWrapper.__proto__ || Object.getPrototypeOf(React3CompositeComponentWrapper)).call(this));
	
	    _this._react3RendererInstance = react3RendererInstance;
	
	    _this.construct(element);
	    return _this;
	  }
	
	  _createClass(React3CompositeComponentWrapper, [{
	    key: 'getHostMarkup',
	    value: function getHostMarkup() {
	      return _get(React3CompositeComponentWrapper.prototype.__proto__ || Object.getPrototypeOf(React3CompositeComponentWrapper.prototype), 'getHostNode', this).call(this);
	    }
	  }, {
	    key: 'construct',
	    value: function construct(element) {
	      _get(React3CompositeComponentWrapper.prototype.__proto__ || Object.getPrototypeOf(React3CompositeComponentWrapper.prototype), 'construct', this).call(this, element);
	
	      this._threeObject = null;
	    }
	
	    /**
	     * @see ReactCompositeComponent.
	     *
	     * Cloned because it needs to set _threeObject and remove dev tool
	     *
	     * Call the component's `render` method and update the DOM accordingly.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @param context
	     * @internal
	     */
	
	  }, {
	    key: '_updateRenderedComponent',
	    value: function _updateRenderedComponent(transaction, context) {
	      var devToolRemoved = void 0;
	      if (process.env.NODE_ENV !== 'production') {
	        devToolRemoved = (0, _removeDevTool2.default)();
	      }
	
	      _get(React3CompositeComponentWrapper.prototype.__proto__ || Object.getPrototypeOf(React3CompositeComponentWrapper.prototype), '_updateRenderedComponent', this).call(this, transaction, context);
	
	      if (process.env.NODE_ENV !== 'production') {
	        if (devToolRemoved) {
	          _removeDevTool2.default.restore();
	        }
	      }
	
	      this._threeObject = this._renderedComponent._threeObject;
	    }
	  }, {
	    key: '_instantiateReactComponent',
	    value: function _instantiateReactComponent(element, shouldHaveDebugID) {
	      return this._react3RendererInstance.instantiateReactComponent(element, shouldHaveDebugID);
	    }
	
	    // TODO: prevInstance
	
	  }, {
	    key: '_replaceNodeWithMarkup',
	    value: function _replaceNodeWithMarkup(oldMarkup, nextMarkup) {
	      var parentMarkup = oldMarkup.parentMarkup;
	
	      var ownerChildrenMarkups = parentMarkup.childrenMarkup;
	
	      var indexInParent = ownerChildrenMarkups.indexOf(oldMarkup);
	
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(indexInParent !== -1, 'The node has no parent');
	      } else {
	        (0, _invariant2.default)(indexInParent !== -1);
	      }
	
	      var parentInternalComponent = parentMarkup.threeObject.userData.react3internalComponent;
	      var originalInternalComponent = oldMarkup.threeObject.userData.react3internalComponent;
	
	      parentInternalComponent.removeChild(originalInternalComponent, oldMarkup);
	      var nextChild = nextMarkup.threeObject.userData.react3internalComponent;
	      nextChild._mountIndex = indexInParent;
	      parentInternalComponent.createChild(nextChild, null, nextMarkup);
	    }
	
	    // See ReactCompositeComponent.mountComponent
	
	    /**
	     * Initializes the component, renders markup, and registers event listeners.
	     *
	     * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	     * @param {?object} hostParent
	     * @param {?object} hostContainerInfo
	     * @param {?object} context
	     * @return {?string} Rendered markup to be inserted into the DOM.
	     * @final
	     * @internal
	     */
	
	  }, {
	    key: 'mountComponent',
	    value: function mountComponent(transaction, hostParent, hostContainerInfo, context) {
	      this._context = context;
	      this._mountOrder = this._react3RendererInstance.nextMountID++;
	      this._hostParent = hostParent;
	      this._hostContainerInfo = hostContainerInfo;
	
	      var publicProps = this._currentElement.props;
	      var publicContext = this._processContext(context);
	
	      var Component = this._currentElement.type;
	
	      var updateQueue = transaction.getUpdateQueue();
	
	      // Initialize the public class
	      var doConstruct = shouldConstruct(Component);
	      var inst = this._constructComponent(doConstruct, publicProps, publicContext, updateQueue);
	
	      var renderedElement = void 0;
	
	      // Support functional components
	      if (!doConstruct && (inst == null || inst.render == null)) {
	        renderedElement = inst;
	        warnIfInvalidElement(Component, renderedElement);
	        (0, _invariant2.default)(inst === null || inst === false || _ReactElement2.default.isValidElement(inst), '%s(...): A valid React element (or null) must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component');
	        inst = new StatelessComponent(Component);
	        this._compositeType = CompositeTypes.StatelessFunctional;
	      } else if (isPureComponent(Component)) {
	        this._compositeType = CompositeTypes.PureClass;
	      } else {
	        this._compositeType = CompositeTypes.ImpureClass;
	      }
	
	      if (process.env.NODE_ENV !== 'production') {
	        // This will throw later in _renderValidatedComponent, but add an early
	        // warning now to help debugging
	        if (!inst.render) {
	          (0, _warning2.default)(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', Component.displayName || Component.name || 'Component');
	        }
	
	        var propsMutated = inst.props !== publicProps;
	        var componentName = Component.displayName || Component.name || 'Component';
	
	        (0, _warning2.default)(inst.props === undefined || !propsMutated, '%s(...): When calling super() in `%s`, make sure to pass ' + 'up the same props that your component\'s constructor was passed.', componentName, componentName);
	      }
	
	      // These should be set up in the constructor, but as a convenience for
	      // simpler class abstractions, we set them up after the fact.
	      inst.props = publicProps;
	      inst.context = publicContext;
	      inst.refs = _emptyObject2.default;
	      inst.updater = updateQueue;
	
	      this._instance = inst;
	
	      // Store a reference from the instance back to the internal representation
	      _ReactInstanceMap2.default.set(inst, this);
	
	      if (process.env.NODE_ENV !== 'production') {
	        // Since plain JS classes are defined without any special initialization
	        // logic, we can not catch common errors early. Therefore, we have to
	        // catch them here, at initialization time, instead.
	        (0, _warning2.default)(!inst.getInitialState || inst.getInitialState.isReactClassApproved, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component');
	        (0, _warning2.default)(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component');
	        (0, _warning2.default)(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component');
	        (0, _warning2.default)(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component');
	        (0, _warning2.default)(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', this.getName() || 'A component');
	        (0, _warning2.default)(typeof inst.componentDidUnmount !== 'function', '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', this.getName() || 'A component');
	        (0, _warning2.default)(typeof inst.componentWillRecieveProps !== 'function', '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', this.getName() || 'A component');
	      }
	      var initialState = inst.state;
	      if (initialState === undefined) {
	        inst.state = initialState = null;
	      }
	      if (!((typeof initialState === 'undefined' ? 'undefined' : _typeof(initialState)) === 'object' && !Array.isArray(initialState))) {
	        if (process.env.NODE_ENV !== 'production') {
	          (0, _invariant2.default)(false, '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent');
	        } else {
	          (0, _invariant2.default)(false);
	        }
	      }
	
	      this._pendingStateQueue = null;
	      this._pendingReplaceState = false;
	      this._pendingForceUpdate = false;
	
	      var markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
	
	      if (inst.componentDidMount) {
	        if (process.env.NODE_ENV !== 'production') {
	          transaction.getReactMountReady().enqueue(invokeComponentDidMountWithTimer, this);
	        } else {
	          transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
	        }
	      }
	
	      return markup;
	    }
	  }, {
	    key: '_constructComponent',
	    value: function _constructComponent(doConstruct, publicProps, publicContext, updateQueue) {
	      if (process.env.NODE_ENV !== 'production') {
	        _ReactCurrentOwner2.default.current = this;
	        try {
	          return this._constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue);
	        } finally {
	          _ReactCurrentOwner2.default.current = null;
	        }
	      } else {
	        return this._constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue);
	      }
	    }
	  }, {
	    key: '_constructComponentWithoutOwner',
	    value: function _constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue) {
	      var Component = this._currentElement.type;
	      var instanceOrElement = void 0;
	      if (doConstruct) {
	        if (process.env.NODE_ENV !== 'production') {
	          if (this._debugID !== 0) {
	            _ReactInstrumentation2.default.debugTool.onBeginLifeCycleTimer(this._debugID, 'ctor');
	          }
	        }
	        instanceOrElement = new Component(publicProps, publicContext, updateQueue);
	        if (process.env.NODE_ENV !== 'production') {
	          if (this._debugID !== 0) {
	            _ReactInstrumentation2.default.debugTool.onEndLifeCycleTimer(this._debugID, 'ctor');
	          }
	        }
	      } else {
	        // This can still be an instance in case of factory components
	        // but we'll count this as time spent rendering as the more common case.
	        if (process.env.NODE_ENV !== 'production') {
	          if (this._debugID !== 0) {
	            _ReactInstrumentation2.default.debugTool.onBeginLifeCycleTimer(this._debugID, 'render');
	          }
	        }
	
	        /* eslint-disable new-cap */
	        instanceOrElement = Component(publicProps, publicContext, updateQueue);
	        /* eslint-enable */
	
	        if (process.env.NODE_ENV !== 'production') {
	          if (this._debugID !== 0) {
	            _ReactInstrumentation2.default.debugTool.onEndLifeCycleTimer(this._debugID, 'render');
	          }
	        }
	      }
	      return instanceOrElement;
	    }
	
	    /**
	     * Needs to be overwritten because emptyObject points to another...
	     *
	     * Lazily allocates the refs object and stores `component` as `ref`.
	     *
	     * @param {string} ref Reference name.
	     * @param {*} component Component to store as `ref`.
	     * @final
	     * @private
	     */
	
	  }, {
	    key: 'attachRef',
	    value: function attachRef(ref, component) {
	      var inst = this.getPublicInstance();
	      var refs = inst.refs === _emptyObject2.default ? inst.refs = {} : inst.refs;
	      refs[ref] = component.getPublicInstance();
	    }
	  }]);
	
	  return React3CompositeComponentWrapper;
	}(ReactCompositeComponentMixinImpl);
	
	module.exports = React3CompositeComponentWrapper;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ReactInstrumentation = __webpack_require__(610);
	
	var _ReactInstrumentation2 = _interopRequireDefault(_ReactInstrumentation);
	
	var _ReactDOMUnknownPropertyHook = __webpack_require__(667);
	
	var _ReactDOMUnknownPropertyHook2 = _interopRequireDefault(_ReactDOMUnknownPropertyHook);
	
	var _ReactDOMNullInputValuePropHook = __webpack_require__(668);
	
	var _ReactDOMNullInputValuePropHook2 = _interopRequireDefault(_ReactDOMNullInputValuePropHook);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var devToolRemoved = false;
	
	function removeDevTool() {
	  if (!devToolRemoved) {
	    _ReactInstrumentation2.default.debugTool.removeHook(_ReactDOMUnknownPropertyHook2.default);
	    _ReactInstrumentation2.default.debugTool.removeHook(_ReactDOMNullInputValuePropHook2.default);
	
	    devToolRemoved = true;
	
	    return true;
	  }
	
	  return false;
	}
	
	removeDevTool.restore = function restore() {
	  devToolRemoved = false;
	
	  _ReactInstrumentation2.default.debugTool.addHook(_ReactDOMUnknownPropertyHook2.default);
	  _ReactInstrumentation2.default.debugTool.addHook(_ReactDOMNullInputValuePropHook2.default);
	};
	
	module.exports = removeDevTool;

/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _React3ComponentFlags = __webpack_require__(663);
	
	var _React3ComponentFlags2 = _interopRequireDefault(_React3ComponentFlags);
	
	var _idPropertyName = __webpack_require__(664);
	
	var _idPropertyName2 = _interopRequireDefault(_idPropertyName);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var internalInstanceKey = '__react3InternalInstance$' + Math.random().toString(36).slice(2);
	
	/**
	 * Drill down (through composites and empty components) until we get a host or
	 * host text component.
	 *
	 * This is pretty polymorphic but unavoidable with the current structure we have
	 * for `_renderedChildren`.
	 */
	// see ReactDOMComponentTree
	
	function getRenderedHostOrTextFromComponent(component) {
	  var result = component;
	
	  var rendered = result._renderedComponent;
	
	  while (rendered) {
	    result = rendered;
	
	    rendered = result._renderedComponent;
	  }
	
	  return result;
	}
	
	/**
	 * Populate `_hostMarkup` on the rendered host/text component with the given
	 * markup. The passed `instance` can be a composite.
	 */
	function precacheMarkup(instance, markup) {
	  (0, _invariant2.default)(!!markup, 'Markup is null!');
	  var hostInstance = getRenderedHostOrTextFromComponent(instance);
	  hostInstance._hostMarkup = markup;
	  markup[internalInstanceKey] = hostInstance;
	}
	
	function uncacheMarkup(inst) {
	  var markup = inst._hostMarkup;
	  if (markup) {
	    delete markup[internalInstanceKey];
	    inst._hostMarkup = null;
	  }
	}
	
	/**
	 * Populate `_hostMarkup` on each child of `inst`, assuming that the children
	 * match up with the children of `markup`.
	 *
	 * We cache entire levels at once to avoid an n^2 problem where we access the
	 * children of a markup sequentially and have to walk from the start to our target
	 * markup every time.
	 *
	 * Since we update `_renderedChildren` and the actual DOM at (slightly)
	 * different times, we could race here and see a newer `_renderedChildren` than
	 * the markups we see. To avoid this, ReactMultiChild calls
	 * `prepareToManageChildren` before we change `_renderedChildren`, at which
	 * time the container's child markups are always cached (until it unmounts).
	 */
	function precacheChildMarkups(instance, markup) {
	  if ((instance._flags & _React3ComponentFlags2.default.hasCachedChildMarkups) !== 0) {
	    return;
	  }
	
	  var renderedChildren = instance._renderedChildren;
	
	  var childrenNames = Object.keys(renderedChildren);
	
	  var childrenMarkup = markup.childrenMarkup;
	
	  /* eslint-disable no-labels, no-unused-labels, no-restricted-syntax */
	  outer: for (var i = 0; i < childrenNames.length; ++i) {
	    /* eslint-enable no-labels, no-unused-labels, no-restricted-syntax */
	    var childName = childrenNames[i];
	
	    var childInst = renderedChildren[childName];
	    // TODO implement _domID
	    var childID = getRenderedHostOrTextFromComponent(childInst)._hostID;
	    if (childID === 0) {
	      // We're currently unmounting this child in ReactMultiChild; skip it.
	      continue;
	    }
	
	    for (var j = 0; j < childrenMarkup.length; ++j) {
	      var childMarkup = childrenMarkup[j];
	
	      if (childMarkup[_idPropertyName2.default] === childID) {
	        precacheMarkup(childInst, childMarkup);
	
	        continue outer; // eslint-disable-line no-labels
	      }
	    }
	
	    // We reached the end of the DOM children without finding an ID match.
	    if (process.env.NODE_ENV !== 'production') {
	      (0, _invariant2.default)(false, 'Unable to find element with ID %s.', childID);
	    } else {
	      (0, _invariant2.default)(false);
	    }
	
	    /* original implementation:
	    // We assume the child nodes are in the same order as the child instances.
	    for (; childMarkup !== null; childMarkup = childMarkup.nextSibling) {
	      if (childMarkup.nodeType === 1 && // Element.ELEMENT_NODE
	        childMarkup.getAttribute(ATTR_NAME) === String(childID) ||
	        childMarkup.nodeType === 8 &&
	        childMarkup.nodeValue === ` react-text: ${childID} ` ||
	        childMarkup.nodeType === 8 &&
	        childMarkup.nodeValue === ` react-empty: ${childID} `) {
	        precacheNode(childInst, childMarkup);
	        continue outer; // eslint-disable-line no-labels
	      }
	    }
	    */
	  }
	  instance._flags |= _React3ComponentFlags2.default.hasCachedChildMarkups;
	}
	
	// see ReactDOMComponentTree:getClosestInstanceFromNode
	function getClosestInstanceFromMarkup(markup) {
	  if (markup[internalInstanceKey]) {
	    return markup[internalInstanceKey];
	  }
	
	  var currentMarkup = markup;
	
	  // Walk up the tree until we find an ancestor whose instance we have cached.
	  var parentMarkupsWithoutInstanceKey = [];
	  while (!currentMarkup[internalInstanceKey]) {
	    parentMarkupsWithoutInstanceKey.push(currentMarkup);
	    if (currentMarkup.parentMarkup) {
	      currentMarkup = currentMarkup.parentMarkup;
	    } else {
	      // Top of the tree. This markup must not be part of a React tree (or is
	      // unmounted, potentially).
	      return null;
	    }
	  }
	
	  // if we're here, then currentMarkup does have internalInstanceKey, otherwise
	  // we would have reached the top of the tree and returned null.
	
	  var closest = void 0;
	  var instance = currentMarkup[internalInstanceKey];
	
	  // traversing from greatest ancestor (e.g. parent of all parents) downwards
	  // e.g. walk down the tree now
	  while (instance) {
	    closest = instance;
	
	    if (!parentMarkupsWithoutInstanceKey.length) {
	      break;
	    }
	
	    // this will ensure that all children of the current greatest ancestor
	    // have internalInstanceKey
	    precacheChildMarkups(instance, currentMarkup);
	
	    currentMarkup = parentMarkupsWithoutInstanceKey.pop();
	    instance = currentMarkup[internalInstanceKey];
	  }
	
	  /* original impl of ^
	  for (; currentMarkup && (instance = currentMarkup[internalInstanceKey]);
	         currentMarkup = parentMarkupsWithoutInstanceKey.pop()) {
	    closest = instance;
	    if (parentMarkupsWithoutInstanceKey.length) {
	      this.precacheChildMarkups(instance, currentMarkup);
	    }
	  }
	  */
	
	  return closest;
	}
	
	// see ReactDOMComponentTree:getInstanceFromNode
	function getInstanceFromMarkup(markup) {
	  var inst = getClosestInstanceFromMarkup(markup);
	  if (inst !== null && inst._hostMarkup === markup) {
	    return inst;
	  }
	
	  return null;
	}
	
	/**
	 * Given an InternalComponent, return the corresponding
	 * host markup.
	 */
	function getMarkupFromInstance(inst) {
	  // Without this first invariant, passing a non-React3-component triggers the next
	  // invariant for a missing parent, which is super confusing.
	
	  if (process.env.NODE_ENV !== 'production') {
	    (0, _invariant2.default)(inst._hostMarkup !== undefined, 'getMarkupFromInstance: Invalid argument.');
	  } else {
	    (0, _invariant2.default)(inst._hostMarkup !== undefined);
	  }
	
	  if (inst._hostMarkup) {
	    return inst._hostMarkup;
	  }
	
	  var currentInstance = inst;
	
	  // Walk up the tree until we find an ancestor whose host node we have cached.
	  var parents = [];
	  while (!currentInstance._hostMarkup) {
	    parents.push(currentInstance);
	    (0, _invariant2.default)(currentInstance._hostParent, 'React3 tree root should always have a node reference.');
	    currentInstance = currentInstance._hostParent;
	  }
	
	  // Now parents contains each ancestor that does *not* have a cached host
	  // markup, and `currentInstance` is the deepest ancestor that does.
	  for (; parents.length; currentInstance = parents.pop()) {
	    precacheChildMarkups(currentInstance, currentInstance._hostMarkup);
	  }
	
	  return currentInstance._hostMarkup;
	}
	
	module.exports = {
	  getMarkupFromInstance: getMarkupFromInstance,
	  getInstanceFromMarkup: getInstanceFromMarkup,
	  precacheMarkup: precacheMarkup,
	  uncacheMarkup: uncacheMarkup,
	  precacheChildMarkups: precacheChildMarkups,
	  getClosestInstanceFromMarkup: getClosestInstanceFromMarkup,
	  getRenderedHostOrTextFromComponent: getRenderedHostOrTextFromComponent
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _React3Descriptor = __webpack_require__(671);
	
	var _React3Descriptor2 = _interopRequireDefault(_React3Descriptor);
	
	var _ModuleDescriptor = __webpack_require__(682);
	
	var _ModuleDescriptor2 = _interopRequireDefault(_ModuleDescriptor);
	
	var _ViewportDescriptor = __webpack_require__(683);
	
	var _ViewportDescriptor2 = _interopRequireDefault(_ViewportDescriptor);
	
	var _SceneDescriptor = __webpack_require__(684);
	
	var _SceneDescriptor2 = _interopRequireDefault(_SceneDescriptor);
	
	var _Object3DDescriptor = __webpack_require__(685);
	
	var _Object3DDescriptor2 = _interopRequireDefault(_Object3DDescriptor);
	
	var _GroupDescriptor = __webpack_require__(686);
	
	var _GroupDescriptor2 = _interopRequireDefault(_GroupDescriptor);
	
	var _OrthographicCameraDescriptor = __webpack_require__(687);
	
	var _OrthographicCameraDescriptor2 = _interopRequireDefault(_OrthographicCameraDescriptor);
	
	var _PerspectiveCameraDescriptor = __webpack_require__(689);
	
	var _PerspectiveCameraDescriptor2 = _interopRequireDefault(_PerspectiveCameraDescriptor);
	
	var _CubeCameraDescriptor = __webpack_require__(690);
	
	var _CubeCameraDescriptor2 = _interopRequireDefault(_CubeCameraDescriptor);
	
	var _MeshDescriptor = __webpack_require__(691);
	
	var _MeshDescriptor2 = _interopRequireDefault(_MeshDescriptor);
	
	var _LineDescriptor = __webpack_require__(693);
	
	var _LineDescriptor2 = _interopRequireDefault(_LineDescriptor);
	
	var _LineSegmentsDescriptor = __webpack_require__(694);
	
	var _LineSegmentsDescriptor2 = _interopRequireDefault(_LineSegmentsDescriptor);
	
	var _PointsDescriptor = __webpack_require__(695);
	
	var _PointsDescriptor2 = _interopRequireDefault(_PointsDescriptor);
	
	var _SpriteDescriptor = __webpack_require__(696);
	
	var _SpriteDescriptor2 = _interopRequireDefault(_SpriteDescriptor);
	
	var _AmbientLightDescriptor = __webpack_require__(697);
	
	var _AmbientLightDescriptor2 = _interopRequireDefault(_AmbientLightDescriptor);
	
	var _DirectionalLightDescriptor = __webpack_require__(699);
	
	var _DirectionalLightDescriptor2 = _interopRequireDefault(_DirectionalLightDescriptor);
	
	var _SpotLightDescriptor = __webpack_require__(700);
	
	var _SpotLightDescriptor2 = _interopRequireDefault(_SpotLightDescriptor);
	
	var _PointLightDescriptor = __webpack_require__(701);
	
	var _PointLightDescriptor2 = _interopRequireDefault(_PointLightDescriptor);
	
	var _ResourcesDescriptor = __webpack_require__(702);
	
	var _ResourcesDescriptor2 = _interopRequireDefault(_ResourcesDescriptor);
	
	var _GeometryResourceDescriptor = __webpack_require__(703);
	
	var _GeometryResourceDescriptor2 = _interopRequireDefault(_GeometryResourceDescriptor);
	
	var _ShapeGeometryResourceDescriptor = __webpack_require__(705);
	
	var _ShapeGeometryResourceDescriptor2 = _interopRequireDefault(_ShapeGeometryResourceDescriptor);
	
	var _TextureResourceDescriptor = __webpack_require__(706);
	
	var _TextureResourceDescriptor2 = _interopRequireDefault(_TextureResourceDescriptor);
	
	var _ShapeResourceDescriptor = __webpack_require__(708);
	
	var _ShapeResourceDescriptor2 = _interopRequireDefault(_ShapeResourceDescriptor);
	
	var _GeometryDescriptor = __webpack_require__(710);
	
	var _GeometryDescriptor2 = _interopRequireDefault(_GeometryDescriptor);
	
	var _BufferGeometryDescriptor = __webpack_require__(713);
	
	var _BufferGeometryDescriptor2 = _interopRequireDefault(_BufferGeometryDescriptor);
	
	var _BoxGeometryDescriptor = __webpack_require__(714);
	
	var _BoxGeometryDescriptor2 = _interopRequireDefault(_BoxGeometryDescriptor);
	
	var _SphereGeometryDescriptor = __webpack_require__(715);
	
	var _SphereGeometryDescriptor2 = _interopRequireDefault(_SphereGeometryDescriptor);
	
	var _ParametricGeometryDescriptor = __webpack_require__(717);
	
	var _ParametricGeometryDescriptor2 = _interopRequireDefault(_ParametricGeometryDescriptor);
	
	var _PlaneBufferGeometryDescriptor = __webpack_require__(718);
	
	var _PlaneBufferGeometryDescriptor2 = _interopRequireDefault(_PlaneBufferGeometryDescriptor);
	
	var _PlaneGeometryDescriptor = __webpack_require__(719);
	
	var _PlaneGeometryDescriptor2 = _interopRequireDefault(_PlaneGeometryDescriptor);
	
	var _PolyhedronGeometryDescriptor = __webpack_require__(720);
	
	var _PolyhedronGeometryDescriptor2 = _interopRequireDefault(_PolyhedronGeometryDescriptor);
	
	var _IcosahedronGeometryDescriptor = __webpack_require__(722);
	
	var _IcosahedronGeometryDescriptor2 = _interopRequireDefault(_IcosahedronGeometryDescriptor);
	
	var _OctahedronGeometryDescriptor = __webpack_require__(723);
	
	var _OctahedronGeometryDescriptor2 = _interopRequireDefault(_OctahedronGeometryDescriptor);
	
	var _TetrahedronGeometryDescriptor = __webpack_require__(724);
	
	var _TetrahedronGeometryDescriptor2 = _interopRequireDefault(_TetrahedronGeometryDescriptor);
	
	var _CircleGeometryDescriptor = __webpack_require__(725);
	
	var _CircleGeometryDescriptor2 = _interopRequireDefault(_CircleGeometryDescriptor);
	
	var _CircleBufferGeometryDescriptor = __webpack_require__(726);
	
	var _CircleBufferGeometryDescriptor2 = _interopRequireDefault(_CircleBufferGeometryDescriptor);
	
	var _RingGeometryDescriptor = __webpack_require__(727);
	
	var _RingGeometryDescriptor2 = _interopRequireDefault(_RingGeometryDescriptor);
	
	var _CylinderGeometryDescriptor = __webpack_require__(728);
	
	var _CylinderGeometryDescriptor2 = _interopRequireDefault(_CylinderGeometryDescriptor);
	
	var _LatheGeometryDescriptor = __webpack_require__(729);
	
	var _LatheGeometryDescriptor2 = _interopRequireDefault(_LatheGeometryDescriptor);
	
	var _TorusGeometryDescriptor = __webpack_require__(730);
	
	var _TorusGeometryDescriptor2 = _interopRequireDefault(_TorusGeometryDescriptor);
	
	var _TorusKnotGeometryDescriptor = __webpack_require__(731);
	
	var _TorusKnotGeometryDescriptor2 = _interopRequireDefault(_TorusKnotGeometryDescriptor);
	
	var _ExtrudeGeometryDescriptor = __webpack_require__(732);
	
	var _ExtrudeGeometryDescriptor2 = _interopRequireDefault(_ExtrudeGeometryDescriptor);
	
	var _TubeGeometryDescriptor = __webpack_require__(733);
	
	var _TubeGeometryDescriptor2 = _interopRequireDefault(_TubeGeometryDescriptor);
	
	var _DodecahedronGeometryDescriptor = __webpack_require__(734);
	
	var _DodecahedronGeometryDescriptor2 = _interopRequireDefault(_DodecahedronGeometryDescriptor);
	
	var _TextGeometryDescriptor = __webpack_require__(735);
	
	var _TextGeometryDescriptor2 = _interopRequireDefault(_TextGeometryDescriptor);
	
	var _ShapeDescriptor = __webpack_require__(736);
	
	var _ShapeDescriptor2 = _interopRequireDefault(_ShapeDescriptor);
	
	var _MoveToDescriptor = __webpack_require__(739);
	
	var _MoveToDescriptor2 = _interopRequireDefault(_MoveToDescriptor);
	
	var _LineToDescriptor = __webpack_require__(743);
	
	var _LineToDescriptor2 = _interopRequireDefault(_LineToDescriptor);
	
	var _BezierCurveToDescriptor = __webpack_require__(745);
	
	var _BezierCurveToDescriptor2 = _interopRequireDefault(_BezierCurveToDescriptor);
	
	var _QuadraticCurveToDescriptor = __webpack_require__(747);
	
	var _QuadraticCurveToDescriptor2 = _interopRequireDefault(_QuadraticCurveToDescriptor);
	
	var _AbsArcDescriptor = __webpack_require__(749);
	
	var _AbsArcDescriptor2 = _interopRequireDefault(_AbsArcDescriptor);
	
	var _AbsEllipseDescriptor = __webpack_require__(751);
	
	var _AbsEllipseDescriptor2 = _interopRequireDefault(_AbsEllipseDescriptor);
	
	var _HoleDescriptor = __webpack_require__(753);
	
	var _HoleDescriptor2 = _interopRequireDefault(_HoleDescriptor);
	
	var _SplineThruDescriptor = __webpack_require__(754);
	
	var _SplineThruDescriptor2 = _interopRequireDefault(_SplineThruDescriptor);
	
	var _PointsMaterialDescriptor = __webpack_require__(756);
	
	var _PointsMaterialDescriptor2 = _interopRequireDefault(_PointsMaterialDescriptor);
	
	var _MeshBasicMaterialDescriptor = __webpack_require__(758);
	
	var _MeshBasicMaterialDescriptor2 = _interopRequireDefault(_MeshBasicMaterialDescriptor);
	
	var _MeshPhongMaterialDescriptor = __webpack_require__(759);
	
	var _MeshPhongMaterialDescriptor2 = _interopRequireDefault(_MeshPhongMaterialDescriptor);
	
	var _MeshLambertMaterialDescriptor = __webpack_require__(760);
	
	var _MeshLambertMaterialDescriptor2 = _interopRequireDefault(_MeshLambertMaterialDescriptor);
	
	var _ShaderMaterialDescriptor = __webpack_require__(761);
	
	var _ShaderMaterialDescriptor2 = _interopRequireDefault(_ShaderMaterialDescriptor);
	
	var _RawShaderMaterialDescriptor = __webpack_require__(763);
	
	var _RawShaderMaterialDescriptor2 = _interopRequireDefault(_RawShaderMaterialDescriptor);
	
	var _TextureDescriptor = __webpack_require__(764);
	
	var _TextureDescriptor2 = _interopRequireDefault(_TextureDescriptor);
	
	var _MaterialResourceDescriptor = __webpack_require__(765);
	
	var _MaterialResourceDescriptor2 = _interopRequireDefault(_MaterialResourceDescriptor);
	
	var _UniformsDescriptor = __webpack_require__(766);
	
	var _UniformsDescriptor2 = _interopRequireDefault(_UniformsDescriptor);
	
	var _UniformDescriptor = __webpack_require__(767);
	
	var _UniformDescriptor2 = _interopRequireDefault(_UniformDescriptor);
	
	var _LineBasicMaterialDescriptor = __webpack_require__(768);
	
	var _LineBasicMaterialDescriptor2 = _interopRequireDefault(_LineBasicMaterialDescriptor);
	
	var _LineDashedMaterialDescriptor = __webpack_require__(769);
	
	var _LineDashedMaterialDescriptor2 = _interopRequireDefault(_LineDashedMaterialDescriptor);
	
	var _MeshDepthMaterialDescriptor = __webpack_require__(770);
	
	var _MeshDepthMaterialDescriptor2 = _interopRequireDefault(_MeshDepthMaterialDescriptor);
	
	var _MeshNormalMaterialDescriptor = __webpack_require__(771);
	
	var _MeshNormalMaterialDescriptor2 = _interopRequireDefault(_MeshNormalMaterialDescriptor);
	
	var _SpriteMaterialDescriptor = __webpack_require__(772);
	
	var _SpriteMaterialDescriptor2 = _interopRequireDefault(_SpriteMaterialDescriptor);
	
	var _CameraHelperDescriptor = __webpack_require__(773);
	
	var _CameraHelperDescriptor2 = _interopRequireDefault(_CameraHelperDescriptor);
	
	var _AxisHelperDescriptor = __webpack_require__(774);
	
	var _AxisHelperDescriptor2 = _interopRequireDefault(_AxisHelperDescriptor);
	
	var _ArrowHelperDescriptor = __webpack_require__(775);
	
	var _ArrowHelperDescriptor2 = _interopRequireDefault(_ArrowHelperDescriptor);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var ElementDescriptorContainer = function ElementDescriptorContainer(react3RendererInstance) {
	  _classCallCheck(this, ElementDescriptorContainer);
	
	  this.react3RendererInstance = react3RendererInstance;
	
	  /**
	   * @type {Object.<string, THREEElementDescriptor>}
	   */
	  this.descriptors = {
	    react3: new _React3Descriptor2.default(react3RendererInstance),
	
	    module: new _ModuleDescriptor2.default(react3RendererInstance),
	
	    viewport: new _ViewportDescriptor2.default(react3RendererInstance),
	    scene: new _SceneDescriptor2.default(react3RendererInstance),
	
	    object3D: new _Object3DDescriptor2.default(react3RendererInstance),
	    group: new _GroupDescriptor2.default(react3RendererInstance),
	
	    orthographicCamera: new _OrthographicCameraDescriptor2.default(react3RendererInstance),
	    perspectiveCamera: new _PerspectiveCameraDescriptor2.default(react3RendererInstance),
	    cubeCamera: new _CubeCameraDescriptor2.default(react3RendererInstance),
	
	    mesh: new _MeshDescriptor2.default(react3RendererInstance),
	    line: new _LineDescriptor2.default(react3RendererInstance),
	    lineSegments: new _LineSegmentsDescriptor2.default(react3RendererInstance),
	    points: new _PointsDescriptor2.default(react3RendererInstance),
	    sprite: new _SpriteDescriptor2.default(react3RendererInstance),
	
	    meshBasicMaterial: new _MeshBasicMaterialDescriptor2.default(react3RendererInstance),
	    meshPhongMaterial: new _MeshPhongMaterialDescriptor2.default(react3RendererInstance),
	    meshLambertMaterial: new _MeshLambertMaterialDescriptor2.default(react3RendererInstance),
	    pointsMaterial: new _PointsMaterialDescriptor2.default(react3RendererInstance),
	    shaderMaterial: new _ShaderMaterialDescriptor2.default(react3RendererInstance),
	    rawShaderMaterial: new _RawShaderMaterialDescriptor2.default(react3RendererInstance),
	    lineBasicMaterial: new _LineBasicMaterialDescriptor2.default(react3RendererInstance),
	    lineDashedMaterial: new _LineDashedMaterialDescriptor2.default(react3RendererInstance),
	    meshDepthMaterial: new _MeshDepthMaterialDescriptor2.default(react3RendererInstance),
	    meshNormalMaterial: new _MeshNormalMaterialDescriptor2.default(react3RendererInstance),
	    spriteMaterial: new _SpriteMaterialDescriptor2.default(react3RendererInstance),
	
	    texture: new _TextureDescriptor2.default(react3RendererInstance),
	
	    geometry: new _GeometryDescriptor2.default(react3RendererInstance),
	    bufferGeometry: new _BufferGeometryDescriptor2.default(react3RendererInstance),
	    boxGeometry: new _BoxGeometryDescriptor2.default(react3RendererInstance),
	    sphereGeometry: new _SphereGeometryDescriptor2.default(react3RendererInstance),
	    parametricGeometry: new _ParametricGeometryDescriptor2.default(react3RendererInstance),
	    planeBufferGeometry: new _PlaneBufferGeometryDescriptor2.default(react3RendererInstance),
	    planeGeometry: new _PlaneGeometryDescriptor2.default(react3RendererInstance),
	    polyhedronGeometry: new _PolyhedronGeometryDescriptor2.default(react3RendererInstance),
	    icosahedronGeometry: new _IcosahedronGeometryDescriptor2.default(react3RendererInstance),
	    octahedronGeometry: new _OctahedronGeometryDescriptor2.default(react3RendererInstance),
	    tetrahedronGeometry: new _TetrahedronGeometryDescriptor2.default(react3RendererInstance),
	    circleGeometry: new _CircleGeometryDescriptor2.default(react3RendererInstance),
	    circleBufferGeometry: new _CircleBufferGeometryDescriptor2.default(react3RendererInstance),
	    ringGeometry: new _RingGeometryDescriptor2.default(react3RendererInstance),
	    cylinderGeometry: new _CylinderGeometryDescriptor2.default(react3RendererInstance),
	    latheGeometry: new _LatheGeometryDescriptor2.default(react3RendererInstance),
	    torusGeometry: new _TorusGeometryDescriptor2.default(react3RendererInstance),
	    torusKnotGeometry: new _TorusKnotGeometryDescriptor2.default(react3RendererInstance),
	    extrudeGeometry: new _ExtrudeGeometryDescriptor2.default(react3RendererInstance),
	    tubeGeometry: new _TubeGeometryDescriptor2.default(react3RendererInstance),
	    dodecahedronGeometry: new _DodecahedronGeometryDescriptor2.default(react3RendererInstance),
	    textGeometry: new _TextGeometryDescriptor2.default(react3RendererInstance),
	
	    shape: new _ShapeDescriptor2.default(react3RendererInstance),
	    moveTo: new _MoveToDescriptor2.default(react3RendererInstance),
	    lineTo: new _LineToDescriptor2.default(react3RendererInstance),
	    bezierCurveTo: new _BezierCurveToDescriptor2.default(react3RendererInstance),
	    quadraticCurveTo: new _QuadraticCurveToDescriptor2.default(react3RendererInstance),
	    absArc: new _AbsArcDescriptor2.default(react3RendererInstance),
	    absEllipse: new _AbsEllipseDescriptor2.default(react3RendererInstance),
	    hole: new _HoleDescriptor2.default(react3RendererInstance),
	    splineThru: new _SplineThruDescriptor2.default(react3RendererInstance),
	
	    ambientLight: new _AmbientLightDescriptor2.default(react3RendererInstance),
	    directionalLight: new _DirectionalLightDescriptor2.default(react3RendererInstance),
	    spotLight: new _SpotLightDescriptor2.default(react3RendererInstance),
	    pointLight: new _PointLightDescriptor2.default(react3RendererInstance),
	
	    resources: new _ResourcesDescriptor2.default(react3RendererInstance),
	    materialResource: new _MaterialResourceDescriptor2.default(react3RendererInstance),
	    geometryResource: new _GeometryResourceDescriptor2.default(react3RendererInstance),
	    shapeGeometryResource: new _ShapeGeometryResourceDescriptor2.default(react3RendererInstance),
	    textureResource: new _TextureResourceDescriptor2.default(react3RendererInstance),
	    shapeResource: new _ShapeResourceDescriptor2.default(react3RendererInstance),
	
	    uniforms: new _UniformsDescriptor2.default(react3RendererInstance),
	    uniform: new _UniformDescriptor2.default(react3RendererInstance),
	
	    cameraHelper: new _CameraHelperDescriptor2.default(react3RendererInstance),
	    axisHelper: new _AxisHelperDescriptor2.default(react3RendererInstance),
	    arrowHelper: new _ArrowHelperDescriptor2.default(react3RendererInstance)
	  };
	};
	
	module.exports = ElementDescriptorContainer;

/***/ },

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _warning = __webpack_require__(578);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _THREEElementDescriptor = __webpack_require__(672);
	
	var _THREEElementDescriptor2 = _interopRequireDefault(_THREEElementDescriptor);
	
	var _React3Instance = __webpack_require__(674);
	
	var _React3Instance2 = _interopRequireDefault(_React3Instance);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var propProxy = {
	  gammaInput: {
	    type: _ReactPropTypes2.default.bool,
	    default: false
	  },
	  gammaOutput: {
	    type: _ReactPropTypes2.default.bool,
	    default: false
	  },
	  sortObjects: {
	    type: _ReactPropTypes2.default.bool,
	    default: true
	  },
	  context: {
	    type: _ReactPropTypes2.default.oneOf(['2d', '3d']).isRequired,
	    default: '3d'
	  },
	  mainCamera: {
	    type: _ReactPropTypes2.default.string,
	    default: undefined
	  },
	  onAnimate: {
	    type: _ReactPropTypes2.default.func,
	    default: undefined
	  },
	  clearColor: {
	    type: _ReactPropTypes2.default.oneOfType([(0, _propTypeInstanceOf2.default)(_three2.default.Color), _ReactPropTypes2.default.number, _ReactPropTypes2.default.string]),
	    default: 0x000000
	  },
	  clearAlpha: {
	    type: _ReactPropTypes2.default.number,
	    default: undefined
	  },
	  alpha: {
	    type: _ReactPropTypes2.default.bool,
	    default: false
	  },
	  shadowMapEnabled: {
	    type: _ReactPropTypes2.default.bool,
	    default: false
	  },
	  shadowMapType: {
	    type: _ReactPropTypes2.default.oneOf([_three2.default.BasicShadowMap, _three2.default.PCFShadowMap, _three2.default.PCFSoftShadowMap]),
	    default: _three2.default.PCFShadowMap
	  },
	  shadowMapCullFace: {
	    type: _ReactPropTypes2.default.oneOf([_three2.default.CullFaceNone, _three2.default.CullFaceBack, _three2.default.CullFaceFront, _three2.default.CullFaceFrontBack]),
	    default: _three2.default.CullFaceFront
	  },
	  shadowMapDebug: {
	    type: _ReactPropTypes2.default.bool,
	    default: false
	  },
	  onRecreateCanvas: {
	    type: _ReactPropTypes2.default.func.isRequired,
	    default: undefined
	  },
	  pixelRatio: {
	    type: _ReactPropTypes2.default.number,
	    default: 1
	  },
	  width: {
	    type: _ReactPropTypes2.default.number.isRequired,
	    default: 1
	  },
	  height: {
	    type: _ReactPropTypes2.default.number.isRequired,
	    default: 1
	  },
	  precision: {
	    type: _ReactPropTypes2.default.oneOf(['highp', 'mediump', 'lowp']),
	    default: 'highp'
	  },
	  premultipliedAlpha: {
	    type: _ReactPropTypes2.default.bool,
	    default: true
	  },
	  antialias: {
	    type: _ReactPropTypes2.default.oneOfType([_ReactPropTypes2.default.bool, _ReactPropTypes2.default.number]),
	    default: false
	  },
	  stencil: {
	    type: _ReactPropTypes2.default.bool,
	    default: true
	  },
	  preserveDrawingBuffer: {
	    type: _ReactPropTypes2.default.bool,
	    default: false
	  },
	  depth: {
	    type: _ReactPropTypes2.default.bool,
	    default: true
	  },
	  logarithmicDepthBuffer: {
	    type: _ReactPropTypes2.default.bool,
	    default: false
	  },
	  onRendererUpdated: {
	    type: _ReactPropTypes2.default.func,
	    default: undefined
	  },
	  forceManualRender: {
	    type: _ReactPropTypes2.default.bool,
	    default: false
	  },
	  onManualRenderTriggerCreated: {
	    type: _ReactPropTypes2.default.func,
	    default: undefined
	  }
	};
	
	var React3Descriptor = function (_THREEElementDescript) {
	  _inherits(React3Descriptor, _THREEElementDescript);
	
	  function React3Descriptor(react3RendererInstance) {
	    _classCallCheck(this, React3Descriptor);
	
	    var _this = _possibleConstructorReturn(this, (React3Descriptor.__proto__ || Object.getPrototypeOf(React3Descriptor)).call(this, react3RendererInstance));
	
	    Object.keys(propProxy).forEach(function (propName) {
	      var info = propProxy[propName];
	      var propNameFirstLetterCapital = propName[0].toUpperCase() + propName.substr(1);
	
	      var updateFunctionName = 'update' + propNameFirstLetterCapital;
	
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _warning2.default)(_React3Instance2.default.prototype.hasOwnProperty(updateFunctionName), 'Missing function %s in React3DInstance class.', updateFunctionName);
	      }
	
	      var propInfo = {
	        type: info.type,
	        update: function update(threeObject, newValue) {
	          threeObject[updateFunctionName](newValue);
	        }
	      };
	
	      if (info.hasOwnProperty('default')) {
	        propInfo.default = info.default;
	      }
	
	      _this.hasProp(propName, propInfo);
	    });
	    return _this;
	  }
	
	  _createClass(React3Descriptor, [{
	    key: 'completePropertyUpdates',
	    value: function completePropertyUpdates(threeObject) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (!threeObject._warnedAboutManualRendering) {
	          if (threeObject._forceManualRender && !threeObject._manualRenderTriggerCallback) {
	            threeObject._warnedAboutManualRendering = true;
	            (0, _warning2.default)(false, 'The `React3` component has `forceManualRender` property set, but not' + ' `onManualRenderTriggerCreated`. You will not be able to update the view.');
	          }
	        }
	      }
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(threeObject, parentObject3D) {
	      (0, _invariant2.default)(parentObject3D instanceof HTMLCanvasElement, 'The `react3` element can only be rendered into a canvas.');
	
	      _get(React3Descriptor.prototype.__proto__ || Object.getPrototypeOf(React3Descriptor.prototype), 'setParent', this).call(this, threeObject, parentObject3D);
	
	      threeObject.updateCanvas(parentObject3D);
	    }
	  }, {
	    key: 'construct',
	    value: function construct(props) {
	      return new _React3Instance2.default(props, this.react3RendererInstance);
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(React3Descriptor.prototype.__proto__ || Object.getPrototypeOf(React3Descriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      threeObject.initialize();
	    }
	
	    // gets called every time there are children to be added
	    // this can be called multiple times as more children are added.
	
	  }, {
	    key: 'addChildren',
	    value: function addChildren(threeObject, children) {
	      threeObject.addChildren(children);
	    }
	  }, {
	    key: 'addChild',
	    value: function addChild(threeObject, child) {
	      threeObject.addChildren([child]);
	    }
	  }, {
	    key: 'moveChild',
	    value: function moveChild() {
	      // do nothing
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild(threeObject, child) {
	      threeObject.removeChild(child);
	    }
	  }, {
	    key: '_updateOnRecreateCanvas',
	    value: function _updateOnRecreateCanvas(threeObject, callback) {
	      threeObject.updateOnRecreateCanvas(callback);
	    }
	  }, {
	    key: '_updateHeight',
	    value: function _updateHeight(threeObject, newHeight) {
	      threeObject.updateHeight(newHeight);
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(threeObject) {
	      // call super unmount first so react3instance can clean itself up
	      _get(React3Descriptor.prototype.__proto__ || Object.getPrototypeOf(React3Descriptor.prototype), 'unmount', this).call(this, threeObject);
	
	      threeObject.unmount();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount(threeObject) {
	      threeObject.willUnmount();
	
	      return _get(React3Descriptor.prototype.__proto__ || Object.getPrototypeOf(React3Descriptor.prototype), 'componentWillUnmount', this).call(this, threeObject);
	    }
	  }]);
	
	  return React3Descriptor;
	}(_THREEElementDescriptor2.default);
	
	module.exports = React3Descriptor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ReactPropTypeLocations = __webpack_require__(589);
	
	var _ReactPropTypeLocations2 = _interopRequireDefault(_ReactPropTypeLocations);
	
	var _warning = __webpack_require__(578);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _events = __webpack_require__(673);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _checkReactTypeSpec = __webpack_require__(596);
	
	var _checkReactTypeSpec2 = _interopRequireDefault(_checkReactTypeSpec);
	
	var _React3Instance = __webpack_require__(674);
	
	var _React3Instance2 = _interopRequireDefault(_React3Instance);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var EventEmitter = _events2.default.EventEmitter;
	
	/**
	 * @abstract
	 */
	
	var THREEElementDescriptor = function () {
	  function THREEElementDescriptor(react3RendererInstance) {
	    _classCallCheck(this, THREEElementDescriptor);
	
	    this.react3RendererInstance = react3RendererInstance;
	    this.propUpdates = {};
	    this.propDeletes = {};
	    this.propDefaults = {};
	    this._initialOnly = {};
	    this._updateInitial = [];
	    this._simpleProperties = [];
	
	    this.propTypes = {};
	
	    this._hasName = false;
	  }
	
	  _createClass(THREEElementDescriptor, [{
	    key: 'hasEvent',
	    value: function hasEvent(name) {
	      this._hasEvents = true;
	
	      this.hasProp(name, {
	        type: _ReactPropTypes2.default.func,
	        updateInitial: true,
	        update: function update(threeObject, callback) {
	          threeObject.userData._eventCallbacks[name] = callback;
	        },
	
	        default: null
	      });
	    }
	  }, {
	    key: 'removeProp',
	    value: function removeProp(name) {
	      (0, _invariant2.default)(this.propTypes.hasOwnProperty(name), 'The property %s has not been defined', name);
	
	      var simpleIndex = this._simpleProperties.indexOf(name);
	      if (simpleIndex !== -1) {
	        this._simpleProperties.splice(simpleIndex, 1);
	      }
	
	      delete this.propTypes[name];
	      delete this.propDeletes[name];
	      delete this.propUpdates[name];
	      delete this.propDefaults[name];
	
	      var updateInitialIndex = this._updateInitial.indexOf(name);
	      if (updateInitialIndex !== -1) {
	        this._updateInitial.splice(updateInitialIndex, 1);
	      }
	
	      delete this._initialOnly[name];
	    }
	  }, {
	    key: 'hasProp',
	    value: function hasProp(name, info) {
	      var _this = this;
	
	      (0, _invariant2.default)(info.hasOwnProperty('type'), 'The information should include a `type` property');
	      (0, _invariant2.default)(!this.propTypes.hasOwnProperty(name) || info.override, 'The property %s has already been defined', name);
	
	      if (info.override) {
	        // clean up simple prop
	        var simpleIndex = this._simpleProperties.indexOf(name);
	        if (simpleIndex !== -1) {
	          this._simpleProperties.splice(simpleIndex, 1);
	        }
	      }
	
	      this.propTypes[name] = info.type;
	
	      if (info.hasOwnProperty('simple')) {
	        this.registerSimpleProperties([name]);
	
	        if (info.hasOwnProperty('default')) {
	          this.propDeletes[name] = function (threeObject) {
	            _this.propUpdates[name](threeObject, info.default, true);
	          };
	
	          this.propDefaults[name] = info.default;
	        }
	      } else {
	        if (info.hasOwnProperty('update')) {
	          this.propUpdates[name] = info.update;
	        }
	
	        if (info.hasOwnProperty('default')) {
	          (0, _invariant2.default)(info.hasOwnProperty('update'), 'The information should include a `update` property ' + 'if it has a `default` property');
	
	          this.propDeletes[name] = function (threeObject) {
	            info.update(threeObject, info.default, true);
	          };
	
	          this.propDefaults[name] = info.default;
	        } else {
	          (0, _invariant2.default)(info.update === this.triggerRemount, 'The type information for ' + this.constructor.name + '.' + name + ' ' + 'should include a `default` property if it\'s not going to trigger remount');
	        }
	
	        if (info.hasOwnProperty('remove')) {
	          (0, _invariant2.default)(false, 'Bad \'remove\' info for ' + this.constructor.name + '.' + name);
	        }
	
	        if (info.hasOwnProperty('updateInitial')) {
	          (0, _invariant2.default)(info.hasOwnProperty('update'), 'The information should include a ' + '`update` property if it has a`updateInitial` property');
	
	          if (process.env.NODE_ENV !== 'production') {
	            (0, _invariant2.default)(info.hasOwnProperty('default') || this.propUpdates[name].length === 3 || this.propUpdates[name] === this.triggerRemount, 'Prop info for ' + this.constructor.name + '.' + name + ' has \'updateInitial\', ' + 'but no \'default\', and ' + ('the update function accepts ' + this.propUpdates[name].length) + ' parameters instead of 3.');
	          }
	
	          if (this._updateInitial.indexOf(name) === -1) {
	            this._updateInitial.push(name);
	          }
	        }
	
	        if (info.initialOnly) {
	          (0, _invariant2.default)(info.hasOwnProperty('updateInitial'), 'The information should include a ' + '`updateInitial` property if it has an `initialOnly` property');
	        }
	
	        this._initialOnly[name] = info.initialOnly;
	      }
	    }
	  }, {
	    key: 'hasName',
	    value: function hasName() {
	      var _this2 = this;
	
	      this._hasName = true;
	
	      this.hasProp('name', {
	        type: _ReactPropTypes2.default.string,
	        update: function update(threeObject, name) {
	          _this2._updateName(threeObject, name);
	        },
	        default: ''
	      });
	    }
	  }, {
	    key: '_updateName',
	    value: function _updateName(threeObject, nextName) {
	      var oldName = threeObject.name;
	
	      threeObject.name = nextName;
	
	      threeObject.userData.events.emit('rename', {
	        oldName: oldName,
	        nextName: nextName
	      });
	
	      var markup = threeObject.userData.markup;
	
	      if (markup._rootInstance) {
	        markup._rootInstance.objectRenamed(threeObject, oldName, nextName);
	      }
	    }
	  }, {
	    key: 'placeRemountTrigger',
	    value: function placeRemountTrigger(threeObject, triggerRemount) {
	      threeObject.userData._triggerRemount = triggerRemount;
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      var _this3 = this;
	
	      // do nothing for now
	
	      var eventsForObject = new EventEmitter();
	
	      if (this._hasName && props.name) {
	        threeObject.name = props.name;
	      }
	
	      if (this._hasEvents) {
	        threeObject.userData._eventCallbacks = {};
	      }
	
	      // pass down resources
	
	      eventsForObject.on('resource.added', function (data) {
	        var childrenMarkup = threeObject.userData.markup.childrenMarkup;
	
	        var increasedDistance = _extends({}, data, {
	          distance: data.distance + 1
	        });
	
	        childrenMarkup.forEach(function (childMarkup) {
	          return childMarkup.threeObject.userData.events.emit('resource.added', increasedDistance);
	        });
	      });
	
	      eventsForObject.on('resource.removed', function (data) {
	        var childrenMarkup = threeObject.userData.markup.childrenMarkup;
	
	        var increasedDistance = _extends({}, data, {
	          distance: data.distance + 1
	        });
	
	        childrenMarkup.forEach(function (childMarkup) {
	          return childMarkup.threeObject.userData.events.emit('resource.removed', increasedDistance);
	        });
	      });
	
	      threeObject.userData.events = eventsForObject;
	      threeObject.userData._descriptor = this;
	
	      this._updateInitial.forEach(function (propertyName) {
	        if (props.hasOwnProperty(propertyName)) {
	          _this3.propUpdates[propertyName](threeObject, props[propertyName], true);
	        } else {
	          var originalValue = void 0;
	
	          if (_this3.propDefaults.hasOwnProperty(propertyName)) {
	            originalValue = _this3.propDefaults[propertyName];
	          }
	
	          _this3.propUpdates[propertyName](threeObject, originalValue, false);
	        }
	      });
	
	      this._simpleProperties.forEach(function (propertyName) {
	        if (props.hasOwnProperty(propertyName)) {
	          threeObject[propertyName] = props[propertyName];
	        }
	      });
	    }
	  }, {
	    key: 'construct',
	    value: function construct(props) {
	      // eslint-disable-line no-unused-vars
	      (0, _invariant2.default)(false, 'Missing constructor!');
	    }
	
	    // noinspection JSUnusedLocalSymbols
	
	  }, {
	    key: 'addChildren',
	    value: function addChildren(threeObject, children) {
	      // eslint-disable-line no-unused-vars
	      (0, _invariant2.default)(false, 'Cannot add children to ' + this.constructor.name + '!');
	    }
	
	    // noinspection JSUnusedLocalSymbols
	
	  }, {
	    key: 'addChild',
	    value: function addChild(threeObject, child, mountIndex) {
	      // eslint-disable-line no-unused-vars
	      (0, _invariant2.default)(false, 'Cannot add child to ' + this.constructor.name + '!');
	    }
	  }, {
	    key: 'moveChild',
	    value: function moveChild() {
	      (0, _invariant2.default)(false, 'Cannot move children in ' + this.constructor.name + '!');
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild(threeObject, child) {
	      // eslint-disable-line no-unused-vars
	      (0, _invariant2.default)(false, 'Cannot remove children in ' + this.constructor.name + '!');
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(threeObject, parentObject3D) {
	      var parentMarkup = parentObject3D.userData.markup;
	
	      if (parentMarkup && parentMarkup._rootInstance) {
	        parentMarkup._rootInstance.objectMounted(threeObject);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount(threeObject) {// eslint-disable-line no-unused-vars
	
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(threeObject) {
	      var markup = threeObject.userData.markup;
	
	      if (markup._rootInstance) {
	        markup._rootInstance.objectRemoved(threeObject);
	      }
	
	      if (this._hasEvents) {
	        delete threeObject.userData._eventCallbacks;
	      }
	
	      threeObject.userData.events.emit('dispose', {
	        object: threeObject
	      });
	
	      threeObject.userData.events.removeAllListeners();
	    }
	  }, {
	    key: 'removedFromParent',
	    value: function removedFromParent(threeObject) {
	      delete threeObject.userData.events;
	    }
	
	    // noinspection JSUnusedLocalSymbols
	
	  }, {
	    key: 'deleteProperty',
	    value: function deleteProperty(threeObject, propKey) {
	      // eslint-disable-line no-unused-vars
	      if (this.propDeletes[propKey]) {
	        this.propDeletes[propKey](threeObject);
	      } else if (process.env.NODE_ENV !== 'production') {
	        (0, _warning2.default)(false, 'Cannot delete property %s from ' + this.constructor.name, propKey);
	      }
	    }
	  }, {
	    key: 'updateProperty',
	    value: function updateProperty(threeObject, propKey, nextProp) {
	      if (!this._initialOnly[propKey]) {
	        if (this.propUpdates[propKey]) {
	          this.propUpdates[propKey](threeObject, nextProp, true);
	        } else {
	          (0, _warning2.default)(false, 'updating prop ' + propKey + ' ( ' + nextProp + ' ) for ' + this.constructor.name);
	          this.triggerRemount(threeObject);
	        }
	      } else {
	        this.triggerRemount(threeObject);
	      }
	    }
	  }, {
	    key: 'highlight',
	    value: function highlight(threeObject) {// eslint-disable-line no-unused-vars
	      // no highlighting by default!
	    }
	  }, {
	    key: 'hideHighlight',
	    value: function hideHighlight(threeObject) {} // eslint-disable-line no-unused-vars
	    // no highlighting by default!
	
	
	    /**
	     * @protected
	     * @param names
	     */
	
	  }, {
	    key: 'useSimpleUpdates',
	    value: function useSimpleUpdates(names) {
	      for (var index = 0; index < names.length; ++index) {
	        var propName = names[index];
	        this.propUpdates[propName] = this._updateSimple.bind(this, propName);
	      }
	    }
	  }, {
	    key: '_updateSimple',
	    value: function _updateSimple(propName, threeObject, propValue) {
	      threeObject[propName] = propValue;
	    }
	  }, {
	    key: 'registerSimpleProperties',
	    value: function registerSimpleProperties(propertyNames) {
	      var _this4 = this;
	
	      propertyNames.forEach(function (propName) {
	        if (_this4._simpleProperties.indexOf(propName) === -1) {
	          _this4._simpleProperties.push(propName);
	        }
	      });
	
	      this.useSimpleUpdates(propertyNames);
	    }
	  }, {
	    key: 'getBoundingBoxes',
	    value: function getBoundingBoxes(threeObject) {
	      // eslint-disable-line no-unused-vars
	      return [];
	    }
	  }, {
	    key: 'triggerRemount',
	    value: function triggerRemount(threeObject) {
	      if (threeObject.userData._triggerRemount) {
	        threeObject.userData._triggerRemount();
	
	        delete threeObject.userData._triggerRemount;
	      }
	    }
	  }, {
	    key: 'beginPropertyUpdates',
	    value: function beginPropertyUpdates(threeObject) {// eslint-disable-line no-unused-vars
	    }
	  }, {
	    key: 'completePropertyUpdates',
	    value: function completePropertyUpdates(threeObject) {// eslint-disable-line no-unused-vars
	    }
	  }, {
	    key: 'beginChildUpdates',
	    value: function beginChildUpdates(threeObject) {// eslint-disable-line no-unused-vars
	    }
	  }, {
	    key: 'completeChildUpdates',
	    value: function completeChildUpdates(threeObject) {// eslint-disable-line no-unused-vars
	    }
	  }]);
	
	  return THREEElementDescriptor;
	}();
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    // @see ReactElementValidator
	
	    var loggedTypeFailures = {};
	
	    var getDeclarationErrorAddendum = function getDeclarationErrorAddendum(owner) {
	      if (owner) {
	        var name = owner.getName();
	        if (name) {
	          return ' Check the render method of `' + name + '`.';
	        }
	      }
	      return '';
	    };
	
	    /**
	     * Assert that the props are valid
	     * @private
	     */
	    var _checkPropTypes = function _checkPropTypes(componentName, propTypes, props, location, owner, element, debugID) {
	      var propNames = Object.keys(props);
	      for (var i = 0; i < propNames.length; ++i) {
	        var propName = propNames[i];
	
	        if (propName === 'children') {
	          continue;
	        }
	
	        if (!propTypes.hasOwnProperty(propName)) {
	          var errorMessage = 'Foreign prop ' + propName + ' found in ' + componentName + '.';
	
	          if (!(errorMessage in loggedTypeFailures)) {
	            var addendum = getDeclarationErrorAddendum(owner);
	
	            // Only monitor this failure once because there tends to be a lot of the
	            // same error.
	            loggedTypeFailures[errorMessage] = true;
	
	            (0, _warning2.default)(false, '' + errorMessage + addendum);
	          }
	        }
	      }
	
	      (0, _checkReactTypeSpec2.default)(propTypes, props, location, componentName, element, debugID);
	    };
	
	    THREEElementDescriptor.prototype.checkPropTypes = function checkPropTypes(element, owner, debugID, props) {
	      _checkPropTypes(element.type, this.propTypes, props, _ReactPropTypeLocations2.default.prop, owner, element, debugID);
	    };
	  })();
	}
	
	module.exports = THREEElementDescriptor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 674:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _class, _temp, _initialiseProps;
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _warning = __webpack_require__(578);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _ReactUpdates = __webpack_require__(618);
	
	var _ReactUpdates2 = _interopRequireDefault(_ReactUpdates);
	
	var _Viewport = __webpack_require__(675);
	
	var _Viewport2 = _interopRequireDefault(_Viewport);
	
	var _Module = __webpack_require__(676);
	
	var _Module2 = _interopRequireDefault(_Module);
	
	var _React3Renderer = __webpack_require__(604);
	
	var _React3Renderer2 = _interopRequireDefault(_React3Renderer);
	
	var _ResourceContainer = __webpack_require__(677);
	
	var _ResourceContainer2 = _interopRequireDefault(_ResourceContainer);
	
	var _CameraUtils = __webpack_require__(678);
	
	var _CameraUtils2 = _interopRequireDefault(_CameraUtils);
	
	var _isWebglSupported = __webpack_require__(679);
	
	var _isWebglSupported2 = _interopRequireDefault(_isWebglSupported);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var rendererProperties = ['gammaInput', 'gammaOutput'];
	
	var React3DInstance = (_temp = _class = function () {
	  function React3DInstance(props, rendererInstance) {
	    var _this = this;
	
	    _classCallCheck(this, React3DInstance);
	
	    _initialiseProps.call(this);
	
	    var mainCamera = props.mainCamera;
	    var onAnimate = props.onAnimate;
	    var onRecreateCanvas = props.onRecreateCanvas;
	    var onRendererUpdated = props.onRendererUpdated;
	    var onManualRenderTriggerCreated = props.onManualRenderTriggerCreated;
	    var forceManualRender = props.forceManualRender;
	
	    this._parameters = _extends({}, props);
	
	    this._rendererInstance = rendererInstance;
	
	    this._mounted = false;
	    this._willUnmount = false;
	    this._scene = null;
	
	    this._mainCameraName = mainCamera;
	    this._viewports = [];
	    /**
	     * @type {Array.<React3Module>}
	     */
	    this._modules = [];
	
	    this._resourceContainers = [];
	    this._recreateCanvasCallback = onRecreateCanvas;
	    this._rendererUpdatedCallback = onRendererUpdated;
	    this._manualRenderTriggerCallback = onManualRenderTriggerCreated;
	    this._forceManualRender = forceManualRender;
	
	    this._warnedAboutManualRendering = false;
	
	    this._canvas = null;
	
	    this._onAnimate = onAnimate;
	    this._objectsByUUID = {};
	    this._materials = [];
	    this._geometries = [];
	    this._textures = [];
	    this._objectsByName = {};
	
	    this._lastRenderMode = null;
	
	    this._renderTrigger = function (renderThisFrame) {
	      if (renderThisFrame) {
	        _this._render();
	      } else if (_this._renderRequest === null) {
	        _this._renderRequest = requestAnimationFrame(_this._render);
	      }
	    };
	
	    this.uuid = _three2.default.Math.generateUUID();
	    this.userData = {};
	
	    if (process.env.NODE_ENV !== 'production' || process.env.ENABLE_REACT_ADDON_HOOKS === 'true') {
	      this._highlightScene = new _three2.default.Scene();
	
	      this._highlightGeometry = new _three2.default.BoxGeometry(1, 1, 1);
	      this._highlightMaterial = new _three2.default.MeshBasicMaterial({
	        color: 0x0000ff,
	        transparent: true,
	        opacity: 0.4
	      });
	
	      this._highlightObjectId = null;
	      this._getHighlightBoundingBox = null;
	
	      this._hideHighlight = function () {
	        _this._highlightObjectId = null;
	        _this._getHighlightBoundingBox = null;
	      };
	
	      this._objectHighlighted = function (info) {
	        var uuid = info.uuid;
	        var boundingBoxFunc = info.boundingBoxFunc;
	
	        var obj = void 0;
	
	        if (_this._highlightObjectId) {
	          obj = _this._objectsByUUID[_this._highlightObjectId];
	
	          obj.userData.events.removeListener('hideHighlight', _this._hideHighlight);
	        }
	
	        _this._highlightObjectId = uuid;
	        _this._getHighlightBoundingBox = boundingBoxFunc;
	
	        obj = _this._objectsByUUID[uuid];
	
	        obj.userData.events.once('hideHighlight', _this._hideHighlight);
	      };
	    }
	  }
	
	  _createClass(React3DInstance, [{
	    key: '_createRenderer',
	    value: function _createRenderer() {
	      if (!this._canvas) {
	        return;
	      }
	
	      var parameters = this._parameters;
	      var rendererArgs = {
	        canvas: this._canvas,
	        precision: parameters.precision,
	        alpha: parameters.alpha,
	        premultipliedAlpha: parameters.premultipliedAlpha,
	        antialias: parameters.antialias,
	        stencil: parameters.stencil,
	        preserveDrawingBuffer: parameters.preserveDrawingBuffer,
	        depth: parameters.depth,
	        logarithmicDepthBuffer: parameters.logarithmicDepthBuffer
	      };
	
	      this._renderer = (0, _isWebglSupported2.default)() ? new _three2.default.WebGLRenderer(rendererArgs) : new _three2.default.CanvasRenderer(rendererArgs);
	
	      if (this._rendererUpdatedCallback) {
	        this._rendererUpdatedCallback(this._renderer);
	      }
	
	      var renderer = this._renderer;
	
	      if (parameters.hasOwnProperty('pixelRatio')) {
	        renderer.setPixelRatio(parameters.pixelRatio);
	      }
	
	      if (parameters.hasOwnProperty('sortObjects')) {
	        renderer.sortObjects = parameters.sortObjects;
	      }
	
	      var hasClearColor = parameters.hasOwnProperty('clearColor');
	      var hasClearAlpha = parameters.hasOwnProperty('clearAlpha');
	
	      if (hasClearColor || hasClearAlpha) {
	        var clearColor = void 0;
	
	        if (hasClearColor) {
	          clearColor = parameters.clearColor;
	        } else {
	          clearColor = new _three2.default.Color(0x000000); // default clear color
	        }
	
	        if (hasClearAlpha) {
	          if (process.env.NODE_ENV !== 'production') {
	            (0, _warning2.default)(parameters.alpha === true, 'The `clearAlpha` property' + ' requires the `alpha` property to be `true`.');
	          }
	
	          renderer.setClearColor(clearColor, parameters.clearAlpha);
	        } else {
	          renderer.setClearColor(clearColor);
	        }
	      }
	
	      if (parameters.hasOwnProperty('shadowMapEnabled')) {
	        renderer.shadowMap.enabled = parameters.shadowMapEnabled;
	      }
	
	      if (parameters.hasOwnProperty('shadowMapType')) {
	        renderer.shadowMap.type = parameters.shadowMapType;
	      }
	
	      if (parameters.hasOwnProperty('shadowMapCullFace')) {
	        renderer.shadowMap.cullFace = parameters.shadowMapCullFace;
	      }
	
	      if (parameters.hasOwnProperty('shadowMapDebug')) {
	        renderer.shadowMap.debug = parameters.shadowMapDebug;
	      }
	
	      rendererProperties.forEach(function (propertyName) {
	        if (parameters.hasOwnProperty(propertyName)) {
	          renderer[propertyName] = parameters[propertyName];
	        }
	      });
	
	      renderer.setSize(parameters.width, parameters.height);
	    }
	  }, {
	    key: 'initialize',
	    value: function initialize() {
	      this.userData.events.on('animate', this._callOnAnimate);
	
	      if (this._forceManualRender) {
	        if (process.env.NODE_ENV !== 'production') {
	          if (!this._manualRenderTriggerCallback && !this._warnedAboutManualRendering) {
	            this._warnedAboutManualRendering = true;
	
	            (0, _warning2.default)(false, 'The `forceManualRender` property requires the ' + '`onManualRenderTriggerCreated` property to be set.');
	          }
	        }
	
	        this._renderRequest = null;
	      } else {
	        this._renderRequest = requestAnimationFrame(this._render);
	      }
	
	      if (this._manualRenderTriggerCallback) {
	        this._manualRenderTriggerCallback(this._renderTrigger);
	      }
	    }
	  }, {
	    key: 'getObjectsByName',
	    value: function getObjectsByName(objectName) {
	      var objectsByName = this._objectsByName[objectName];
	
	      var result = void 0;
	
	      if (objectsByName) {
	        (function () {
	          var idToObjectMap = objectsByName.values;
	          result = Object.keys(idToObjectMap).map(function (name) {
	            return idToObjectMap[name];
	          });
	        })();
	      } else {
	        result = [];
	      }
	
	      return result;
	    }
	  }, {
	    key: 'addAnimateListener',
	    value: function addAnimateListener(callback) {
	      this.userData.events.on('animate', callback);
	    }
	  }, {
	    key: 'removeAnimateListener',
	    value: function removeAnimateListener(callback) {
	      this.userData.events.removeListener('animate', callback);
	    }
	  }, {
	    key: 'addBeforeRenderListener',
	    value: function addBeforeRenderListener(callback) {
	      this.userData.events.on('preRender', callback);
	    }
	  }, {
	    key: 'removeBeforeRenderListener',
	    value: function removeBeforeRenderListener(callback) {
	      this.userData.events.removeListener('preRender', callback);
	    }
	  }, {
	    key: 'addChildren',
	    value: function addChildren(children) {
	      for (var i = 0; i < children.length; ++i) {
	        var child = children[i];
	
	        if (child instanceof _three2.default.Scene) {
	          this.setScene(child);
	        } else if (child instanceof _Viewport2.default) {
	          this.addViewport(child);
	        } else if (child instanceof _Module2.default) {
	          this.addModule(child);
	        } else if (child instanceof _ResourceContainer2.default) {
	          this.addResourceContainer(child);
	        } else {
	          (0, _invariant2.default)(false, 'The react3 component should only contain ' + '<viewport/>s or <scene/>s or <resources/>.');
	        }
	      }
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild(child) {
	      if (child instanceof _three2.default.Scene) {
	        if (this._scene === child) {
	          this.setScene(null);
	        }
	      } else if (child instanceof _Viewport2.default) {
	        this.removeViewport(child);
	      } else if (child instanceof _Module2.default) {
	        this.removeModule(child);
	      } else if (child instanceof _ResourceContainer2.default) {
	        this.removeResourceContainer(child);
	      } else {
	        (0, _invariant2.default)(false, 'The react3 component should only contain ' + '<viewport/>s or <scene/>s, <module/>s or <resources/>.');
	      }
	    }
	  }, {
	    key: '_renderScene',
	    value: function _renderScene(camera) {
	      this._renderer.render(this._scene, camera);
	
	      if (process.env.NODE_ENV !== 'production' || process.env.ENABLE_REACT_ADDON_HOOKS === 'true') {
	        if (this._highlightObjectId !== null) {
	          var boundingBoxes = this._getHighlightBoundingBox();
	
	          var highlightScene = this._highlightScene;
	
	          var diff = highlightScene.children.length - boundingBoxes.length;
	
	          if (diff > 0) {
	            for (var i = 0; i < diff; i++) {
	              highlightScene.remove(highlightScene.children[0]);
	            }
	          } else if (diff < 0) {
	            for (var _i = 0; _i < -diff; _i++) {
	              highlightScene.add(new _three2.default.Mesh(this._highlightGeometry, this._highlightMaterial));
	            }
	          }
	
	          for (var _i2 = 0; _i2 < boundingBoxes.length; ++_i2) {
	            var boundingBox = boundingBoxes[_i2];
	
	            var center = boundingBox.min.clone().add(boundingBox.max).multiplyScalar(0.5);
	
	            var size = boundingBox.max.clone().sub(boundingBox.min);
	
	            var highlightCube = highlightScene.children[_i2];
	
	            highlightCube.position.copy(center);
	            highlightCube.scale.copy(size);
	          }
	
	          var autoClear = this._renderer.autoClear;
	          this._renderer.autoClear = false;
	          this._renderer.render(highlightScene, camera);
	          this._renderer.autoClear = autoClear;
	        }
	      }
	    }
	  }, {
	    key: 'setScene',
	    value: function setScene(scene) {
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(!(this._scene && scene), 'There can only be one scene in <react3/>');
	      }
	
	      this._scene = scene;
	    }
	  }, {
	    key: 'addViewport',
	    value: function addViewport(viewport) {
	      this._viewports.push(viewport);
	    }
	  }, {
	    key: 'removeViewport',
	    value: function removeViewport(viewport) {
	      var index = this._viewports.indexOf(viewport);
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(index !== -1, 'A viewport has been removed from ' + '<react3/> but it was not present in it...');
	      }
	
	      this._viewports.splice(index, 1);
	    }
	  }, {
	    key: 'addResourceContainer',
	    value: function addResourceContainer(resourceContainer) {
	      this._resourceContainers.push(resourceContainer);
	    }
	  }, {
	    key: 'removeResourceContainer',
	    value: function removeResourceContainer(resourceContainer) {
	      var index = this._resourceContainers.indexOf(resourceContainer);
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(index !== -1, 'A resource container has been removed ' + 'from <react3/> but it was not present in it...');
	      }
	
	      this._resourceContainers.splice(index, 1);
	    }
	  }, {
	    key: 'addModule',
	    value: function addModule(module) {
	      this._modules.push(module);
	    }
	  }, {
	    key: 'removeModule',
	    value: function removeModule(module) {
	      var index = this._modules.indexOf(module);
	
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(index !== -1, 'A module has been removed from ' + '<react3/> but it was not present in it...');
	      }
	
	      this._modules.splice(index, 1);
	    }
	  }, {
	    key: 'updateWidth',
	    value: function updateWidth(newWidth) {
	      this._parameters.width = newWidth;
	      if (!this._renderer) {
	        return;
	      }
	
	      this._renderer.setSize(this._parameters.width, this._parameters.height);
	    }
	  }, {
	    key: 'updateOnRecreateCanvas',
	    value: function updateOnRecreateCanvas(threeObject, callback) {
	      this._recreateCanvasCallback = callback;
	    }
	  }, {
	    key: 'updateOnRendererUpdated',
	    value: function updateOnRendererUpdated(callback) {
	      this._rendererUpdatedCallback = callback;
	    }
	  }, {
	    key: 'updateOnManualRenderTriggerCreated',
	    value: function updateOnManualRenderTriggerCreated(callback) {
	      this._manualRenderTriggerCallback = callback;
	
	      if (callback) {
	        this._manualRenderTriggerCallback(this._renderTrigger);
	      }
	    }
	  }, {
	    key: 'updateForceManualRender',
	    value: function updateForceManualRender(forceManualRender) {
	      if (this._forceManualRender === forceManualRender) {
	        return;
	      }
	
	      this._forceManualRender = forceManualRender;
	
	      if (forceManualRender) {
	        // was just set to be forced
	        cancelAnimationFrame(this._renderRequest);
	        this._renderRequest = null;
	      } else {
	        // was just restored
	
	        this._renderRequest = requestAnimationFrame(this._render);
	      }
	    }
	  }, {
	    key: 'updateHeight',
	    value: function updateHeight(newHeight) {
	      this._parameters.height = newHeight;
	      if (!this._renderer) {
	        return;
	      }
	
	      this._renderer.setSize(this._parameters.width, this._parameters.height);
	    }
	  }, {
	    key: 'updatePixelRatio',
	    value: function updatePixelRatio(newPixelRatio) {
	      this._parameters.pixelRatio = newPixelRatio;
	      if (!this._renderer) {
	        return;
	      }
	
	      this._renderer.setPixelRatio(newPixelRatio);
	      this._renderer.setSize(this._parameters.width, this._parameters.height);
	    }
	  }, {
	    key: 'updateSortObjects',
	    value: function updateSortObjects(sortObjects) {
	      this._parameters.sortObjects = sortObjects;
	
	      if (!this._renderer) {
	        return;
	      }
	
	      this._renderer.sortObjects = sortObjects;
	    }
	  }, {
	    key: 'updateAntialias',
	    value: function updateAntialias(antialias) {
	      this._parameters.antialias = antialias;
	      // no renderer, this only happens initially or we're about to recreate it anyway.
	      // unless something broke, then we have bigger problems...
	      if (!this._renderer) {
	        return;
	      }
	
	      this.refreshRenderer();
	    }
	  }, {
	    key: 'updatePrecision',
	    value: function updatePrecision(precision) {
	      this._parameters.precision = precision;
	      if (!this._renderer) {
	        return;
	      }
	
	      this.refreshRenderer();
	    }
	  }, {
	    key: 'updateAlpha',
	    value: function updateAlpha(alpha) {
	      this._parameters.alpha = alpha;
	      if (!this._renderer) {
	        return;
	      }
	
	      this.refreshRenderer();
	    }
	  }, {
	    key: 'updatePremultipliedAlpha',
	    value: function updatePremultipliedAlpha(premultipliedAlpha) {
	      this._parameters.premultipliedAlpha = premultipliedAlpha;
	      if (!this._renderer) {
	        return;
	      }
	
	      this.refreshRenderer();
	    }
	  }, {
	    key: 'updateStencil',
	    value: function updateStencil(stencil) {
	      this._parameters.stencil = stencil;
	      if (!this._renderer) {
	        return;
	      }
	
	      this.refreshRenderer();
	    }
	  }, {
	    key: 'updatePreserveDrawingBuffer',
	    value: function updatePreserveDrawingBuffer(preserveDrawingBuffer) {
	      this._parameters.preserveDrawingBuffer = preserveDrawingBuffer;
	      if (!this._renderer) {
	        return;
	      }
	
	      this.refreshRenderer();
	    }
	  }, {
	    key: 'updateDepth',
	    value: function updateDepth(depth) {
	      this._parameters.depth = depth;
	      if (!this._renderer) {
	        return;
	      }
	
	      this.refreshRenderer();
	    }
	  }, {
	    key: 'updateLogarithmicDepthBuffer',
	    value: function updateLogarithmicDepthBuffer(logarithmicDepthBuffer) {
	      this._parameters.logarithmicDepthBuffer = logarithmicDepthBuffer;
	      if (!this._renderer) {
	        return;
	      }
	
	      this.refreshRenderer();
	    }
	  }, {
	    key: 'updateShadowMapEnabled',
	    value: function updateShadowMapEnabled(shadowMapEnabled) {
	      this._parameters.shadowMapEnabled = shadowMapEnabled;
	
	      if (!this._renderer) {
	        return;
	      }
	
	      this._renderer.shadowMap.enabled = shadowMapEnabled;
	      this.allMaterialsNeedUpdate(true);
	    }
	  }, {
	    key: 'updateShadowMapType',
	    value: function updateShadowMapType(shadowMapType) {
	      this._parameters.shadowMapType = shadowMapType;
	
	      if (!this._renderer) {
	        return;
	      }
	
	      this._renderer.shadowMap.type = shadowMapType;
	      this.allMaterialsNeedUpdate(true);
	    }
	  }, {
	    key: 'updateShadowMapCullFace',
	    value: function updateShadowMapCullFace(shadowMapCullFace) {
	      this._parameters.shadowMapCullFace = shadowMapCullFace;
	
	      if (!this._renderer) {
	        return;
	      }
	
	      this._renderer.shadowMap.cullFace = shadowMapCullFace;
	      this.allMaterialsNeedUpdate(true);
	    }
	  }, {
	    key: 'updateShadowMapDebug',
	    value: function updateShadowMapDebug(shadowMapDebug) {
	      this._parameters.shadowMapDebug = shadowMapDebug;
	
	      if (!this._renderer) {
	        return;
	      }
	
	      this._renderer.shadowMap.debug = shadowMapDebug;
	      this.allMaterialsNeedUpdate(true);
	    }
	  }, {
	    key: 'updateCanvas',
	    value: function updateCanvas(canvas) {
	      this._canvas = canvas;
	
	      if (this._renderer) {
	        this.disposeResourcesAndRenderer();
	
	        var contextLossExtension = this._renderer.extensions.get('WEBGL_lose_context');
	        if (contextLossExtension) {
	          // noinspection JSUnresolvedFunction
	          contextLossExtension.loseContext();
	        }
	      }
	
	      this._createRenderer();
	    }
	  }, {
	    key: 'updateGammaInput',
	    value: function updateGammaInput(gammaInput) {
	      this._parameters.gammaInput = gammaInput;
	
	      if (!this._renderer) {
	        return;
	      }
	
	      this._renderer.gammaInput = gammaInput;
	      this.allMaterialsNeedUpdate(true);
	    }
	  }, {
	    key: 'updateGammaOutput',
	    value: function updateGammaOutput(gammaOutput) {
	      this._parameters.gammaOutput = gammaOutput;
	
	      if (!this._renderer) {
	        return;
	      }
	
	      this._renderer.gammaOutput = gammaOutput;
	      this.allMaterialsNeedUpdate(true);
	    }
	  }, {
	    key: 'updateContext',
	    value: function updateContext(context) {
	      this._parameters.context = context;
	    }
	  }, {
	    key: 'updateMainCamera',
	    value: function updateMainCamera(mainCamera) {
	      this._parameters.mainCamera = mainCamera;
	
	      this._mainCameraName = mainCamera;
	    }
	  }, {
	    key: 'updateOnAnimate',
	    value: function updateOnAnimate(onAnimate) {
	      this._parameters.onAnimate = onAnimate;
	
	      this._onAnimate = onAnimate;
	    }
	  }, {
	    key: 'updateClearColor',
	    value: function updateClearColor(clearColor) {
	      this._parameters.clearColor = clearColor;
	
	      if (!this._renderer) {
	        return;
	      }
	
	      if (this._parameters.hasOwnProperty('clearAlpha')) {
	        this._renderer.setClearColor(clearColor, this._parameters.clearAlpha);
	      } else {
	        this._renderer.setClearColor(clearColor);
	      }
	    }
	  }, {
	    key: 'updateClearAlpha',
	    value: function updateClearAlpha(clearAlpha) {
	      var parameters = this._parameters;
	
	      if (clearAlpha === undefined) {
	        delete parameters.clearAlpha;
	      } else {
	        parameters.clearAlpha = clearAlpha;
	      }
	
	      if (!this._renderer) {
	        return;
	      }
	
	      var clearColor = void 0;
	
	      if (parameters.hasOwnProperty('clearColor')) {
	        clearColor = parameters.clearColor;
	      } else {
	        clearColor = new _three2.default.Color(0x000000); // default clear color
	      }
	
	      if (clearAlpha !== undefined) {
	        this._renderer.setClearColor(clearColor, clearAlpha);
	      } else {
	        this._renderer.setClearColor(clearColor);
	      }
	    }
	  }, {
	    key: 'refreshRenderer',
	    value: function refreshRenderer() {
	      var _this2 = this;
	
	      this.disposeResourcesAndRenderer();
	
	      var contextLossExtension = this._renderer.extensions.get('WEBGL_lose_context');
	
	      delete this._renderer;
	      if (this._rendererUpdatedCallback) {
	        this._rendererUpdatedCallback(null);
	      }
	
	      this.userData.events.removeListener('animate', this._callOnAnimate);
	      this.userData.events.removeAllListeners();
	
	      if (this._renderRequest !== null) {
	        cancelAnimationFrame(this._renderRequest);
	        this._renderRequest = null;
	      }
	
	      if (contextLossExtension && this._canvas) {
	        this._canvas.addEventListener('webglcontextlost', function () {
	          // this should recreate the canvas
	          _this2._recreateCanvasCallback();
	        }, false);
	
	        // noinspection JSUnresolvedFunction
	        contextLossExtension.loseContext();
	      } else {
	        this._recreateCanvasCallback();
	      }
	    }
	  }, {
	    key: 'disposeResourcesAndRenderer',
	    value: function disposeResourcesAndRenderer() {
	      for (var i = 0; i < this._materials.length; ++i) {
	        var material = this._materials[i];
	        material.dispose();
	      }
	
	      for (var _i3 = 0; _i3 < this._geometries.length; ++_i3) {
	        var geometry = this._geometries[_i3];
	        geometry.dispose();
	      }
	
	      for (var _i4 = 0; _i4 < this._textures.length; ++_i4) {
	        var texture = this._textures[_i4];
	        texture.dispose();
	      }
	
	      this._renderer.dispose();
	    }
	  }, {
	    key: 'willUnmount',
	    value: function willUnmount() {
	      this._willUnmount = true;
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount() {
	      this._mounted = false;
	
	      if (this._renderRequest !== null) {
	        cancelAnimationFrame(this._renderRequest);
	        this._renderRequest = null;
	      }
	
	      this.userData.events.removeListener('animate', this._callOnAnimate);
	      this.userData.events.removeAllListeners();
	      delete this._rendererInstance;
	
	      if (this._renderer) {
	        var contextLossExtension = this._renderer.extensions.get('WEBGL_lose_context');
	
	        if (contextLossExtension) {
	          // noinspection JSUnresolvedFunction
	          contextLossExtension.loseContext();
	        }
	
	        this.disposeResourcesAndRenderer();
	
	        delete this._renderer;
	
	        if (this._rendererUpdatedCallback) {
	          this._rendererUpdatedCallback(null);
	        }
	      }
	
	      delete this._parameters;
	
	      (0, _invariant2.default)(Object.keys(this._objectsByUUID).length === 0, 'Failed to cleanup some child objects for React3DInstance');
	
	      delete this._objectsByUUID;
	      delete this._viewports;
	      delete this._scene;
	
	      if (process.env.NODE_ENV !== 'production' || process.env.ENABLE_REACT_ADDON_HOOKS === 'true') {
	        delete this._highlightScene;
	        delete this._highlightObjectId;
	        delete this._getHighlightBoundingBox;
	      }
	    }
	  }, {
	    key: 'objectMounted',
	    value: function objectMounted(object) {
	      (0, _invariant2.default)(!this._objectsByUUID[object.uuid], 'There already is an object with this uuid in the react 3d instance.');
	
	      this._objectsByUUID[object.uuid] = object;
	
	      object.userData.markup._rootInstance = this;
	
	      this._addObjectWithName(object.name, object);
	
	      if (process.env.NODE_ENV !== 'production' || process.env.ENABLE_REACT_ADDON_HOOKS === 'true') {
	        object.userData.events.on('highlight', this._objectHighlighted);
	      }
	
	      object.userData.events.emit('addedIntoRoot', object);
	
	      var current = object;
	
	      var childrenMarkup = current.userData.markup.childrenMarkup;
	
	      if (object instanceof _three2.default.Material) {
	        this._materials.push(object);
	      }
	
	      if (object instanceof _three2.default.Geometry || object instanceof _three2.default.BufferGeometry) {
	        this._geometries.push(object);
	      }
	
	      if (object instanceof _three2.default.Texture) {
	        this._textures.push(object);
	      }
	
	      for (var i = 0; i < childrenMarkup.length; ++i) {
	        var childMarkup = childrenMarkup[i];
	
	        this.objectMounted(childMarkup.threeObject);
	      }
	    }
	  }, {
	    key: 'allMaterialsNeedUpdate',
	    value: function allMaterialsNeedUpdate(dispose) {
	      this._materials.forEach(function (material) {
	        if (dispose) {
	          material.dispose();
	        } else {
	          material.needsUpdate = true;
	        }
	      });
	    }
	  }, {
	    key: 'objectRenamed',
	    value: function objectRenamed(object, oldName, nextName) {
	      this._removeObjectWithName(oldName, object);
	      this._addObjectWithName(nextName, object);
	    }
	  }, {
	    key: '_addObjectWithName',
	    value: function _addObjectWithName(objectName, object) {
	      if (!this._objectsByName[objectName]) {
	        this._objectsByName[objectName] = {
	          count: 0,
	          values: {}
	        };
	      }
	
	      this._objectsByName[objectName].values[object.uuid] = object;
	      this._objectsByName[objectName].count++;
	    }
	  }, {
	    key: '_removeObjectWithName',
	    value: function _removeObjectWithName(objectName, object) {
	      (0, _invariant2.default)(this._objectsByName[objectName] && this._objectsByName[objectName].values[object.uuid] === object, 'The object\'s name changed somehow?\'');
	
	      delete this._objectsByName[objectName].values[object.uuid];
	      this._objectsByName[objectName].count--;
	
	      if (this._objectsByName[objectName].count === 0) {
	        delete this._objectsByName[objectName];
	      }
	    }
	  }, {
	    key: 'objectRemoved',
	    value: function objectRemoved(object) {
	      (0, _invariant2.default)(this._objectsByUUID[object.uuid] === object, 'The removed object does not belong here!?');
	
	      if (process.env.NODE_ENV !== 'production' || process.env.ENABLE_REACT_ADDON_HOOKS === 'true') {
	        if (this._highlightObjectId === object.uuid) {
	          this._highlightObjectId = null;
	        }
	
	        object.userData.events.removeListener('highlight', this._objectHighlighted);
	        object.userData.events.removeListener('hideHighlight', this._hideHighlight);
	      }
	
	      delete this._objectsByUUID[object.uuid];
	
	      if (object instanceof _three2.default.Material) {
	        this._materials.splice(this._materials.indexOf(object), 1);
	      }
	      if (object instanceof _three2.default.Geometry || object instanceof _three2.default.BufferGeometry) {
	        this._geometries.splice(this._geometries.indexOf(object), 1);
	      }
	      if (object instanceof _three2.default.Texture) {
	        this._textures.splice(this._textures.indexOf(object), 1);
	      }
	
	      this._removeObjectWithName(object.name, object);
	
	      delete object.userData.markup._rootInstance;
	    }
	  }, {
	    key: 'mountedIntoRoot',
	    value: function mountedIntoRoot() {
	      this._mounted = true;
	      this.objectMounted(this);
	    }
	  }]);
	
	  return React3DInstance;
	}(), _initialiseProps = function _initialiseProps() {
	  var _this3 = this;
	
	  this._callOnAnimate = function () {
	    if (_this3._onAnimate) {
	      _ReactUpdates2.default.batchedUpdates(_this3._onAnimate);
	    }
	  };
	
	  this._render = function () {
	    for (var i = 0; i < _this3._modules.length; ++i) {
	      _this3._modules[i].update();
	    }
	
	    if (_this3._forceManualRender) {
	      _this3._renderRequest = null;
	    } else {
	      _this3._renderRequest = requestAnimationFrame(_this3._render);
	    }
	
	    _this3.userData.events.emit('animate');
	
	    // the scene can be destroyed within the 'animate' event
	    if (!_this3._scene || !_this3._mounted || !_this3._renderer) {
	      return;
	    }
	
	    var mainCamera = null;
	
	    if (_this3._mainCameraName) {
	      var objectsWithMainCameraName = _this3._objectsByName[_this3._mainCameraName];
	
	      if (objectsWithMainCameraName) {
	        if (process.env.NODE_ENV !== 'production') {
	          (0, _warning2.default)(objectsWithMainCameraName.count < 2, 'There are multiple objects with name ' + _this3._mainCameraName);
	        }
	
	        if (objectsWithMainCameraName.count > 0) {
	          var values = objectsWithMainCameraName.values;
	          mainCamera = values[Object.keys(values)[0]];
	        }
	      }
	    }
	
	    if (mainCamera) {
	      if (_this3._lastRenderMode !== 'camera') {
	        _this3._renderer.autoClear = true;
	        _this3._renderer.setViewport(0, 0, _this3._parameters.width, _this3._parameters.height);
	        _this3._lastRenderMode = 'camera';
	      }
	      _CameraUtils2.default.current = mainCamera;
	      _this3.userData.events.emit('preRender');
	      _this3._renderScene(mainCamera);
	      _CameraUtils2.default.current = null;
	    } else if (_this3._viewports.length > 0) {
	      if (_this3._lastRenderMode !== 'viewport') {
	        _this3._renderer.autoClear = false;
	        _this3._lastRenderMode = 'viewport';
	      }
	
	      _this3._renderer.clear();
	      _this3._viewports.forEach(function (viewport) {
	        var viewportCamera = null;
	
	        if (viewport.cameraName) {
	          var objectsWithViewportCameraName = _this3._objectsByName[viewport.cameraName];
	
	          if (objectsWithViewportCameraName) {
	            if (process.env.NODE_ENV !== 'production') {
	              (0, _warning2.default)(objectsWithViewportCameraName.count < 2, 'There are multiple objects with name ' + viewport.cameraName);
	            }
	
	            if (objectsWithViewportCameraName.count > 0) {
	              var _values = objectsWithViewportCameraName.values;
	              viewportCamera = _values[Object.keys(_values)[0]];
	            }
	          }
	        }
	
	        if (!viewportCamera) {
	          return;
	        }
	
	        if (viewport.onBeforeRender) {
	          _ReactUpdates2.default.batchedUpdates(viewport.onBeforeRender);
	        }
	
	        _this3._renderer.setViewport(viewport.x, viewport.y, viewport.width, viewport.height);
	        _CameraUtils2.default.current = viewportCamera;
	        _this3.userData.events.emit('preRender');
	        _this3._renderScene(viewportCamera);
	        _CameraUtils2.default.current = null;
	      });
	    }
	  };
	}, _temp);
	
	module.exports = React3DInstance;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var Viewport = function Viewport(props) {
	  _classCallCheck(this, Viewport);
	
	  this.userData = {};
	
	  this.uuid = _three2.default.Math.generateUUID();
	
	  this.x = props.x;
	  this.y = props.y;
	  this.width = props.width;
	  this.height = props.height;
	  this.cameraName = props.cameraName;
	  this.onBeforeRender = props.onBeforeRender;
	};
	
	module.exports = Viewport;

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var React3Module = function () {
	  function React3Module() {
	    _classCallCheck(this, React3Module);
	
	    this.userData = {};
	    this.uuid = _three2.default.Math.generateUUID();
	  }
	
	  _createClass(React3Module, [{
	    key: 'setup',
	    value: function setup(react3RendererInstance) {// eslint-disable-line no-unused-vars
	
	    }
	  }, {
	    key: 'update',
	    value: function update() {}
	  }, {
	    key: 'dispose',
	    value: function dispose() {}
	  }]);
	
	  return React3Module;
	}();
	
	module.exports = React3Module;

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ResourceContainer = function (_THREE$Object3D) {
	  _inherits(ResourceContainer, _THREE$Object3D);
	
	  function ResourceContainer() {
	    _classCallCheck(this, ResourceContainer);
	
	    var _this = _possibleConstructorReturn(this, (ResourceContainer.__proto__ || Object.getPrototypeOf(ResourceContainer)).call(this));
	
	    _this.visible = false;
	
	    _this.resourceMap = {};
	    _this.resourceIds = [];
	    return _this;
	  }
	
	  return ResourceContainer;
	}(_three2.default.Object3D);
	
	module.exports = ResourceContainer;

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _class, _temp;
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var CameraUtils = (_temp = _class = function CameraUtils() {
	  _classCallCheck(this, CameraUtils);
	}, _class.current = null, _temp);
	
	module.exports = CameraUtils;

/***/ },

/***/ 679:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function () {
	  try {
	    var canvas = document.createElement('canvas');
	    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
	  } catch (e) {
	    return false;
	  }
	};

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _ReactPropTypeLocationNames = __webpack_require__(591);
	
	var _ReactPropTypeLocationNames2 = _interopRequireDefault(_ReactPropTypeLocationNames);
	
	var _PropTypeError = __webpack_require__(681);
	
	var _PropTypeError2 = _interopRequireDefault(_PropTypeError);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var ANONYMOUS = '<<anonymous>>';
	
	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!(propValue.constructor && (propValue.constructor.name || propValue.constructor.displayName))) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name || propValue.constructor.displayName;
	}
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, _componentName, location, _propFullName) {
	    var componentName = _componentName || ANONYMOUS;
	    var propFullName = _propFullName || propName;
	    if (props[propName] === undefined) {
	      var locationName = _ReactPropTypeLocationNames2.default[location];
	      if (isRequired) {
	        return new _PropTypeError2.default('Required ' + locationName + ' `' + propFullName + '`' + (' was not specified in `' + componentName + '`.'));
	      }
	      return null;
	    }
	
	    for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	      rest[_key - 6] = arguments[_key];
	    }
	
	    return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}
	
	function createInstanceTypeChecker(expectedClass) {
	  var originalInstanceOf = _ReactPropTypes2.default.instanceOf(expectedClass);
	
	  function validate(props, propName, componentName, location, propFullName) {
	    for (var _len2 = arguments.length, rest = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
	      rest[_key2 - 5] = arguments[_key2];
	    }
	
	    var originalResult = originalInstanceOf.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
	
	    if (originalResult !== null) {
	      var locationName = _ReactPropTypeLocationNames2.default[location];
	      var expectedClassName = expectedClass.name || expectedClass.displayName || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new _PropTypeError2.default('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	
	    return originalResult;
	  }
	
	  var typeChecker = createChainableTypeChecker(validate);
	
	  var _type = '' + (expectedClass.displayName || expectedClass.name || expectedClass._type || expectedClass);
	
	  typeChecker.toString = function () {
	    return '```' + ' ' + _type + ' ' + '```';
	  };
	
	  typeChecker.isRequired.toString = function () {
	    return typeChecker.toString() + ' *' + '```' + ' required ' + '```' + '*';
	  };
	
	  typeChecker.displayName = _type;
	  typeChecker.isRequired.displayName = _type;
	
	  return typeChecker;
	}
	
	module.exports = createInstanceTypeChecker;

/***/ },

/***/ 681:
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
	
	function PropTypeError(message) {
	  this.message = message;
	  this.stack = '';
	}
	// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype = Error.prototype;
	
	module.exports = PropTypeError;

/***/ },

/***/ 682:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _ReactPropTypeLocationNames = __webpack_require__(591);
	
	var _ReactPropTypeLocationNames2 = _interopRequireDefault(_ReactPropTypeLocationNames);
	
	var _THREEElementDescriptor = __webpack_require__(672);
	
	var _THREEElementDescriptor2 = _interopRequireDefault(_THREEElementDescriptor);
	
	var _Module = __webpack_require__(676);
	
	var _Module2 = _interopRequireDefault(_Module);
	
	var _PropTypeError = __webpack_require__(681);
	
	var _PropTypeError2 = _interopRequireDefault(_PropTypeError);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	// Returns class name of the object, if any.
	// Used for the subclass proptype checker
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return '<<anonymous>>';
	  }
	  return propValue.constructor.name;
	}
	
	var ModuleDescriptor = function (_THREEElementDescript) {
	  _inherits(ModuleDescriptor, _THREEElementDescript);
	
	  function ModuleDescriptor(react3RendererInstance) {
	    _classCallCheck(this, ModuleDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (ModuleDescriptor.__proto__ || Object.getPrototypeOf(ModuleDescriptor)).call(this, react3RendererInstance));
	
	    var moduleSubclassValidator = function moduleSubclassValidator(props, propName, componentName, location, propFullName) {
	      var locationName = _ReactPropTypeLocationNames2.default[location];
	
	      if (!props[propName]) {
	        return new _PropTypeError2.default('Required ' + locationName + ' `' + propFullName + '` ' + ('was not specified in `' + componentName + '`.'));
	      }
	
	      if (!(props[propName].prototype instanceof _Module2.default)) {
	        var actualClassName = getClassName(props[propName]);
	
	        return new _PropTypeError2.default('Invalid ' + locationName + ' `' + propFullName + '` ' + ('of type `' + actualClassName + '` supplied to `' + componentName + '`, ') + 'expected subclass of `Module`.');
	      }
	
	      // success returns undefined
	      return undefined;
	    };
	
	    moduleSubclassValidator.toString = function () {
	      return '```' + ' subclass of ReactThreeRenderer.Module ' + '```' + ' *' + '```' + ' required ' + '```' + '*';
	    };
	
	    _this.hasProp('descriptor', {
	      type: moduleSubclassValidator,
	      update: _this.triggerRemount,
	      default: undefined
	    });
	    return _this;
	  }
	
	  _createClass(ModuleDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      // going insane here but... let's... just do this.
	      var ModuleClass = props.descriptor;
	      return new ModuleClass();
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(ModuleDescriptor.prototype.__proto__ || Object.getPrototypeOf(ModuleDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      threeObject.setup(this.react3RendererInstance);
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(threeObject) {
	      threeObject.dispose();
	
	      _get(ModuleDescriptor.prototype.__proto__ || Object.getPrototypeOf(ModuleDescriptor.prototype), 'unmount', this).call(this, threeObject);
	    }
	  }]);
	
	  return ModuleDescriptor;
	}(_THREEElementDescriptor2.default);
	
	module.exports = ModuleDescriptor;

/***/ },

/***/ 683:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _Viewport = __webpack_require__(675);
	
	var _Viewport2 = _interopRequireDefault(_Viewport);
	
	var _THREEElementDescriptor = __webpack_require__(672);
	
	var _THREEElementDescriptor2 = _interopRequireDefault(_THREEElementDescriptor);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ViewportDescriptor = function (_THREEElementDescript) {
	  _inherits(ViewportDescriptor, _THREEElementDescript);
	
	  function ViewportDescriptor(react3Instance) {
	    _classCallCheck(this, ViewportDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (ViewportDescriptor.__proto__ || Object.getPrototypeOf(ViewportDescriptor)).call(this, react3Instance));
	
	    ['x', 'y', 'width', 'height'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number.isRequired,
	        simple: true
	      });
	    });
	
	    _this.hasProp('cameraName', {
	      type: _ReactPropTypes2.default.string.isRequired,
	      simple: true
	    });
	    return _this;
	  }
	
	  _createClass(ViewportDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      return new _Viewport2.default(props);
	    }
	  }]);
	
	  return ViewportDescriptor;
	}(_THREEElementDescriptor2.default);
	
	module.exports = ViewportDescriptor;

/***/ },

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _Object3DDescriptor2 = __webpack_require__(685);
	
	var _Object3DDescriptor3 = _interopRequireDefault(_Object3DDescriptor2);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var SceneDescriptor = function (_Object3DDescriptor) {
	  _inherits(SceneDescriptor, _Object3DDescriptor);
	
	  function SceneDescriptor(react3Instance) {
	    _classCallCheck(this, SceneDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (SceneDescriptor.__proto__ || Object.getPrototypeOf(SceneDescriptor)).call(this, react3Instance));
	
	    _this.hasProp('fog', {
	      type: (0, _propTypeInstanceOf2.default)(_three2.default.Fog),
	      simple: true,
	      default: undefined
	    });
	    return _this;
	  }
	
	  _createClass(SceneDescriptor, [{
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(SceneDescriptor.prototype.__proto__ || Object.getPrototypeOf(SceneDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	    }
	  }, {
	    key: 'construct',
	    value: function construct() {
	      return new _three2.default.Scene();
	    }
	  }]);
	
	  return SceneDescriptor;
	}(_Object3DDescriptor3.default);
	
	module.exports = SceneDescriptor;

/***/ },

/***/ 685:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _THREEElementDescriptor = __webpack_require__(672);
	
	var _THREEElementDescriptor2 = _interopRequireDefault(_THREEElementDescriptor);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	function _arrayMove(array, oldIndex, newIndex) {
	  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
	}
	
	var Object3DDescriptor = function (_THREEElementDescript) {
	  _inherits(Object3DDescriptor, _THREEElementDescript);
	
	  function Object3DDescriptor(react3Instance) {
	    _classCallCheck(this, Object3DDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (Object3DDescriptor.__proto__ || Object.getPrototypeOf(Object3DDescriptor)).call(this, react3Instance));
	
	    _this.hasName();
	
	    function copyUpdate(propName) {
	      return function (threeObject, value) {
	        threeObject[propName].copy(value);
	      };
	    }
	
	    _this.hasProp('position', {
	      type: (0, _propTypeInstanceOf2.default)(_three2.default.Vector3),
	      update: function update(threeObject, position) {
	        threeObject.position.copy(position);
	
	        if (threeObject.userData._lookAt) {
	          threeObject.lookAt(threeObject.userData._lookAt);
	        }
	      },
	
	      default: new _three2.default.Vector3()
	    });
	
	    _this.hasProp('rotation', {
	      type: (0, _propTypeInstanceOf2.default)(_three2.default.Euler),
	      update: function update(threeObject, rotation) {
	        threeObject.rotation.copy(rotation);
	      },
	
	      default: new _three2.default.Euler()
	    });
	
	    _this.hasProp('quaternion', {
	      type: (0, _propTypeInstanceOf2.default)(_three2.default.Quaternion),
	      update: copyUpdate('quaternion'),
	      default: new _three2.default.Quaternion()
	    });
	
	    _this.hasProp('scale', {
	      type: (0, _propTypeInstanceOf2.default)(_three2.default.Vector3),
	      update: copyUpdate('scale'),
	      default: new _three2.default.Vector3(1, 1, 1)
	    });
	
	    _this.hasProp('lookAt', {
	      type: (0, _propTypeInstanceOf2.default)(_three2.default.Vector3),
	      update: function update(threeObject, lookAt) {
	        threeObject.userData._lookAt = lookAt;
	
	        if (lookAt) {
	          threeObject.lookAt(lookAt);
	        }
	      },
	
	      default: undefined
	    });
	
	    ['frustumCulled', 'visible'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.bool,
	        simple: true,
	        default: true
	      });
	    });
	
	    _this.hasProp('renderOrder', {
	      type: _ReactPropTypes2.default.number,
	      simple: true
	    });
	
	    _this.hasProp('castShadow', {
	      type: _ReactPropTypes2.default.bool,
	      simple: true,
	      default: false
	    });
	
	    _this.hasProp('receiveShadow', {
	      type: _ReactPropTypes2.default.bool,
	      updateInitial: true,
	      update: function update(threeObject, receiveShadow) {
	        threeObject.receiveShadow = receiveShadow;
	
	        if (threeObject.material) {
	          threeObject.material.needsUpdate = true;
	        }
	      },
	
	      default: false
	    });
	    return _this;
	  }
	
	  _createClass(Object3DDescriptor, [{
	    key: 'construct',
	    value: function construct() {
	      return new _three2.default.Object3D();
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(Object3DDescriptor.prototype.__proto__ || Object.getPrototypeOf(Object3DDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      if (props.position) {
	        threeObject.position.copy(props.position);
	      }
	
	      if (props.scale) {
	        threeObject.scale.copy(props.scale);
	      }
	
	      if (props.rotation) {
	        threeObject.rotation.copy(props.rotation);
	      }
	
	      if (props.quaternion) {
	        threeObject.quaternion.copy(props.quaternion);
	      }
	
	      if (props.lookAt) {
	        threeObject.userData._lookAt = props.lookAt;
	        threeObject.lookAt(props.lookAt);
	      }
	    }
	
	    /**
	     * @param threeObject
	     * @param {Array} children
	     */
	
	  }, {
	    key: 'addChildren',
	    value: function addChildren(threeObject, children) {
	      children.forEach(function (child) {
	        threeObject.add(child);
	      });
	    }
	  }, {
	    key: 'addChild',
	    value: function addChild(threeObject, child, mountIndex) {
	      threeObject.add(child);
	
	      this.moveChild(threeObject, child, mountIndex, threeObject.children.length - 1);
	    }
	
	    /**
	     * @param {THREE.Object3D} threeObject
	     * @param child
	     */
	
	  }, {
	    key: 'removeChild',
	    value: function removeChild(threeObject, child) {
	      threeObject.remove(child);
	    }
	  }, {
	    key: 'moveChild',
	    value: function moveChild(threeObject, childObject, toIndex, lastIndex) {
	      // eslint-disable-line no-unused-vars
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(toIndex >= 0 && threeObject.children.length > toIndex, 'Cannot move a child to that index');
	      }
	      _arrayMove(threeObject.children, threeObject.children.indexOf(childObject), toIndex);
	    }
	  }, {
	    key: 'highlight',
	    value: function highlight(threeObject) {
	      var _this2 = this;
	
	      threeObject.userData.events.emit('highlight', {
	        uuid: threeObject.uuid,
	        boundingBoxFunc: function boundingBoxFunc() {
	          return _this2.getBoundingBoxes(threeObject);
	        }
	      });
	    }
	  }, {
	    key: 'getBoundingBoxes',
	    value: function getBoundingBoxes(threeObject) {
	      var boundingBox = new _three2.default.Box3();
	
	      boundingBox.setFromObject(threeObject);
	
	      return [boundingBox];
	    }
	  }, {
	    key: 'hideHighlight',
	    value: function hideHighlight(threeObject) {
	      threeObject.userData.events.emit('hideHighlight');
	    }
	  }]);
	
	  return Object3DDescriptor;
	}(_THREEElementDescriptor2.default);
	
	module.exports = Object3DDescriptor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 686:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _Object3DDescriptor2 = __webpack_require__(685);
	
	var _Object3DDescriptor3 = _interopRequireDefault(_Object3DDescriptor2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var GroupDescriptor = function (_Object3DDescriptor) {
	  _inherits(GroupDescriptor, _Object3DDescriptor);
	
	  function GroupDescriptor() {
	    _classCallCheck(this, GroupDescriptor);
	
	    return _possibleConstructorReturn(this, (GroupDescriptor.__proto__ || Object.getPrototypeOf(GroupDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(GroupDescriptor, [{
	    key: 'construct',
	    value: function construct() {
	      return new _three2.default.Group();
	    }
	  }]);
	
	  return GroupDescriptor;
	}(_Object3DDescriptor3.default);
	
	module.exports = GroupDescriptor;

/***/ },

/***/ 687:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _CameraDescriptorBase2 = __webpack_require__(688);
	
	var _CameraDescriptorBase3 = _interopRequireDefault(_CameraDescriptorBase2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var OrthographicCameraDescriptor = function (_CameraDescriptorBase) {
	  _inherits(OrthographicCameraDescriptor, _CameraDescriptorBase);
	
	  function OrthographicCameraDescriptor(react3Instance) {
	    _classCallCheck(this, OrthographicCameraDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (OrthographicCameraDescriptor.__proto__ || Object.getPrototypeOf(OrthographicCameraDescriptor)).call(this, react3Instance));
	
	    _this.propTypes = _extends({}, _this.propTypes, {
	
	      left: _ReactPropTypes2.default.number.isRequired,
	      right: _ReactPropTypes2.default.number.isRequired,
	      top: _ReactPropTypes2.default.number.isRequired,
	      bottom: _ReactPropTypes2.default.number.isRequired,
	      near: _ReactPropTypes2.default.number,
	      far: _ReactPropTypes2.default.number
	    });
	
	    _this.propUpdates = _extends({}, _this.propUpdates, {
	
	      left: _this._updateAndRefreshProjection.bind(_this, 'left'),
	      right: _this._updateAndRefreshProjection.bind(_this, 'right'),
	      top: _this._updateAndRefreshProjection.bind(_this, 'top'),
	      bottom: _this._updateAndRefreshProjection.bind(_this, 'bottom'),
	      fov: _this._updateFov,
	      far: _this._updateFar
	    });
	    return _this;
	  }
	
	  _createClass(OrthographicCameraDescriptor, [{
	    key: '_updateFov',
	    value: function _updateFov(threeObject, fov) {
	      threeObject.fov = fov;
	
	      threeObject.userData._needsProjectionMatrixUpdate = true;
	    }
	  }, {
	    key: '_updateFar',
	    value: function _updateFar(threeObject, far) {
	      threeObject.far = far;
	
	      threeObject.userData._needsProjectionMatrixUpdate = true;
	    }
	  }, {
	    key: 'construct',
	    value: function construct(props) {
	      return new _three2.default.OrthographicCamera(props.left, props.right, props.top, props.bottom, props.near, props.far);
	    }
	  }, {
	    key: '_updateAndRefreshProjection',
	    value: function _updateAndRefreshProjection(propName, camera, value) {
	      camera[propName] = value;
	
	      camera.userData._needsProjectionMatrixUpdate = true;
	    }
	  }]);
	
	  return OrthographicCameraDescriptor;
	}(_CameraDescriptorBase3.default);
	
	module.exports = OrthographicCameraDescriptor;

/***/ },

/***/ 688:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _Object3DDescriptor2 = __webpack_require__(685);
	
	var _Object3DDescriptor3 = _interopRequireDefault(_Object3DDescriptor2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var CameraDescriptorBase = function (_Object3DDescriptor) {
	  _inherits(CameraDescriptorBase, _Object3DDescriptor);
	
	  function CameraDescriptorBase() {
	    _classCallCheck(this, CameraDescriptorBase);
	
	    return _possibleConstructorReturn(this, (CameraDescriptorBase.__proto__ || Object.getPrototypeOf(CameraDescriptorBase)).apply(this, arguments));
	  }
	
	  _createClass(CameraDescriptorBase, [{
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(CameraDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(CameraDescriptorBase.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(camera, parentObject3D) {
	      _get(CameraDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(CameraDescriptorBase.prototype), 'setParent', this).call(this, camera, parentObject3D);
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(threeObject) {
	      _get(CameraDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(CameraDescriptorBase.prototype), 'unmount', this).call(this, threeObject);
	    }
	  }, {
	    key: 'beginPropertyUpdates',
	    value: function beginPropertyUpdates(threeObject) {
	      _get(CameraDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(CameraDescriptorBase.prototype), 'beginPropertyUpdates', this).call(this, threeObject);
	
	      threeObject.userData._needsProjectionMatrixUpdate = false;
	    }
	
	    /**
	     * @param {THREE.PerspectiveCamera | THREE.OrthographicCamera} threeObject
	     */
	
	  }, {
	    key: 'completePropertyUpdates',
	    value: function completePropertyUpdates(threeObject) {
	      _get(CameraDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(CameraDescriptorBase.prototype), 'completePropertyUpdates', this).call(this, threeObject);
	
	      if (threeObject.userData._needsProjectionMatrixUpdate) {
	        threeObject.userData._needsProjectionMatrixUpdate = false;
	
	        threeObject.updateProjectionMatrix();
	        threeObject.userData.events.emit('updateProjectionMatrix');
	      }
	    }
	  }]);
	
	  return CameraDescriptorBase;
	}(_Object3DDescriptor3.default);
	
	module.exports = CameraDescriptorBase;

/***/ },

/***/ 689:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _CameraDescriptorBase2 = __webpack_require__(688);
	
	var _CameraDescriptorBase3 = _interopRequireDefault(_CameraDescriptorBase2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var PerspectiveCameraDescriptor = function (_CameraDescriptorBase) {
	  _inherits(PerspectiveCameraDescriptor, _CameraDescriptorBase);
	
	  function PerspectiveCameraDescriptor(react3Instance) {
	    _classCallCheck(this, PerspectiveCameraDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (PerspectiveCameraDescriptor.__proto__ || Object.getPrototypeOf(PerspectiveCameraDescriptor)).call(this, react3Instance));
	
	    _this.propTypes = _extends({}, _this.propTypes, {
	
	      fov: _ReactPropTypes2.default.number,
	      aspect: _ReactPropTypes2.default.number,
	      near: _ReactPropTypes2.default.number,
	      far: _ReactPropTypes2.default.number
	    });
	
	    _this.propUpdates = _extends({}, _this.propUpdates, {
	      aspect: _this._updateAspect,
	      fov: _this._updateFov,
	      far: _this._updateFar,
	      near: _this._updateNear
	    });
	    return _this;
	  }
	
	  _createClass(PerspectiveCameraDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      return new _three2.default.PerspectiveCamera(props.fov, props.aspect, props.near, props.far);
	    }
	  }, {
	    key: '_updateFov',
	    value: function _updateFov(threeObject, fov) {
	      threeObject.fov = fov;
	
	      threeObject.userData._needsProjectionMatrixUpdate = true;
	    }
	  }, {
	    key: '_updateNear',
	    value: function _updateNear(threeObject, near) {
	      threeObject.near = near;
	
	      threeObject.userData._needsProjectionMatrixUpdate = true;
	    }
	  }, {
	    key: '_updateFar',
	    value: function _updateFar(threeObject, far) {
	      threeObject.far = far;
	
	      threeObject.userData._needsProjectionMatrixUpdate = true;
	    }
	
	    /**
	     * @param {THREE.PerspectiveCamera} threeObject
	     * @param newAspect
	     * @private
	     */
	
	  }, {
	    key: '_updateAspect',
	    value: function _updateAspect(threeObject, newAspect) {
	      threeObject.aspect = newAspect;
	
	      threeObject.userData._needsProjectionMatrixUpdate = true;
	    }
	  }]);
	
	  return PerspectiveCameraDescriptor;
	}(_CameraDescriptorBase3.default);
	
	module.exports = PerspectiveCameraDescriptor;

/***/ },

/***/ 690:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _Object3DDescriptor2 = __webpack_require__(685);
	
	var _Object3DDescriptor3 = _interopRequireDefault(_Object3DDescriptor2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var CubeCameraDescriptor = function (_Object3DDescriptor) {
	  _inherits(CubeCameraDescriptor, _Object3DDescriptor);
	
	  function CubeCameraDescriptor(react3Instance) {
	    _classCallCheck(this, CubeCameraDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (CubeCameraDescriptor.__proto__ || Object.getPrototypeOf(CubeCameraDescriptor)).call(this, react3Instance));
	
	    _this.propTypes = _extends({}, _this.propTypes, {
	
	      near: _ReactPropTypes2.default.number,
	      far: _ReactPropTypes2.default.number,
	      cubeResolution: _ReactPropTypes2.default.number.isRequired
	    });
	    return _this;
	  }
	
	  _createClass(CubeCameraDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      return new _three2.default.CubeCamera(props.near, props.far, props.cubeResolution);
	    }
	  }]);
	
	  return CubeCameraDescriptor;
	}(_Object3DDescriptor3.default);
	
	module.exports = CubeCameraDescriptor;

/***/ },

/***/ 691:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ResourceReference = __webpack_require__(692);
	
	var _ResourceReference2 = _interopRequireDefault(_ResourceReference);
	
	var _Object3DDescriptor2 = __webpack_require__(685);
	
	var _Object3DDescriptor3 = _interopRequireDefault(_Object3DDescriptor2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var MeshDescriptor = function (_Object3DDescriptor) {
	  _inherits(MeshDescriptor, _Object3DDescriptor);
	
	  function MeshDescriptor() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MeshDescriptor);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MeshDescriptor.__proto__ || Object.getPrototypeOf(MeshDescriptor)).call.apply(_ref, [this].concat(args))), _this), _this._invalidChild = function (child) {
	      var invalid = !(child instanceof _three2.default.Material || child instanceof _ResourceReference2.default || child instanceof _three2.default.Geometry || child instanceof _three2.default.BufferGeometry);
	
	      return invalid;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(MeshDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var geometry = props.hasOwnProperty('geometry') ? props.geometry : undefined;
	      var material = props.hasOwnProperty('material') ? props.material : undefined;
	
	      var mesh = new _three2.default.Mesh(geometry, material);
	
	      if (!geometry) {
	        mesh.geometry.dispose();
	        mesh.geometry = undefined;
	      }
	
	      if (!material) {
	        mesh.material.dispose();
	        mesh.material = undefined;
	      }
	
	      return mesh;
	    }
	  }, {
	    key: 'addChildren',
	    value: function addChildren(threeObject, children) {
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(children.filter(this._invalidChild).length === 0, 'Mesh children can only be materials or geometries!');
	      } else {
	        (0, _invariant2.default)(children.filter(this._invalidChild).length === 0, false);
	      }
	    }
	  }, {
	    key: 'addChild',
	    value: function addChild(threeObject, child) {
	      this.addChildren(threeObject, [child]);
	    }
	  }, {
	    key: 'moveChild',
	    value: function moveChild() {
	      // doesn't matter
	    }
	  }, {
	    key: 'getBoundingBoxes',
	    value: function getBoundingBoxes(threeObject) {
	      // recompute bounding box for highlighting from a fresh update
	      if (threeObject.geometry && threeObject.geometry.computeBoundingBox) {
	        threeObject.geometry.computeBoundingBox();
	      }
	
	      return _get(MeshDescriptor.prototype.__proto__ || Object.getPrototypeOf(MeshDescriptor.prototype), 'getBoundingBoxes', this).call(this, threeObject);
	    }
	  }]);
	
	  return MeshDescriptor;
	}(_Object3DDescriptor3.default);
	
	module.exports = MeshDescriptor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 692:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var ResourceReference = function ResourceReference(resourceId) {
	  _classCallCheck(this, ResourceReference);
	
	  this.uuid = _three2.default.Math.generateUUID();
	
	  this.resourceId = resourceId;
	  this.userData = {};
	};
	
	module.exports = ResourceReference;

/***/ },

/***/ 693:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _MeshDescriptor2 = __webpack_require__(691);
	
	var _MeshDescriptor3 = _interopRequireDefault(_MeshDescriptor2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var LineDescriptor = function (_MeshDescriptor) {
	  _inherits(LineDescriptor, _MeshDescriptor);
	
	  function LineDescriptor() {
	    _classCallCheck(this, LineDescriptor);
	
	    return _possibleConstructorReturn(this, (LineDescriptor.__proto__ || Object.getPrototypeOf(LineDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(LineDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var geometry = props.hasOwnProperty('geometry') ? props.geometry : undefined;
	      var material = props.hasOwnProperty('material') ? props.material : undefined;
	
	      var mesh = new _three2.default.Line(geometry, material);
	
	      if (!geometry) {
	        mesh.geometry.dispose();
	        mesh.geometry = undefined;
	      }
	
	      if (!material) {
	        mesh.material.dispose();
	        mesh.material = undefined;
	      }
	
	      return mesh;
	    }
	  }]);
	
	  return LineDescriptor;
	}(_MeshDescriptor3.default);
	
	module.exports = LineDescriptor;

/***/ },

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _MeshDescriptor2 = __webpack_require__(691);
	
	var _MeshDescriptor3 = _interopRequireDefault(_MeshDescriptor2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var LineSegmentDescriptor = function (_MeshDescriptor) {
	  _inherits(LineSegmentDescriptor, _MeshDescriptor);
	
	  function LineSegmentDescriptor() {
	    _classCallCheck(this, LineSegmentDescriptor);
	
	    return _possibleConstructorReturn(this, (LineSegmentDescriptor.__proto__ || Object.getPrototypeOf(LineSegmentDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(LineSegmentDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var geometry = props.hasOwnProperty('geometry') ? props.geometry : undefined;
	      var material = props.hasOwnProperty('material') ? props.material : undefined;
	
	      var mesh = new _three2.default.LineSegments(geometry, material);
	
	      if (!geometry) {
	        mesh.geometry.dispose();
	        mesh.geometry = undefined;
	      }
	
	      if (!material) {
	        mesh.material.dispose();
	        mesh.material = undefined;
	      }
	
	      return mesh;
	    }
	  }]);
	
	  return LineSegmentDescriptor;
	}(_MeshDescriptor3.default);
	
	module.exports = LineSegmentDescriptor;

/***/ },

/***/ 695:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _MeshDescriptor2 = __webpack_require__(691);
	
	var _MeshDescriptor3 = _interopRequireDefault(_MeshDescriptor2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var PointsDescriptor = function (_MeshDescriptor) {
	  _inherits(PointsDescriptor, _MeshDescriptor);
	
	  function PointsDescriptor() {
	    _classCallCheck(this, PointsDescriptor);
	
	    return _possibleConstructorReturn(this, (PointsDescriptor.__proto__ || Object.getPrototypeOf(PointsDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(PointsDescriptor, [{
	    key: 'construct',
	    value: function construct() {
	      var points = new _three2.default.Points();
	
	      points.geometry.dispose();
	      points.material.dispose();
	
	      points.geometry = undefined;
	      points.material = undefined;
	
	      return points;
	    }
	  }]);
	
	  return PointsDescriptor;
	}(_MeshDescriptor3.default);
	
	module.exports = PointsDescriptor;

/***/ },

/***/ 696:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Object3DDescriptor2 = __webpack_require__(685);
	
	var _Object3DDescriptor3 = _interopRequireDefault(_Object3DDescriptor2);
	
	var _ResourceReference = __webpack_require__(692);
	
	var _ResourceReference2 = _interopRequireDefault(_ResourceReference);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var SpriteDescriptor = function (_Object3DDescriptor) {
	  _inherits(SpriteDescriptor, _Object3DDescriptor);
	
	  function SpriteDescriptor() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, SpriteDescriptor);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SpriteDescriptor.__proto__ || Object.getPrototypeOf(SpriteDescriptor)).call.apply(_ref, [this].concat(args))), _this), _this._invalidChild = function (child) {
	      var invalid = !(child instanceof _three2.default.SpriteMaterial || child instanceof _ResourceReference2.default);
	
	      return invalid;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(SpriteDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var material = props.hasOwnProperty('material') ? props.material : undefined;
	      var sprite = new _three2.default.Sprite(material);
	
	      if (!material) {
	        sprite.material.dispose();
	        sprite.material = undefined;
	      }
	
	      return sprite;
	    }
	  }, {
	    key: 'addChildren',
	    value: function addChildren(threeObject, children) {
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(children.filter(this._invalidChild).length === 0, 'Sprite children can only be materials!');
	      } else {
	        (0, _invariant2.default)(children.filter(this._invalidChild).length === 0, false);
	      }
	    }
	  }, {
	    key: 'addChild',
	    value: function addChild(threeObject, child) {
	      this.addChildren(threeObject, [child]);
	    }
	  }, {
	    key: 'moveChild',
	    value: function moveChild() {
	      // doesn't matter
	    }
	  }]);
	
	  return SpriteDescriptor;
	}(_Object3DDescriptor3.default);
	
	module.exports = SpriteDescriptor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 697:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _LightDescriptorBase2 = __webpack_require__(698);
	
	var _LightDescriptorBase3 = _interopRequireDefault(_LightDescriptorBase2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var AmbientLightDescriptor = function (_LightDescriptorBase) {
	  _inherits(AmbientLightDescriptor, _LightDescriptorBase);
	
	  function AmbientLightDescriptor(react3Instance) {
	    _classCallCheck(this, AmbientLightDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (AmbientLightDescriptor.__proto__ || Object.getPrototypeOf(AmbientLightDescriptor)).call(this, react3Instance));
	
	    _this.hasColor();
	    return _this;
	  }
	
	  _createClass(AmbientLightDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var color = props.color;
	
	      return new _three2.default.AmbientLight(color);
	    }
	  }]);
	
	  return AmbientLightDescriptor;
	}(_LightDescriptorBase3.default);
	
	module.exports = AmbientLightDescriptor;

/***/ },

/***/ 698:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _class, _temp;
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _warning = __webpack_require__(578);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _Object3DDescriptor2 = __webpack_require__(685);
	
	var _Object3DDescriptor3 = _interopRequireDefault(_Object3DDescriptor2);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var updateLightTargetFromQuaternion = function () {
	  var lightPositionVector = new _three2.default.Vector3();
	  var forward = new _three2.default.Vector3();
	
	  return function (light) {
	    light.updateMatrixWorld();
	
	    lightPositionVector.setFromMatrixPosition(light.matrixWorld);
	
	    // rotate forward to match the rotation
	    // then set the target position
	    light.target.position.copy(forward.set(0, 0, 1).applyQuaternion(light.quaternion).add(lightPositionVector));
	
	    light.target.updateMatrixWorld();
	  };
	}();
	
	var LightDescriptorBase = (_temp = _class = function (_Object3DDescriptor) {
	  _inherits(LightDescriptorBase, _Object3DDescriptor);
	
	  function LightDescriptorBase(react3Instance) {
	    _classCallCheck(this, LightDescriptorBase);
	
	    var _this = _possibleConstructorReturn(this, (LightDescriptorBase.__proto__ || Object.getPrototypeOf(LightDescriptorBase)).call(this, react3Instance));
	
	    _this.removeProp('receiveShadow');
	
	    _this._hasColor = false;
	    _this._hasDirection = false;
	
	    if (process.env.NODE_ENV !== 'production') {
	      _this._warnedAboutLightMaterialUpdate = false;
	    }
	
	    _this.hasProp('updatesRefreshAllMaterials', {
	      type: _ReactPropTypes2.default.bool,
	      updateInitial: true,
	      update: function update(threeObject, updatesRefreshAllMaterials) {
	        threeObject.userData._updatesRefreshAllMaterials = updatesRefreshAllMaterials;
	      },
	
	      default: false
	    });
	
	    _this.hasProp('shadowBias', {
	      type: _ReactPropTypes2.default.number,
	      updateInitial: true,
	      update: function update(threeObject, value, hasProp) {
	        if (hasProp) {
	          threeObject.shadow.bias = value;
	        }
	      },
	
	      default: LightDescriptorBase.defaultShadowBias
	    });
	
	    _this.hasProp('shadowDarkness', {
	      type: _ReactPropTypes2.default.number,
	      simple: true,
	      default: 0.5
	    });
	
	    _this.hasProp('shadowMapWidth', {
	      type: _ReactPropTypes2.default.number,
	      updateInitial: true,
	      update: function update(threeObject, value, hasProp) {
	        if (hasProp) {
	          threeObject.shadow.mapSize.x = value;
	        }
	      },
	
	      default: 512
	    });
	
	    _this.hasProp('shadowMapHeight', {
	      type: _ReactPropTypes2.default.number,
	      updateInitial: true,
	      update: function update(threeObject, value, hasProp) {
	        if (hasProp) {
	          threeObject.shadow.mapSize.y = value;
	        }
	      },
	
	      default: 512
	    });
	
	    _this.hasProp('shadowCameraNear', {
	      type: _ReactPropTypes2.default.number,
	      updateInitial: true,
	      update: function update(threeObject, value, hasProp) {
	        if (hasProp) {
	          threeObject.shadow.camera.near = value;
	        }
	      },
	
	      default: LightDescriptorBase.defaultShadowCameraNear
	    });
	
	    _this.hasProp('shadowCameraFar', {
	      type: _ReactPropTypes2.default.number,
	      updateInitial: true,
	      update: function update(threeObject, value, hasProp) {
	        if (hasProp) {
	          threeObject.shadow.camera.far = value;
	        }
	      },
	
	      default: LightDescriptorBase.defaultShadowCameraFar
	    });
	
	    _this.hasProp('castShadow', {
	      override: true,
	      type: _ReactPropTypes2.default.bool,
	      update: _this.triggerRemount,
	      default: false
	    });
	    return _this;
	  }
	
	  _createClass(LightDescriptorBase, [{
	    key: 'hasDirection',
	    value: function hasDirection() {
	      this._hasDirection = true;
	
	      // recreate the props to use target
	      this.removeProp('position');
	      this.removeProp('rotation');
	      this.removeProp('quaternion');
	      this.removeProp('lookAt');
	
	      this.hasProp('position', {
	        type: (0, _propTypeInstanceOf2.default)(_three2.default.Vector3),
	        update: function update(threeObject, position) {
	          threeObject.position.copy(position);
	
	          if (threeObject.userData._lookAt) {
	            threeObject.lookAt(threeObject.userData._lookAt);
	          }
	
	          threeObject.userData._needsDirectionUpdate = true;
	        },
	
	        default: new _three2.default.Vector3()
	      });
	
	      this.hasProp('rotation', {
	        type: (0, _propTypeInstanceOf2.default)(_three2.default.Euler),
	        update: function update(light, rotation) {
	          light.rotation.copy(rotation);
	
	          light.userData._needsDirectionUpdate = true;
	        },
	
	        default: new _three2.default.Euler()
	      });
	
	      this.hasProp('quaternion', {
	        type: (0, _propTypeInstanceOf2.default)(_three2.default.Quaternion),
	        update: function update(light, quaternion) {
	          light.quaternion.copy(quaternion);
	
	          light.userData._needsDirectionUpdate = true;
	        },
	
	        default: new _three2.default.Quaternion()
	      });
	
	      this.hasProp('lookAt', {
	        type: (0, _propTypeInstanceOf2.default)(_three2.default.Vector3),
	        update: function update(threeObject, lookAt) {
	          threeObject.userData._lookAt = lookAt;
	
	          if (lookAt) {
	            threeObject.lookAt(lookAt);
	
	            threeObject.userData._needsDirectionUpdate = true;
	          }
	        },
	
	        default: undefined
	      });
	    }
	  }, {
	    key: 'completePropertyUpdates',
	    value: function completePropertyUpdates(threeObject) {
	      _get(LightDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(LightDescriptorBase.prototype), 'completePropertyUpdates', this).call(this, threeObject);
	
	      if (threeObject.userData._needsDirectionUpdate) {
	        threeObject.userData._needsDirectionUpdate = false;
	        updateLightTargetFromQuaternion(threeObject);
	      }
	    }
	  }, {
	    key: 'hasColor',
	    value: function hasColor() {
	      this._hasColor = true;
	
	      this.hasProp('color', {
	        type: _ReactPropTypes2.default.oneOfType([(0, _propTypeInstanceOf2.default)(_three2.default.Color), _ReactPropTypes2.default.number, _ReactPropTypes2.default.string]),
	        update: function update(threeObject, newColor) {
	          threeObject.color.set(newColor);
	        },
	
	        default: 0xffffff
	      });
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(LightDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(LightDescriptorBase.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      if (props.hasOwnProperty('castShadow')) {
	        threeObject.castShadow = props.castShadow;
	      }
	
	      if (this._hasDirection) {
	        threeObject.userData._needsDirectionUpdate = false;
	
	        if (props.position || props.lookAt || props.rotation || props.quaternion) {
	          updateLightTargetFromQuaternion(threeObject);
	        }
	      }
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(threeObject) {
	      this.updateAllMaterials(threeObject);
	
	      _get(LightDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(LightDescriptorBase.prototype), 'unmount', this).call(this, threeObject);
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(threeObject, parentObject3d) {
	      _get(LightDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(LightDescriptorBase.prototype), 'setParent', this).call(this, threeObject, parentObject3d);
	
	      this.updateAllMaterials(threeObject);
	    }
	  }, {
	    key: 'updateAllMaterials',
	    value: function updateAllMaterials(threeObject) {
	      var rootInstance = threeObject.userData.markup._rootInstance;
	      if (rootInstance && !rootInstance._willUnmount) {
	        if (process.env.NODE_ENV !== 'production') {
	          if (!this._warnedAboutLightMaterialUpdate && !threeObject.userData._updatesRefreshAllMaterials) {
	            var owner = threeObject.userData.react3internalComponent._currentElement._owner;
	
	            var elementType = threeObject.userData.react3internalComponent._elementType;
	
	            (0, _warning2.default)(this._warnedAboutLightMaterialUpdate, LightDescriptorBase.getDynamicWarningMessage(elementType, owner));
	            this._warnedAboutLightMaterialUpdate = true;
	          }
	        }
	
	        rootInstance.allMaterialsNeedUpdate();
	      }
	    }
	  }]);
	
	  return LightDescriptorBase;
	}(_Object3DDescriptor3.default), _class.defaultShadowCameraNear = 0.5, _class.defaultShadowCameraFar = 500, _class.defaultShadowBias = 0, _temp);
	
	if (process.env.NODE_ENV !== 'production') {
	  LightDescriptorBase.getDynamicWarningMessage = function (elementType, owner) {
	    return '<' + elementType + '/> has been updated which triggered a refresh of all materials.\nThis is a potentially expensive operation.\nThis can happen when you add or remove a light, or add or remove any component\nbefore any lights without keys e.g.\n<object3d>\n  {/* new or removed component here */}\n  <ambientLight/>\n</object3d>, or update some properties of lights.\n\nIf you would like to add components, you should either add the components\nafter the lights (recommended), e.g.\n<object3d>\n  <ambientLight/>\n  {/* new or removed component here */}\n</object3d>, or add a \'key\' property to the lights e.g.\n<object3d>\n  {/* new or removed component here */}\n  <ambientLight key="light"/>\n</object3d>.\n\nIf you have modified a light\'s properties e.g. toggled castShadow,\nthe materials need to be rebuilt as well.\n\nTo acknowledge and remove this message, please add the property \'updatesRefreshAllMaterials\'\n  to <' + elementType + '/> inside the render() of ' + (owner && owner.getName() || 'a component') + '.\n\nFor more information, visit https://github.com/mrdoob/threejs/wiki/Updates .';
	  };
	}
	
	module.exports = LightDescriptorBase;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 699:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _class, _temp;
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _LightDescriptorBase2 = __webpack_require__(698);
	
	var _LightDescriptorBase3 = _interopRequireDefault(_LightDescriptorBase2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var DirectionalLightDescriptor = (_temp = _class = function (_LightDescriptorBase) {
	  _inherits(DirectionalLightDescriptor, _LightDescriptorBase);
	
	  function DirectionalLightDescriptor(react3Instance) {
	    _classCallCheck(this, DirectionalLightDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (DirectionalLightDescriptor.__proto__ || Object.getPrototypeOf(DirectionalLightDescriptor)).call(this, react3Instance));
	
	    _this.hasProp('intensity', {
	      type: _ReactPropTypes2.default.number,
	      simple: true,
	      default: 1
	    });
	
	    _this.hasProp('shadowCameraLeft', {
	      type: _ReactPropTypes2.default.number,
	      updateInitial: true,
	      update: function update(threeObject, value, hasProp) {
	        if (hasProp) {
	          threeObject.shadow.camera.left = value;
	        }
	      },
	
	      default: DirectionalLightDescriptor.defaultShadowCameraLeft
	    });
	
	    _this.hasProp('shadowCameraBottom', {
	      type: _ReactPropTypes2.default.number,
	      updateInitial: true,
	      update: function update(threeObject, value, hasProp) {
	        if (hasProp) {
	          threeObject.shadow.camera.bottom = value;
	        }
	      },
	
	      default: DirectionalLightDescriptor.defaultShadowCameraBottom
	    });
	
	    _this.hasProp('shadowCameraRight', {
	      type: _ReactPropTypes2.default.number,
	      updateInitial: true,
	      update: function update(threeObject, value, hasProp) {
	        if (hasProp) {
	          threeObject.shadow.camera.right = value;
	        }
	      },
	
	      default: DirectionalLightDescriptor.defaultShadowCameraRight
	    });
	
	    _this.hasProp('shadowCameraTop', {
	      type: _ReactPropTypes2.default.number,
	      updateInitial: true,
	      update: function update(threeObject, value, hasProp) {
	        if (hasProp) {
	          threeObject.shadow.camera.top = value;
	        }
	      },
	
	      default: DirectionalLightDescriptor.defaultShadowCameraTop
	    });
	
	    _this.hasColor();
	    _this.hasDirection();
	    return _this;
	  }
	
	  _createClass(DirectionalLightDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var color = props.color;
	      var intensity = props.intensity;
	
	      var result = new _three2.default.DirectionalLight(color, intensity);
	
	      result.position.set(0, 0, 0);
	
	      return result;
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(threeObject) {
	      _get(DirectionalLightDescriptor.prototype.__proto__ || Object.getPrototypeOf(DirectionalLightDescriptor.prototype), 'unmount', this).call(this, threeObject);
	    }
	  }]);
	
	  return DirectionalLightDescriptor;
	}(_LightDescriptorBase3.default), _class.defaultShadowCameraLeft = -5, _class.defaultShadowCameraRight = 5, _class.defaultShadowCameraTop = 5, _class.defaultShadowCameraBottom = -5, _temp);
	
	module.exports = DirectionalLightDescriptor;

/***/ },

/***/ 700:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _LightDescriptorBase2 = __webpack_require__(698);
	
	var _LightDescriptorBase3 = _interopRequireDefault(_LightDescriptorBase2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var SpotLightDescriptor = function (_LightDescriptorBase) {
	  _inherits(SpotLightDescriptor, _LightDescriptorBase);
	
	  function SpotLightDescriptor(react3Instance) {
	    _classCallCheck(this, SpotLightDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (SpotLightDescriptor.__proto__ || Object.getPrototypeOf(SpotLightDescriptor)).call(this, react3Instance));
	
	    var defaults = [1, // intensity
	    0, // distance
	    Math.PI / 3, // angle
	    10, // exponent
	    1, // decay
	    0];
	
	    ['intensity', 'distance', 'angle', 'exponent', 'decay', 'penumbra'].forEach(function (propName, i) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        simple: true,
	        default: defaults[i]
	      });
	    });
	
	    _this.hasProp('shadowCameraFov', {
	      type: _ReactPropTypes2.default.number,
	      updateInitial: true,
	      update: function update(threeObject, value, hasProp) {
	        if (hasProp) {
	          threeObject.shadow.camera.fov = value;
	        }
	      },
	
	      default: 50
	    });
	
	    _this.hasColor();
	    _this.hasDirection();
	    return _this;
	  }
	
	  _createClass(SpotLightDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var color = props.color;
	      var intensity = props.intensity;
	      var distance = props.distance;
	      var angle = props.angle;
	      var exponent = props.exponent;
	      var decay = props.decay;
	
	      return new _three2.default.SpotLight(color, intensity, distance, angle, exponent, decay);
	    }
	  }]);
	
	  return SpotLightDescriptor;
	}(_LightDescriptorBase3.default);
	
	module.exports = SpotLightDescriptor;

/***/ },

/***/ 701:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _class, _temp;
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _LightDescriptorBase2 = __webpack_require__(698);
	
	var _LightDescriptorBase3 = _interopRequireDefault(_LightDescriptorBase2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var PointLightDescriptor = (_temp = _class = function (_LightDescriptorBase) {
	  _inherits(PointLightDescriptor, _LightDescriptorBase);
	
	  function PointLightDescriptor(react3Instance) {
	    _classCallCheck(this, PointLightDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (PointLightDescriptor.__proto__ || Object.getPrototypeOf(PointLightDescriptor)).call(this, react3Instance));
	
	    _this.hasColor();
	
	    ['intensity', 'decay'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        simple: true,
	        default: 1
	      });
	    });
	
	    _this.hasProp('distance', {
	      type: _ReactPropTypes2.default.number,
	      simple: true,
	      default: 0
	    });
	
	    _this.hasProp('shadowCameraFov', {
	      type: _ReactPropTypes2.default.number,
	      updateInitial: true,
	      update: function update(threeObject, value, hasProp) {
	        if (hasProp) {
	          threeObject.shadow.camera.fov = value;
	        }
	      },
	
	      default: PointLightDescriptor.defaultShadowCameraFov
	    });
	
	    _this.hasProp('shadowCameraAspect', {
	      type: _ReactPropTypes2.default.number,
	      updateInitial: true,
	      update: function update(threeObject, value, hasProp) {
	        if (hasProp) {
	          threeObject.shadow.camera.aspect = value;
	        }
	      },
	
	      default: PointLightDescriptor.defaultShadowCameraAspect
	    });
	
	    _this.removeProp('lookAt');
	    _this.removeProp('rotation');
	    _this.removeProp('quaternion');
	    return _this;
	  }
	
	  _createClass(PointLightDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var color = props.color;
	      var intensity = props.intensity;
	      var distance = props.distance;
	      var decay = props.decay;
	
	      return new _three2.default.PointLight(color, intensity, distance, decay);
	    }
	  }]);
	
	  return PointLightDescriptor;
	}(_LightDescriptorBase3.default), _class.defaultShadowCameraFov = 90, _class.defaultShadowCameraAspect = 1, _temp);
	
	module.exports = PointLightDescriptor;

/***/ },

/***/ 702:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _THREEElementDescriptor = __webpack_require__(672);
	
	var _THREEElementDescriptor2 = _interopRequireDefault(_THREEElementDescriptor);
	
	var _ResourceContainer = __webpack_require__(677);
	
	var _ResourceContainer2 = _interopRequireDefault(_ResourceContainer);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ResourcesDescriptor = function (_THREEElementDescript) {
	  _inherits(ResourcesDescriptor, _THREEElementDescript);
	
	  function ResourcesDescriptor() {
	    _classCallCheck(this, ResourcesDescriptor);
	
	    return _possibleConstructorReturn(this, (ResourcesDescriptor.__proto__ || Object.getPrototypeOf(ResourcesDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(ResourcesDescriptor, [{
	    key: 'construct',
	    value: function construct() {
	      return new _ResourceContainer2.default();
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(threeObject) {
	      var parentMarkup = threeObject.userData.markup.parentMarkup;
	      var parentEvents = parentMarkup.threeObject.userData.events;
	
	      threeObject.resourceIds.forEach(function (id) {
	        parentEvents.emit('resource.removed', {
	          id: id,
	          distance: 0,
	          resource: threeObject.resourceMap[id]
	        });
	      });
	
	      _get(ResourcesDescriptor.prototype.__proto__ || Object.getPrototypeOf(ResourcesDescriptor.prototype), 'unmount', this).call(this, threeObject);
	    }
	  }, {
	    key: 'addChildren',
	    value: function addChildren(threeObject, children) {
	      children.forEach(function (child) {
	        var resourceId = child.userData._resourceId;
	
	        if (process.env.NODE_ENV !== 'production') {
	          (0, _invariant2.default)(!!resourceId, 'Resource container can only hold resources. ' + 'Found children without `resourceId` properties:' + (' ' + children.filter(function (currentChild) {
	            return !currentChild.userData._resourceId;
	          }).map(function (currentChild) {
	            return '<' + currentChild.userData.react3internalComponent._elementType + '/>';
	          }).join(', ') + '.'));
	        } else {
	          (0, _invariant2.default)(!!resourceId);
	        }
	
	        threeObject.resourceIds.push(resourceId);
	
	        threeObject.resourceMap[resourceId] = child;
	
	        var parentMarkup = threeObject.userData.markup.parentMarkup;
	        if (parentMarkup) {
	          parentMarkup.threeObject.userData.events.emit('resource.added', {
	            id: resourceId,
	            distance: 0,
	            resource: child
	          });
	        }
	      });
	    }
	  }, {
	    key: 'addChild',
	    value: function addChild(threeObject, child) {
	      this.addChildren(threeObject, [child]);
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild(threeObject, child) {
	      var resourceId = child.userData._resourceId;
	
	      delete threeObject.resourceIds[resourceId];
	
	      var parentMarkup = threeObject.userData.markup.parentMarkup;
	      if (parentMarkup) {
	        parentMarkup.threeObject.userData.events.emit('resource.removed', {
	          id: resourceId,
	          distance: 0,
	          resource: child
	        });
	      }
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(threeObject, parentObject) {
	      _get(ResourcesDescriptor.prototype.__proto__ || Object.getPrototypeOf(ResourcesDescriptor.prototype), 'setParent', this).call(this, threeObject, parentObject);
	
	      var parentEvents = parentObject.userData.events;
	
	      parentObject.userData._resources = threeObject;
	
	      threeObject.resourceIds.forEach(function (id) {
	        parentEvents.emit('resource.added', {
	          id: id,
	          distance: 0,
	          resource: threeObject.resourceMap[id]
	        });
	      });
	    }
	  }, {
	    key: 'highlight',
	    value: function highlight(threeObject) {
	      var ownerObject = threeObject.userData.markup.parentMarkup.threeObject;
	
	      if (!(ownerObject.updateMatrixWorld && ownerObject.traverse)) {
	        return;
	      }
	
	      threeObject.userData.events.emit('highlight', {
	        uuid: threeObject.uuid,
	        boundingBoxFunc: function boundingBoxFunc() {
	          var boundingBox = new _three2.default.Box3();
	
	          boundingBox.setFromObject(ownerObject);
	
	          return [boundingBox];
	        }
	      });
	    }
	  }, {
	    key: 'hideHighlight',
	    value: function hideHighlight(threeObject) {
	      threeObject.userData.events.emit('hideHighlight');
	    }
	  }, {
	    key: 'moveChild',
	    value: function moveChild() {
	      // child order doesn't matter
	    }
	  }]);
	
	  return ResourcesDescriptor;
	}(_THREEElementDescriptor2.default);
	
	module.exports = ResourcesDescriptor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 703:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ResourceDescriptorBase = __webpack_require__(704);
	
	var _ResourceDescriptorBase2 = _interopRequireDefault(_ResourceDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var GeometryResourceDescriptor = function (_ResourceDescriptorBa) {
	  _inherits(GeometryResourceDescriptor, _ResourceDescriptorBa);
	
	  function GeometryResourceDescriptor() {
	    _classCallCheck(this, GeometryResourceDescriptor);
	
	    return _possibleConstructorReturn(this, (GeometryResourceDescriptor.__proto__ || Object.getPrototypeOf(GeometryResourceDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(GeometryResourceDescriptor, [{
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(GeometryResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(GeometryResourceDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      threeObject.userData._propertySlot = 'geometry';
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(threeObject, parentObject3D) {
	      (0, _invariant2.default)(parentObject3D instanceof _three2.default.Mesh || parentObject3D instanceof _three2.default.Points || parentObject3D instanceof _three2.default.Line, 'Parent is not a mesh');
	
	      _get(GeometryResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(GeometryResourceDescriptor.prototype), 'setParent', this).call(this, threeObject, parentObject3D);
	    }
	  }]);
	
	  return GeometryResourceDescriptor;
	}(_ResourceDescriptorBase2.default);
	
	module.exports = GeometryResourceDescriptor;

/***/ },

/***/ 704:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _THREEElementDescriptor = __webpack_require__(672);
	
	var _THREEElementDescriptor2 = _interopRequireDefault(_THREEElementDescriptor);
	
	var _ResourceReference = __webpack_require__(692);
	
	var _ResourceReference2 = _interopRequireDefault(_ResourceReference);
	
	var _React3Renderer = __webpack_require__(604);
	
	var _React3Renderer2 = _interopRequireDefault(_React3Renderer);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ResourceDescriptorBase = function (_THREEElementDescript) {
	  _inherits(ResourceDescriptorBase, _THREEElementDescript);
	
	  function ResourceDescriptorBase(react3RendererInstance) {
	    _classCallCheck(this, ResourceDescriptorBase);
	
	    var _this = _possibleConstructorReturn(this, (ResourceDescriptorBase.__proto__ || Object.getPrototypeOf(ResourceDescriptorBase)).call(this, react3RendererInstance));
	
	    _this._addedIntoRoot = function (threeObject) {
	      var currentParentMarkup = threeObject.userData.markup.parentMarkup;
	
	      var distance = 0;
	
	      while (currentParentMarkup) {
	        var parentResources = currentParentMarkup.threeObject.userData._resources;
	
	        if (parentResources) {
	          var resourceId = threeObject.resourceId;
	          var resourceInParent = parentResources.resourceMap[resourceId];
	
	          if (resourceInParent) {
	            _this._addResource(threeObject, {
	              id: resourceId,
	              distance: distance,
	              resource: resourceInParent
	            });
	          }
	        }
	
	        distance++;
	        currentParentMarkup = currentParentMarkup.threeObject.userData.markup.parentMarkup;
	      }
	
	      _this._updateResource(threeObject);
	    };
	
	    _this.hasProp('resourceId', {
	      type: _ReactPropTypes2.default.string.isRequired,
	      update: _this.triggerRemount,
	      default: ''
	    });
	    return _this;
	  }
	
	  _createClass(ResourceDescriptorBase, [{
	    key: 'construct',
	    value: function construct(props) {
	      (0, _invariant2.default)(props.hasOwnProperty('resourceId'), 'A resource type must have a property named "resourceId"!');
	
	      return new _ResourceReference2.default(props.resourceId);
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(ResourceDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(ResourceDescriptorBase.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      threeObject.userData.resourceMap = [];
	      threeObject.userData._eventCleanupQueue = [];
	      threeObject.userData._chosenResource = undefined;
	      threeObject.userData._debug = props.debug || false;
	
	      threeObject.userData.events.once('addedIntoRoot', this._addedIntoRoot);
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(threeObject) {
	      threeObject.userData._eventCleanupQueue.forEach(function (cleanup) {
	        cleanup();
	      });
	
	      delete threeObject.userData._eventCleanupQueue;
	      delete threeObject.userData.resourceMap;
	
	      this.updateChosenResource(threeObject, null);
	
	      _get(ResourceDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(ResourceDescriptorBase.prototype), 'unmount', this).call(this, threeObject);
	    }
	  }, {
	    key: 'updateChosenResource',
	    value: function updateChosenResource(threeObject, chosenResource) {
	      var oldResource = threeObject.userData._chosenResource;
	      if (oldResource !== chosenResource) {
	        threeObject.userData._chosenResource = chosenResource;
	
	        this.resourceUpdated(threeObject, chosenResource, oldResource);
	      }
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(threeObject, parentObject3D) {
	      var existingValueInSlot = parentObject3D[threeObject.userData._propertySlot];
	      (0, _invariant2.default)(existingValueInSlot === undefined || existingValueInSlot === null, 'Parent already has a ' + threeObject.userData._propertySlot + ' defined');
	      (0, _invariant2.default)(threeObject.userData._eventCleanupQueue.length === 0, 'Changing parents?');
	
	      _get(ResourceDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(ResourceDescriptorBase.prototype), 'setParent', this).call(this, threeObject, parentObject3D);
	
	      var currentParentMarkup = parentObject3D.userData.markup;
	
	      var onResourceAdded = this._onResourceAdded.bind(this, threeObject);
	      var onResourceRemoved = this._onResourceRemoved.bind(this, threeObject);
	
	      var parentEvents = currentParentMarkup.threeObject.userData.events;
	      parentEvents.on('resource.added', onResourceAdded);
	      parentEvents.on('resource.removed', onResourceRemoved);
	
	      threeObject.userData._eventCleanupQueue.push(function () {
	        parentEvents.removeListener('resource.added', onResourceAdded);
	        parentEvents.removeListener('resource.removed', onResourceRemoved);
	      });
	    }
	  }, {
	    key: '_onResourceAdded',
	    value: function _onResourceAdded(threeObject, resourceInfo) {
	      if (threeObject.resourceId !== resourceInfo.id) {
	        return;
	      }
	
	      this._addResource(threeObject, resourceInfo);
	
	      this._updateResource(threeObject);
	    }
	  }, {
	    key: '_addResource',
	    value: function _addResource(threeObject, resourceInfo) {
	      var resourceMap = threeObject.userData.resourceMap;
	
	      var i = void 0;
	
	      for (i = 0; i < resourceMap.length; ++i) {
	        if (resourceMap[i].distance === resourceInfo.distance) {
	          if (resourceMap[i].resource !== resourceInfo.resource) {
	            resourceMap[i].resource = resourceInfo.resource;
	          }
	
	          return;
	        }
	
	        if (resourceMap[i].distance > resourceInfo.distance) {
	          break;
	        }
	      }
	
	      resourceMap.splice(i, 0, {
	        distance: resourceInfo.distance,
	        resource: resourceInfo.resource
	      });
	    }
	  }, {
	    key: '_onResourceRemoved',
	    value: function _onResourceRemoved(threeObject, resourceInfo) {
	      if (threeObject.resourceId !== resourceInfo.id) {
	        return;
	      }
	
	      var resourceMap = threeObject.userData.resourceMap;
	
	      for (var i = 0; i < resourceMap.length; ++i) {
	        if (resourceMap[i].distance === resourceInfo.distance) {
	          if (resourceMap[i].resource === resourceInfo.resource) {
	            resourceMap.splice(i, 1);
	
	            this._updateResource(threeObject);
	          }
	          return;
	        }
	      }
	
	      (0, _invariant2.default)(false, 'This resource was not in this map?');
	    }
	  }, {
	    key: 'applyToSlot',
	    value: function applyToSlot(threeObject, parentObject, newResource) {
	      var propertySlot = threeObject.userData._propertySlot;
	      parentObject[propertySlot] = newResource;
	    }
	  }, {
	    key: 'resourceUpdated',
	    value: function resourceUpdated(threeObject, newResource, oldResource) {
	      var parentObject = threeObject.userData.markup.parentMarkup && threeObject.userData.markup.parentMarkup.threeObject || undefined;
	
	      if (parentObject) {
	        this.applyToSlot(threeObject, parentObject, newResource);
	
	        if (newResource === null) {
	          // invariant(false, 'Could not find resource named ' + threeObject.resourceId);
	        } else {
	          newResource.userData._references.push(parentObject);
	        }
	
	        if (oldResource) {
	          var removalIndex = oldResource.userData._references.indexOf(parentObject);
	
	          (0, _invariant2.default)(removalIndex !== -1, 'Bad reference count for resource');
	
	          oldResource.userData._references.splice(removalIndex, 1);
	        }
	      }
	    }
	  }, {
	    key: '_updateResource',
	    value: function _updateResource(threeObject) {
	      var resourceMap = threeObject.userData.resourceMap;
	
	      var chosenResource = null;
	
	      if (resourceMap.length > 0) {
	        chosenResource = resourceMap[0].resource;
	      }
	
	      this.updateChosenResource(threeObject, chosenResource);
	    }
	  }, {
	    key: 'highlight',
	    value: function highlight(threeObject) {
	      var ownerObject = threeObject.userData.markup.parentMarkup.threeObject;
	      ownerObject.userData._descriptor.highlight(ownerObject);
	    }
	  }, {
	    key: 'hideHighlight',
	    value: function hideHighlight(threeObject) {
	      var ownerObject = threeObject.userData.markup.parentMarkup.threeObject;
	      ownerObject.userData._descriptor.hideHighlight(ownerObject);
	    }
	  }]);
	
	  return ResourceDescriptorBase;
	}(_THREEElementDescriptor2.default);
	
	module.exports = ResourceDescriptorBase;

/***/ },

/***/ 705:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _GeometryResourceDescriptor = __webpack_require__(703);
	
	var _GeometryResourceDescriptor2 = _interopRequireDefault(_GeometryResourceDescriptor);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ShapeGeometryResourceDescriptor = function (_GeometryResourceDesc) {
	  _inherits(ShapeGeometryResourceDescriptor, _GeometryResourceDesc);
	
	  function ShapeGeometryResourceDescriptor(react3RendererInstance) {
	    _classCallCheck(this, ShapeGeometryResourceDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (ShapeGeometryResourceDescriptor.__proto__ || Object.getPrototypeOf(ShapeGeometryResourceDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasProp('type', {
	      type: _ReactPropTypes2.default.oneOf(['points', 'spacedPoints', 'shape']).isRequired,
	      update: _this.triggerRemount,
	      default: ''
	    });
	
	    _this.hasProp('divisions', {
	      type: _ReactPropTypes2.default.number,
	      update: _this.triggerRemount,
	      default: 5
	    });
	    return _this;
	  }
	
	  _createClass(ShapeGeometryResourceDescriptor, [{
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(ShapeGeometryResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(ShapeGeometryResourceDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      threeObject.userData._divisions = props.divisions;
	
	      threeObject.userData._type = props.type;
	    }
	  }, {
	    key: 'applyToSlot',
	    value: function applyToSlot(threeObject, parentObject, shape) {
	      if (!shape) {
	        return _get(ShapeGeometryResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(ShapeGeometryResourceDescriptor.prototype), 'applyToSlot', this).call(this, threeObject, parentObject, null);
	      }
	
	      var geometry = void 0;
	
	      switch (threeObject.userData._type) {
	        case 'points':
	          geometry = shape.createPointsGeometry();
	          break;
	        case 'spacedPoints':
	          geometry = shape.createSpacedPointsGeometry(threeObject.userData._divisions);
	          break;
	        case 'shape':
	          // TODO shapeGeometryDescriptor
	          geometry = new _three2.default.ShapeGeometry(shape);
	          break;
	        default:
	          break;
	      }
	
	      return _get(ShapeGeometryResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(ShapeGeometryResourceDescriptor.prototype), 'applyToSlot', this).call(this, threeObject, parentObject, geometry);
	    }
	  }]);
	
	  return ShapeGeometryResourceDescriptor;
	}(_GeometryResourceDescriptor2.default);
	
	module.exports = ShapeGeometryResourceDescriptor;

/***/ },

/***/ 706:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ResourceDescriptorBase = __webpack_require__(704);
	
	var _ResourceDescriptorBase2 = _interopRequireDefault(_ResourceDescriptorBase);
	
	var _Uniform = __webpack_require__(707);
	
	var _Uniform2 = _interopRequireDefault(_Uniform);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var TextureResourceDescriptor = function (_ResourceDescriptorBa) {
	  _inherits(TextureResourceDescriptor, _ResourceDescriptorBa);
	
	  function TextureResourceDescriptor() {
	    _classCallCheck(this, TextureResourceDescriptor);
	
	    return _possibleConstructorReturn(this, (TextureResourceDescriptor.__proto__ || Object.getPrototypeOf(TextureResourceDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(TextureResourceDescriptor, [{
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(TextureResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(TextureResourceDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      threeObject.userData._propertySlot = 'map';
	    }
	  }, {
	    key: 'applyToSlot',
	    value: function applyToSlot(threeObject, parentObject3D, newResource) {
	      if (parentObject3D instanceof _three2.default.Material) {
	        _get(TextureResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(TextureResourceDescriptor.prototype), 'applyToSlot', this).call(this, threeObject, parentObject3D, newResource);
	        parentObject3D.dispose();
	      } else if (parentObject3D instanceof _Uniform2.default) {
	        parentObject3D.setValue(newResource);
	      } else {
	        (0, _invariant2.default)(false, 'Parent is not a material or a uniform');
	      }
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(threeObject, parentObject3D) {
	      if (parentObject3D instanceof _three2.default.Material) {
	        _get(TextureResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(TextureResourceDescriptor.prototype), 'setParent', this).call(this, threeObject, parentObject3D);
	      } else if (parentObject3D instanceof _Uniform2.default) {
	        threeObject.userData._propertySlot = 'value';
	        _get(TextureResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(TextureResourceDescriptor.prototype), 'setParent', this).call(this, threeObject, parentObject3D);
	      } else {
	        (0, _invariant2.default)(false, 'Parent is not a material or a uniform');
	      }
	    }
	  }]);
	
	  return TextureResourceDescriptor;
	}(_ResourceDescriptorBase2.default);
	
	module.exports = TextureResourceDescriptor;

/***/ },

/***/ 707:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var Uniform = function () {
	  function Uniform() {
	    _classCallCheck(this, Uniform);
	
	    this.userData = {};
	    this.name = null;
	    this.value = null;
	    this.type = null;
	    this.uuid = _three2.default.Math.generateUUID();
	  }
	
	  _createClass(Uniform, [{
	    key: 'setValue',
	    value: function setValue(value) {
	      this.value = value;
	
	      this.userData.events.emit('valueChanged', value);
	    }
	  }]);
	
	  return Uniform;
	}();
	
	module.exports = Uniform;

/***/ },

/***/ 708:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ResourceDescriptorBase = __webpack_require__(704);
	
	var _ResourceDescriptorBase2 = _interopRequireDefault(_ResourceDescriptorBase);
	
	var _ShapeResourceReference = __webpack_require__(709);
	
	var _ShapeResourceReference2 = _interopRequireDefault(_ShapeResourceReference);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ShapeResourceDescriptor = function (_ResourceDescriptorBa) {
	  _inherits(ShapeResourceDescriptor, _ResourceDescriptorBa);
	
	  function ShapeResourceDescriptor() {
	    _classCallCheck(this, ShapeResourceDescriptor);
	
	    return _possibleConstructorReturn(this, (ShapeResourceDescriptor.__proto__ || Object.getPrototypeOf(ShapeResourceDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(ShapeResourceDescriptor, [{
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(ShapeResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(ShapeResourceDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      threeObject.userData._remountOnUpdate = true;
	    }
	  }, {
	    key: 'construct',
	    value: function construct(props) {
	      return new _ShapeResourceReference2.default(props.resourceId);
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(threeObject, parentObject3D) {
	      (0, _invariant2.default)(parentObject3D instanceof _three2.default.ExtrudeGeometry || parentObject3D instanceof _three2.default.BufferGeometry, 'Parent is not an extrude geometry');
	
	      _get(ShapeResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(ShapeResourceDescriptor.prototype), 'setParent', this).call(this, threeObject, parentObject3D);
	    }
	  }, {
	    key: 'applyToSlot',
	    value: function applyToSlot(threeObject, parentObject, newResource) {
	      threeObject.userData.events.emit('resource.set', newResource);
	    }
	  }]);
	
	  return ShapeResourceDescriptor;
	}(_ResourceDescriptorBase2.default);
	
	module.exports = ShapeResourceDescriptor;

/***/ },

/***/ 709:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _ResourceReference2 = __webpack_require__(692);
	
	var _ResourceReference3 = _interopRequireDefault(_ResourceReference2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	// all logic handled within ExtrudeGeometryDescriptor
	// TODO implement here instead
	var ShapeResourceReference = function (_ResourceReference) {
	  _inherits(ShapeResourceReference, _ResourceReference);
	
	  function ShapeResourceReference() {
	    _classCallCheck(this, ShapeResourceReference);
	
	    return _possibleConstructorReturn(this, (ShapeResourceReference.__proto__ || Object.getPrototypeOf(ShapeResourceReference)).apply(this, arguments));
	  }
	
	  return ShapeResourceReference;
	}(_ResourceReference3.default);
	
	module.exports = ShapeResourceReference;

/***/ },

/***/ 710:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var GeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(GeometryDescriptor, _GeometryDescriptorBa);
	
	  function GeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, GeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (GeometryDescriptor.__proto__ || Object.getPrototypeOf(GeometryDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasProp('vertices', {
	      override: true,
	      type: _ReactPropTypes2.default.arrayOf((0, _propTypeInstanceOf2.default)(_three2.default.Vector3)).isRequired,
	      update: function update(threeObject, vertices) {
	        if (threeObject.vertices !== vertices) {
	          threeObject.vertices = vertices;
	
	          threeObject.verticesNeedUpdate = true;
	        }
	      },
	
	      updateInitial: true,
	      default: []
	    });
	    return _this;
	  }
	
	  _createClass(GeometryDescriptor, [{
	    key: 'construct',
	    value: function construct() {
	      return new _three2.default.Geometry();
	    }
	  }]);
	
	  return GeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = GeometryDescriptor;

/***/ },

/***/ 711:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _class;
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _THREEElementDescriptor = __webpack_require__(672);
	
	var _THREEElementDescriptor2 = _interopRequireDefault(_THREEElementDescriptor);
	
	var _resource = __webpack_require__(712);
	
	var _resource2 = _interopRequireDefault(_resource);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var GeometryDescriptorBase = (0, _resource2.default)(_class = function (_THREEElementDescript) {
	  _inherits(GeometryDescriptorBase, _THREEElementDescript);
	
	  function GeometryDescriptorBase(react3RendererInstance) {
	    _classCallCheck(this, GeometryDescriptorBase);
	
	    var _this = _possibleConstructorReturn(this, (GeometryDescriptorBase.__proto__ || Object.getPrototypeOf(GeometryDescriptorBase)).call(this, react3RendererInstance));
	
	    _this.hasName();
	
	    _this.hasProp('vertices', {
	      type: _ReactPropTypes2.default.arrayOf((0, _propTypeInstanceOf2.default)(_three2.default.Vector3)),
	      update: function update(threeObject, vertices, hasProp) {
	        if (hasProp) {
	          if (threeObject.vertices !== vertices) {
	            threeObject.vertices = vertices;
	
	            threeObject.verticesNeedUpdate = true;
	          }
	        }
	      },
	
	      updateInitial: true,
	      default: []
	    });
	
	    _this.hasProp('colors', {
	      type: _ReactPropTypes2.default.arrayOf((0, _propTypeInstanceOf2.default)(_three2.default.Color)),
	      update: function update(threeObject, colors, hasProp) {
	        if (hasProp) {
	          if (threeObject.colors !== colors) {
	            threeObject.colors = colors;
	
	            threeObject.colorsNeedUpdate = true;
	          }
	        }
	      },
	
	      updateInitial: true,
	      default: []
	    });
	
	    _this.hasProp('faceVertexUvs', {
	      type: _ReactPropTypes2.default.arrayOf(_ReactPropTypes2.default.arrayOf(_ReactPropTypes2.default.arrayOf(_three2.default.Vector2))),
	      update: function update(threeObject, faceVertexUvs, hasProp) {
	        if (hasProp) {
	          if (threeObject.faceVertexUvs !== faceVertexUvs) {
	            threeObject.faceVertexUvs = faceVertexUvs;
	
	            threeObject.uvsNeedUpdate = true;
	          }
	        }
	      },
	
	      updateInitial: true,
	      default: []
	    });
	
	    _this.hasProp('faces', {
	      type: _ReactPropTypes2.default.arrayOf((0, _propTypeInstanceOf2.default)(_three2.default.Face3)),
	      update: function update(threeObject, faces, hasProp) {
	        if (hasProp) {
	          if (threeObject.faces !== faces) {
	            threeObject.faces = faces;
	
	            threeObject.verticesNeedUpdate = true;
	            threeObject.elementsNeedUpdate = true;
	          }
	        }
	      },
	
	      updateInitial: true,
	      default: []
	    });
	
	    _this.hasProp('dynamic', {
	      type: _ReactPropTypes2.default.bool,
	      update: function update(threeObject, dynamic) {
	        threeObject.dynamic = !!dynamic;
	      },
	
	      default: false
	    });
	    return _this;
	  }
	
	  _createClass(GeometryDescriptorBase, [{
	    key: 'setParent',
	    value: function setParent(geometry, parentObject3D) {
	      (0, _invariant2.default)(parentObject3D instanceof _three2.default.Mesh || parentObject3D instanceof _three2.default.Points || parentObject3D instanceof _three2.default.Line, 'Parent is not a mesh');
	      (0, _invariant2.default)(parentObject3D.geometry === undefined, 'Parent already has a geometry');
	
	      _get(GeometryDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(GeometryDescriptorBase.prototype), 'setParent', this).call(this, geometry, parentObject3D);
	
	      parentObject3D.geometry = geometry;
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      // ensure the userData is created
	      threeObject.userData = _extends({}, threeObject.userData);
	
	      if (props.hasOwnProperty('dynamic')) {
	        threeObject.dynamic = !!props.dynamic;
	      }
	
	      threeObject.userData._remountAfterPropsUpdate = false;
	
	      _get(GeometryDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(GeometryDescriptorBase.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(geometry) {
	      var parent = geometry.userData.markup.parentMarkup.threeObject;
	
	      // could either be a resource description or an actual geometry
	      if (parent instanceof _three2.default.Mesh || parent instanceof _three2.default.Points) {
	        if (parent.geometry === geometry) {
	          parent.geometry = undefined;
	        }
	      }
	
	      geometry.dispose();
	
	      _get(GeometryDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(GeometryDescriptorBase.prototype), 'unmount', this).call(this, geometry);
	    }
	  }, {
	    key: 'highlight',
	    value: function highlight(threeObject) {
	      var ownerMesh = threeObject.userData.markup.parentMarkup.threeObject;
	      threeObject.userData.events.emit('highlight', {
	        uuid: threeObject.uuid,
	        boundingBoxFunc: function boundingBoxFunc() {
	          var boundingBox = new _three2.default.Box3();
	
	          boundingBox.setFromObject(ownerMesh);
	
	          return [boundingBox];
	        }
	      });
	    }
	  }, {
	    key: 'getBoundingBoxes',
	    value: function getBoundingBoxes(threeObject) {
	      var ownerMesh = threeObject.userData.markup.parentMarkup.threeObject;
	
	      var boundingBox = new _three2.default.Box3();
	
	      boundingBox.setFromObject(ownerMesh);
	
	      return [boundingBox];
	    }
	  }, {
	    key: 'hideHighlight',
	    value: function hideHighlight(threeObject) {
	      threeObject.userData.events.emit('hideHighlight');
	    }
	  }]);
	
	  return GeometryDescriptorBase;
	}(_THREEElementDescriptor2.default)) || _class;
	
	module.exports = GeometryDescriptorBase;

/***/ },

/***/ 712:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _warning = __webpack_require__(578);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _ResourceContainer = __webpack_require__(677);
	
	var _ResourceContainer2 = _interopRequireDefault(_ResourceContainer);
	
	var _THREEElementDescriptor = __webpack_require__(672);
	
	var _THREEElementDescriptor2 = _interopRequireDefault(_THREEElementDescriptor);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	/**
	 * Resource decorator.
	 * Allows descriptors to be slotted into the <resources/> component.
	 *
	 * @param descriptor The descriptor to be patched
	 * @returns {ResourceDescriptor} the modified descriptor class
	 */
	function resource(descriptor) {
	  var _class, _temp;
	
	  var ResourceDescriptor = (_temp = _class = function (_descriptor) {
	    _inherits(ResourceDescriptor, _descriptor);
	
	    function ResourceDescriptor(react3RendererInstance) {
	      _classCallCheck(this, ResourceDescriptor);
	
	      var _this = _possibleConstructorReturn(this, (ResourceDescriptor.__proto__ || Object.getPrototypeOf(ResourceDescriptor)).call(this, react3RendererInstance));
	
	      _this.isResource = true;
	
	      _this.hasProp('resourceId', {
	        type: _ReactPropTypes2.default.string,
	        updateInitial: true,
	        initialOnly: true,
	        update: function update(threeObject, resourceId, hasProp) {
	          if (hasProp) {
	            threeObject.userData._resourceId = resourceId;
	
	            if (!threeObject.userData._hasReferences) {
	              threeObject.userData._hasReferences = true;
	              threeObject.userData._references = [];
	            }
	          }
	        },
	        default: ''
	      });
	      return _this;
	    }
	
	    // used for docs
	
	
	    _createClass(ResourceDescriptor, [{
	      key: 'applyInitialProps',
	      value: function applyInitialProps(threeObject, props) {
	        _get(ResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(ResourceDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	      }
	    }, {
	      key: 'setParent',
	      value: function setParent(threeObject, parentObject3D) {
	        if (parentObject3D instanceof _ResourceContainer2.default) {
	          if (process.env.NODE_ENV !== 'production') {
	            (0, _invariant2.default)(!!threeObject.userData._resourceId, 'All resources inside <resources> should have the "resourceId" property. ' + 'Current resource: <${threeObject.userData.react3internalComponent._elementType}>');
	          } else {
	            (0, _invariant2.default)(!!threeObject.userData._resourceId);
	          }
	
	          // still let it be mounted to root
	          _THREEElementDescriptor2.default.prototype.setParent.call(this, threeObject, parentObject3D);
	        } else {
	          if (process.env.NODE_ENV !== 'production') {
	            (0, _warning2.default)(!threeObject.userData._resourceId, 'Found <' + threeObject.userData.react3internalComponent._elementType + '> ' + 'with a resourceId property, ' + 'but it was not placed within a <resources/> element.');
	          }
	          _get(ResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(ResourceDescriptor.prototype), 'setParent', this).call(this, threeObject, parentObject3D);
	        }
	      }
	    }, {
	      key: 'highlight',
	      value: function highlight(threeObject) {
	        var result = void 0;
	
	        if (threeObject.userData._resourceId) {
	          // it's a resource. Let's highlight all references.
	          threeObject.userData.events.emit('highlight', {
	            uuid: threeObject.uuid,
	            boundingBoxFunc: function boundingBoxFunc() {
	              return threeObject.userData._references.reduce(function (boxes, objectWithReference) {
	                var boxesForReference = objectWithReference.userData._descriptor.getBoundingBoxes(objectWithReference);
	                if (process.env.NODE_ENV !== 'production') {
	                  (0, _invariant2.default)(boxesForReference.length > 0, 'No boxes found for resource.');
	                } else {
	                  (0, _invariant2.default)(boxesForReference.length > 0);
	                }
	                return boxes.concat(boxesForReference);
	              }, []);
	            }
	          });
	        } else {
	          result = _get(ResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(ResourceDescriptor.prototype), 'highlight', this).call(this, threeObject);
	        }
	
	        return result;
	      }
	    }, {
	      key: 'hideHighlight',
	      value: function hideHighlight(threeObject) {
	        var result = void 0;
	
	        if (threeObject.userData._resourceId) {
	          threeObject.userData.events.emit('hideHighlight');
	        } else {
	          result = _get(ResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(ResourceDescriptor.prototype), 'hideHighlight', this).call(this, threeObject);
	        }
	
	        return result;
	      }
	    }]);
	
	    return ResourceDescriptor;
	  }(descriptor), _class.displayName = '' + (descriptor.displayName || descriptor.name), _temp);
	
	  return ResourceDescriptor;
	}
	
	module.exports = resource;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 713:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var BufferGeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(BufferGeometryDescriptor, _GeometryDescriptorBa);
	
	  function BufferGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, BufferGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (BufferGeometryDescriptor.__proto__ || Object.getPrototypeOf(BufferGeometryDescriptor)).call(this, react3RendererInstance));
	
	    ['vertices', 'colors', 'faceVertexUvs', 'faces', 'dynamic'].forEach(function (propName) {
	      _this.removeProp(propName);
	    });
	
	    ['position', 'normal', 'color'].forEach(function (attributeName) {
	      _this.hasProp(attributeName, {
	        type: _ReactPropTypes2.default.oneOfType([(0, _propTypeInstanceOf2.default)(_three2.default.BufferAttribute), (0, _propTypeInstanceOf2.default)(_three2.default.InterleavedBufferAttribute)]),
	        update: function update(threeObject, attributeValue) {
	          if (attributeValue) {
	            threeObject.addAttribute(attributeName, attributeValue);
	          } else {
	            threeObject.removeAttribute(attributeName);
	          }
	        },
	
	        updateInitial: true,
	        default: undefined
	      });
	    });
	
	    _this.hasProp('index', {
	      type: _ReactPropTypes2.default.oneOfType([(0, _propTypeInstanceOf2.default)(_three2.default.BufferAttribute), (0, _propTypeInstanceOf2.default)(_three2.default.InterleavedBufferAttribute)]),
	      update: function update(threeObject, attributeValue) {
	        threeObject.setIndex(attributeValue);
	      },
	
	      updateInitial: true,
	      default: undefined
	    });
	    return _this;
	  }
	
	  _createClass(BufferGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct() {
	      return new _three2.default.BufferGeometry();
	    }
	  }]);
	
	  return BufferGeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = BufferGeometryDescriptor;

/***/ },

/***/ 714:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var BoxGeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(BoxGeometryDescriptor, _GeometryDescriptorBa);
	
	  function BoxGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, BoxGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (BoxGeometryDescriptor.__proto__ || Object.getPrototypeOf(BoxGeometryDescriptor)).call(this, react3RendererInstance));
	
	    ['width', 'height', 'depth'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number.isRequired,
	        update: _this.triggerRemount,
	        default: 1
	      });
	    });
	
	    ['widthSegments', 'heightSegments', 'depthSegments'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: _this.triggerRemount,
	        default: 1
	      });
	    });
	    return _this;
	  }
	
	  _createClass(BoxGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var width = props.width;
	      var height = props.height;
	      var depth = props.depth;
	      var widthSegments = props.widthSegments;
	      var heightSegments = props.heightSegments;
	      var depthSegments = props.depthSegments;
	
	      return new _three2.default.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);
	    }
	  }]);
	
	  return BoxGeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = BoxGeometryDescriptor;

/***/ },

/***/ 715:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _BufferGeometryDescriptorBase = __webpack_require__(716);
	
	var _BufferGeometryDescriptorBase2 = _interopRequireDefault(_BufferGeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var SphereGeometryDescriptor = function (_BufferGeometryDescri) {
	  _inherits(SphereGeometryDescriptor, _BufferGeometryDescri);
	
	  function SphereGeometryDescriptor(react3Instance) {
	    _classCallCheck(this, SphereGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (SphereGeometryDescriptor.__proto__ || Object.getPrototypeOf(SphereGeometryDescriptor)).call(this, react3Instance));
	
	    _this.hasProp('radius', {
	      type: _ReactPropTypes2.default.number,
	      update: _this.updateCacheAndReplace.bind(_this, 'radius'),
	      default: undefined
	    });
	
	    ['widthSegments', 'heightSegments'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: _this.triggerRemount,
	        default: undefined
	      });
	    });
	
	    ['phiStart', 'phiLength', 'thetaStart', 'thetaLength'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: _this.updateCacheAndReplace.bind(_this, propName),
	        default: undefined
	      });
	    });
	    return _this;
	  }
	
	  _createClass(SphereGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var radius = props.radius;
	      var widthSegments = props.widthSegments;
	      var heightSegments = props.heightSegments;
	      var phiStart = props.phiStart;
	      var phiLength = props.phiLength;
	      var thetaStart = props.thetaStart;
	      var thetaLength = props.thetaLength;
	
	      return new _three2.default.SphereBufferGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
	    }
	  }]);
	
	  return SphereGeometryDescriptor;
	}(_BufferGeometryDescriptorBase2.default);
	
	module.exports = SphereGeometryDescriptor;

/***/ },

/***/ 716:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var BufferGeometryDescriptorBase = function (_GeometryDescriptorBa) {
	  _inherits(BufferGeometryDescriptorBase, _GeometryDescriptorBa);
	
	  function BufferGeometryDescriptorBase() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, BufferGeometryDescriptorBase);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BufferGeometryDescriptorBase.__proto__ || Object.getPrototypeOf(BufferGeometryDescriptorBase)).call.apply(_ref, [this].concat(args))), _this), _this.updateCacheAndReplace = function (propName, threeObject, newValue) {
	      threeObject.userData._propsCache[propName] = newValue;
	      threeObject.userData._wantPropertyOverwrite = true;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(BufferGeometryDescriptorBase, [{
	    key: 'beginPropertyUpdates',
	    value: function beginPropertyUpdates(threeObject) {
	      _get(BufferGeometryDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(BufferGeometryDescriptorBase.prototype), 'beginPropertyUpdates', this).call(this, threeObject);
	
	      threeObject.userData._wantPropertyOverwrite = false;
	    }
	  }, {
	    key: 'completePropertyUpdates',
	    value: function completePropertyUpdates(threeObject) {
	      _get(BufferGeometryDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(BufferGeometryDescriptorBase.prototype), 'completePropertyUpdates', this).call(this, threeObject);
	
	      if (threeObject.userData._wantPropertyOverwrite) {
	        threeObject.userData._wantPropertyOverwrite = false;
	
	        threeObject.copy(this.construct(threeObject.userData._propsCache));
	      }
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(BufferGeometryDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(BufferGeometryDescriptorBase.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      threeObject.userData._propsCache = _extends({}, props);
	    }
	  }]);
	
	  return BufferGeometryDescriptorBase;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = BufferGeometryDescriptorBase;

/***/ },

/***/ 717:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ParametricGeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(ParametricGeometryDescriptor, _GeometryDescriptorBa);
	
	  function ParametricGeometryDescriptor(react3Instance) {
	    _classCallCheck(this, ParametricGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (ParametricGeometryDescriptor.__proto__ || Object.getPrototypeOf(ParametricGeometryDescriptor)).call(this, react3Instance));
	
	    ['slices', 'stacks'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number.isRequired,
	        update: _this.triggerRemount,
	        default: undefined
	      });
	    });
	
	    _this.hasProp('parametricFunction', {
	      type: _ReactPropTypes2.default.func.isRequired,
	      update: _this.triggerRemount,
	      default: undefined
	    });
	    return _this;
	  }
	
	  _createClass(ParametricGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var parametricFunction = props.parametricFunction;
	      var slices = props.slices;
	      var stacks = props.stacks;
	
	      return new _three2.default.ParametricGeometry(parametricFunction, slices, stacks);
	    }
	  }]);
	
	  return ParametricGeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = ParametricGeometryDescriptor;

/***/ },

/***/ 718:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _BufferGeometryDescriptorBase = __webpack_require__(716);
	
	var _BufferGeometryDescriptorBase2 = _interopRequireDefault(_BufferGeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var PlaneBufferGeometryDescriptor = function (_BufferGeometryDescri) {
	  _inherits(PlaneBufferGeometryDescriptor, _BufferGeometryDescri);
	
	  function PlaneBufferGeometryDescriptor(react3Instance) {
	    _classCallCheck(this, PlaneBufferGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (PlaneBufferGeometryDescriptor.__proto__ || Object.getPrototypeOf(PlaneBufferGeometryDescriptor)).call(this, react3Instance));
	
	    ['width', 'height'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number.isRequired,
	        update: _this.updateCacheAndReplace.bind(_this, propName),
	        default: 1
	      });
	    });
	
	    ['widthSegments', 'heightSegments'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: _this.triggerRemount,
	        default: 1
	      });
	    });
	    return _this;
	  }
	
	  _createClass(PlaneBufferGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var width = props.width;
	      var height = props.height;
	      var widthSegments = props.widthSegments;
	      var heightSegments = props.heightSegments;
	
	      return new _three2.default.PlaneBufferGeometry(width, height, widthSegments, heightSegments);
	    }
	  }]);
	
	  return PlaneBufferGeometryDescriptor;
	}(_BufferGeometryDescriptorBase2.default);
	
	module.exports = PlaneBufferGeometryDescriptor;

/***/ },

/***/ 719:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var PlaneGeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(PlaneGeometryDescriptor, _GeometryDescriptorBa);
	
	  function PlaneGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, PlaneGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (PlaneGeometryDescriptor.__proto__ || Object.getPrototypeOf(PlaneGeometryDescriptor)).call(this, react3RendererInstance));
	
	    ['width', 'height'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number.isRequired,
	        update: _this.triggerRemount,
	        default: undefined
	      });
	    });
	
	    ['widthSegments', 'heightSegments'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: _this.triggerRemount,
	        default: 1
	      });
	    });
	    return _this;
	  }
	
	  _createClass(PlaneGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var width = props.width;
	      var height = props.height;
	      var widthSegments = props.widthSegments;
	      var heightSegments = props.heightSegments;
	
	      return new _three2.default.PlaneGeometry(width, height, widthSegments, heightSegments);
	    }
	  }]);
	
	  return PlaneGeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = PlaneGeometryDescriptor;

/***/ },

/***/ 720:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _PolyhedronGeometryDescriptorBase = __webpack_require__(721);
	
	var _PolyhedronGeometryDescriptorBase2 = _interopRequireDefault(_PolyhedronGeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var PolyhedronGeometryDescriptor = function (_PolyhedronGeometryDe) {
	  _inherits(PolyhedronGeometryDescriptor, _PolyhedronGeometryDe);
	
	  function PolyhedronGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, PolyhedronGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (PolyhedronGeometryDescriptor.__proto__ || Object.getPrototypeOf(PolyhedronGeometryDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasProp('vertices', {
	      override: true,
	      type: _ReactPropTypes2.default.arrayOf(_ReactPropTypes2.default.number).isRequired,
	      update: _this.triggerRemount,
	      default: undefined
	    });
	
	    _this.hasProp('indices', {
	      type: _ReactPropTypes2.default.arrayOf(_ReactPropTypes2.default.number).isRequired,
	      update: _this.triggerRemount,
	      default: undefined
	    });
	    return _this;
	  }
	
	  _createClass(PolyhedronGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var vertices = props.vertices;
	      var indices = props.indices;
	      var radius = props.radius;
	      var detail = props.detail;
	
	      return new _three2.default.PolyhedronGeometry(vertices, indices, radius, detail);
	    }
	  }]);
	
	  return PolyhedronGeometryDescriptor;
	}(_PolyhedronGeometryDescriptorBase2.default);
	
	module.exports = PolyhedronGeometryDescriptor;

/***/ },

/***/ 721:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var PolyhedronGeometryDescriptorBase = function (_GeometryDescriptorBa) {
	  _inherits(PolyhedronGeometryDescriptorBase, _GeometryDescriptorBa);
	
	  function PolyhedronGeometryDescriptorBase(react3RendererInstance) {
	    _classCallCheck(this, PolyhedronGeometryDescriptorBase);
	
	    var _this = _possibleConstructorReturn(this, (PolyhedronGeometryDescriptorBase.__proto__ || Object.getPrototypeOf(PolyhedronGeometryDescriptorBase)).call(this, react3RendererInstance));
	
	    ['radius', 'detail'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number.isRequired,
	        update: _this.triggerRemount,
	        default: undefined
	      });
	    });
	    return _this;
	  }
	
	  return PolyhedronGeometryDescriptorBase;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = PolyhedronGeometryDescriptorBase;

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _PolyhedronGeometryDescriptorBase = __webpack_require__(721);
	
	var _PolyhedronGeometryDescriptorBase2 = _interopRequireDefault(_PolyhedronGeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var IcosahedronGeometryDescriptor = function (_PolyhedronGeometryDe) {
	  _inherits(IcosahedronGeometryDescriptor, _PolyhedronGeometryDe);
	
	  function IcosahedronGeometryDescriptor() {
	    _classCallCheck(this, IcosahedronGeometryDescriptor);
	
	    return _possibleConstructorReturn(this, (IcosahedronGeometryDescriptor.__proto__ || Object.getPrototypeOf(IcosahedronGeometryDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(IcosahedronGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var radius = props.radius;
	      var detail = props.detail;
	
	      return new _three2.default.IcosahedronGeometry(radius, detail);
	    }
	  }]);
	
	  return IcosahedronGeometryDescriptor;
	}(_PolyhedronGeometryDescriptorBase2.default);
	
	module.exports = IcosahedronGeometryDescriptor;

/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _PolyhedronGeometryDescriptorBase = __webpack_require__(721);
	
	var _PolyhedronGeometryDescriptorBase2 = _interopRequireDefault(_PolyhedronGeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var OctahedronGeometryDescriptor = function (_PolyhedronGeometryDe) {
	  _inherits(OctahedronGeometryDescriptor, _PolyhedronGeometryDe);
	
	  function OctahedronGeometryDescriptor() {
	    _classCallCheck(this, OctahedronGeometryDescriptor);
	
	    return _possibleConstructorReturn(this, (OctahedronGeometryDescriptor.__proto__ || Object.getPrototypeOf(OctahedronGeometryDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(OctahedronGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var radius = props.radius;
	      var detail = props.detail;
	
	      return new _three2.default.OctahedronGeometry(radius, detail);
	    }
	  }]);
	
	  return OctahedronGeometryDescriptor;
	}(_PolyhedronGeometryDescriptorBase2.default);
	
	module.exports = OctahedronGeometryDescriptor;

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _PolyhedronGeometryDescriptorBase = __webpack_require__(721);
	
	var _PolyhedronGeometryDescriptorBase2 = _interopRequireDefault(_PolyhedronGeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var TetrahedronGeometryDescriptor = function (_PolyhedronGeometryDe) {
	  _inherits(TetrahedronGeometryDescriptor, _PolyhedronGeometryDe);
	
	  function TetrahedronGeometryDescriptor() {
	    _classCallCheck(this, TetrahedronGeometryDescriptor);
	
	    return _possibleConstructorReturn(this, (TetrahedronGeometryDescriptor.__proto__ || Object.getPrototypeOf(TetrahedronGeometryDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(TetrahedronGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var radius = props.radius;
	      var detail = props.detail;
	
	      return new _three2.default.TetrahedronGeometry(radius, detail);
	    }
	  }]);
	
	  return TetrahedronGeometryDescriptor;
	}(_PolyhedronGeometryDescriptorBase2.default);
	
	module.exports = TetrahedronGeometryDescriptor;

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var CircleGeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(CircleGeometryDescriptor, _GeometryDescriptorBa);
	
	  function CircleGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, CircleGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (CircleGeometryDescriptor.__proto__ || Object.getPrototypeOf(CircleGeometryDescriptor)).call(this, react3RendererInstance));
	
	    ['radius', 'segments', 'thetaStart', 'thetaLength'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: _this.triggerRemount,
	        default: undefined
	      });
	    });
	    return _this;
	  }
	
	  _createClass(CircleGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var radius = props.radius;
	      var segments = props.segments;
	      var thetaStart = props.thetaStart;
	      var thetaLength = props.thetaLength;
	
	      return new _three2.default.CircleGeometry(radius, segments, thetaStart, thetaLength);
	    }
	  }]);
	
	  return CircleGeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = CircleGeometryDescriptor;

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _BufferGeometryDescriptorBase = __webpack_require__(716);
	
	var _BufferGeometryDescriptorBase2 = _interopRequireDefault(_BufferGeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var CircleBufferGeometryDescriptor = function (_BufferGeometryDescri) {
	  _inherits(CircleBufferGeometryDescriptor, _BufferGeometryDescri);
	
	  function CircleBufferGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, CircleBufferGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (CircleBufferGeometryDescriptor.__proto__ || Object.getPrototypeOf(CircleBufferGeometryDescriptor)).call(this, react3RendererInstance));
	
	    ['radius', 'segments', 'thetaStart', 'thetaLength'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: _this.updateCacheAndReplace.bind(_this, propName),
	        default: undefined
	      });
	    });
	    return _this;
	  }
	
	  _createClass(CircleBufferGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var radius = props.radius;
	      var segments = props.segments;
	      var thetaStart = props.thetaStart;
	      var thetaLength = props.thetaLength;
	
	      return new _three2.default.CircleBufferGeometry(radius, segments, thetaStart, thetaLength);
	    }
	  }]);
	
	  return CircleBufferGeometryDescriptor;
	}(_BufferGeometryDescriptorBase2.default);
	
	module.exports = CircleBufferGeometryDescriptor;

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var RingGeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(RingGeometryDescriptor, _GeometryDescriptorBa);
	
	  function RingGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, RingGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (RingGeometryDescriptor.__proto__ || Object.getPrototypeOf(RingGeometryDescriptor)).call(this, react3RendererInstance));
	
	    ['innerRadius', 'outerRadius', 'thetaSegments', 'phiSegments', 'thetaStart', 'thetaLength'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: _this.triggerRemount,
	        default: undefined
	      });
	    });
	    return _this;
	  }
	
	  _createClass(RingGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var innerRadius = props.innerRadius;
	      var outerRadius = props.outerRadius;
	      var thetaSegments = props.thetaSegments;
	      var phiSegments = props.phiSegments;
	      var thetaStart = props.thetaStart;
	      var thetaLength = props.thetaLength;
	
	      return new _three2.default.RingGeometry(innerRadius, outerRadius, thetaSegments, phiSegments, thetaStart, thetaLength);
	    }
	  }]);
	
	  return RingGeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = RingGeometryDescriptor;

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var CylinderGeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(CylinderGeometryDescriptor, _GeometryDescriptorBa);
	
	  function CylinderGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, CylinderGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (CylinderGeometryDescriptor.__proto__ || Object.getPrototypeOf(CylinderGeometryDescriptor)).call(this, react3RendererInstance));
	
	    ['radiusTop', 'radiusBottom', 'height', 'radialSegments', 'heightSegments', 'openEnded', 'thetaStart', 'thetaLength'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: _this.triggerRemount,
	        default: undefined
	      });
	    });
	    return _this;
	  }
	
	  _createClass(CylinderGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var radiusTop = props.radiusTop;
	      var radiusBottom = props.radiusBottom;
	      var height = props.height;
	      var radialSegments = props.radialSegments;
	      var heightSegments = props.heightSegments;
	      var openEnded = props.openEnded;
	      var thetaStart = props.thetaStart;
	      var thetaLength = props.thetaLength;
	
	      return new _three2.default.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength);
	    }
	  }]);
	
	  return CylinderGeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = CylinderGeometryDescriptor;

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var LatheGeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(LatheGeometryDescriptor, _GeometryDescriptorBa);
	
	  function LatheGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, LatheGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (LatheGeometryDescriptor.__proto__ || Object.getPrototypeOf(LatheGeometryDescriptor)).call(this, react3RendererInstance));
	
	    ['segments', 'phiStart', 'phiLength'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: _this.triggerRemount,
	        default: undefined
	      });
	    });
	
	    _this.hasProp('points', {
	      type: _ReactPropTypes2.default.arrayOf((0, _propTypeInstanceOf2.default)(_three2.default.Vector2)).isRequired,
	      update: _this.triggerRemount,
	      default: undefined
	    });
	    return _this;
	  }
	
	  _createClass(LatheGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var points = props.points;
	      var segments = props.segments;
	      var phiStart = props.phiStart;
	      var phiLength = props.phiLength;
	
	      return new _three2.default.LatheGeometry(points, segments, phiStart, phiLength);
	    }
	  }]);
	
	  return LatheGeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = LatheGeometryDescriptor;

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var TorusGeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(TorusGeometryDescriptor, _GeometryDescriptorBa);
	
	  function TorusGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, TorusGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (TorusGeometryDescriptor.__proto__ || Object.getPrototypeOf(TorusGeometryDescriptor)).call(this, react3RendererInstance));
	
	    ['radius', 'tube', 'radialSegments', 'tubularSegments', 'arc'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: _this.triggerRemount,
	        default: undefined
	      });
	    });
	    return _this;
	  }
	
	  _createClass(TorusGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var radius = props.radius;
	      var tube = props.tube;
	      var radialSegments = props.radialSegments;
	      var tubularSegments = props.tubularSegments;
	      var arc = props.arc;
	
	      return new _three2.default.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
	    }
	  }]);
	
	  return TorusGeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = TorusGeometryDescriptor;

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var TorusKnotGeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(TorusKnotGeometryDescriptor, _GeometryDescriptorBa);
	
	  function TorusKnotGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, TorusKnotGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (TorusKnotGeometryDescriptor.__proto__ || Object.getPrototypeOf(TorusKnotGeometryDescriptor)).call(this, react3RendererInstance));
	
	    ['radius', 'tube', 'tubularSegments', 'radialSegments', 'p', 'q', 'heightScale'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: _this.triggerRemount,
	        default: undefined
	      });
	    });
	    return _this;
	  }
	
	  _createClass(TorusKnotGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var radius = props.radius;
	      var tube = props.tube;
	      var tubularSegments = props.tubularSegments;
	      var radialSegments = props.radialSegments;
	      var p = props.p;
	      var q = props.q;
	      var heightScale = props.heightScale;
	
	      return new _three2.default.TorusKnotGeometry(radius, tube, tubularSegments, radialSegments, p, q, heightScale);
	    }
	  }]);
	
	  return TorusKnotGeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = TorusKnotGeometryDescriptor;

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	var _ShapeResourceReference = __webpack_require__(709);
	
	var _ShapeResourceReference2 = _interopRequireDefault(_ShapeResourceReference);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ExtrudeGeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(ExtrudeGeometryDescriptor, _GeometryDescriptorBa);
	
	  function ExtrudeGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, ExtrudeGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (ExtrudeGeometryDescriptor.__proto__ || Object.getPrototypeOf(ExtrudeGeometryDescriptor)).call(this, react3RendererInstance));
	
	    _this._invalidChild = function (child) {
	      var invalid = !(child instanceof _three2.default.Shape || child instanceof _ShapeResourceReference2.default);
	
	      return invalid;
	    };
	
	    _this.hasProp('shapes', {
	      type: _ReactPropTypes2.default.arrayOf((0, _propTypeInstanceOf2.default)(_three2.default.Shape)),
	      updateInitial: true,
	      update: function update(threeObject, shapes) {
	        threeObject.userData._shapesFromProps = shapes || [];
	
	        // if the root instance exists, then it can be refreshed
	        if (threeObject.userData._rootInstance) {
	          _this._refreshGeometry(threeObject);
	        }
	      },
	      default: []
	    });
	
	    _this.hasProp('settings', {
	      type: _ReactPropTypes2.default.any,
	      update: function update(threeObject, settings) {
	        threeObject.userData._settings = settings;
	      },
	
	      updateInitial: true,
	      default: undefined
	    });
	
	    ['amount', 'bevelThickness', 'bevelSize', 'bevelSegments', 'bevelEnabled', 'curveSegments', 'steps', 'extrudePath', 'UVGenerator', 'frames'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.any,
	        update: function update(threeObject, value) {
	          if (value === undefined) {
	            delete threeObject.userData._options[propName];
	          } else {
	            threeObject.userData._options[propName] = value;
	          }
	
	          _this._refreshGeometry(threeObject);
	        },
	        default: undefined
	      });
	    });
	    return _this;
	  }
	
	  _createClass(ExtrudeGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct() {
	      return new _three2.default.BufferGeometry();
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(ExtrudeGeometryDescriptor.prototype.__proto__ || Object.getPrototypeOf(ExtrudeGeometryDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      var options = {};
	
	      ['amount', 'bevelThickness', 'bevelSize', 'bevelSegments', 'bevelEnabled', 'curveSegments', 'steps', 'extrudePath', 'UVGenerator', 'frames'].forEach(function (propName) {
	        if (props.hasOwnProperty(propName)) {
	          options[propName] = props[propName];
	        }
	      });
	
	      threeObject.userData._shapeCache = [];
	      threeObject.userData._options = options;
	      threeObject.userData._resourceListenerCleanupFunctions = [];
	
	      this._refreshGeometry(threeObject);
	    }
	  }, {
	    key: '_onShapeResourceUpdate',
	    value: function _onShapeResourceUpdate(threeObject, shapeIndex, shape) {
	      threeObject.userData._shapeCache[shapeIndex] = shape;
	
	      this._refreshGeometry(threeObject);
	    }
	  }, {
	    key: '_refreshGeometry',
	    value: function _refreshGeometry(threeObject) {
	      var shapes = threeObject.userData._shapeCache.filter(function (shape) {
	        return !!shape;
	      }).concat(threeObject.userData._shapesFromProps);
	
	      threeObject.fromGeometry(new _three2.default.ExtrudeGeometry(shapes, _extends({}, threeObject.userData._options, threeObject.userData._settings)));
	    }
	  }, {
	    key: 'addChildren',
	    value: function addChildren(threeObject, children) {
	      var _this2 = this;
	
	      // TODO: add shapes here!
	
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(children.filter(this._invalidChild).length === 0, 'Extrude geometry children' + ' can only be shapes!');
	      } else {
	        (0, _invariant2.default)(children.filter(this._invalidChild).length === 0, false);
	      }
	
	      var shapeCache = [];
	
	      children.forEach(function (child) {
	        if (child instanceof _ShapeResourceReference2.default) {
	          (function () {
	            var shapeIndex = shapeCache.length;
	
	            var resourceListener = _this2._onShapeResourceUpdate.bind(_this2, threeObject, shapeIndex);
	
	            resourceListener.target = child;
	
	            var cleanupFunction = function cleanupFunction() {
	              child.userData.events.removeListener('resource.set', resourceListener);
	
	              threeObject.userData._resourceListenerCleanupFunctions.splice(threeObject.userData._resourceListenerCleanupFunctions.indexOf(cleanupFunction), 1);
	            };
	
	            threeObject.userData._resourceListenerCleanupFunctions.push(cleanupFunction);
	
	            child.userData.events.on('resource.set', resourceListener);
	            child.userData.events.once('dispose', function () {
	              cleanupFunction();
	            });
	
	            shapeCache.push(null);
	          })();
	        } else {
	          shapeCache.push(child);
	        }
	      });
	
	      threeObject.userData._shapeCache = shapeCache;
	
	      this._refreshGeometry(threeObject);
	    }
	  }, {
	    key: 'addChild',
	    value: function addChild(threeObject) {
	      // new shape was added
	      // TODO optimize
	
	      this.triggerRemount(threeObject);
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild(threeObject) {
	      // shape was removed
	      // TODO optimize
	
	      this.triggerRemount(threeObject);
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(geometry) {
	      geometry.userData._resourceListenerCleanupFunctions.forEach(function (listener) {
	        listener();
	      });
	
	      delete geometry.userData._resourceListenerCleanupFunctions;
	      delete geometry.userData._options;
	      delete geometry.userData._shapesFromProps;
	
	      return _get(ExtrudeGeometryDescriptor.prototype.__proto__ || Object.getPrototypeOf(ExtrudeGeometryDescriptor.prototype), 'unmount', this).call(this, geometry);
	    }
	  }]);
	
	  return ExtrudeGeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = ExtrudeGeometryDescriptor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var TubeGeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(TubeGeometryDescriptor, _GeometryDescriptorBa);
	
	  function TubeGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, TubeGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (TubeGeometryDescriptor.__proto__ || Object.getPrototypeOf(TubeGeometryDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasProp('path', {
	      type: (0, _propTypeInstanceOf2.default)(_three2.default.Curve).isRequired,
	      update: _this.triggerRemount
	    });
	
	    _this.hasProp('segments', {
	      type: _ReactPropTypes2.default.number,
	      update: _this.triggerRemount,
	      default: 64
	    });
	
	    _this.hasProp('radius', {
	      type: _ReactPropTypes2.default.number,
	      update: _this.triggerRemount,
	      default: 1
	    });
	
	    _this.hasProp('radiusSegments', {
	      type: _ReactPropTypes2.default.number,
	      update: _this.triggerRemount,
	      default: 8
	    });
	
	    _this.hasProp('closed', {
	      type: _ReactPropTypes2.default.bool,
	      update: _this.triggerRemount,
	      default: false
	    });
	    return _this;
	  }
	
	  _createClass(TubeGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      // props from http://threejs.org/docs/#Reference/Extras.Geometries/TubeGeometry:
	      var path = props.path;
	      var segments = props.segments;
	      var radius = props.radius;
	      var radiusSegments = props.radiusSegments;
	      var closed = props.closed;
	
	      return new _three2.default.TubeGeometry(path, segments, radius, radiusSegments, closed);
	    }
	  }]);
	
	  return TubeGeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = TubeGeometryDescriptor;

/***/ },

/***/ 734:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var DodecahedronGeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(DodecahedronGeometryDescriptor, _GeometryDescriptorBa);
	
	  function DodecahedronGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, DodecahedronGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (DodecahedronGeometryDescriptor.__proto__ || Object.getPrototypeOf(DodecahedronGeometryDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasProp('radius', {
	      type: _ReactPropTypes2.default.number,
	      update: _this.triggerRemount,
	      default: 1
	    });
	
	    _this.hasProp('detail', {
	      type: _ReactPropTypes2.default.number,
	      update: _this.triggerRemount,
	      default: 0
	    });
	    return _this;
	  }
	
	  _createClass(DodecahedronGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      // props from http://threejs.org/docs/index.html#Reference/Extras.Geometries/DodecahedronGeometry:
	      var radius = props.radius;
	      var detail = props.detail;
	
	      return new _three2.default.DodecahedronGeometry(radius, detail);
	    }
	  }]);
	
	  return DodecahedronGeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = DodecahedronGeometryDescriptor;

/***/ },

/***/ 735:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _GeometryDescriptorBase = __webpack_require__(711);
	
	var _GeometryDescriptorBase2 = _interopRequireDefault(_GeometryDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var TextGeometryDescriptor = function (_GeometryDescriptorBa) {
	  _inherits(TextGeometryDescriptor, _GeometryDescriptorBa);
	
	  function TextGeometryDescriptor(react3RendererInstance) {
	    _classCallCheck(this, TextGeometryDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (TextGeometryDescriptor.__proto__ || Object.getPrototypeOf(TextGeometryDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasProp('text', {
	      type: _ReactPropTypes2.default.string.isRequired,
	      update: _this.triggerRemount,
	      default: 'TEXT MISSING'
	    });
	
	    _this.hasProp('font', {
	      type: _ReactPropTypes2.default.instanceOf(_three2.default.Font).isRequired,
	      update: _this.triggerRemount
	    });
	
	    _this.hasProp('size', {
	      type: _ReactPropTypes2.default.number.isRequired,
	      update: _this.triggerRemount
	    });
	
	    _this.hasProp('height', {
	      type: _ReactPropTypes2.default.number,
	      update: _this.triggerRemount,
	      default: 50
	    });
	
	    _this.hasProp('curveSegments', {
	      type: _ReactPropTypes2.default.number,
	      update: _this.triggerRemount,
	      default: 12
	    });
	
	    _this.hasProp('bevelEnabled', {
	      type: _ReactPropTypes2.default.bool,
	      update: _this.triggerRemount,
	      default: false
	    });
	
	    _this.hasProp('bevelThickness', {
	      type: _ReactPropTypes2.default.number,
	      update: _this.triggerRemount,
	      default: 10
	    });
	
	    _this.hasProp('bevelSize', {
	      type: _ReactPropTypes2.default.number,
	      update: _this.triggerRemount,
	      default: 8
	    });
	    return _this;
	  }
	
	  _createClass(TextGeometryDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      // props from http://threejs.org/docs/#Reference/Extras.Geometries/TextGeometry:
	      var text = props.text;
	      var font = props.font;
	      var size = props.size;
	      var height = props.height;
	      var curveSegments = props.curveSegments;
	      var bevelEnabled = props.bevelEnabled;
	      var bevelThickness = props.bevelThickness;
	      var bevelSize = props.bevelSize;
	
	      return new _three2.default.TextGeometry(text, {
	        font: font,
	        size: size,
	        height: height,
	        curveSegments: curveSegments,
	        bevelEnabled: bevelEnabled,
	        bevelThickness: bevelThickness,
	        bevelSize: bevelSize
	      });
	    }
	  }]);
	
	  return TextGeometryDescriptor;
	}(_GeometryDescriptorBase2.default);
	
	module.exports = TextGeometryDescriptor;

/***/ },

/***/ 736:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _class;
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _PathDescriptorBase2 = __webpack_require__(737);
	
	var _PathDescriptorBase3 = _interopRequireDefault(_PathDescriptorBase2);
	
	var _resource = __webpack_require__(712);
	
	var _resource2 = _interopRequireDefault(_resource);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ShapeDescriptor = (0, _resource2.default)(_class = function (_PathDescriptorBase) {
	  _inherits(ShapeDescriptor, _PathDescriptorBase);
	
	  function ShapeDescriptor() {
	    _classCallCheck(this, ShapeDescriptor);
	
	    return _possibleConstructorReturn(this, (ShapeDescriptor.__proto__ || Object.getPrototypeOf(ShapeDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(ShapeDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      if (props.hasOwnProperty('points')) {
	        return new _three2.default.Shape(props.points);
	      }
	
	      return new _three2.default.Shape();
	    }
	  }]);
	
	  return ShapeDescriptor;
	}(_PathDescriptorBase3.default)) || _class;
	
	module.exports = ShapeDescriptor;

/***/ },

/***/ 737:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _THREEElementDescriptor = __webpack_require__(672);
	
	var _THREEElementDescriptor2 = _interopRequireDefault(_THREEElementDescriptor);
	
	var _ShapeAction = __webpack_require__(738);
	
	var _ShapeAction2 = _interopRequireDefault(_ShapeAction);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var PathDescriptorBase = function (_THREEElementDescript) {
	  _inherits(PathDescriptorBase, _THREEElementDescript);
	
	  function PathDescriptorBase(react3RendererInstance) {
	    _classCallCheck(this, PathDescriptorBase);
	
	    var _this = _possibleConstructorReturn(this, (PathDescriptorBase.__proto__ || Object.getPrototypeOf(PathDescriptorBase)).call(this, react3RendererInstance));
	
	    _this._invalidChild = function (child) {
	      var invalid = !(child instanceof _ShapeAction2.default);
	
	      return invalid;
	    };
	
	    _this.hasProp('points', {
	      type: _ReactPropTypes2.default.arrayOf((0, _propTypeInstanceOf2.default)(_three2.default.Vector2)),
	      update: _this.triggerRemount,
	      default: []
	    });
	    return _this;
	  }
	
	  _createClass(PathDescriptorBase, [{
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      threeObject.userData = _extends({}, threeObject.userData);
	
	      // paths don't have uuids
	      threeObject.uuid = _three2.default.Math.generateUUID();
	
	      return _get(PathDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(PathDescriptorBase.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	    }
	  }, {
	    key: 'addChildren',
	    value: function addChildren(threeObject, children) {
	      var _this2 = this;
	
	      // TODO: create paths here
	
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(children.filter(this._invalidChild).length === 0, 'Shape children can only be shape actions!');
	      } else {
	        (0, _invariant2.default)(children.filter(this._invalidChild).length === 0, false);
	      }
	
	      // apply all actions in order
	      children.forEach(function (child) {
	        _this2.performChildAction(threeObject, child);
	      });
	    }
	  }, {
	    key: 'performChildAction',
	    value: function performChildAction(threeObject, child) {
	      child.performAction(threeObject);
	    }
	  }, {
	    key: 'addChild',
	    value: function addChild(threeObject) {
	      this.triggerRemount(threeObject);
	    }
	  }, {
	    key: 'moveChild',
	    value: function moveChild(threeObject) {
	      this.triggerRemount(threeObject);
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild(threeObject) {
	      this.triggerRemount(threeObject);
	    }
	  }, {
	    key: 'highlight',
	    value: function highlight(threeObject) {
	      var parentObject = threeObject.userData.markup.parentMarkup.threeObject;
	
	      parentObject.userData._descriptor.highlight(parentObject);
	    }
	  }, {
	    key: 'getBoundingBoxes',
	    value: function getBoundingBoxes(threeObject) {
	      var parentObject = threeObject.userData.markup.parentMarkup.threeObject;
	
	      return parentObject.userData._descriptor.getBoundingBoxes(parentObject);
	    }
	  }]);
	
	  return PathDescriptorBase;
	}(_THREEElementDescriptor2.default);
	
	module.exports = PathDescriptorBase;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 738:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	/**
	 * @abstract
	 */
	var ShapeAction = function () {
	  function ShapeAction() {
	    _classCallCheck(this, ShapeAction);
	
	    this.uuid = _three2.default.Math.generateUUID();
	
	    this.userData = {};
	  }
	
	  _createClass(ShapeAction, [{
	    key: 'performAction',
	    value: function performAction(shape) {// eslint-disable-line no-unused-vars
	      // to be done by subclasses
	    }
	  }]);
	
	  return ShapeAction;
	}();
	
	module.exports = ShapeAction;

/***/ },

/***/ 739:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _ShapeActionDescriptorBase = __webpack_require__(740);
	
	var _ShapeActionDescriptorBase2 = _interopRequireDefault(_ShapeActionDescriptorBase);
	
	var _MoveToAction = __webpack_require__(742);
	
	var _MoveToAction2 = _interopRequireDefault(_MoveToAction);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var MoveToDescriptor = function (_ShapeActionDescripto) {
	  _inherits(MoveToDescriptor, _ShapeActionDescripto);
	
	  function MoveToDescriptor(react3RendererInstance) {
	    _classCallCheck(this, MoveToDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (MoveToDescriptor.__proto__ || Object.getPrototypeOf(MoveToDescriptor)).call(this, react3RendererInstance));
	
	    ['x', 'y'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number.isRequired,
	        update: _this.triggerRemount,
	        default: 0
	      });
	    });
	    return _this;
	  }
	
	  _createClass(MoveToDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      return new _MoveToAction2.default(props.x, props.y);
	    }
	  }]);
	
	  return MoveToDescriptor;
	}(_ShapeActionDescriptorBase2.default);
	
	module.exports = MoveToDescriptor;

/***/ },

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _THREEElementDescriptor = __webpack_require__(672);
	
	var _THREEElementDescriptor2 = _interopRequireDefault(_THREEElementDescriptor);
	
	var _HoleAction = __webpack_require__(741);
	
	var _HoleAction2 = _interopRequireDefault(_HoleAction);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ShapeActionDescriptorBase = function (_THREEElementDescript) {
	  _inherits(ShapeActionDescriptorBase, _THREEElementDescript);
	
	  function ShapeActionDescriptorBase() {
	    _classCallCheck(this, ShapeActionDescriptorBase);
	
	    return _possibleConstructorReturn(this, (ShapeActionDescriptorBase.__proto__ || Object.getPrototypeOf(ShapeActionDescriptorBase)).apply(this, arguments));
	  }
	
	  _createClass(ShapeActionDescriptorBase, [{
	    key: 'setParent',
	    value: function setParent(threeObject, parentObject3D) {
	      (0, _invariant2.default)(parentObject3D instanceof _three2.default.Path || parentObject3D instanceof _HoleAction2.default, 'Shape action commands (%s) can only be added to shapes, paths or holes.', this.constructor.name);
	
	      _get(ShapeActionDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(ShapeActionDescriptorBase.prototype), 'setParent', this).call(this, threeObject, parentObject3D);
	    }
	  }, {
	    key: 'highlight',
	    value: function highlight(threeObject) {
	      var parentObject = threeObject.userData.markup.parentMarkup.threeObject;
	
	      parentObject.userData._descriptor.highlight(parentObject);
	    }
	  }, {
	    key: 'getBoundingBoxes',
	    value: function getBoundingBoxes(threeObject) {
	      var parentObject = threeObject.userData.markup.parentMarkup.threeObject;
	
	      return parentObject.userData._descriptor.getBoundingBoxes(parentObject);
	    }
	  }]);
	
	  return ShapeActionDescriptorBase;
	}(_THREEElementDescriptor2.default);
	
	module.exports = ShapeActionDescriptorBase;

/***/ },

/***/ 741:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ShapeAction2 = __webpack_require__(738);
	
	var _ShapeAction3 = _interopRequireDefault(_ShapeAction2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var HoleAction = function (_ShapeAction) {
	  _inherits(HoleAction, _ShapeAction);
	
	  function HoleAction() {
	    _classCallCheck(this, HoleAction);
	
	    var _this = _possibleConstructorReturn(this, (HoleAction.__proto__ || Object.getPrototypeOf(HoleAction)).call(this));
	
	    _this.path = new _three2.default.Path();
	    return _this;
	  }
	
	  _createClass(HoleAction, [{
	    key: 'performAction',
	    value: function performAction(shape) {
	      shape.holes.push(this.path);
	    }
	  }]);
	
	  return HoleAction;
	}(_ShapeAction3.default);
	
	module.exports = HoleAction;

/***/ },

/***/ 742:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ShapeAction2 = __webpack_require__(738);
	
	var _ShapeAction3 = _interopRequireDefault(_ShapeAction2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var MoveToAction = function (_ShapeAction) {
	  _inherits(MoveToAction, _ShapeAction);
	
	  function MoveToAction(x, y) {
	    _classCallCheck(this, MoveToAction);
	
	    var _this = _possibleConstructorReturn(this, (MoveToAction.__proto__ || Object.getPrototypeOf(MoveToAction)).call(this));
	
	    _this.x = x;
	    _this.y = y;
	    return _this;
	  }
	
	  _createClass(MoveToAction, [{
	    key: 'performAction',
	    value: function performAction(shape) {
	      shape.moveTo(this.x, this.y);
	    }
	  }]);
	
	  return MoveToAction;
	}(_ShapeAction3.default);
	
	module.exports = MoveToAction;

/***/ },

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _ShapeActionDescriptorBase = __webpack_require__(740);
	
	var _ShapeActionDescriptorBase2 = _interopRequireDefault(_ShapeActionDescriptorBase);
	
	var _LineToAction = __webpack_require__(744);
	
	var _LineToAction2 = _interopRequireDefault(_LineToAction);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var LineToDescriptor = function (_ShapeActionDescripto) {
	  _inherits(LineToDescriptor, _ShapeActionDescripto);
	
	  function LineToDescriptor(react3RendererInstance) {
	    _classCallCheck(this, LineToDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (LineToDescriptor.__proto__ || Object.getPrototypeOf(LineToDescriptor)).call(this, react3RendererInstance));
	
	    ['x', 'y'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number.isRequired,
	        update: _this.triggerRemount,
	        default: 0
	      });
	    });
	    return _this;
	  }
	
	  _createClass(LineToDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      return new _LineToAction2.default(props.x, props.y);
	    }
	  }]);
	
	  return LineToDescriptor;
	}(_ShapeActionDescriptorBase2.default);
	
	module.exports = LineToDescriptor;

/***/ },

/***/ 744:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ShapeAction2 = __webpack_require__(738);
	
	var _ShapeAction3 = _interopRequireDefault(_ShapeAction2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var LineToAction = function (_ShapeAction) {
	  _inherits(LineToAction, _ShapeAction);
	
	  function LineToAction(x, y) {
	    _classCallCheck(this, LineToAction);
	
	    var _this = _possibleConstructorReturn(this, (LineToAction.__proto__ || Object.getPrototypeOf(LineToAction)).call(this));
	
	    _this.x = x;
	    _this.y = y;
	    return _this;
	  }
	
	  _createClass(LineToAction, [{
	    key: 'performAction',
	    value: function performAction(shape) {
	      shape.lineTo(this.x, this.y);
	    }
	  }]);
	
	  return LineToAction;
	}(_ShapeAction3.default);
	
	module.exports = LineToAction;

/***/ },

/***/ 745:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _ShapeActionDescriptorBase = __webpack_require__(740);
	
	var _ShapeActionDescriptorBase2 = _interopRequireDefault(_ShapeActionDescriptorBase);
	
	var _BezierCurveToAction = __webpack_require__(746);
	
	var _BezierCurveToAction2 = _interopRequireDefault(_BezierCurveToAction);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var BezierCurveToDescriptor = function (_ShapeActionDescripto) {
	  _inherits(BezierCurveToDescriptor, _ShapeActionDescripto);
	
	  function BezierCurveToDescriptor(react3RendererInstance) {
	    _classCallCheck(this, BezierCurveToDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (BezierCurveToDescriptor.__proto__ || Object.getPrototypeOf(BezierCurveToDescriptor)).call(this, react3RendererInstance));
	
	    ['cp1X', 'cp1Y', 'cp2X', 'cp2Y', 'aX', 'aY'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number.isRequired,
	        update: _this.triggerRemount,
	        default: 0
	      });
	    });
	    return _this;
	  }
	
	  _createClass(BezierCurveToDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var cp1X = props.cp1X;
	      var cp1Y = props.cp1Y;
	      var cp2X = props.cp2X;
	      var cp2Y = props.cp2Y;
	      var aX = props.aX;
	      var aY = props.aY;
	
	      return new _BezierCurveToAction2.default(cp1X, cp1Y, cp2X, cp2Y, aX, aY);
	    }
	  }]);
	
	  return BezierCurveToDescriptor;
	}(_ShapeActionDescriptorBase2.default);
	
	module.exports = BezierCurveToDescriptor;

/***/ },

/***/ 746:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ShapeAction2 = __webpack_require__(738);
	
	var _ShapeAction3 = _interopRequireDefault(_ShapeAction2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var BezierCurveToAction = function (_ShapeAction) {
	  _inherits(BezierCurveToAction, _ShapeAction);
	
	  function BezierCurveToAction(cp1X, cp1Y, cp2X, cp2Y, aX, aY) {
	    _classCallCheck(this, BezierCurveToAction);
	
	    var _this = _possibleConstructorReturn(this, (BezierCurveToAction.__proto__ || Object.getPrototypeOf(BezierCurveToAction)).call(this));
	
	    _this.cp1X = cp1X;
	    _this.cp1Y = cp1Y;
	    _this.cp2X = cp2X;
	    _this.cp2Y = cp2Y;
	    _this.aX = aX;
	    _this.aY = aY;
	    return _this;
	  }
	
	  _createClass(BezierCurveToAction, [{
	    key: 'performAction',
	    value: function performAction(shape) {
	      shape.bezierCurveTo(this.cp1X, this.cp1Y, this.cp2X, this.cp2Y, this.aX, this.aY);
	    }
	  }]);
	
	  return BezierCurveToAction;
	}(_ShapeAction3.default);
	
	module.exports = BezierCurveToAction;

/***/ },

/***/ 747:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _ShapeActionDescriptorBase = __webpack_require__(740);
	
	var _ShapeActionDescriptorBase2 = _interopRequireDefault(_ShapeActionDescriptorBase);
	
	var _QuadraticCurveToAction = __webpack_require__(748);
	
	var _QuadraticCurveToAction2 = _interopRequireDefault(_QuadraticCurveToAction);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var QuadraticCurveToDescriptor = function (_ShapeActionDescripto) {
	  _inherits(QuadraticCurveToDescriptor, _ShapeActionDescripto);
	
	  function QuadraticCurveToDescriptor(react3RendererInstance) {
	    _classCallCheck(this, QuadraticCurveToDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (QuadraticCurveToDescriptor.__proto__ || Object.getPrototypeOf(QuadraticCurveToDescriptor)).call(this, react3RendererInstance));
	
	    ['cpX', 'cpY', 'x', 'y'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number.isRequired,
	        update: _this.triggerRemount,
	        default: 0
	      });
	    });
	    return _this;
	  }
	
	  _createClass(QuadraticCurveToDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var cpX = props.cpX;
	      var cpY = props.cpY;
	      var x = props.x;
	      var y = props.y;
	
	      return new _QuadraticCurveToAction2.default(cpX, cpY, x, y);
	    }
	  }]);
	
	  return QuadraticCurveToDescriptor;
	}(_ShapeActionDescriptorBase2.default);
	
	module.exports = QuadraticCurveToDescriptor;

/***/ },

/***/ 748:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ShapeAction2 = __webpack_require__(738);
	
	var _ShapeAction3 = _interopRequireDefault(_ShapeAction2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var QuadraticCurveToAction = function (_ShapeAction) {
	  _inherits(QuadraticCurveToAction, _ShapeAction);
	
	  function QuadraticCurveToAction(cpX, cpY, x, y) {
	    _classCallCheck(this, QuadraticCurveToAction);
	
	    var _this = _possibleConstructorReturn(this, (QuadraticCurveToAction.__proto__ || Object.getPrototypeOf(QuadraticCurveToAction)).call(this));
	
	    _this.cpX = cpX;
	    _this.cpY = cpY;
	    _this.x = x;
	    _this.y = y;
	    return _this;
	  }
	
	  _createClass(QuadraticCurveToAction, [{
	    key: 'performAction',
	    value: function performAction(shape) {
	      shape.quadraticCurveTo(this.cpX, this.cpY, this.x, this.y);
	    }
	  }]);
	
	  return QuadraticCurveToAction;
	}(_ShapeAction3.default);
	
	module.exports = QuadraticCurveToAction;

/***/ },

/***/ 749:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _ShapeActionDescriptorBase = __webpack_require__(740);
	
	var _ShapeActionDescriptorBase2 = _interopRequireDefault(_ShapeActionDescriptorBase);
	
	var _AbsArcAction = __webpack_require__(750);
	
	var _AbsArcAction2 = _interopRequireDefault(_AbsArcAction);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var AbsArcDescriptor = function (_ShapeActionDescripto) {
	  _inherits(AbsArcDescriptor, _ShapeActionDescripto);
	
	  function AbsArcDescriptor(react3RendererInstance) {
	    _classCallCheck(this, AbsArcDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (AbsArcDescriptor.__proto__ || Object.getPrototypeOf(AbsArcDescriptor)).call(this, react3RendererInstance));
	
	    ['x', 'y', 'radius', 'startAngle', 'endAngle'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number.isRequired,
	        update: _this.triggerRemount,
	        default: 0
	      });
	    });
	
	    _this.hasProp('clockwise', {
	      type: _ReactPropTypes2.default.bool.isRequired,
	      update: _this.triggerRemount,
	      default: false
	    });
	    return _this;
	  }
	
	  _createClass(AbsArcDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var x = props.x;
	      var y = props.y;
	      var radius = props.radius;
	      var startAngle = props.startAngle;
	      var endAngle = props.endAngle;
	      var clockwise = props.clockwise;
	
	      return new _AbsArcAction2.default(x, y, radius, startAngle, endAngle, clockwise);
	    }
	  }]);
	
	  return AbsArcDescriptor;
	}(_ShapeActionDescriptorBase2.default);
	
	module.exports = AbsArcDescriptor;

/***/ },

/***/ 750:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ShapeAction2 = __webpack_require__(738);
	
	var _ShapeAction3 = _interopRequireDefault(_ShapeAction2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var AbsArcAction = function (_ShapeAction) {
	  _inherits(AbsArcAction, _ShapeAction);
	
	  function AbsArcAction(x, y, radius, startAngle, endAngle, clockwise) {
	    _classCallCheck(this, AbsArcAction);
	
	    var _this = _possibleConstructorReturn(this, (AbsArcAction.__proto__ || Object.getPrototypeOf(AbsArcAction)).call(this));
	
	    _this.x = x;
	    _this.y = y;
	    _this.radius = radius;
	    _this.startAngle = startAngle;
	    _this.endAngle = endAngle;
	    _this.clockwise = clockwise;
	    return _this;
	  }
	
	  _createClass(AbsArcAction, [{
	    key: 'performAction',
	    value: function performAction(shape) {
	      shape.absarc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.clockwise);
	    }
	  }]);
	
	  return AbsArcAction;
	}(_ShapeAction3.default);
	
	module.exports = AbsArcAction;

/***/ },

/***/ 751:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _ShapeActionDescriptorBase = __webpack_require__(740);
	
	var _ShapeActionDescriptorBase2 = _interopRequireDefault(_ShapeActionDescriptorBase);
	
	var _AbsEllipseAction = __webpack_require__(752);
	
	var _AbsEllipseAction2 = _interopRequireDefault(_AbsEllipseAction);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var AbsEllipseDescriptor = function (_ShapeActionDescripto) {
	  _inherits(AbsEllipseDescriptor, _ShapeActionDescripto);
	
	  function AbsEllipseDescriptor(react3RendererInstance) {
	    _classCallCheck(this, AbsEllipseDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (AbsEllipseDescriptor.__proto__ || Object.getPrototypeOf(AbsEllipseDescriptor)).call(this, react3RendererInstance));
	
	    ['x', 'y', 'xRadius', 'yRadius', 'startAngle', 'endAngle'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number.isRequired,
	        update: _this.triggerRemount,
	        default: 0
	      });
	    });
	
	    _this.hasProp('clockwise', {
	      type: _ReactPropTypes2.default.bool,
	      update: _this.triggerRemount,
	      default: false
	    });
	
	    _this.hasProp('rotation', {
	      type: _ReactPropTypes2.default.number,
	      update: _this.triggerRemount,
	      default: 0
	    });
	    return _this;
	  }
	
	  _createClass(AbsEllipseDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var x = props.x;
	      var y = props.y;
	      var xRadius = props.xRadius;
	      var yRadius = props.yRadius;
	      var startAngle = props.startAngle;
	      var endAngle = props.endAngle;
	      var clockwise = props.clockwise;
	      var rotation = props.rotation;
	
	      return new _AbsEllipseAction2.default(x, y, xRadius, yRadius, startAngle, endAngle, clockwise, rotation);
	    }
	  }]);
	
	  return AbsEllipseDescriptor;
	}(_ShapeActionDescriptorBase2.default);
	
	module.exports = AbsEllipseDescriptor;

/***/ },

/***/ 752:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ShapeAction2 = __webpack_require__(738);
	
	var _ShapeAction3 = _interopRequireDefault(_ShapeAction2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var AbsEllipseAction = function (_ShapeAction) {
	  _inherits(AbsEllipseAction, _ShapeAction);
	
	  function AbsEllipseAction(x, y, xRadius, yRadius, startAngle, endAngle, clockwise, rotation) {
	    _classCallCheck(this, AbsEllipseAction);
	
	    var _this = _possibleConstructorReturn(this, (AbsEllipseAction.__proto__ || Object.getPrototypeOf(AbsEllipseAction)).call(this));
	
	    _this.x = x;
	    _this.y = y;
	    _this.xRadius = xRadius;
	    _this.yRadius = yRadius;
	    _this.startAngle = startAngle;
	    _this.endAngle = endAngle;
	    _this.clockwise = clockwise;
	    _this.rotation = rotation;
	    return _this;
	  }
	
	  _createClass(AbsEllipseAction, [{
	    key: 'performAction',
	    value: function performAction(shape) {
	      shape.absellipse(this.x, this.y, this.xRadius, this.yRadius, this.startAngle, this.endAngle, this.clockwise, this.rotation);
	    }
	  }]);
	
	  return AbsEllipseAction;
	}(_ShapeAction3.default);
	
	module.exports = AbsEllipseAction;

/***/ },

/***/ 753:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _PathDescriptorBase2 = __webpack_require__(737);
	
	var _PathDescriptorBase3 = _interopRequireDefault(_PathDescriptorBase2);
	
	var _HoleAction = __webpack_require__(741);
	
	var _HoleAction2 = _interopRequireDefault(_HoleAction);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var HoleDescriptor = function (_PathDescriptorBase) {
	  _inherits(HoleDescriptor, _PathDescriptorBase);
	
	  function HoleDescriptor() {
	    _classCallCheck(this, HoleDescriptor);
	
	    return _possibleConstructorReturn(this, (HoleDescriptor.__proto__ || Object.getPrototypeOf(HoleDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(HoleDescriptor, [{
	    key: 'construct',
	    value: function construct() {
	      return new _HoleAction2.default();
	    }
	  }, {
	    key: 'performChildAction',
	    value: function performChildAction(threeObject, child) {
	      child.performAction(threeObject.path);
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(threeObject, parentObject3D) {
	      (0, _invariant2.default)(parentObject3D instanceof _three2.default.Shape, 'Holes can only be added to shapes.');
	
	      return _get(HoleDescriptor.prototype.__proto__ || Object.getPrototypeOf(HoleDescriptor.prototype), 'setParent', this).call(this, threeObject, parentObject3D);
	    }
	  }]);
	
	  return HoleDescriptor;
	}(_PathDescriptorBase3.default);
	
	module.exports = HoleDescriptor;

/***/ },

/***/ 754:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _ShapeActionDescriptorBase = __webpack_require__(740);
	
	var _ShapeActionDescriptorBase2 = _interopRequireDefault(_ShapeActionDescriptorBase);
	
	var _SplineThruAction = __webpack_require__(755);
	
	var _SplineThruAction2 = _interopRequireDefault(_SplineThruAction);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var SplineThruDescriptor = function (_ShapeActionDescripto) {
	  _inherits(SplineThruDescriptor, _ShapeActionDescripto);
	
	  function SplineThruDescriptor(react3RendererInstance) {
	    _classCallCheck(this, SplineThruDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (SplineThruDescriptor.__proto__ || Object.getPrototypeOf(SplineThruDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasProp('points', {
	      type: _ReactPropTypes2.default.arrayOf((0, _propTypeInstanceOf2.default)(_three2.default.Vector2)).isRequired,
	      update: _this.triggerRemount,
	      default: []
	    });
	    return _this;
	  }
	
	  _createClass(SplineThruDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      return new _SplineThruAction2.default(props.points);
	    }
	  }]);
	
	  return SplineThruDescriptor;
	}(_ShapeActionDescriptorBase2.default);
	
	module.exports = SplineThruDescriptor;

/***/ },

/***/ 755:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ShapeAction2 = __webpack_require__(738);
	
	var _ShapeAction3 = _interopRequireDefault(_ShapeAction2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var SplineThruAction = function (_ShapeAction) {
	  _inherits(SplineThruAction, _ShapeAction);
	
	  function SplineThruAction(points) {
	    _classCallCheck(this, SplineThruAction);
	
	    var _this = _possibleConstructorReturn(this, (SplineThruAction.__proto__ || Object.getPrototypeOf(SplineThruAction)).call(this));
	
	    _this.points = points;
	    return _this;
	  }
	
	  _createClass(SplineThruAction, [{
	    key: 'performAction',
	    value: function performAction(shape) {
	      shape.splineThru(this.points);
	    }
	  }]);
	
	  return SplineThruAction;
	}(_ShapeAction3.default);
	
	module.exports = SplineThruAction;

/***/ },

/***/ 756:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _MaterialDescriptorBase = __webpack_require__(757);
	
	var _MaterialDescriptorBase2 = _interopRequireDefault(_MaterialDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var PointsMaterialDescriptor = function (_MaterialDescriptorBa) {
	  _inherits(PointsMaterialDescriptor, _MaterialDescriptorBa);
	
	  function PointsMaterialDescriptor(react3RendererInstance) {
	    _classCallCheck(this, PointsMaterialDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (PointsMaterialDescriptor.__proto__ || Object.getPrototypeOf(PointsMaterialDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasColor();
	
	    _this.hasProp('size', {
	      type: _ReactPropTypes2.default.number,
	      simple: true,
	      default: 1
	    });
	
	    _this.hasProp('sizeAttenuation', {
	      type: _ReactPropTypes2.default.bool,
	      update: function update(threeObject, sizeAttenuation, existsInProps) {
	        if (existsInProps) {
	          threeObject.sizeAttenuation = sizeAttenuation;
	        }
	        threeObject.needsUpdate = true;
	      },
	
	      updateInitial: true,
	      default: true
	    });
	
	    _this.hasProp('fog', {
	      type: _ReactPropTypes2.default.bool,
	      update: function update(threeObject, fog, existsInProps) {
	        if (existsInProps) {
	          threeObject.fog = fog;
	        }
	        threeObject.needsUpdate = true;
	      },
	
	      updateInitial: true,
	      default: true
	    });
	
	    _this.hasProp('vertexColors', {
	      type: _ReactPropTypes2.default.oneOf([_three2.default.NoColors, _three2.default.FaceColors, _three2.default.VertexColors]),
	      simple: true,
	      default: _three2.default.NoColors
	    });
	    return _this;
	  }
	
	  _createClass(PointsMaterialDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var materialDescription = this.getMaterialDescription(props);
	
	      return new _three2.default.PointsMaterial(materialDescription);
	    }
	  }]);
	
	  return PointsMaterialDescriptor;
	}(_MaterialDescriptorBase2.default);
	
	module.exports = PointsMaterialDescriptor;

/***/ },

/***/ 757:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _class;
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _THREEElementDescriptor = __webpack_require__(672);
	
	var _THREEElementDescriptor2 = _interopRequireDefault(_THREEElementDescriptor);
	
	var _resource = __webpack_require__(712);
	
	var _resource2 = _interopRequireDefault(_resource);
	
	var _ResourceReference = __webpack_require__(692);
	
	var _ResourceReference2 = _interopRequireDefault(_ResourceReference);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var MaterialDescriptorBase = (0, _resource2.default)(_class = function (_THREEElementDescript) {
	  _inherits(MaterialDescriptorBase, _THREEElementDescript);
	
	  function MaterialDescriptorBase(react3Instance) {
	    _classCallCheck(this, MaterialDescriptorBase);
	
	    var _this = _possibleConstructorReturn(this, (MaterialDescriptorBase.__proto__ || Object.getPrototypeOf(MaterialDescriptorBase)).call(this, react3Instance));
	
	    _this._invalidChild = function (child) {
	      return _this.invalidChildInternal(child);
	    };
	
	    _this.hasProp('slot', {
	      type: _ReactPropTypes2.default.string,
	      updateInitial: true,
	      update: function update(threeObject, slot, hasProperty) {
	        if (hasProperty) {
	          threeObject.userData._materialSlot = slot;
	        } else {
	          threeObject.userData._materialSlot = 'material';
	        }
	      },
	      default: 'material'
	    });
	
	    _this.hasProp('transparent', {
	      type: _ReactPropTypes2.default.bool,
	      simple: true
	    });
	
	    _this.hasProp('alphaTest', {
	      type: _ReactPropTypes2.default.number,
	      updateInitial: true,
	      update: function update(threeObject, alphaTest) {
	        threeObject.alphaTest = alphaTest;
	        threeObject.needsUpdate = true;
	      },
	      default: 0
	    });
	
	    _this.hasProp('side', {
	      type: _ReactPropTypes2.default.oneOf([_three2.default.FrontSide, _three2.default.BackSide, _three2.default.DoubleSide]),
	      updateInitial: true,
	      update: function update(threeObject, side) {
	        threeObject.side = side;
	      },
	      default: _three2.default.FrontSide
	    });
	
	    _this.hasProp('opacity', {
	      type: _ReactPropTypes2.default.number,
	      simple: true
	    });
	
	    _this.hasProp('visible', {
	      type: _ReactPropTypes2.default.bool,
	      simple: true,
	      default: true
	    });
	
	    _this._colors = [];
	    return _this;
	  }
	
	  _createClass(MaterialDescriptorBase, [{
	    key: 'getMaterialDescription',
	    value: function getMaterialDescription(props) {
	      var materialDescription = {};
	
	      this._colors.forEach(function (colorPropName) {
	        if (props.hasOwnProperty(colorPropName)) {
	          materialDescription[colorPropName] = props[colorPropName];
	        }
	      });
	
	      if (props.hasOwnProperty('side')) {
	        materialDescription.side = props.side;
	      }
	
	      return materialDescription;
	    }
	  }, {
	    key: 'hasColor',
	    value: function hasColor() {
	      var propName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'color';
	      var defaultVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0xffffff;
	
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2.default)(this._colors.indexOf(propName) === -1, 'This color is already defined for %s.', this.constructor.name);
	      }
	
	      this._colors.push(propName);
	
	      this.hasProp(propName, {
	        type: _ReactPropTypes2.default.oneOfType([(0, _propTypeInstanceOf2.default)(_three2.default.Color), _ReactPropTypes2.default.number, _ReactPropTypes2.default.string]),
	        update: function update(threeObject, value) {
	          threeObject[propName].set(value);
	        },
	        default: defaultVal
	      });
	    }
	  }, {
	    key: 'hasWireframe',
	    value: function hasWireframe() {
	      this.hasProp('wireframe', {
	        type: _ReactPropTypes2.default.bool,
	        simple: true,
	        default: false
	      });
	
	      this.hasProp('wireframeLinewidth', {
	        type: _ReactPropTypes2.default.number,
	        simple: true,
	        default: 1
	      });
	    }
	  }, {
	    key: 'construct',
	    value: function construct() {
	      return new _three2.default.Material({});
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      threeObject.userData = _extends({}, threeObject.userData);
	
	      _get(MaterialDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(MaterialDescriptorBase.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(material, parentObject3D) {
	      (0, _invariant2.default)(parentObject3D instanceof _three2.default.Mesh || parentObject3D instanceof _three2.default.Points || parentObject3D instanceof _three2.default.Sprite || parentObject3D instanceof _three2.default.Line, 'Parent is not a mesh');
	      (0, _invariant2.default)(parentObject3D[material.userData._materialSlot] === undefined || parentObject3D[material.userData._materialSlot] === null, 'Parent already has a ' + material.userData._materialSlot + ' defined');
	      _get(MaterialDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(MaterialDescriptorBase.prototype), 'setParent', this).call(this, material, parentObject3D);
	
	      parentObject3D[material.userData._materialSlot] = material;
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(material) {
	      var parent = material.userData.markup.parentMarkup.threeObject;
	
	      // could either be a resource description or an actual material
	      if (parent instanceof _three2.default.Mesh || parent instanceof _three2.default.Sprite || parent instanceof _three2.default.Line || parent instanceof _three2.default.Points) {
	        var slot = material.userData._materialSlot;
	
	        if (parent[slot] === material) {
	          // TODO: set material slot to null rather than undefined
	
	          parent[slot] = undefined;
	        }
	      }
	
	      material.dispose();
	
	      _get(MaterialDescriptorBase.prototype.__proto__ || Object.getPrototypeOf(MaterialDescriptorBase.prototype), 'unmount', this).call(this, material);
	    }
	  }, {
	    key: 'highlight',
	    value: function highlight(threeObject) {
	      var ownerMesh = threeObject.userData.markup.parentMarkup.threeObject;
	
	      threeObject.userData.events.emit('highlight', {
	        uuid: threeObject.uuid,
	        boundingBoxFunc: function boundingBoxFunc() {
	          var boundingBox = new _three2.default.Box3();
	
	          if (ownerMesh && ownerMesh.geometry && ownerMesh.geometry.computeBoundingBox) {
	            ownerMesh.geometry.computeBoundingBox();
	          }
	
	          boundingBox.setFromObject(ownerMesh);
	
	          return [boundingBox];
	        }
	      });
	    }
	  }, {
	    key: 'getBoundingBoxes',
	    value: function getBoundingBoxes(threeObject) {
	      var boundingBox = new _three2.default.Box3();
	
	      var ownerMesh = threeObject.userData.markup.parentMarkup.threeObject;
	
	      if (ownerMesh && ownerMesh.geometry && ownerMesh.geometry.computeBoundingBox) {
	        ownerMesh.geometry.computeBoundingBox();
	      }
	
	      boundingBox.setFromObject(ownerMesh);
	
	      return [boundingBox];
	    }
	  }, {
	    key: 'hideHighlight',
	    value: function hideHighlight(threeObject) {
	      threeObject.userData.events.emit('hideHighlight');
	    }
	  }, {
	    key: 'addChildren',
	    value: function addChildren(threeObject, children) {
	      (0, _invariant2.default)(children.filter(this._invalidChild).length === 0, 'Material children can only be textures or texture resource references!');
	    }
	  }, {
	    key: 'addChild',
	    value: function addChild(threeObject, child) {
	      this.addChildren(threeObject, [child]);
	    }
	  }, {
	    key: 'moveChild',
	    value: function moveChild() {
	      // doesn't matter
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild() {
	      // doesn't matter since the texture will take care of things on unmount
	    }
	  }, {
	    key: 'invalidChildInternal',
	    value: function invalidChildInternal(child) {
	      var invalid = !(child instanceof _three2.default.Texture || child instanceof _ResourceReference2.default);
	
	      return invalid;
	    }
	  }]);
	
	  return MaterialDescriptorBase;
	}(_THREEElementDescriptor2.default)) || _class;
	
	module.exports = MaterialDescriptorBase;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 758:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _MaterialDescriptorBase = __webpack_require__(757);
	
	var _MaterialDescriptorBase2 = _interopRequireDefault(_MaterialDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var MeshBasicMaterialDescriptor = function (_MaterialDescriptorBa) {
	  _inherits(MeshBasicMaterialDescriptor, _MaterialDescriptorBa);
	
	  function MeshBasicMaterialDescriptor(react3RendererInstance) {
	    _classCallCheck(this, MeshBasicMaterialDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (MeshBasicMaterialDescriptor.__proto__ || Object.getPrototypeOf(MeshBasicMaterialDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasColor();
	    _this.hasWireframe();
	    return _this;
	  }
	
	  _createClass(MeshBasicMaterialDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var materialDescription = this.getMaterialDescription(props);
	
	      if (props.hasOwnProperty('map')) {
	        materialDescription.map = props.map;
	      }
	
	      return new _three2.default.MeshBasicMaterial(materialDescription);
	    }
	  }]);
	
	  return MeshBasicMaterialDescriptor;
	}(_MaterialDescriptorBase2.default);
	
	module.exports = MeshBasicMaterialDescriptor;

/***/ },

/***/ 759:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _MaterialDescriptorBase = __webpack_require__(757);
	
	var _MaterialDescriptorBase2 = _interopRequireDefault(_MaterialDescriptorBase);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var MeshPhongMaterialDescriptor = function (_MaterialDescriptorBa) {
	  _inherits(MeshPhongMaterialDescriptor, _MaterialDescriptorBa);
	
	  function MeshPhongMaterialDescriptor(react3RendererInstance) {
	    _classCallCheck(this, MeshPhongMaterialDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (MeshPhongMaterialDescriptor.__proto__ || Object.getPrototypeOf(MeshPhongMaterialDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasColor();
	    _this.hasColor('specular', 0x111111);
	    _this.hasColor('emissive', 0x000000);
	    _this.hasWireframe();
	
	    _this.hasProp('shininess', {
	      type: _ReactPropTypes2.default.number,
	      simple: true,
	      default: 30
	    });
	
	    _this.hasProp('metal', {
	      type: _ReactPropTypes2.default.bool,
	      update: function update(threeObject, metal) {
	        threeObject.metal = metal;
	        threeObject.needsUpdate = true;
	      },
	      default: false
	    });
	
	    ['lightMapIntensity', 'aoMapIntensity', 'emissiveIntensity', 'bumpScale', 'displacementScale', 'reflectivity'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: function update(threeObject, propValue) {
	          threeObject[propName] = propValue;
	          threeObject.needsUpdate = true;
	        },
	
	        default: 1
	      });
	    });
	
	    ['displacementBias'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: function update(threeObject, propValue) {
	          threeObject[propName] = propValue;
	          threeObject.needsUpdate = true;
	        },
	
	        default: 0
	      });
	    });
	
	    ['refractionRatio'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        update: function update(threeObject, propValue) {
	          threeObject[propName] = propValue;
	          threeObject.needsUpdate = true;
	        },
	
	        default: 0.98
	      });
	    });
	
	    _this.hasProp('normalScale', {
	      type: (0, _propTypeInstanceOf2.default)(_three2.default.Vector2),
	      update: function update(threeObject, normalScale) {
	        threeObject.normalScale.copy(normalScale);
	        threeObject.needsUpdate = true;
	      },
	
	      default: new _three2.default.Vector2(1, 1)
	    });
	
	    _this.hasProp('shading', {
	      type: _ReactPropTypes2.default.oneOf([_three2.default.FlatShading, _three2.default.SmoothShading]),
	      update: function update(threeObject, shading) {
	        threeObject.shading = shading;
	        threeObject.needsUpdate = true;
	      },
	
	      default: _three2.default.SmoothShading
	    });
	
	    ['skinning', 'morphTargets', 'morphNormals'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.bool,
	        update: function update(threeObject, propValue) {
	          threeObject[propName] = propValue;
	          threeObject.needsUpdate = true;
	        },
	
	        default: false
	      });
	    });
	    return _this;
	  }
	
	  _createClass(MeshPhongMaterialDescriptor, [{
	    key: 'getMaterialDescription',
	    value: function getMaterialDescription(props) {
	      var materialDescription = _get(MeshPhongMaterialDescriptor.prototype.__proto__ || Object.getPrototypeOf(MeshPhongMaterialDescriptor.prototype), 'getMaterialDescription', this).call(this, props);
	
	      ['shininess', 'lightMapIntensity', 'aoMapIntensity', 'emissiveIntensity', 'bumpScale', 'displacementScale', 'reflectivity', 'displacementBias', 'refractionRatio', 'normalScale', 'shading', 'skinning', 'morphTargets', 'morphNormals'].forEach(function (propName) {
	        if (props.hasOwnProperty(propName)) {
	          materialDescription[propName] = props[propName];
	        }
	      });
	
	      return materialDescription;
	    }
	  }, {
	    key: 'construct',
	    value: function construct(props) {
	      var materialDescription = this.getMaterialDescription(props);
	
	      return new _three2.default.MeshPhongMaterial(materialDescription);
	    }
	  }]);
	
	  return MeshPhongMaterialDescriptor;
	}(_MaterialDescriptorBase2.default);
	
	module.exports = MeshPhongMaterialDescriptor;

/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _MaterialDescriptorBase = __webpack_require__(757);
	
	var _MaterialDescriptorBase2 = _interopRequireDefault(_MaterialDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var MeshLambertMaterialDescriptor = function (_MaterialDescriptorBa) {
	  _inherits(MeshLambertMaterialDescriptor, _MaterialDescriptorBa);
	
	  function MeshLambertMaterialDescriptor(react3RendererInstance) {
	    _classCallCheck(this, MeshLambertMaterialDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (MeshLambertMaterialDescriptor.__proto__ || Object.getPrototypeOf(MeshLambertMaterialDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasColor();
	    _this.hasColor('emissive', 0);
	    _this.hasWireframe();
	    return _this;
	  }
	
	  _createClass(MeshLambertMaterialDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var materialDescription = this.getMaterialDescription(props);
	
	      return new _three2.default.MeshLambertMaterial(materialDescription);
	    }
	  }, {
	    key: 'getMaterialDescription',
	    value: function getMaterialDescription(props) {
	      var materialDescription = _get(MeshLambertMaterialDescriptor.prototype.__proto__ || Object.getPrototypeOf(MeshLambertMaterialDescriptor.prototype), 'getMaterialDescription', this).call(this, props);
	
	      if (props.hasOwnProperty('shininess')) {
	        materialDescription.shininess = props.shininess;
	      }
	
	      if (props.hasOwnProperty('map')) {
	        materialDescription.map = props.map;
	      }
	
	      return materialDescription;
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(MeshLambertMaterialDescriptor.prototype.__proto__ || Object.getPrototypeOf(MeshLambertMaterialDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      if (!props.hasOwnProperty('map')) {
	        threeObject.map = undefined;
	      }
	    }
	  }]);
	
	  return MeshLambertMaterialDescriptor;
	}(_MaterialDescriptorBase2.default);
	
	module.exports = MeshLambertMaterialDescriptor;

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _MaterialDescriptorBase = __webpack_require__(757);
	
	var _MaterialDescriptorBase2 = _interopRequireDefault(_MaterialDescriptorBase);
	
	var _UniformContainer = __webpack_require__(762);
	
	var _UniformContainer2 = _interopRequireDefault(_UniformContainer);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ShaderMaterialDescriptor = function (_MaterialDescriptorBa) {
	  _inherits(ShaderMaterialDescriptor, _MaterialDescriptorBa);
	
	  function ShaderMaterialDescriptor(react3RendererInstance) {
	    _classCallCheck(this, ShaderMaterialDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (ShaderMaterialDescriptor.__proto__ || Object.getPrototypeOf(ShaderMaterialDescriptor)).call(this, react3RendererInstance));
	
	    ['vertexShader', 'fragmentShader'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.string.isRequired,
	        update: _this.triggerRemount
	      });
	    });
	
	    _this.hasProp('uniforms', {
	      type: _ReactPropTypes2.default.any,
	      simple: true,
	      default: undefined
	    });
	
	    _this.hasWireframe();
	    return _this;
	  }
	
	  _createClass(ShaderMaterialDescriptor, [{
	    key: 'getMaterialDescription',
	    value: function getMaterialDescription(props) {
	      var materialDescription = _get(ShaderMaterialDescriptor.prototype.__proto__ || Object.getPrototypeOf(ShaderMaterialDescriptor.prototype), 'getMaterialDescription', this).call(this, props);
	
	      if (props.hasOwnProperty('uniforms')) {
	        materialDescription.uniforms = props.uniforms;
	      }
	
	      if (props.hasOwnProperty('vertexShader')) {
	        materialDescription.vertexShader = props.vertexShader;
	      }
	
	      if (props.hasOwnProperty('fragmentShader')) {
	        materialDescription.fragmentShader = props.fragmentShader;
	      }
	
	      return materialDescription;
	    }
	  }, {
	    key: 'construct',
	    value: function construct(props) {
	      var materialDescription = this.getMaterialDescription(props);
	
	      return new _three2.default.ShaderMaterial(materialDescription);
	    }
	  }, {
	    key: 'invalidChildInternal',
	    value: function invalidChildInternal(child) {
	      var invalid = !(child instanceof _UniformContainer2.default || _get(ShaderMaterialDescriptor.prototype.__proto__ || Object.getPrototypeOf(ShaderMaterialDescriptor.prototype), 'invalidChildInternal', this).call(this, child));
	
	      return invalid;
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(ShaderMaterialDescriptor.prototype.__proto__ || Object.getPrototypeOf(ShaderMaterialDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      if (!props.hasOwnProperty('uniforms')) {
	        threeObject.uniforms = undefined;
	      }
	    }
	  }]);
	
	  return ShaderMaterialDescriptor;
	}(_MaterialDescriptorBase2.default);
	
	module.exports = ShaderMaterialDescriptor;

/***/ },

/***/ 762:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var UniformContainer = function UniformContainer() {
	  _classCallCheck(this, UniformContainer);
	
	  this.userData = {};
	  this.uniforms = {};
	  this.uuid = _three2.default.Math.generateUUID();
	};
	
	module.exports = UniformContainer;

/***/ },

/***/ 763:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ShaderMaterialDescriptor = __webpack_require__(761);
	
	var _ShaderMaterialDescriptor2 = _interopRequireDefault(_ShaderMaterialDescriptor);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var RawShaderMaterialDescriptor = function (_ShaderMaterialDescri) {
	  _inherits(RawShaderMaterialDescriptor, _ShaderMaterialDescri);
	
	  function RawShaderMaterialDescriptor(react3RendererInstance) {
	    _classCallCheck(this, RawShaderMaterialDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (RawShaderMaterialDescriptor.__proto__ || Object.getPrototypeOf(RawShaderMaterialDescriptor)).call(this, react3RendererInstance));
	
	    ['alphaTest'].forEach(function (propName) {
	      _this.removeProp(propName);
	    });
	    return _this;
	  }
	
	  _createClass(RawShaderMaterialDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var materialDescription = this.getMaterialDescription(props);
	
	      return new _three2.default.RawShaderMaterial(materialDescription);
	    }
	  }]);
	
	  return RawShaderMaterialDescriptor;
	}(_ShaderMaterialDescriptor2.default);
	
	module.exports = RawShaderMaterialDescriptor;

/***/ },

/***/ 764:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _class;
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _resource = __webpack_require__(712);
	
	var _resource2 = _interopRequireDefault(_resource);
	
	var _THREEElementDescriptor = __webpack_require__(672);
	
	var _THREEElementDescriptor2 = _interopRequireDefault(_THREEElementDescriptor);
	
	var _Uniform = __webpack_require__(707);
	
	var _Uniform2 = _interopRequireDefault(_Uniform);
	
	var _React3Renderer = __webpack_require__(604);
	
	var _React3Renderer2 = _interopRequireDefault(_React3Renderer);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var TextureDescriptor = (0, _resource2.default)(_class = function (_THREEElementDescript) {
	  _inherits(TextureDescriptor, _THREEElementDescript);
	
	  function TextureDescriptor(react3RendererInstance) {
	    _classCallCheck(this, TextureDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (TextureDescriptor.__proto__ || Object.getPrototypeOf(TextureDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasProp('repeat', {
	      type: (0, _propTypeInstanceOf2.default)(_three2.default.Vector2),
	      updateInitial: true,
	      update: function update(threeObject, repeat) {
	        if (repeat) {
	          threeObject.repeat.copy(repeat);
	        } else {
	          threeObject.repeat.set(1, 1);
	        }
	      },
	
	      default: new _three2.default.Vector2(1, 1)
	    });
	
	    _this.hasProp('offset', {
	      type: (0, _propTypeInstanceOf2.default)(_three2.default.Vector2),
	      updateInitial: true,
	      update: function update(threeObject, offset) {
	        if (offset) {
	          threeObject.offset.copy(offset);
	        } else {
	          threeObject.offset.set(0, 0);
	        }
	      },
	
	      default: new _three2.default.Vector2(0, 0)
	    });
	
	    ['wrapS', 'wrapT'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.oneOf([_three2.default.RepeatWrapping, _three2.default.ClampToEdgeWrapping, _three2.default.MirroredRepeatWrapping]),
	        updateInitial: true,
	        update: function update(threeObject, value) {
	          threeObject[propName] = value;
	          if (threeObject.image) {
	            threeObject.needsUpdate = true;
	          }
	        },
	
	        default: _three2.default.ClampToEdgeWrapping
	      });
	    });
	
	    _this.hasProp('anisotropy', {
	      type: _ReactPropTypes2.default.number,
	      updateInitial: true,
	      update: function update(threeObject, value) {
	        threeObject.anisotropy = value;
	        if (threeObject.image) {
	          threeObject.needsUpdate = true;
	        }
	      },
	
	      default: 1
	    });
	
	    _this.hasProp('url', {
	      type: _ReactPropTypes2.default.string.isRequired,
	      update: _this.triggerRemount,
	      default: ''
	    });
	
	    _this.hasProp('crossOrigin', {
	      type: _ReactPropTypes2.default.string,
	      update: _this.triggerRemount,
	      default: undefined
	    });
	
	    ['onLoad', 'onProgress', 'onError'].forEach(function (eventName) {
	      _this.hasProp(eventName, {
	        type: _ReactPropTypes2.default.func,
	        update: function update() {
	          // do nothing because these props are only used for initial loading callbacks
	        },
	
	        default: undefined
	      });
	    });
	
	    _this.hasProp('magFilter', {
	      type: _ReactPropTypes2.default.oneOf([_three2.default.LinearFilter, _three2.default.NearestFilter]),
	      update: function update(texture, magFilter) {
	        texture.magFilter = magFilter;
	        if (texture.image) {
	          texture.needsUpdate = true;
	        }
	      },
	
	      default: _three2.default.LinearFilter
	    });
	
	    _this.hasProp('minFilter', {
	      type: _ReactPropTypes2.default.oneOf([_three2.default.LinearMipMapLinearFilter, _three2.default.NearestFilter, _three2.default.NearestMipMapNearestFilter, _three2.default.NearestMipMapLinearFilter, _three2.default.LinearFilter, _three2.default.LinearMipMapNearestFilter]),
	      update: function update(texture, magFilter) {
	        texture.magFilter = magFilter;
	        if (texture.image) {
	          texture.needsUpdate = true;
	        }
	      },
	
	      default: _three2.default.LinearMipMapLinearFilter
	    });
	    return _this;
	  }
	
	  _createClass(TextureDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var result = void 0;
	
	      if (props.hasOwnProperty('url')) {
	        var textureLoader = new _three2.default.TextureLoader();
	
	        if (props.hasOwnProperty('crossOrigin')) {
	          textureLoader.crossOrigin = props.crossOrigin;
	        }
	
	        var onLoad = void 0;
	        var onProgress = void 0;
	        var onError = void 0;
	
	        if (props.hasOwnProperty('onLoad')) {
	          onLoad = props.onLoad;
	        }
	
	        if (props.hasOwnProperty('onProgress')) {
	          onProgress = props.onProgress;
	        }
	
	        if (props.hasOwnProperty('onError')) {
	          onError = props.onError;
	        }
	
	        result = textureLoader.load(props.url, onLoad, onProgress, onError);
	      } else {
	        (0, _invariant2.default)(false, 'The texture needs a url property.');
	      }
	
	      return result;
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(texture, parentObject3D) {
	      (0, _invariant2.default)(parentObject3D instanceof _three2.default.Material || parentObject3D instanceof _Uniform2.default, 'Parent is not a material or a uniform');
	
	      if (parentObject3D instanceof _three2.default.Material) {
	        (0, _invariant2.default)(parentObject3D.map === null || parentObject3D.map === undefined, 'Parent already has a texture');
	        parentObject3D.map = texture;
	        // dispose to force a recreate
	        parentObject3D.needsUpdate = true;
	      } else {
	        // Uniform as per the assert above
	        parentObject3D.setValue(texture);
	      }
	
	      _get(TextureDescriptor.prototype.__proto__ || Object.getPrototypeOf(TextureDescriptor.prototype), 'setParent', this).call(this, texture, parentObject3D);
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      threeObject.userData = _extends({}, threeObject.userData);
	
	      _get(TextureDescriptor.prototype.__proto__ || Object.getPrototypeOf(TextureDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(texture) {
	      var parent = texture.userData.markup.parentMarkup.threeObject;
	
	      // could either be a resource description or an actual texture
	      if (parent instanceof _three2.default.Material) {
	        if (parent.map === texture) {
	          parent.map = null;
	          // dispose to force a recreate
	          parent.needsUpdate = true;
	        }
	      } else if (parent instanceof _Uniform2.default) {
	        if (parent.value === texture) {
	          parent.setValue(null);
	        }
	      }
	
	      texture.dispose();
	
	      _get(TextureDescriptor.prototype.__proto__ || Object.getPrototypeOf(TextureDescriptor.prototype), 'unmount', this).call(this, texture);
	    }
	  }, {
	    key: 'highlight',
	    value: function highlight(threeObject) {
	      var parent = threeObject.userData.markup.parentMarkup.threeObject;
	      parent.userData._descriptor.highlight(parent);
	    }
	  }, {
	    key: 'hideHighlight',
	    value: function hideHighlight(threeObject) {
	      var parent = threeObject.userData.markup.parentMarkup.threeObject;
	      parent.userData._descriptor.hideHighlight(parent);
	    }
	  }]);
	
	  return TextureDescriptor;
	}(_THREEElementDescriptor2.default)) || _class;
	
	module.exports = TextureDescriptor;

/***/ },

/***/ 765:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ResourceDescriptorBase = __webpack_require__(704);
	
	var _ResourceDescriptorBase2 = _interopRequireDefault(_ResourceDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var MaterialResourceDescriptor = function (_ResourceDescriptorBa) {
	  _inherits(MaterialResourceDescriptor, _ResourceDescriptorBa);
	
	  function MaterialResourceDescriptor() {
	    _classCallCheck(this, MaterialResourceDescriptor);
	
	    return _possibleConstructorReturn(this, (MaterialResourceDescriptor.__proto__ || Object.getPrototypeOf(MaterialResourceDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(MaterialResourceDescriptor, [{
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(MaterialResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(MaterialResourceDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      if (props.hasOwnProperty('slot')) {
	        threeObject.userData._propertySlot = props.slot;
	      } else {
	        threeObject.userData._propertySlot = 'material';
	      }
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(threeObject, parentObject3D) {
	      (0, _invariant2.default)(parentObject3D instanceof _three2.default.Mesh || parentObject3D instanceof _three2.default.Points || parentObject3D instanceof _three2.default.Line, 'Parent is not a mesh');
	
	      _get(MaterialResourceDescriptor.prototype.__proto__ || Object.getPrototypeOf(MaterialResourceDescriptor.prototype), 'setParent', this).call(this, threeObject, parentObject3D);
	    }
	  }]);
	
	  return MaterialResourceDescriptor;
	}(_ResourceDescriptorBase2.default);
	
	module.exports = MaterialResourceDescriptor;

/***/ },

/***/ 766:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _THREEElementDescriptor = __webpack_require__(672);
	
	var _THREEElementDescriptor2 = _interopRequireDefault(_THREEElementDescriptor);
	
	var _UniformContainer = __webpack_require__(762);
	
	var _UniformContainer2 = _interopRequireDefault(_UniformContainer);
	
	var _Uniform = __webpack_require__(707);
	
	var _Uniform2 = _interopRequireDefault(_Uniform);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var UniformsDescriptor = function (_THREEElementDescript) {
	  _inherits(UniformsDescriptor, _THREEElementDescript);
	
	  function UniformsDescriptor() {
	    _classCallCheck(this, UniformsDescriptor);
	
	    return _possibleConstructorReturn(this, (UniformsDescriptor.__proto__ || Object.getPrototypeOf(UniformsDescriptor)).apply(this, arguments));
	  }
	
	  _createClass(UniformsDescriptor, [{
	    key: 'construct',
	    value: function construct() {
	      return new _UniformContainer2.default();
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(threeObject, parentObject3D) {
	      (0, _invariant2.default)(parentObject3D instanceof _three2.default.ShaderMaterial, 'Parent of <uniforms/> is not a shader material');
	      (0, _invariant2.default)(parentObject3D.uniforms === undefined, 'Parent already has uniforms');
	
	      _get(UniformsDescriptor.prototype.__proto__ || Object.getPrototypeOf(UniformsDescriptor.prototype), 'setParent', this).call(this, threeObject, parentObject3D);
	
	      parentObject3D.uniforms = threeObject.uniforms;
	    }
	  }, {
	    key: 'addChildren',
	    value: function addChildren(threeObject, children) {
	      children.forEach(function (child) {
	        (0, _invariant2.default)(child instanceof _Uniform2.default, 'The <uniforms/> component can only have <uniform/> elements as children.');
	      });
	    }
	  }, {
	    key: 'highlight',
	    value: function highlight(threeObject) {
	      var parent = threeObject.userData.markup.parentMarkup.threeObject;
	      parent.userData._descriptor.highlight(parent);
	    }
	  }, {
	    key: 'getBoundingBoxes',
	    value: function getBoundingBoxes(threeObject) {
	      var parent = threeObject.userData.markup.parentMarkup.threeObject;
	      return parent.userData._descriptor.getBoundingBoxes(parent);
	    }
	  }, {
	    key: 'hideHighlight',
	    value: function hideHighlight(threeObject) {
	      var parent = threeObject.userData.markup.parentMarkup.threeObject;
	      parent.userData._descriptor.hideHighlight(parent);
	    }
	  }]);
	
	  return UniformsDescriptor;
	}(_THREEElementDescriptor2.default);
	
	module.exports = UniformsDescriptor;

/***/ },

/***/ 767:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _invariant = __webpack_require__(575);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _Uniform = __webpack_require__(707);
	
	var _Uniform2 = _interopRequireDefault(_Uniform);
	
	var _UniformContainer = __webpack_require__(762);
	
	var _UniformContainer2 = _interopRequireDefault(_UniformContainer);
	
	var _ResourceReference = __webpack_require__(692);
	
	var _ResourceReference2 = _interopRequireDefault(_ResourceReference);
	
	var _THREEElementDescriptor = __webpack_require__(672);
	
	var _THREEElementDescriptor2 = _interopRequireDefault(_THREEElementDescriptor);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var UniformDescriptor = function (_THREEElementDescript) {
	  _inherits(UniformDescriptor, _THREEElementDescript);
	
	  function UniformDescriptor(react3Instance) {
	    _classCallCheck(this, UniformDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (UniformDescriptor.__proto__ || Object.getPrototypeOf(UniformDescriptor)).call(this, react3Instance));
	
	    _this._invalidChild = function (child) {
	      return _this.invalidChildInternal(child);
	    };
	
	    _this.hasProp('type', {
	      type: _ReactPropTypes2.default.string.isRequired,
	      simple: true
	    });
	
	    _this.hasProp('value', {
	      type: _ReactPropTypes2.default.any,
	      update: function update(threeObject, value) {
	        threeObject.setValue(value);
	      },
	
	      default: null
	    });
	
	    _this.hasProp('name', {
	      type: _ReactPropTypes2.default.string.isRequired,
	      update: _this.triggerRemount
	    });
	    return _this;
	  }
	
	  _createClass(UniformDescriptor, [{
	    key: 'construct',
	    value: function construct() {
	      return new _Uniform2.default();
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(UniformDescriptor.prototype.__proto__ || Object.getPrototypeOf(UniformDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      (0, _invariant2.default)(props.hasOwnProperty('name'), 'The <uniform/> should have a \'name\' property');
	      threeObject.name = props.name;
	      threeObject.value = props.value;
	    }
	  }, {
	    key: 'setParent',
	    value: function setParent(threeObject, parentObject3D) {
	      (0, _invariant2.default)(parentObject3D instanceof _UniformContainer2.default, 'Parent is not a Uniform Container (<uniforms/>)');
	
	      var name = threeObject.name;
	
	      (0, _invariant2.default)(parentObject3D[name] === undefined, 'Parent already has uniforms');
	
	      _get(UniformDescriptor.prototype.__proto__ || Object.getPrototypeOf(UniformDescriptor.prototype), 'setParent', this).call(this, threeObject, parentObject3D);
	
	      parentObject3D.uniforms[name] = {
	        type: threeObject.type,
	        value: threeObject.value
	      };
	
	      threeObject.userData._onValueChanged = function (newValue) {
	        parentObject3D.uniforms[name].value = newValue;
	      };
	
	      threeObject.userData.events.on('valueChanged', threeObject.userData._onValueChanged);
	    }
	  }, {
	    key: 'addChildren',
	    value: function addChildren(threeObject, children) {
	      (0, _invariant2.default)(children.filter(this._invalidChild).length === 0, 'Uniform children can only be textures or resource references');
	    }
	  }, {
	    key: 'addChild',
	    value: function addChild(threeObject, child) {
	      this.addChildren(threeObject, [child]);
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild() {
	      // do nothing
	    }
	  }, {
	    key: 'invalidChildInternal',
	    value: function invalidChildInternal(child) {
	      var invalid = !(child instanceof _three2.default.Texture || child instanceof _ResourceReference2.default);
	
	      return invalid;
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(threeObject) {
	      threeObject.userData.events.removeListener('valueChanged', threeObject.userData._onValueChanged);
	
	      delete threeObject.userData._onValueChanged;
	
	      _get(UniformDescriptor.prototype.__proto__ || Object.getPrototypeOf(UniformDescriptor.prototype), 'unmount', this).call(this, threeObject);
	    }
	  }, {
	    key: 'highlight',
	    value: function highlight(threeObject) {
	      var parent = threeObject.userData.markup.parentMarkup.threeObject;
	      parent.userData._descriptor.highlight(parent);
	    }
	  }, {
	    key: 'getBoundingBoxes',
	    value: function getBoundingBoxes(threeObject) {
	      var parent = threeObject.userData.markup.parentMarkup.threeObject;
	      return parent.userData._descriptor.getBoundingBoxes(parent);
	    }
	  }, {
	    key: 'hideHighlight',
	    value: function hideHighlight(threeObject) {
	      var parent = threeObject.userData.markup.parentMarkup.threeObject;
	      parent.userData._descriptor.hideHighlight(parent);
	    }
	  }]);
	
	  return UniformDescriptor;
	}(_THREEElementDescriptor2.default);
	
	module.exports = UniformDescriptor;

/***/ },

/***/ 768:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _MaterialDescriptorBase = __webpack_require__(757);
	
	var _MaterialDescriptorBase2 = _interopRequireDefault(_MaterialDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var LineBasicMaterialDescriptor = function (_MaterialDescriptorBa) {
	  _inherits(LineBasicMaterialDescriptor, _MaterialDescriptorBa);
	
	  function LineBasicMaterialDescriptor(react3RendererInstance) {
	    _classCallCheck(this, LineBasicMaterialDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (LineBasicMaterialDescriptor.__proto__ || Object.getPrototypeOf(LineBasicMaterialDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasColor();
	
	    _this.hasProp('linewidth', {
	      type: _ReactPropTypes2.default.number,
	      simple: true,
	      default: 1
	    });
	
	    // what are these properties used for?
	    ['linecap', 'linejoin'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.oneOf(['round']),
	        simple: true,
	        default: 'round'
	      });
	    });
	
	    _this.hasProp('vertexColors', {
	      type: _ReactPropTypes2.default.oneOf([_three2.default.NoColors, _three2.default.FaceColors, _three2.default.VertexColors]),
	      simple: true,
	      default: _three2.default.NoColors
	    });
	
	    _this.hasProp('fog', {
	      type: _ReactPropTypes2.default.bool,
	      update: function update(threeObject, fog, existsInProps) {
	        if (existsInProps) {
	          threeObject.fog = fog;
	        }
	        threeObject.needsUpdate = true;
	      },
	
	      updateInitial: true,
	      default: true
	    });
	    return _this;
	  }
	
	  _createClass(LineBasicMaterialDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var materialDescription = this.getMaterialDescription(props);
	
	      return new _three2.default.LineBasicMaterial(materialDescription);
	    }
	  }]);
	
	  return LineBasicMaterialDescriptor;
	}(_MaterialDescriptorBase2.default);
	
	module.exports = LineBasicMaterialDescriptor;

/***/ },

/***/ 769:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _MaterialDescriptorBase = __webpack_require__(757);
	
	var _MaterialDescriptorBase2 = _interopRequireDefault(_MaterialDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var LineDashedMaterialDescriptor = function (_MaterialDescriptorBa) {
	  _inherits(LineDashedMaterialDescriptor, _MaterialDescriptorBa);
	
	  function LineDashedMaterialDescriptor(react3RendererInstance) {
	    _classCallCheck(this, LineDashedMaterialDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (LineDashedMaterialDescriptor.__proto__ || Object.getPrototypeOf(LineDashedMaterialDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasColor();
	
	    ['linewidth', 'scale', 'gapSize'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.number,
	        simple: true,
	        default: 1
	      });
	    });
	
	    _this.hasProp('dashSize', {
	      type: _ReactPropTypes2.default.number,
	      simple: true,
	      default: 3
	    });
	
	    // what are these properties used for?
	    ['linecap', 'linejoin'].forEach(function (propName) {
	      _this.hasProp(propName, {
	        type: _ReactPropTypes2.default.oneOf(['round']),
	        simple: true,
	        default: 'round'
	      });
	    });
	
	    _this.hasProp('vertexColors', {
	      type: _ReactPropTypes2.default.oneOf([_three2.default.NoColors, _three2.default.FaceColors, _three2.default.VertexColors]),
	      simple: true,
	      default: _three2.default.NoColors
	    });
	
	    _this.hasProp('fog', {
	      type: _ReactPropTypes2.default.bool,
	      update: function update(threeObject, fog, existsInProps) {
	        if (existsInProps) {
	          threeObject.fog = fog;
	        }
	        threeObject.needsUpdate = true;
	      },
	
	      updateInitial: true,
	      default: true
	    });
	    return _this;
	  }
	
	  _createClass(LineDashedMaterialDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var materialDescription = this.getMaterialDescription(props);
	
	      return new _three2.default.LineDashedMaterial(materialDescription);
	    }
	  }]);
	
	  return LineDashedMaterialDescriptor;
	}(_MaterialDescriptorBase2.default);
	
	module.exports = LineDashedMaterialDescriptor;

/***/ },

/***/ 770:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _MaterialDescriptorBase = __webpack_require__(757);
	
	var _MaterialDescriptorBase2 = _interopRequireDefault(_MaterialDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var MeshDepthMaterialDescriptor = function (_MaterialDescriptorBa) {
	  _inherits(MeshDepthMaterialDescriptor, _MaterialDescriptorBa);
	
	  function MeshDepthMaterialDescriptor(react3RendererInstance) {
	    _classCallCheck(this, MeshDepthMaterialDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (MeshDepthMaterialDescriptor.__proto__ || Object.getPrototypeOf(MeshDepthMaterialDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasWireframe();
	    return _this;
	  }
	
	  _createClass(MeshDepthMaterialDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var materialDescription = this.getMaterialDescription(props);
	
	      return new _three2.default.MeshDepthMaterial(materialDescription);
	    }
	  }]);
	
	  return MeshDepthMaterialDescriptor;
	}(_MaterialDescriptorBase2.default);
	
	module.exports = MeshDepthMaterialDescriptor;

/***/ },

/***/ 771:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _MaterialDescriptorBase = __webpack_require__(757);
	
	var _MaterialDescriptorBase2 = _interopRequireDefault(_MaterialDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var MeshNormalMaterialDescriptor = function (_MaterialDescriptorBa) {
	  _inherits(MeshNormalMaterialDescriptor, _MaterialDescriptorBa);
	
	  function MeshNormalMaterialDescriptor(react3RendererInstance) {
	    _classCallCheck(this, MeshNormalMaterialDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (MeshNormalMaterialDescriptor.__proto__ || Object.getPrototypeOf(MeshNormalMaterialDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasWireframe();
	    return _this;
	  }
	
	  _createClass(MeshNormalMaterialDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var materialDescription = this.getMaterialDescription(props);
	
	      return new _three2.default.MeshNormalMaterial(materialDescription);
	    }
	  }]);
	
	  return MeshNormalMaterialDescriptor;
	}(_MaterialDescriptorBase2.default);
	
	module.exports = MeshNormalMaterialDescriptor;

/***/ },

/***/ 772:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _MaterialDescriptorBase = __webpack_require__(757);
	
	var _MaterialDescriptorBase2 = _interopRequireDefault(_MaterialDescriptorBase);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var SpriteMaterialDescriptor = function (_MaterialDescriptorBa) {
	  _inherits(SpriteMaterialDescriptor, _MaterialDescriptorBa);
	
	  function SpriteMaterialDescriptor(react3RendererInstance) {
	    _classCallCheck(this, SpriteMaterialDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (SpriteMaterialDescriptor.__proto__ || Object.getPrototypeOf(SpriteMaterialDescriptor)).call(this, react3RendererInstance));
	
	    _this.hasColor();
	
	    _this.hasProp('rotation', {
	      type: _ReactPropTypes2.default.number,
	      simple: true,
	      default: 0
	    });
	
	    _this.hasProp('fog', {
	      type: _ReactPropTypes2.default.bool,
	      update: function update(threeObject, fog, existsInProps) {
	        if (existsInProps) {
	          threeObject.fog = fog;
	        }
	        threeObject.needsUpdate = true;
	      },
	
	      updateInitial: true,
	      default: false
	    });
	    return _this;
	  }
	
	  _createClass(SpriteMaterialDescriptor, [{
	    key: 'construct',
	    value: function construct(props) {
	      var materialDescription = this.getMaterialDescription(props);
	
	      return new _three2.default.SpriteMaterial(materialDescription);
	    }
	  }]);
	
	  return SpriteMaterialDescriptor;
	}(_MaterialDescriptorBase2.default);
	
	module.exports = SpriteMaterialDescriptor;

/***/ },

/***/ 773:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _Object3DDescriptor2 = __webpack_require__(685);
	
	var _Object3DDescriptor3 = _interopRequireDefault(_Object3DDescriptor2);
	
	var _CameraUtils = __webpack_require__(678);
	
	var _CameraUtils2 = _interopRequireDefault(_CameraUtils);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var CameraHelperDescriptor = function (_Object3DDescriptor) {
	  _inherits(CameraHelperDescriptor, _Object3DDescriptor);
	
	  function CameraHelperDescriptor(react3Instance) {
	    _classCallCheck(this, CameraHelperDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (CameraHelperDescriptor.__proto__ || Object.getPrototypeOf(CameraHelperDescriptor)).call(this, react3Instance));
	
	    _this.hasProp('visible', {
	      type: _ReactPropTypes2.default.bool,
	      override: true,
	      update: function update(threeObject, visible) {
	        threeObject.userData._visible = visible;
	
	        threeObject.visible = threeObject.userData._hasCamera && visible;
	      },
	
	      updateInitial: true,
	      default: true
	    });
	
	    _this.hasProp('cameraName', {
	      type: _ReactPropTypes2.default.string.isRequired,
	      update: function update(threeObject, cameraName) {
	        _this._clearCameraEvents(threeObject);
	
	        threeObject.userData._cameraName = cameraName;
	
	        _this._startCameraFinder(threeObject);
	      },
	      default: undefined
	    });
	    return _this;
	  }
	
	  _createClass(CameraHelperDescriptor, [{
	    key: 'construct',
	    value: function construct() {
	      return new _three2.default.CameraHelper(new _three2.default.PerspectiveCamera());
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(cameraHelper, props) {
	      var _this2 = this;
	
	      _get(CameraHelperDescriptor.prototype.__proto__ || Object.getPrototypeOf(CameraHelperDescriptor.prototype), 'applyInitialProps', this).call(this, cameraHelper, props);
	
	      cameraHelper.userData._onCameraProjectionUpdate = function () {
	        cameraHelper.update();
	      };
	
	      cameraHelper.userData._onCameraDispose = function () {
	        _this2._startCameraFinder(cameraHelper);
	      };
	
	      cameraHelper.userData._onCameraRename = function (payload) {
	        if (payload.oldName === cameraHelper.userData._cameraName) {
	          _this2._startCameraFinder(cameraHelper);
	        }
	      };
	
	      cameraHelper.userData._onBeforeRender = function () {
	        cameraHelper.visible = cameraHelper.userData._hasCamera && cameraHelper.userData._visible && _CameraUtils2.default.current !== cameraHelper.userData._camera;
	      };
	
	      cameraHelper.userData._cameraName = props.cameraName;
	      cameraHelper.userData._visible = props.hasOwnProperty('visible') ? props.visible : true;
	
	      cameraHelper.userData.events.once('addedIntoRoot', function () {
	        var rootInstance = cameraHelper.userData.markup._rootInstance;
	
	        rootInstance.addBeforeRenderListener(cameraHelper.userData._onBeforeRender);
	
	        _this2._startCameraFinder(cameraHelper);
	      });
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(threeObject) {
	      this._clearCameraEvents(threeObject);
	
	      delete threeObject.userData._onCameraProjectionUpdate;
	
	      return _get(CameraHelperDescriptor.prototype.__proto__ || Object.getPrototypeOf(CameraHelperDescriptor.prototype), 'unmount', this).call(this, threeObject);
	    }
	  }, {
	    key: '_getCamera',
	    value: function _getCamera(rootInstance, cameraName) {
	      var camera = null;
	
	      if (cameraName) {
	        var camerasByName = rootInstance.getObjectsByName(cameraName).filter(function (obj) {
	          return obj instanceof _three2.default.Camera;
	        });
	
	        if (camerasByName.length > 0) {
	          camera = camerasByName[0];
	        }
	      }
	
	      return camera;
	    }
	  }, {
	    key: '_clearCameraEvents',
	    value: function _clearCameraEvents(helper) {
	      if (helper.userData._hasCamera) {
	        helper.userData._camera.userData.events.removeListener('updateProjectionMatrix', helper.userData._onCameraProjectionUpdate);
	        helper.userData._camera.userData.events.removeListener('dispose', helper.userData._onCameraDispose);
	        helper.userData._camera.userData.events.removeListener('rename', helper.userData._onCameraRename);
	      }
	    }
	  }, {
	    key: '_setCamera',
	    value: function _setCamera(helper, camera) {
	      var userData = helper.userData;
	
	      if (userData._camera === camera) {
	        return;
	      }
	
	      this._clearCameraEvents(helper);
	
	      userData._hasCamera = true;
	      userData._camera = camera;
	      helper.camera = camera;
	      helper.matrix = camera.matrixWorld;
	      helper.update();
	      helper.visible = userData._visible;
	      var cameraEvents = helper.userData._camera.userData.events;
	
	      cameraEvents.on('rename', userData._onCameraRename);
	      cameraEvents.on('updateProjectionMatrix', userData._onCameraProjectionUpdate);
	      cameraEvents.once('dispose', userData._onCameraDispose);
	    }
	  }, {
	    key: '_startCameraFinder',
	    value: function _startCameraFinder(helper) {
	      var _this3 = this;
	
	      this._clearCameraEvents(helper);
	
	      var rootInstance = helper.userData.markup && helper.userData.markup._rootInstance;
	
	      if (!rootInstance) {
	        return;
	      }
	
	      helper.userData._hasCamera = false;
	      helper.userData._camera = null;
	      helper.camera = new _three2.default.PerspectiveCamera();
	      helper.visible = false;
	
	      var camera = this._getCamera(rootInstance, helper.userData._cameraName);
	
	      if (camera) {
	        this._setCamera(helper, camera);
	      } else {
	        (function () {
	          // try to find camera before renders
	          var findCamera = function findCamera() {
	            var foundCamera = _this3._getCamera(rootInstance, helper.userData._cameraName);
	
	            if (foundCamera) {
	              rootInstance.removeAnimateListener(findCamera);
	
	              _this3._setCamera(helper, foundCamera);
	            }
	          };
	
	          rootInstance.addAnimateListener(findCamera);
	        })();
	      }
	    }
	  }]);
	
	  return CameraHelperDescriptor;
	}(_Object3DDescriptor3.default);
	
	module.exports = CameraHelperDescriptor;

/***/ },

/***/ 774:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _Object3DDescriptor2 = __webpack_require__(685);
	
	var _Object3DDescriptor3 = _interopRequireDefault(_Object3DDescriptor2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var AxisHelperDescriptor = function (_Object3DDescriptor) {
	  _inherits(AxisHelperDescriptor, _Object3DDescriptor);
	
	  function AxisHelperDescriptor(react3Instance) {
	    _classCallCheck(this, AxisHelperDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (AxisHelperDescriptor.__proto__ || Object.getPrototypeOf(AxisHelperDescriptor)).call(this, react3Instance));
	
	    _this.hasProp('size', {
	      type: _ReactPropTypes2.default.number,
	      update: _this.triggerRemount,
	      default: 1
	    });
	    return _this;
	  }
	
	  _createClass(AxisHelperDescriptor, [{
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(AxisHelperDescriptor.prototype.__proto__ || Object.getPrototypeOf(AxisHelperDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	    }
	  }, {
	    key: 'construct',
	    value: function construct(props) {
	      var size = props.size;
	
	      return new _three2.default.AxisHelper(size);
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(threeObject) {
	      threeObject.geometry.dispose();
	      threeObject.material.dispose();
	
	      _get(AxisHelperDescriptor.prototype.__proto__ || Object.getPrototypeOf(AxisHelperDescriptor.prototype), 'unmount', this).call(this, threeObject);
	    }
	  }]);
	
	  return AxisHelperDescriptor;
	}(_Object3DDescriptor3.default);
	
	module.exports = AxisHelperDescriptor;

/***/ },

/***/ 775:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;if (getter === undefined) {
	      return undefined;
	    }return getter.call(receiver);
	  }
	};
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _ReactPropTypes = __webpack_require__(598);
	
	var _ReactPropTypes2 = _interopRequireDefault(_ReactPropTypes);
	
	var _Object3DDescriptor2 = __webpack_require__(685);
	
	var _Object3DDescriptor3 = _interopRequireDefault(_Object3DDescriptor2);
	
	var _propTypeInstanceOf = __webpack_require__(680);
	
	var _propTypeInstanceOf2 = _interopRequireDefault(_propTypeInstanceOf);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ArrowHelperDescriptor = function (_Object3DDescriptor) {
	  _inherits(ArrowHelperDescriptor, _Object3DDescriptor);
	
	  function ArrowHelperDescriptor(react3Instance) {
	    _classCallCheck(this, ArrowHelperDescriptor);
	
	    var _this = _possibleConstructorReturn(this, (ArrowHelperDescriptor.__proto__ || Object.getPrototypeOf(ArrowHelperDescriptor)).call(this, react3Instance));
	
	    _this.hasProp('origin', {
	      type: (0, _propTypeInstanceOf2.default)(_three2.default.Vector3).isRequired,
	      update: function update(threeObject, origin) {
	        threeObject.position.copy(origin);
	      },
	
	      default: undefined
	    });
	
	    _this.hasProp('dir', {
	      type: (0, _propTypeInstanceOf2.default)(_three2.default.Vector3).isRequired,
	      update: function update(threeObject, newDir) {
	        threeObject.setDirection(newDir);
	      },
	
	      default: undefined
	    });
	
	    _this.hasProp('color', {
	      type: _ReactPropTypes2.default.oneOfType([(0, _propTypeInstanceOf2.default)(_three2.default.Color), _ReactPropTypes2.default.number, _ReactPropTypes2.default.string]),
	      update: function update(threeObject, newColor) {
	        threeObject.setColor(newColor);
	      },
	
	      default: 0xffff00
	    });
	
	    _this.hasProp('length', {
	      type: _ReactPropTypes2.default.number,
	      update: function update(threeObject, length) {
	        threeObject.userData.lengthProps.length = length;
	
	        threeObject.userData.lengthsChanged = true;
	      },
	
	      default: 1
	    });
	
	    _this.hasProp('headLength', {
	      type: _ReactPropTypes2.default.number,
	      update: function update(threeObject, headLength) {
	        threeObject.userData.lengthProps.headLength = headLength;
	
	        threeObject.userData.lengthsChanged = true;
	      },
	      default: undefined
	    });
	
	    _this.hasProp('headWidth', {
	      type: _ReactPropTypes2.default.number,
	      update: function update(threeObject, headWidth) {
	        threeObject.userData.lengthProps.headWidth = headWidth;
	
	        threeObject.userData.lengthsChanged = true;
	      },
	      default: undefined
	    });
	    return _this;
	  }
	
	  _createClass(ArrowHelperDescriptor, [{
	    key: 'beginPropertyUpdates',
	    value: function beginPropertyUpdates(threeObject) {
	      threeObject.userData.lengthsChanged = false;
	    }
	  }, {
	    key: 'completePropertyUpdates',
	    value: function completePropertyUpdates(threeObject) {
	      if (threeObject.userData.lengthsChanged) {
	        threeObject.userData.lengthsChanged = false;
	
	        var length = threeObject.userData.lengthProps.length;
	        var _threeObject$userData = threeObject.userData.lengthProps;
	        var headLength = _threeObject$userData.headLength;
	        var headWidth = _threeObject$userData.headWidth;
	
	        if (headLength === undefined) {
	          headLength = 0.2 * length;
	        }
	
	        if (headWidth === undefined) {
	          headWidth = 0.2 * headLength;
	        }
	
	        threeObject.setLength(length, headLength, headWidth);
	      }
	    }
	  }, {
	    key: 'applyInitialProps',
	    value: function applyInitialProps(threeObject, props) {
	      _get(ArrowHelperDescriptor.prototype.__proto__ || Object.getPrototypeOf(ArrowHelperDescriptor.prototype), 'applyInitialProps', this).call(this, threeObject, props);
	
	      var length = props.length;
	      var headLength = props.headLength;
	      var headWidth = props.headWidth;
	
	      threeObject.userData.lengthProps = {
	        length: length,
	        headLength: headLength,
	        headWidth: headWidth
	      };
	    }
	  }, {
	    key: 'construct',
	    value: function construct(props) {
	      var dir = props.dir;
	      var origin = props.origin;
	      var length = props.length;
	      var color = props.color;
	      var headLength = props.headLength;
	      var headWidth = props.headWidth;
	
	      return new _three2.default.ArrowHelper(dir, origin, length, color, headLength, headWidth);
	    }
	  }, {
	    key: 'unmount',
	    value: function unmount(threeObject) {
	      if (threeObject.line) {
	        threeObject.line.geometry.dispose();
	        threeObject.line.material.dispose();
	      }
	
	      if (threeObject.cone) {
	        threeObject.cone.geometry.dispose();
	        threeObject.cone.material.dispose();
	      }
	
	      _get(ArrowHelperDescriptor.prototype.__proto__ || Object.getPrototypeOf(ArrowHelperDescriptor.prototype), 'unmount', this).call(this, threeObject);
	    }
	  }]);
	
	  return ArrowHelperDescriptor;
	}(_Object3DDescriptor3.default);
	
	module.exports = ArrowHelperDescriptor;

/***/ },

/***/ 994:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 1021:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Post = __webpack_require__(1022);
	
	var _Post2 = _interopRequireDefault(_Post);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LightBox = function LightBox(props) {
	  var active = props.active;
	  var post = props.post;
	  var closeLightBox = props.closeLightBox;
	  var show360Picture = props.show360Picture;
	
	  var height = { height: window.innerHeight - 200 };
	
	  if (active && post) {
	    return _react2.default.createElement(
	      'div',
	      { id: 'lightBox' },
	      _react2.default.createElement(
	        'div',
	        { id: 'feed', style: height },
	        _react2.default.createElement(
	          _Post2.default,
	          { format: 'full', data: post, closeLightBox: closeLightBox, show360Picture: show360Picture },
	          post.content
	        )
	      )
	    );
	  } else {
	    return null;
	  }
	};
	
	LightBox.propTypes = {
	  active: _react.PropTypes.bool.isRequired,
	  post: _react.PropTypes.object,
	  closeLightBox: _react.PropTypes.func.isRequired,
	  show360Picture: _react.PropTypes.func.isRequired
	};
	exports.default = LightBox;

/***/ },

/***/ 1022:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _desc, _value, _class;
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(497);
	
	var _three = __webpack_require__(567);
	
	var _three2 = _interopRequireDefault(_three);
	
	var _reactThreeRenderer = __webpack_require__(568);
	
	var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);
	
	var _autobindDecorator = __webpack_require__(564);
	
	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;
	
	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }
	
	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);
	
	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }
	
	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }
	
	  return desc;
	}
	
	var Post = (_class = function (_React$Component) {
	  _inherits(Post, _React$Component);
	
	  function Post(props) {
	    _classCallCheck(this, Post);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Post).call(this, props));
	
	    _this.state = {
	      sphereScale: new _three2.default.Vector3(-1, 1, 1),
	      width: 640,
	      height: 360,
	      isUserInteracting: false,
	      onMouseDownMouseX: 0,
	      onMouseDownMouseY: 0,
	      lon: 0,
	      onMouseDownLon: 0,
	      lat: 0,
	      onMouseDownLat: 0,
	      phi: 0,
	      theta: 0,
	      cameraTarget: new _three2.default.Vector3(1, 0, 0),
	      fov: 75,
	      closeMouseOver: false
	    };
	    return _this;
	  }
	
	  _createClass(Post, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var data = this.props.data;
	
	
	      if (data.type === '360Image') {
	
	        var width = document.querySelector('div.post' + data.key).clientWidth * 0.85;
	        var height = window.innerHeight - 250;
	
	        this.setState(_extends({}, this.state, {
	          width: width,
	          height: height
	        }));
	      }
	    }
	  }, {
	    key: 'onMouseDown',
	    value: function onMouseDown(event) {
	      // cosole.log('down)
	      var _state = this.state;
	      var lon = _state.lon;
	      var lat = _state.lat;
	      var clientX = event.clientX;
	      var clientY = event.clientY;
	
	      this.setState(_extends({}, this.state, {
	        isUserInteracting: true,
	        onMouseDownMouseX: clientX,
	        onMouseDownMouseY: clientY,
	        onMouseDownLon: lon,
	        onMouseDownLat: lat
	      }));
	      event.stopPropagation();
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(event) {
	      var _state2 = this.state;
	      var isUserInteracting = _state2.isUserInteracting;
	      var onMouseDownMouseX = _state2.onMouseDownMouseX;
	      var onMouseDownLon = _state2.onMouseDownLon;
	      var onMouseDownMouseY = _state2.onMouseDownMouseY;
	      var onMouseDownLat = _state2.onMouseDownLat;
	
	      if (isUserInteracting === true) {
	        var lon = (onMouseDownMouseX - event.clientX) * 0.1 + onMouseDownLon;
	        var lat = Math.max(-85, Math.min(85, (event.clientY - onMouseDownMouseY) * 0.1 + onMouseDownLat));
	        var phi = _three2.default.Math.degToRad(90 - lat);
	        var theta = _three2.default.Math.degToRad(lon);
	        var cameraTarget = new _three2.default.Vector3(500 * Math.sin(phi) * Math.cos(theta), 500 * Math.cos(phi), 500 * Math.sin(phi) * Math.sin(theta));
	
	        this.setState(_extends({}, this.state, {
	          lon: lon,
	          lat: lat,
	          cameraTarget: cameraTarget
	        }));
	      }
	    }
	  }, {
	    key: 'onMouseUp',
	    value: function onMouseUp(event) {
	      this.setState(_extends({}, this.state, {
	        isUserInteracting: false
	      }));
	      event.stopPropagation();
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(event) {
	      event.stopPropagation();
	    }
	  }, {
	    key: 'onMouseOut',
	    value: function onMouseOut(event) {
	      this.setState(_extends({}, this.state, {
	        isUserInteracting: false
	      }));
	      event.stopPropagation();
	    }
	  }, {
	    key: 'onMouseWheel',
	    value: function onMouseWheel(event) {
	      // const { fov } = this.state
	      // this.setState({
	      //   ...this.state,
	      //   fov: fov + event.deltaY * 0.05
	      // })
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var format = _props.format;
	      var data = _props.data;
	      var closeLightBox = _props.closeLightBox;
	      var show360Picture = _props.show360Picture;
	      var _state3 = this.state;
	      var width = _state3.width;
	      var height = _state3.height;
	      var sphereScale = _state3.sphereScale;
	      var fov = _state3.fov;
	
	
	      if (format === 'full') {
	        var metaTypes = ['date'];
	        if (data.location) metaTypes.push('location');
	        if (data.link) metaTypes.push('link');
	        var meta = metaTypes.map(function (m, i) {
	          var value = function () {
	            if (m === 'date') {
	              var d = new Date(data.date);
	              return _react2.default.createElement(
	                'p',
	                null,
	                (0, _utils.dateToString)(d, true)
	              );
	            } else if (format === 'full') {
	              return _react2.default.createElement('img', { width: '16', height: '16', key: i, src: '/static/img/icon-' + m + '.png' });
	            }
	          }();
	          return _react2.default.createElement(
	            'div',
	            { className: m, key: i },
	            value
	          );
	        });
	
	        var content = function content(data) {
	          switch (data.type) {
	            case 'tweet':
	              var images = data.images ? data.images.map(function (url, i) {
	                return _react2.default.createElement('img', { src: url, key: i });
	              }) : '';
	              return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                  'p',
	                  { className: 'message' },
	                  '"',
	                  data.content,
	                  '"'
	                ),
	                images
	              );
	            case 'image':
	              return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement('img', { src: data.images[0] }),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  data.content
	                )
	              );
	            case '360Image':
	              return _react2.default.createElement(
	                'div',
	                {
	                  onMouseDown: _this2.onMouseDown,
	                  onMouseMove: _this2.onMouseMove,
	                  onMouseUp: _this2.onMouseUp,
	                  onMouseOut: _this2.onMouseOut,
	                  onWheel: _this2.onMouseWheel,
	                  onClick: _this2.onClick
	                },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'interaction-helper' },
	                  _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement('img', { src: '/static/img/icon-360.svg' }),
	                    'Drag image to rotate view'
	                  )
	                ),
	                _react2.default.createElement(
	                  _reactThreeRenderer2.default,
	                  {
	                    mainCamera: 'lightbox-camera',
	                    width: width,
	                    height: height
	                  },
	                  _react2.default.createElement(
	                    'scene',
	                    null,
	                    _react2.default.createElement('perspectiveCamera', {
	                      name: 'lightbox-camera',
	                      fov: fov,
	                      aspect: width / height,
	                      near: 1,
	                      far: 1100,
	                      position: new _three2.default.Vector3(0, 0, 0),
	                      lookAt: _this2.state.cameraTarget
	                    }),
	                    _react2.default.createElement(
	                      'mesh',
	                      {
	                        scale: sphereScale
	                      },
	                      _react2.default.createElement('sphereGeometry', {
	                        radius: 500,
	                        widthSegments: 60,
	                        heightSegments: 40
	                      }),
	                      _react2.default.createElement(
	                        'meshBasicMaterial',
	                        null,
	                        _react2.default.createElement('texture', { url: data.images[0] })
	                      )
	                    )
	                  )
	                )
	              );
	            case 'audio':
	              var soundCloudURL = 'https://w.soundcloud.com/player/?url=';
	              soundCloudURL += data.link;
	              soundCloudURL += '&color=F8D143&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false';
	
	              return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                  'h2',
	                  null,
	                  data.title
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  'sound'
	                ),
	                _react2.default.createElement('iframe', { src: soundCloudURL })
	              );
	            case 'blog':
	              return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                  'h2',
	                  null,
	                  data.title
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  data.content
	                ),
	                _react2.default.createElement(
	                  'p',
	                  null,
	                  _react2.default.createElement(
	                    'a',
	                    { href: data.link },
	                    'Read more...'
	                  )
	                )
	              );
	            default:
	              return '';
	          }
	        };
	
	        return _react2.default.createElement(
	          'div',
	          { className: 'post post' + data.key },
	          _react2.default.createElement(
	            'div',
	            { className: 'type' },
	            _react2.default.createElement('img', { width: '16', height: '16', src: '/static/img/icon-' + data.type + '.png' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'content' },
	            content(data),
	            data.type !== '360Image' && _react2.default.createElement(
	              'div',
	              { className: 'meta' },
	              meta,
	              _react2.default.createElement(
	                'div',
	                { className: 'share' },
	                _react2.default.createElement('img', { width: '16', height: '16', src: 'static/img/icon-share.png' })
	              ),
	              _react2.default.createElement('div', { className: 'separator' })
	            )
	          ),
	          data.type === '360Image' && _react2.default.createElement(
	            'div',
	            { className: 'actions' },
	            _react2.default.createElement(
	              'div',
	              {
	                className: 'button close',
	                onMouseOver: function onMouseOver() {
	                  _this2.setState(_extends({}, _this2.state, {
	                    closeMouseOver: true
	                  }));
	                },
	                onMouseOut: function onMouseOut() {
	                  _this2.setState(_extends({}, _this2.state, {
	                    closeMouseOver: false
	                  }));
	                },
	                onClick: closeLightBox
	              },
	              _react2.default.createElement('img', {
	                width: '16',
	                height: '16',
	                src: '/static/img/icon-close' + (this.state.closeMouseOver ? '-hover' : '') + '.png'
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              {
	                className: 'button forward',
	                onMouseOver: function onMouseOver() {
	                  _this2.setState(_extends({}, _this2.state, {
	                    forwardMouseOver: true
	                  }));
	                },
	                onMouseOut: function onMouseOut() {
	                  _this2.setState(_extends({}, _this2.state, {
	                    forwardMouseOver: false
	                  }));
	                },
	                onMouseDown: function onMouseDown(event) {
	                  if (data.next) show360Picture(data.next);
	                  event.stopPropagation();
	                }
	              },
	              _react2.default.createElement('img', {
	                width: '16',
	                height: '16',
	                src: '/static/img/icon-forward' + (this.state.forwardMouseOver ? '-hover' : '') + '.png'
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              {
	                className: 'button backward',
	                onMouseOver: function onMouseOver() {
	                  _this2.setState(_extends({}, _this2.state, {
	                    backwardMouseOver: true
	                  }));
	                },
	                onMouseOut: function onMouseOut() {
	                  _this2.setState(_extends({}, _this2.state, {
	                    backwardMouseOver: false
	                  }));
	                },
	                onMouseDown: function onMouseDown(event) {
	                  if (data.previous) show360Picture(data.previous);
	                  event.stopPropagation();
	                }
	              },
	              _react2.default.createElement('img', {
	                width: '16',
	                height: '16',
	                src: '/static/img/icon-backward' + (this.state.backwardMouseOver ? '-hover' : '') + '.png'
	              })
	            )
	          )
	        );
	      }
	
	      return '';
	    }
	  }]);
	
	  return Post;
	}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'onMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onMouseMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onClick', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onClick'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onMouseOut', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onMouseOut'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onMouseWheel', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onMouseWheel'), _class.prototype)), _class);
	
	
	Post.propTypes = {
	  format: _react.PropTypes.string.isRequired,
	  data: _react.PropTypes.object.isRequired,
	  closeLightBox: _react.PropTypes.func,
	  show360Picture: _react.PropTypes.func
	};
	
	exports.default = Post;

/***/ },

/***/ 1023:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _desc, _value, _class;
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(496);
	
	var d3 = _interopRequireWildcard(_d);
	
	var _autobindDecorator = __webpack_require__(564);
	
	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
	
	var _SightingGraph = __webpack_require__(1024);
	
	var _SightingGraph2 = _interopRequireDefault(_SightingGraph);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;
	
	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }
	
	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);
	
	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }
	
	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }
	
	  return desc;
	}
	
	var Timeline = (_class = function (_React$Component) {
	  _inherits(Timeline, _React$Component);
	
	  function Timeline(props) {
	    _classCallCheck(this, Timeline);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Timeline).call(this, props));
	
	    _this.state = {
	      padding: [2, 8],
	      x: 0,
	      cursorY: 0,
	      width: 0,
	      height: 0,
	      data: [],
	      range: [0, 0],
	      domain: [0, 0],
	      scaleDays: null,
	      scaleTime: null,
	      totalSightings: [],
	      mouseOver: false
	    };
	    return _this;
	  }
	
	  _createClass(Timeline, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var expedition = nextProps.expedition;
	
	      if (expedition) {
	        var padding = this.state.padding;
	
	        var startDate = expedition.start;
	        var height = window.innerHeight - 72;
	        var width = window.innerWidth * 0.05;
	        var x = width * 0.58;
	        var dayCount = expedition.dayCount + 1;
	
	        var data = [];
	        for (var i = 0; i < dayCount; i++) {
	          var d = new Date(startDate.getTime() + i * (1000 * 3600 * 24));
	          data.push(d);
	        }
	
	        var range = [0 + padding[1], height - padding[1]];
	        var domain = [dayCount - 1, 0];
	        var scaleDays = d3.scaleLinear().domain(domain).range(range);
	        var scaleTime = d3.scaleLinear().domain([startDate.getTime() + (dayCount - 1) * (1000 * 3600 * 24), startDate.getTime()]).range(range);
	
	        var cursorY = this.state.mouseOver ? this.state.cursorY : scaleTime(expedition.currentDate.getTime()) - 8;
	
	        var totalSightings = expedition.totalSightings;
	
	        this.setState(_extends({}, this.state, {
	          x: x,
	          cursorY: cursorY,
	          width: width,
	          height: height,
	          data: data,
	          range: range,
	          domain: domain,
	          scaleDays: scaleDays,
	          scaleTime: scaleTime,
	          totalSightings: totalSightings
	        }));
	      }
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      var _state = this.state;
	      var scaleTime = _state.scaleTime;
	      var range = _state.range;
	      var _props = this.props;
	      var jumpTo = _props.jumpTo;
	      var expeditionID = _props.expeditionID;
	
	      var y = e.nativeEvent.offsetY;
	      jumpTo(new Date(scaleTime.invert(Math.max(range[0] + 1, Math.min(range[1] - 1, y)))), expeditionID);
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(e) {
	      var _state2 = this.state;
	      var range = _state2.range;
	      var padding = _state2.padding;
	
	      var cursorY = Math.max(range[0], Math.min(range[1], e.nativeEvent.offsetY)) - padding[1];
	      this.setState(_extends({}, this.state, {
	        cursorY: cursorY,
	        mouseOver: true
	      }));
	    }
	  }, {
	    key: 'onMouseOut',
	    value: function onMouseOut(e) {
	      var expedition = this.props.expedition;
	      var scaleTime = this.state.scaleTime;
	
	      var cursorY = scaleTime(expedition.currentDate.getTime()) - 8;
	      this.setState(_extends({}, this.state, {
	        cursorY: cursorY,
	        mouseOver: false
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var expedition = this.props.expedition;
	
	      if (!expedition) return _react2.default.createElement('svg', { id: 'timeline' });
	      var _state3 = this.state;
	      var width = _state3.width;
	      var height = _state3.height;
	      var data = _state3.data;
	      var x = _state3.x;
	      var range = _state3.range;
	      var scaleDays = _state3.scaleDays;
	      var cursorY = _state3.cursorY;
	      var totalSightings = _state3.totalSightings;
	      var padding = _state3.padding;
	
	
	      var days = data.map(function (d, i) {
	        return _react2.default.createElement('circle', { cx: x, cy: scaleDays(i), r: 3, key: i, fill: 'white' });
	      });
	
	      return _react2.default.createElement(
	        'svg',
	        {
	          id: 'timeline',
	          className: location.pathname === '/data' || location.pathname === '/about' ? 'invisible' : 'visible',
	          style: { height: height + 'px' },
	          onMouseOut: this.onMouseOut,
	          onMouseMove: this.onMouseMove,
	          onClick: this.onClick },
	        _react2.default.createElement(
	          'filter',
	          { id: 'dropshadow', height: '120%' },
	          _react2.default.createElement('feGaussianBlur', { 'in': 'SourceAlpha', stdDeviation: '3' }),
	          _react2.default.createElement('feOffset', { dx: '2', dy: '0', result: 'offsetblur' }),
	          _react2.default.createElement(
	            'feMerge',
	            null,
	            _react2.default.createElement('feMergeNode', null),
	            _react2.default.createElement('feMergeNode', { 'in': 'SourceGraphic' })
	          )
	        ),
	        _react2.default.createElement(
	          'g',
	          { transform: 'translate(' + 0 + ',' + padding[1] + ')', style: { pointerEvents: 'none' } },
	          _react2.default.createElement(_SightingGraph2.default, { sightings: totalSightings, width: width, height: height - padding[1] * 2 })
	        ),
	        _react2.default.createElement('line', { x1: x, x2: x, y1: range[0], y2: range[1], style: { stroke: 'white' } }),
	        _react2.default.createElement(
	          'g',
	          null,
	          days
	        ),
	        _react2.default.createElement(
	          'g',
	          { transform: 'translate(' + (x - 20) + ',' + cursorY + ')', style: { pointerEvents: 'none' } },
	          _react2.default.createElement('path', { fill: '#F9D144', d: 'M8,0c5,0,12,8,12,8s-7,8-12,8c-4.4,0-8-3.6-8-8C0,3.6,3.6,0,8,0z', style: { filter: 'url(#dropshadow)' } }),
	          _react2.default.createElement('circle', { fill: '#1F1426', cx: '7.9', cy: '7.8', r: '3' })
	        )
	      );
	    }
	  }]);
	
	  return Timeline;
	}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'onClick', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onClick'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onMouseMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onMouseOut', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onMouseOut'), _class.prototype)), _class);
	
	
	Timeline.propTypes = {
	  expedition: _react.PropTypes.object,
	  jumpTo: _react.PropTypes.func.isRequired,
	  expeditionID: _react.PropTypes.string
	};
	exports.default = Timeline;

/***/ },

/***/ 1024:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d = __webpack_require__(496);
	
	var d3 = _interopRequireWildcard(_d);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SightingGraph = function SightingGraph(_ref) {
	  var width = _ref.width;
	  var height = _ref.height;
	  var sightings = _ref.sightings;
	
	  var margin = 0.42;
	  width = width - margin * width;
	
	  var x = d3.scaleLinear().domain([0, d3.max(sightings)]).range([width, width * margin]);
	
	  var y = d3.scaleLinear().domain([0, sightings.length - 1]).range([height, 0]);
	
	  return _react2.default.createElement(
	    'g',
	    null,
	    _react2.default.createElement('path', { fill: 'rgba(196,131,39,0.8)', d: d3.area().x0(width).x1(function (d) {
	        return x(d);
	      }).y(function (d, i) {
	        return y(i);
	      })(sightings) })
	  );
	};
	
	SightingGraph.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  sightings: _react.PropTypes.array
	};
	
	exports.default = SightingGraph;

/***/ },

/***/ 1025:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NavigationItem = __webpack_require__(1026);
	
	var _NavigationItem2 = _interopRequireDefault(_NavigationItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Navigation = function Navigation(_ref) {
	  var pathName = _ref.pathName;
	  var setPage = _ref.setPage;
	
	  // <NavigationItem setPage={setPage} active={pathName === '/data'}>Data</NavigationItem>
	  // <NavigationItem active={pathName === '/share'}>Share</NavigationItem>
	  return _react2.default.createElement(
	    'div',
	    { id: 'header' },
	    _react2.default.createElement(
	      'div',
	      { id: 'navigation' },
	      _react2.default.createElement(
	        'ul',
	        null,
	        _react2.default.createElement(
	          _NavigationItem2.default,
	          { setPage: setPage, active: pathName === '/' || pathName === '/map' },
	          'Map'
	        ),
	        _react2.default.createElement(
	          _NavigationItem2.default,
	          { setPage: setPage, active: pathName === '/journal' },
	          'Journal'
	        ),
	        _react2.default.createElement(
	          _NavigationItem2.default,
	          { setPage: setPage, active: pathName === '/data' },
	          'Data'
	        ),
	        _react2.default.createElement(
	          _NavigationItem2.default,
	          { setPage: setPage, active: pathName === '/about' },
	          'About'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'h1',
	      null,
	      'INTO THE OKAVANGO'
	    ),
	    _react2.default.createElement('img', { id: 'logo', src: 'static/img/logo.svg', alt: 'Into the Okavango' })
	  );
	};
	
	Navigation.propTypes = {
	  pathName: _react.PropTypes.string.isRequired,
	  setPage: _react.PropTypes.func.isRequired
	};
	
	exports.default = Navigation;

/***/ },

/***/ 1026:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(500);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationItem = function NavigationItem(_ref) {
	  var children = _ref.children;
	  var active = _ref.active;
	  var setPage = _ref.setPage;
	
	  if (!setPage) setPage = function setPage() {
	    return;
	  };
	  return _react2.default.createElement(
	    'li',
	    { className: active ? 'active' : '', onClick: setPage },
	    _react2.default.createElement(
	      _reactRouter.Link,
	      { to: children.toString().toLowerCase() },
	      children.toString()
	    )
	  );
	};
	
	NavigationItem.propTypes = {
	  children: _react.PropTypes.node.isRequired,
	  setPage: _react.PropTypes.func
	  // active: PropTypes.bool.isRequred
	  // pathName: PropTypes.node.
	};
	
	exports.default = NavigationItem;

/***/ },

/***/ 1027:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _desc, _value, _class;
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(1028);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _autobindDecorator = __webpack_require__(564);
	
	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;
	
	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }
	
	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);
	
	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }
	
	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }
	
	  return desc;
	}
	
	var IntroductionBox = (_class = function (_React$Component) {
	  _inherits(IntroductionBox, _React$Component);
	
	  function IntroductionBox(props) {
	    _classCallCheck(this, IntroductionBox);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IntroductionBox).call(this, props));
	
	    _this.state = {
	      complete: false,
	      contentEnabled: false,
	      startDate: 0,
	      currentPosts: [],
	      posts: [{
	        content: _react2.default.createElement(
	          'p',
	          { key: '0' },
	          'The Okavango Delta is one of the world’s last great wetland wildernesses.'
	        ),
	        timeRange: [0, 6000]
	      }, {
	        content: _react2.default.createElement(
	          'p',
	          { key: '1' },
	          'A team of Ba’Yei, scientists, engineers and adventurers is journeying a 345 kilometers crossing the delta, finding new species and exploring new ground.'
	        ),
	        timeRange: [6000, 13000]
	      }, {
	        content: _react2.default.createElement(
	          'p',
	          { key: '2' },
	          'Join us in real-time as we explore',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'span',
	            null,
	            'the beating heart of our planet.'
	          )
	        ),
	        timeRange: [13000, 21000]
	      }]
	    };
	    return _this;
	  }
	
	  _createClass(IntroductionBox, [{
	    key: 'skip',
	    value: function skip() {
	      var enableContent = this.props.enableContent;
	
	      this.state.complete = true;
	      this.state.contentEnabled = true;
	      enableContent();
	    }
	  }, {
	    key: 'tick',
	    value: function tick() {
	      var enableContent = this.props.enableContent;
	      var _state = this.state;
	      var posts = _state.posts;
	      var startDate = _state.startDate;
	
	
	      if (!(location.pathname === '/' || location.pathname === '/map')) {
	        this.state.complete = true;
	        return;
	      }
	
	      var now = Date.now() - startDate;
	      var currentPosts = [];
	      posts.forEach(function (p) {
	        if (p.timeRange[0] <= now && p.timeRange[1] > now) {
	          currentPosts.push(p);
	        }
	      });
	
	      if (now > posts[posts.length - 1].timeRange[1] - 6000 && !this.state.contentEnabled) {
	        this.state.contentEnabled = true;
	        enableContent();
	      }
	
	      var flag = true;
	      if (currentPosts.length !== this.state.currentPosts.length) flag = false;else {
	        for (var i = 0; i < Math.max(currentPosts.length, this.state.currentPosts.length); i++) {
	          if (currentPosts[i] !== this.state.currentPosts[i]) {
	            flag = false;
	            break;
	          }
	        }
	      }
	
	      if (!flag) {
	        this.setState(_extends({}, this.state, {
	          currentPosts: currentPosts
	        }));
	      }
	      if (now > posts[posts.length - 1].timeRange[1]) {
	        this.state.complete = true;
	        return;
	      }
	      requestAnimationFrame(this.tick);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState(_extends({}, this.state, {
	        startDate: Date.now()
	      }));
	      // console.log('aga componentDidMount')
	      requestAnimationFrame(this.tick);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state2 = this.state;
	      var currentPosts = _state2.currentPosts;
	      var complete = _state2.complete;
	      var animate = this.props.animate;
	
	      var posts = currentPosts.map(function (p) {
	        return p.content;
	      });
	
	      var container = function container() {
	        return _react2.default.createElement(
	          _reactAddonsCssTransitionGroup2.default,
	          { transitionName: 'notif', transitionEnterTimeout: 500, transitionLeaveTimeout: 200 },
	          posts
	        );
	      };
	
	      if (complete || !animate) return _react2.default.createElement('div', null);
	      return _react2.default.createElement(
	        'div',
	        { id: 'IntroductionBox' },
	        container(),
	        _react2.default.createElement(
	          'div',
	          { id: 'skip-button', onClick: this.skip },
	          'SKIP'
	        )
	      );
	    }
	  }]);
	
	  return IntroductionBox;
	}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'skip', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'skip'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'tick', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'tick'), _class.prototype)), _class);
	
	
	IntroductionBox.propTypes = {
	  enableContent: _react.PropTypes.func.isRequired,
	  animate: _react.PropTypes.bool.isRequired
	};
	
	exports.default = IntroductionBox;

/***/ },

/***/ 1035:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NotificationPanelContainer = __webpack_require__(1036);
	
	var _NotificationPanelContainer2 = _interopRequireDefault(_NotificationPanelContainer);
	
	var _ControlPanelContainer = __webpack_require__(1039);
	
	var _ControlPanelContainer2 = _interopRequireDefault(_ControlPanelContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MapPage = function MapPage() {
	  var height = { height: window.innerWidth > 768 ? window.innerHeight - 100 : window.innerHeight - 120 };
	  return _react2.default.createElement(
	    'div',
	    { className: 'page', id: 'mapPage', style: height },
	    _react2.default.createElement(_ControlPanelContainer2.default, { pathName: location.pathname }),
	    _react2.default.createElement(_NotificationPanelContainer2.default, null)
	  );
	};
	
	// MapPage.propTypes = {
	//   active : PropTypes.bool.isRequired
	// }
	
	// import React, { PropTypes } from 'react'
	exports.default = MapPage;

/***/ },

/***/ 1036:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(483);
	
	var _NotificationPanel = __webpack_require__(1037);
	
	var _NotificationPanel2 = _interopRequireDefault(_NotificationPanel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import * as actions from '../actions.js'
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  var expedition = state.expeditions[state.selectedExpedition];
	  if (expedition) {
	    return {
	      posts: expedition.currentPosts,
	      currentDate: expedition.currentDate,
	      playback: expedition.playback
	    };
	  } else {
	    return {};
	  }
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {};
	};
	
	var NotificationPanelContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_NotificationPanel2.default);
	
	exports.default = NotificationPanelContainer;

/***/ },

/***/ 1037:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(331);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Notification = __webpack_require__(1038);
	
	var _Notification2 = _interopRequireDefault(_Notification);
	
	var _utils = __webpack_require__(497);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NotificationPanel = function (_React$Component) {
	  _inherits(NotificationPanel, _React$Component);
	
	  function NotificationPanel(props) {
	    _classCallCheck(this, NotificationPanel);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NotificationPanel).call(this, props));
	
	    _this.state = {
	      notifications: [],
	      currentNotifications: [],
	      posY: 0
	    };
	    return _this;
	  }
	
	  _createClass(NotificationPanel, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var posts = nextProps.posts;
	      var currentDate = nextProps.currentDate;
	
	      if (!posts) return;
	
	      var start = void 0;
	      var end = void 0;
	      if (currentDate) {
	        start = new Date(currentDate.getTime() - 0.25 * (1000 * 3600));
	        end = new Date(currentDate.getTime() + 0.25 * (1000 * 3600));
	      }
	
	      var notifications = posts.filter(function (post) {
	        return post.type !== 'image' || post.properties.Make !== 'RICOH';
	      }).sort(function (a, b) {
	        return (0, _utils.parseDate)(a.properties.DateTime).getTime() - (0, _utils.parseDate)(b.properties.DateTime).getTime();
	      });
	
	      var currentNotifications = notifications.filter(function (post) {
	        var d = (0, _utils.parseDate)(post.properties.DateTime);
	        return d.getTime() >= start && d.getTime() < end;
	      });
	
	      this.setState(_extends({}, this.state, {
	        notifications: notifications,
	        currentNotifications: currentNotifications
	      }));
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      var currentProperties = _extends({}, this.props, this.state);
	      var nextProperties = _extends({}, nextProps, nextState);
	      return Object.keys(currentProperties).some(function (p) {
	        if (currentProperties[p] !== nextProperties[p]) {
	          return true;
	        } else {
	          return false;
	        }
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var _this2 = this;
	
	      var _state = this.state;
	      var notifications = _state.notifications;
	      var currentNotifications = _state.currentNotifications;
	      var _props = this.props;
	      var currentDate = _props.currentDate;
	      var playback = _props.playback;
	
	      if (currentNotifications && currentNotifications.length > 0) {
	        currentNotifications.filter(function (notification, i) {
	          return i === 0;
	        }).some(function (notification) {
	          return _this2.setState(_extends({}, _this2.state, {
	            posY: -1 * _reactDom2.default.findDOMNode(_this2).querySelector('div.notification.n' + notification.id).offsetTop
	          }));
	        });
	      } else {
	        var forward = playback === 'fastForward' || playback === 'forward' || playback === 'pause';
	        if (forward) {
	          for (var i = 0; i < notifications.length; i++) {
	            var notification = notifications[i];
	            var d = (0, _utils.parseDate)(notification.properties.DateTime);
	            if (d.getTime() > currentDate.getTime()) {
	              return this.setState(_extends({}, this.state, {
	                posY: -1 * _reactDom2.default.findDOMNode(this).querySelector('div.notification.n' + notification.id).offsetTop
	              }));
	            }
	          }
	        } else {
	          for (var _i = notifications.length - 1; _i >= 0; _i--) {
	            var _notification = notifications[_i];
	            var _d = (0, _utils.parseDate)(_notification.properties.DateTime);
	            if (_d.getTime() < currentDate.getTime()) {
	              return this.setState(_extends({}, this.state, {
	                posY: -1 * _reactDom2.default.findDOMNode(this).querySelector('div.notification.n' + _notification.id).offsetTop
	              }));
	            }
	          }
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state2 = this.state;
	      var notifications = _state2.notifications;
	      var currentNotifications = _state2.currentNotifications;
	
	
	      var notificationItems = notifications.filter(function (post, i) {
	        return window.innerWidth > 768 || currentNotifications.indexOf(post) === currentNotifications.length - 1;
	      }).map(function (post, i) {
	        var active = currentNotifications.indexOf(post) > -1;
	        switch (post.type) {
	          case 'tweet':
	            var text = post.properties.Text;
	            text = text.split(' ').slice(0, text.split(' ').length - 1).join(' ');
	            if (post.properties.Tweet) text = post.properties.Tweet.text;
	            var images = post.properties.Images.filter(function (img, j) {
	              return j === 0;
	            }).map(function (img, j) {
	              return _react2.default.createElement('img', { src: active ? img.Url.replace('http://', 'https://') : '#', width: '100%', key: j });
	            });
	            return _react2.default.createElement(
	              _Notification2.default,
	              {
	                type: post.type,
	                key: post.id,
	                active: active,
	                id: post.id
	              },
	              _react2.default.createElement(
	                'p',
	                { style: { position: window.innerWidth > 768 || post.properties.Images.length === 0 ? 'relative' : 'absolute' } },
	                text
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'images' },
	                images
	              )
	            );
	          case 'audio':
	            return _react2.default.createElement(
	              _Notification2.default,
	              {
	                type: post.type,
	                key: post.id,
	                id: post.id,
	                active: active
	              },
	              _react2.default.createElement(
	                'div',
	                { className: 'title' },
	                post.properties.Title
	              )
	            );
	          case 'blog':
	            return _react2.default.createElement(
	              _Notification2.default,
	              {
	                type: post.type,
	                key: post.id,
	                id: post.id,
	                active: active
	              },
	              _react2.default.createElement(
	                'div',
	                { className: 'title' },
	                post.properties.Title
	              )
	            );
	          case 'image':
	            var width = 0;
	            var height = 0;
	            if (post.properties.Dimensions) {
	              width = post.properties.Dimensions[0];
	              height = post.properties.Dimensions[1];
	            } else if (post.properties.Size) {
	              width = post.properties.Size[0];
	              height = post.properties.Size[1];
	            }
	            return _react2.default.createElement(
	              _Notification2.default,
	              {
	                type: post.type,
	                key: post.id,
	                id: post.id,
	                active: currentNotifications.indexOf(post) > -1
	              },
	              _react2.default.createElement('img', { className: 'image', src: active ? post.properties.Url.replace('http://', 'https://') : '#', width: width, height: height })
	            );
	        }
	      });
	
	      var height = window.innerWidth > 768 ? { height: window.innerHeight - 110 } : {};
	
	      return _react2.default.createElement(
	        'div',
	        { id: 'notificationPanel', style: height },
	        _react2.default.createElement(
	          'div',
	          {
	            className: 'scrollableContainer',
	            style: {
	              top: this.state.posY
	            }
	          },
	          notificationItems
	        )
	      );
	    }
	  }]);
	
	  return NotificationPanel;
	}(_react2.default.Component);
	
	NotificationPanel.propTypes = {
	  posts: _react.PropTypes.array,
	  currentDate: _react.PropTypes.object,
	  playback: _react.PropTypes.string
	};
	
	exports.default = NotificationPanel;

/***/ },

/***/ 1038:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Notification = function Notification(_ref) {
	  var children = _ref.children;
	  var type = _ref.type;
	  var active = _ref.active;
	  var id = _ref.id;
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'notification n' + id + (active ? '' : ' inactive') },
	    _react2.default.createElement(
	      'div',
	      { className: 'content' },
	      children
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'type' },
	      _react2.default.createElement('img', { width: '16', height: '16', src: 'static/img/icon-' + type + '.png' })
	    )
	  );
	};
	
	Notification.propTypes = {
	  children: _react.PropTypes.node.isRequired,
	  type: _react.PropTypes.string.isRequired,
	  active: _react.PropTypes.bool,
	  id: _react.PropTypes.string.isRequired
	};
	
	exports.default = Notification;

/***/ },

/***/ 1039:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(483);
	
	var _ControlPanel = __webpack_require__(1040);
	
	var _ControlPanel2 = _interopRequireDefault(_ControlPanel);
	
	var _actions = __webpack_require__(493);
	
	var actions = _interopRequireWildcard(_actions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  var props = {
	    currentPage: state.currentPage,
	    expeditionID: state.selectedExpedition,
	    expeditions: state.expeditions
	  };
	
	  var expedition = state.expeditions[state.selectedExpedition];
	  if (props.expeditionID) {
	    props.currentDate = expedition.currentDate;
	    props.playback = expedition.playback;
	    props.mainFocus = expedition.mainFocus;
	    props.secondaryFocus = expedition.secondaryFocus;
	    props.zoom = expedition.zoom;
	    props.layout = expedition.layout;
	    props.viewport = {
	      width: window.innerWidth,
	      height: window.innerHeight,
	      longitude: expedition.coordinates[0],
	      latitude: expedition.coordinates[1],
	      zoom: expedition.zoom
	    };
	  }
	
	  return props;
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    onYearChange: function onYearChange(value) {
	      return dispatch(actions.setExpedition(value));
	    },
	    onPlaybackChange: function onPlaybackChange(value) {
	      return dispatch(actions.setControl('playback', value));
	    },
	    onMainFocusChange: function onMainFocusChange(value) {
	      return dispatch(actions.setControl('mainFocus', value));
	    },
	    onSecondaryFocusChange: function onSecondaryFocusChange(value) {
	      return dispatch(actions.setControl('secondaryFocus', value));
	    },
	    onZoomChange: function onZoomChange(value) {
	      return dispatch(actions.setControl('zoom', value));
	    },
	    onLayoutChange: function onLayoutChange(value) {
	      return dispatch(actions.setControl('layout', value));
	    }
	  };
	};
	
	var ControlPanelContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ControlPanel2.default);
	
	exports.default = ControlPanelContainer;

/***/ },

/***/ 1040:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _YearSelector = __webpack_require__(1041);
	
	var _YearSelector2 = _interopRequireDefault(_YearSelector);
	
	var _DateSelector = __webpack_require__(1042);
	
	var _DateSelector2 = _interopRequireDefault(_DateSelector);
	
	var _PlaybackSelector = __webpack_require__(1043);
	
	var _PlaybackSelector2 = _interopRequireDefault(_PlaybackSelector);
	
	var _FocusSelector = __webpack_require__(1044);
	
	var _FocusSelector2 = _interopRequireDefault(_FocusSelector);
	
	var _ZoomSelector = __webpack_require__(1045);
	
	var _ZoomSelector2 = _interopRequireDefault(_ZoomSelector);
	
	var _LayoutSelector = __webpack_require__(1046);
	
	var _LayoutSelector2 = _interopRequireDefault(_LayoutSelector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ControlPanel = function ControlPanel(_ref) {
	  var pathName = _ref.pathName;
	  var expeditionID = _ref.expeditionID;
	  var expeditions = _ref.expeditions;
	  var currentDate = _ref.currentDate;
	  var playback = _ref.playback;
	  var mainFocus = _ref.mainFocus;
	  var secondaryFocus = _ref.secondaryFocus;
	  var zoom = _ref.zoom;
	  var layout = _ref.layout;
	  var onYearChange = _ref.onYearChange;
	  var onPlaybackChange = _ref.onPlaybackChange;
	  var onMainFocusChange = _ref.onMainFocusChange;
	  var onSecondaryFocusChange = _ref.onSecondaryFocusChange;
	  var onZoomChange = _ref.onZoomChange;
	  var onLayoutChange = _ref.onLayoutChange;
	  var viewport = _ref.viewport;
	
	  if (!expeditionID) return _react2.default.createElement('div', { className: 'controlPanel' });
	
	  if (pathName === '/') pathName = '/map';
	
	  // {pathName === '/map' ? <FocusSelector mainFocus={mainFocus} secondaryFocus={secondaryFocus} onMainFocusChange={onMainFocusChange} onSecondaryFocusChange={onSecondaryFocusChange}/> : null}
	  // {pathName === '/journal' ? <LayoutSelector mode={layout} onLayoutChange={onLayoutChange}/> : null}
	  // <YearSelector expeditions={expeditions} expeditionID={expeditionID} onYearChange={onYearChange}/>
	  return _react2.default.createElement(
	    'div',
	    { className: 'controlPanel' },
	    _react2.default.createElement(_DateSelector2.default, { expeditions: expeditions, expeditionID: expeditionID, currentDate: currentDate }),
	    pathName === '/map' ? _react2.default.createElement(_PlaybackSelector2.default, { mode: playback, onPlaybackChange: onPlaybackChange }) : null,
	    pathName === '/map' && window.innerWidth > 768 ? _react2.default.createElement(_ZoomSelector2.default, { onZoomChange: onZoomChange, viewport: viewport }) : null
	  );
	};
	
	ControlPanel.propTypes = {
	  pathName: _react.PropTypes.string.isRequired,
	  expeditionID: _react.PropTypes.string,
	  expeditions: _react.PropTypes.object,
	  currentDate: _react.PropTypes.object,
	  playback: _react.PropTypes.string,
	  mainFocus: _react.PropTypes.string,
	  secondaryFocus: _react.PropTypes.string,
	  zoom: _react.PropTypes.number,
	  layout: _react.PropTypes.string,
	  onYearChange: _react.PropTypes.func.isRequired,
	  onPlaybackChange: _react.PropTypes.func.isRequired,
	  onMainFocusChange: _react.PropTypes.func.isRequired,
	  onSecondaryFocusChange: _react.PropTypes.func.isRequired,
	  onZoomChange: _react.PropTypes.func.isRequired,
	  onLayoutChange: _react.PropTypes.func.isRequired,
	  viewPort: _react.PropTypes.object
	};
	
	exports.default = ControlPanel;

/***/ },

/***/ 1041:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var YearSelector = function YearSelector(_ref) {
	  var expeditionID = _ref.expeditionID;
	  var expeditions = _ref.expeditions;
	  var onYearChange = _ref.onYearChange;
	
	  var toggleDropdown = function toggleDropdown() {
	    document.getElementById('YearSelectorDropdown').classList.toggle('show');
	  };
	
	  var currentExpeditionName = expeditions[expeditionID].name;
	  var expeditionList = Object.keys(expeditions).sort(function (a, b) {
	    return expeditions[b].end.getTime() - expeditions[a].end.getTime();
	  }).map(function (k, i) {
	    var expedition = expeditions[k];
	    return _react2.default.createElement(
	      'a',
	      { href: '#', onClick: function onClick() {
	          return onYearChange(k);
	        }, key: i },
	      expedition.name
	    );
	  });
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'dropdown yearSelector controlSelector' },
	    _react2.default.createElement(
	      'button',
	      { onClick: toggleDropdown, className: 'dropbtn' },
	      currentExpeditionName,
	      _react2.default.createElement('span', null)
	    ),
	    _react2.default.createElement(
	      'div',
	      { id: 'YearSelectorDropdown', className: 'dropdown-content' },
	      expeditionList
	    )
	  );
	};
	
	YearSelector.propTypes = {
	  onYearChange: _react.PropTypes.func.isRequired,
	  expeditionID: _react.PropTypes.string.isRequired,
	  expeditions: _react.PropTypes.object.isRequired
	};
	
	exports.default = YearSelector;

/***/ },

/***/ 1042:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(497);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DateSelector = function DateSelector(_ref) {
	  var expeditions = _ref.expeditions;
	  var expeditionID = _ref.expeditionID;
	  var currentDate = _ref.currentDate;
	
	  var expedition = expeditions[expeditionID];
	  var dayCount = Math.floor((currentDate.getTime() - expedition.start.getTime()) / (1000 * 3600 * 24));
	  var dateString = (0, _utils.dateToString)(currentDate);
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'dateSelector controlSelector' },
	    _react2.default.createElement(
	      'p',
	      null,
	      'DAY ',
	      dayCount,
	      _react2.default.createElement('br', null),
	      dateString
	    )
	  );
	};
	
	DateSelector.propTypes = {
	  expeditions: _react.PropTypes.object.isRequired,
	  expeditionID: _react.PropTypes.string.isRequired,
	  currentDate: _react.PropTypes.object.isRequired
	};
	
	exports.default = DateSelector;

/***/ },

/***/ 1043:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _desc, _value, _class;
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _autobindDecorator = __webpack_require__(564);
	
	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;
	
	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }
	
	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);
	
	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }
	
	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }
	
	  return desc;
	}
	
	var PlaybackSelector = (_class = function (_React$Component) {
	  _inherits(PlaybackSelector, _React$Component);
	
	  function PlaybackSelector(props) {
	    _classCallCheck(this, PlaybackSelector);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlaybackSelector).call(this, props));
	
	    _this.state = {
	      mouseOver: ''
	    };
	    return _this;
	  }
	
	  _createClass(PlaybackSelector, [{
	    key: 'onMouseMove',
	    value: function onMouseMove(e) {
	      this.setState(_extends({}, this.state, {
	        mouseOver: e.nativeEvent.target.className
	      }));
	    }
	  }, {
	    key: 'onMouseOut',
	    value: function onMouseOut(e) {
	      this.setState(_extends({}, this.state, {
	        mouseOver: ''
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var mode = _props.mode;
	      var onPlaybackChange = _props.onPlaybackChange;
	      var mouseOver = this.state.mouseOver;
	
	      var onMouseMove = this.onMouseMove;
	      var types = ['fastBackward', 'backward', 'pause', 'forward', 'fastForward'];
	      var buttons = types.map(function (s, i) {
	        var className = 'playbackButton ' + (s === mode ? 'active' : 'inactive');
	
	        var src = function src() {
	          var url = '/static/img/icon-' + s;
	          if (s === mode || mouseOver === s) url += '-hover';
	          return url + '.png';
	        };
	
	        return _react2.default.createElement(
	          'li',
	          { className: className, key: i, onClick: function onClick() {
	              return onPlaybackChange(s);
	            }, onMouseMove: onMouseMove },
	          _react2.default.createElement('img', { className: s, width: '16', height: '16', src: src() })
	        );
	      });
	      return _react2.default.createElement(
	        'ul',
	        { className: 'playbackSelector buttonRow controlSelector', onMouseOut: this.onMouseOut },
	        buttons
	      );
	    }
	  }]);
	
	  return PlaybackSelector;
	}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'onMouseMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onMouseOut', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onMouseOut'), _class.prototype)), _class);
	
	
	PlaybackSelector.propTypes = {
	  mode: _react.PropTypes.string.isRequired,
	  onPlaybackChange: _react.PropTypes.func.isRequired
	};
	
	exports.default = PlaybackSelector;

/***/ },

/***/ 1044:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FocusSelector = function FocusSelector(_ref) {
	  var mainFocus = _ref.mainFocus;
	  var secondaryFocus = _ref.secondaryFocus;
	  var onMainFocusChange = _ref.onMainFocusChange;
	  var onSecondaryFocusChange = _ref.onSecondaryFocusChange;
	
	
	  var toggleDropdown = function toggleDropdown(i) {
	    document.getElementById("FocusSelector" + i + "Options").classList.toggle("show");
	  };
	
	  return _react2.default.createElement(
	    "div",
	    { className: "focusSelector controlSelector" },
	    _react2.default.createElement(
	      "p",
	      null,
	      "Focus on:"
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "dropdown" },
	      _react2.default.createElement(
	        "button",
	        { onClick: function onClick() {
	            return toggleDropdown(1);
	          }, className: "dropbtn" },
	        mainFocus
	      ),
	      _react2.default.createElement(
	        "div",
	        { id: "FocusSelector1Options", className: "dropdown-content" },
	        _react2.default.createElement(
	          "a",
	          { href: "#", onClick: function onClick() {
	              return onMainFocusChange("explorers");
	            } },
	          "Explorers"
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#", onClick: function onClick() {
	              return onMainFocusChange("sensors");
	            } },
	          "Sensors"
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#", onClick: function onClick() {
	              return onMainFocusChange("animals");
	            } },
	          "Animals"
	        )
	      )
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "dropdown" },
	      _react2.default.createElement(
	        "button",
	        { onClick: function onClick() {
	            return toggleDropdown(2);
	          }, className: "dropbtn" },
	        secondaryFocus
	      ),
	      _react2.default.createElement(
	        "div",
	        { id: "FocusSelector2Options", className: "dropdown-content" },
	        _react2.default.createElement(
	          "a",
	          { href: "#", onClick: function onClick() {
	              return onSecondaryFocusChange("steve");
	            } },
	          "Steve"
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#", onClick: function onClick() {
	              return onSecondaryFocusChange("jer");
	            } },
	          "Jer"
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#", onClick: function onClick() {
	              return onSecondaryFocusChange("shah");
	            } },
	          "Shah"
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#", onClick: function onClick() {
	              return onSecondaryFocusChange("chris");
	            } },
	          "Chris"
	        )
	      )
	    )
	  );
	};
	
	FocusSelector.propTypes = {
	  mainFocus: _react.PropTypes.string.isRequired,
	  secondaryFocus: _react.PropTypes.string.isRequired,
	  onMainFocusChange: _react.PropTypes.func.isRequired,
	  onSecondaryFocusChange: _react.PropTypes.func.isRequired
	};
	
	exports.default = FocusSelector;

/***/ },

/***/ 1045:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _viewportMercatorProject = __webpack_require__(565);
	
	var _viewportMercatorProject2 = _interopRequireDefault(_viewportMercatorProject);
	
	var _autobindDecorator = __webpack_require__(564);
	
	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ZoomSelector = function (_React$Component) {
	  _inherits(ZoomSelector, _React$Component);
	
	  function ZoomSelector(props) {
	    _classCallCheck(this, ZoomSelector);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ZoomSelector).call(this, props));
	
	    _this.state = {
	      mouseOver: ''
	    };
	    return _this;
	  }
	
	  // @autobind
	  // onMouseMove (e) {
	  //   this.setState({
	  //     ...this.state,
	  //     mouseOver: e.nativeEvent.target.className
	  //   })
	  // }
	
	  // @autobind
	  // onMouseOut (e) {
	  //   this.setState({
	  //     ...this.state,
	  //     mouseOver: ''
	  //   })
	  // }
	
	  // componentWillReceiveProps (nextProps) {
	
	  // }
	
	  _createClass(ZoomSelector, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var onZoomChange = _props.onZoomChange;
	      var viewport = _props.viewport;
	
	      var onMouseMove = this.onMouseMove;
	      var mouseOver = this.state.mouseOver;
	
	      var types = ['decrement', 'increment'];
	
	      var buttons = types.map(function (s, i) {
	        var src = function src() {
	          var url = '/static/img/icon-' + s;
	          if (mouseOver === s) url += '-hover';
	          return url + '.png';
	        };
	        return _react2.default.createElement(
	          'li',
	          { className: 'zoomButton', key: i, onClick: function onClick() {
	              onZoomChange(s);
	            } },
	          _react2.default.createElement('img', { className: s, width: '16', height: '16', src: src() })
	        );
	      });
	
	      var _ViewportMercator = (0, _viewportMercatorProject2.default)(_extends({}, viewport));
	
	      var unproject = _ViewportMercator.unproject;
	
	      var scaleRange = (unproject([64, 0])[0] - unproject([0, 0])[0]) * 111;
	      var scaleString = Math.round(scaleRange) + 'km';
	      if (scaleRange < 1) scaleString = Math.round(scaleRange * 1000) + 'm';
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'selector controlSelector' },
	        _react2.default.createElement(
	          'div',
	          { className: 'column' },
	          _react2.default.createElement(
	            'ul',
	            { className: 'buttonRow' },
	            buttons
	          )
	        ),
	        _react2.default.createElement(
	          'svg',
	          { className: 'column' },
	          _react2.default.createElement('line', { x1: 0, y1: 17.5, x2: 12, y2: 17.5, stroke: 'white' }),
	          _react2.default.createElement('line', { x1: 52, y1: 17.5, x2: 64, y2: 17.5, stroke: 'white' }),
	          _react2.default.createElement('line', { x1: 0.5, y1: 12, x2: 0.5, y2: 22, stroke: 'white' }),
	          _react2.default.createElement('line', { x1: 63.5, y1: 12, x2: 63.5, y2: 22, stroke: 'white' }),
	          _react2.default.createElement(
	            'text',
	            { x: 32, y: 18, fill: 'white', style: {
	                fontSize: '12px',
	                alignmentBaseline: 'middle',
	                textAnchor: 'middle'
	              } },
	            scaleString
	          )
	        )
	      );
	    }
	  }]);
	
	  return ZoomSelector;
	}(_react2.default.Component);
	
	ZoomSelector.propTypes = {
	  onZoomChange: _react.PropTypes.func.isRequired,
	  viewPort: _react.PropTypes.object
	};
	
	exports.default = ZoomSelector;

/***/ },

/***/ 1046:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LayoutSelector = function LayoutSelector(_ref) {
	  var mode = _ref.mode;
	  var onLayoutChange = _ref.onLayoutChange;
	
	  var types = ['rows', 'grid'];
	
	  var buttons = types.map(function (s, i) {
	
	    var className = 'layoutButton ' + (s === mode ? 'active' : 'inactive');
	
	    return _react2.default.createElement(
	      'li',
	      { className: className, key: i, onClick: function onClick() {
	          return onLayoutChange(s);
	        } },
	      _react2.default.createElement('img', { width: '16', height: '16' })
	    );
	  });
	  return _react2.default.createElement(
	    'div',
	    { className: 'selector' },
	    _react2.default.createElement(
	      'div',
	      { className: 'column' },
	      _react2.default.createElement(
	        'ul',
	        { className: 'buttonRow' },
	        buttons
	      )
	    )
	  );
	};
	
	LayoutSelector.propTypes = {
	  onLayoutChange: _react.PropTypes.func.isRequired,
	  mode: _react.PropTypes.string.isRequired
	};
	
	exports.default = LayoutSelector;

/***/ },

/***/ 1047:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(483);
	
	var _JournalPage = __webpack_require__(1048);
	
	var _JournalPage2 = _interopRequireDefault(_JournalPage);
	
	var _actions = __webpack_require__(493);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _d = __webpack_require__(496);
	
	var d3 = _interopRequireWildcard(_d);
	
	var _utils = __webpack_require__(497);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  var expeditionID = state.selectedExpedition;
	  var expedition = state.expeditions[expeditionID];
	  if (!expedition) return { posts: [] };
	
	  return {
	    expedition: expedition,
	    posts: d3.values(expedition.features).map(function (p) {
	      var key = p.id;
	      var type = p.properties.FeatureType;
	      var date = (0, _utils.parseDate)(p.properties.DateTime);
	      var location = p.geometry.coordinates;
	      var author = p.properties.Member;
	      var title, content, images, link, dimensions;
	
	      if (type === 'tweet') {
	        if (expeditionID !== 'okavango_14') {
	          content = p.properties.Text;
	          images = p.properties.Images.map(function (i) {
	            return i.Url.replace('http://', 'https://');
	          });
	          link = p.properties.Url.replace('http://', 'https://');
	        } else {
	          content = p.properties.Tweet.text;
	        }
	      }
	
	      if (type === 'image') {
	        if (p.properties.Make === 'RICOH') {
	          type = '360Image';
	        } else if (expeditionID !== 'okavango_14') {
	          content = p.properties.Notes;
	          images = [p.properties.Url.replace('http://', 'https://')];
	          link = p.properties.InstagramID;
	          dimensions = p.properties.Dimensions;
	        } else {
	          content = p.properties.Notes;
	          images = [p.properties.Url.replace('http://', 'https://')];
	          link = p.properties.InstagramID;
	          dimensions = p.properties.Size;
	        }
	      }
	
	      if (type === 'blog') {
	        title = p.properties.Title;
	        content = p.properties.Summary;
	        link = p.properties.Url.replace('http://', 'https://');
	      }
	
	      if (type === 'audio') {
	        title = p.properties.Title;
	        link = p.properties.SoundCloudURL.replace('http://', 'https://');
	      }
	
	      return {
	        key: key,
	        type: type,
	        title: title,
	        content: content,
	        images: images,
	        link: link,
	        date: date,
	        location: location,
	        author: author,
	        dimensions: dimensions
	      };
	    })
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  return {
	    checkFeedContent: function checkFeedContent() {
	      return dispatch(actions.checkFeedContent());
	    }
	  };
	};
	
	var JournalPageContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_JournalPage2.default);
	
	exports.default = JournalPageContainer;

/***/ },

/***/ 1048:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Feed = __webpack_require__(1049);
	
	var _Feed2 = _interopRequireDefault(_Feed);
	
	var _ControlPanelContainer = __webpack_require__(1039);
	
	var _ControlPanelContainer2 = _interopRequireDefault(_ControlPanelContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import autobind from 'autobind-decorator'
	
	var JournalPage = function (_React$Component) {
	  _inherits(JournalPage, _React$Component);
	
	  function JournalPage() {
	    _classCallCheck(this, JournalPage);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(JournalPage).apply(this, arguments));
	  }
	
	  _createClass(JournalPage, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var posts = _props.posts;
	      var checkFeedContent = _props.checkFeedContent;
	      var expedition = _props.expedition;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'page', id: 'journalPage' },
	        _react2.default.createElement(_ControlPanelContainer2.default, { pathName: location.pathname }),
	        _react2.default.createElement(_Feed2.default, { posts: posts, checkFeedContent: checkFeedContent, expedition: expedition })
	      );
	    }
	  }]);
	
	  return JournalPage;
	}(_react2.default.Component);
	
	JournalPage.propTypes = {
	  posts: _react.PropTypes.array.isRequired,
	  expedition: _react.PropTypes.object,
	  checkFeedContent: _react.PropTypes.func.isRequired
	};
	
	exports.default = JournalPage;

/***/ },

/***/ 1049:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Post = __webpack_require__(1022);
	
	var _Post2 = _interopRequireDefault(_Post);
	
	var _d = __webpack_require__(496);
	
	var d3 = _interopRequireWildcard(_d);
	
	var _autobindDecorator = __webpack_require__(564);
	
	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Feed = function (_React$Component) {
	  _inherits(Feed, _React$Component);
	
	  function Feed(props) {
	    _classCallCheck(this, Feed);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Feed).call(this, props));
	  }
	
	  _createClass(Feed, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var posts = _props.posts;
	      var checkFeedContent = _props.checkFeedContent;
	
	
	      var format = 'full';
	      var postFeed = posts.slice(0).sort(function (a, b) {
	        return b.date - a.date;
	      }).map(function (post) {
	        if (post.type === '360Image') return null;
	
	        return _react2.default.createElement(
	          _Post2.default,
	          { format: format, data: post, key: post.key },
	          post.content
	        );
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { id: 'feed', onWheel: checkFeedContent },
	        postFeed
	      );
	    }
	  }]);
	
	  return Feed;
	}(_react2.default.Component);
	
	Feed.propTypes = {
	  posts: _react.PropTypes.array.isRequired,
	  expedition: _react.PropTypes.object,
	  checkFeedContent: _react.PropTypes.func.isRequired
	};
	
	exports.default = Feed;

/***/ },

/***/ 1050:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DataPageIndex = __webpack_require__(1051);
	
	var _DataPageIndex2 = _interopRequireDefault(_DataPageIndex);
	
	var _APIExplorer = __webpack_require__(1052);
	
	var _APIExplorer2 = _interopRequireDefault(_APIExplorer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DataPage = function DataPage() {
	
	  var sections = [{ 'key': 1, 'title': 'Overview', 'content': _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'p',
	        null,
	        'The Okavango Database is a growing record of data generated by the explorers and scientists on their 120 day expedition to the Okavango Delta. The database encompasses ',
	        _react2.default.createElement(
	          'em',
	          null,
	          'wildlife sightings, tweets, audio recordings'
	        ),
	        ' and ',
	        _react2.default.createElement(
	          'em',
	          null,
	          'images'
	        ),
	        ' taken by the participants, as well as ',
	        _react2.default.createElement(
	          'em',
	          null,
	          'sensor measurements'
	        ),
	        ' capturing things like ',
	        _react2.default.createElement(
	          'em',
	          null,
	          'temperature, pH levels, and heart rates'
	        ),
	        '.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'The intention of the Okavango Database API is to share the data in almost real-time as it’s uploaded, so that people all over the world can follow the journey as it unfolds. It also allows for others to use the data for their own purposes. Below are examples of cool things people have build with our API.'
	      )
	    )
	  }, { 'key': 2, 'title': 'Explore', 'content': _react2.default.createElement(_APIExplorer2.default, null)
	  }, { 'key': 3, 'title': 'Documentation', 'content': _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h3',
	        null,
	        'What is an API?'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'API stands for application programming interface, which usually involves a set of processes and commands that make it convenient for people to access computer code or information that someone has already produced. For instance, if you want to make your own app post a message to Facebook, you would probably use Facebook’s API to integrate your app with theirs.'
	      ),
	      _react2.default.createElement(
	        'h3',
	        null,
	        'What is a Database?'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'A database is an organized collection of data. For the Okavango Wildlife Database, each type of data — a wildlife sighting, image, sensor reading or audio recording, to name a few — is uploaded to an online server via satellite. As the expedition unfolds, the database will grow, holding more and more records of what the explorers and scientists have witnessed on the trip.'
	      ),
	      _react2.default.createElement(
	        'h3',
	        null,
	        'What is a Database API?'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'The Okavango Database API is the interface that allows you to ask the database to show you what’s inside. Usually, API’s are software-to-software interfaces that aren’t that easy for humans to understand. To ask the database to give you data back, you make a specific query in the form of a URL. The database is able to parse and recognize this request, and returns the data to you in some kind of structured way, like an XML or JSON file. In our case, the Okavango Database returns information in JSON (Javascript Object Notation).'
	      ),
	      _react2.default.createElement(
	        'h3',
	        null,
	        'Calling the API'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'Basically, it\'s like this: ',
	        _react2.default.createElement(
	          'code',
	          null,
	          '/api/<view>/<output>?<query>'
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'The view is what kind of thing you want back. The core of the API lies in the features view, but you can also view expeditions, members and species as general lists.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'The output returns the data as JSON if nothing is specified, otherwise you can specify ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'map'
	        ),
	        ' to see the data plotted spatially or ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'viz'
	        ),
	        ' for a graph.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'The query defines the filter (ex: ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'FeatureType=sighting'
	        ),
	        '). Multiple filters are appended with ',
	        _react2.default.createElement(
	          'code',
	          null,
	          '&'
	        ),
	        ' in between.'
	      ),
	      _react2.default.createElement(
	        'h3',
	        null,
	        'API Endpoints'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'The following list outlines all possible methods for accessing features in the Okavango Database. These methods are also known as endpoints, and are requested with a URL. For example, to load all of the elephant sightings (limited to the first 100 by default), you would request: ',
	        _react2.default.createElement(
	          'code',
	          null,
	          _react2.default.createElement(
	            'a',
	            { href: 'http://intotheokavango.org/api/features?FeatureType=sighting&SpeciesName=Elephant', target: '_blank' },
	            'http://intotheokavango.org/api/features?FeatureType=sighting&SpeciesName=Elephant'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'The Elephant sightings could be filtered further, by the expedition member who saw them, geographic region, or day of expedition, for example. Each API endpoint call contains the following general information:'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'limit:'
	        ),
	        ' the amount of entries returned. The default limit is 100, but this can be changed (ex: ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'limit=30'
	        ),
	        '). Larger limits tax the database, so it is recommended to keep your limit request as small as possible.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'resolution:'
	        ),
	        ' returns a feature for every ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'resolution'
	        ),
	        ' seconds. This might be useful if you want a larger sample set or time period, but don’t want to overload a graph with every single data point. ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'full'
	        ),
	        ' returns all features.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'filter:'
	        ),
	        ' feature endpoints can be filtered by member, expedition, as well as general filters like ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'limit, resolution,'
	        ),
	        ' and ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'order.'
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'returned:'
	        ),
	        ' the amount of entries returned (this usually correlates to limit, but may be less than the limit indicated if there are fewer results in the database).'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'order:'
	        ),
	        ' results are returned by default in ascending order (indicated by setting ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'order'
	        ),
	        ' to ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'ascending'
	        ),
	        ' or ',
	        _react2.default.createElement(
	          'code',
	          null,
	          '1'
	        ),
	        '), or descending order (indicated by setting ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'order'
	        ),
	        ' to ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'descending'
	        ),
	        ' or ',
	        _react2.default.createElement(
	          'code',
	          null,
	          '-1'
	        ),
	        ').'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'total:'
	        ),
	        ' indicates the total amount of matching results for the query in the database, even if the amount returned is limited.'
	      ),
	      _react2.default.createElement(
	        'h4',
	        null,
	        'Additional Filters:'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'startDate:'
	        ),
	        ' specifies the starting date of the features to be returned. May be combined with ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'endDate.'
	        ),
	        ' Format is ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'yyyy-mm-dd'
	        ),
	        ' (ex: ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'startDate=2015-06-03'
	        ),
	        ').'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'endDate:'
	        ),
	        ' specifies the ending date of the features to be returned. May be combined with ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'startDate.'
	        ),
	        ' Format is ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'yyyy-mm-dd'
	        ),
	        ' (ex: ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'endDate=2015-06-03'
	        ),
	        ').'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'geoBounds:'
	        ),
	        ' upper left (NW), lower right (SE): lon_1,lat_1,lon_2,lat_2. So the Okavango Delta is something like ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'geoBounds=20,-17,26,-22'
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'expeditionDay:'
	        ),
	        ' returns data from a specific day of the expedition (ex: ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'expeditionDay=1'
	        ),
	        ')'
	      ),
	      _react2.default.createElement(
	        'h4',
	        null,
	        'View Endpoints:'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'These endpoints offer overviews of all the members, expeditions and species that could be used to further filter features in the database.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'members:'
	        ),
	        ' reveals an array of features associated with each member. Endpoint url: ',
	        _react2.default.createElement(
	          'code',
	          null,
	          _react2.default.createElement(
	            'a',
	            { href: 'http://intotheokavango.org/api/members', target: '_blank' },
	            'http://intotheokavango.org/api/members'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'expeditions:'
	        ),
	        ' reveals all of the expeditions to the Okavango Delta, along with start date and duration. Endpoint url: ',
	        _react2.default.createElement(
	          'code',
	          null,
	          _react2.default.createElement(
	            'a',
	            { href: 'http://intotheokavango.org/api/expeditions', target: '_blank' },
	            'http://intotheokavango.org/api/expeditions'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'species:'
	        ),
	        ' reveals all of the species sightings on the expeditions. Endpoint url: ',
	        _react2.default.createElement(
	          'code',
	          null,
	          _react2.default.createElement(
	            'a',
	            { href: 'http://intotheokavango.org/api/species', target: '_blank' },
	            'http://intotheokavango.org/api/species'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'h4',
	        null,
	        'Features Endpoints:'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'If you try to call the features view, the format looks quite different from the other view endpoints. This is because the Features view contains the bulk of what’s in the database, and is the main collection to be searched and filtered.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'The primary way to filter the features is by ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'FeatureType'
	        ),
	        ' (ex: ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'FeatureType=ambit'
	        ),
	        ').'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        'Here is a list of the possible FeatureTypes, and the data they contain: '
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'ambit:'
	        ),
	        ' contains heart rate and other activity data captured from ambit watches worn by certain explorers.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'ambit_geo:'
	        ),
	        ' contains geolocation data from the ambit watches.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'audio:'
	        ),
	        ' audio recordings taken in the field.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'beacon:'
	        ),
	        ' geolocation data sent by beacons every 30 minutes.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'image:'
	        ),
	        ' all images uploaded to the database. These can be filtered further by ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'ImageType: GoPro, Documentary'
	        ),
	        ' or ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'Specimen.'
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'sensor:'
	        ),
	        ' sensor readings taken by environmental sensors attached to the expedition boat. Data includes temperature, pH levels and other environmental readings.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'sighting:'
	        ),
	        ' all species sightings on the expedition. You can further filter by ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'SpeciesName'
	        ),
	        ' (ex: ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'SpeciesName=Elephant'
	        ),
	        '). The results return a timestamped geolocated point, with a ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'Count'
	        ),
	        ' of how many species were sighted, as well as images if they were taken. A ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'Taxonomy'
	        ),
	        ' object returns the scientific name, and a ',
	        _react2.default.createElement(
	          'code',
	          null,
	          'Notes'
	        ),
	        ' field records a description uploaded with the sighting.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'tweet:'
	        ),
	        ' a list of all tweets with the hashtag #okavango15.'
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(
	          'code',
	          null,
	          'longform:'
	        ),
	        ' returns longform blog entries posted to the okavango collection on ',
	        _react2.default.createElement(
	          'a',
	          { href: 'https://medium.com/tag/okavango15', target: '_blank' },
	          'Medium.'
	        )
	      )
	    )
	  }];
	
	  var index = sections.map(function (section) {
	    return _react2.default.createElement(
	      'h3',
	      { key: section.key },
	      section.key,
	      ' - ',
	      section.title
	    );
	  });
	
	  var content = sections.map(function (section) {
	    return _react2.default.createElement(
	      'div',
	      { key: section.key },
	      _react2.default.createElement(
	        'h2',
	        null,
	        section.key,
	        ' - ',
	        section.title
	      ),
	      section.content
	    );
	  });
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'page', id: 'dataPage' },
	    _react2.default.createElement(
	      _DataPageIndex2.default,
	      null,
	      index
	    ),
	    _react2.default.createElement(
	      'div',
	      { id: 'dataPageContent' },
	      content
	    )
	  );
	};
	
	DataPage.propTypes = {
	  // active: PropTypes.bool.isRequired
	};
	
	exports.default = DataPage;

/***/ },

/***/ 1051:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DataPageIndex = function DataPageIndex(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    "div",
	    { id: "APIIndex" },
	    children
	  );
	};
	
	DataPageIndex.propTypes = {
	  children: _react.PropTypes.node.isRequired
	};
	
	exports.default = DataPageIndex;

/***/ },

/***/ 1052:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var APIExplorer = function APIExplorer() {
	  return _react2.default.createElement(
	    'p',
	    null,
	    'Coming soon...'
	  );
	};
	
	exports.default = APIExplorer;

/***/ },

/***/ 1053:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AboutPage = function AboutPage() {
	  return _react2.default.createElement(
	    'div',
	    { className: 'page', id: 'aboutPage' },
	    _react2.default.createElement(
	      'div',
	      { className: 'pageWrapper' },
	      _react2.default.createElement('iframe', { className: 'vimeo', src: 'https://player.vimeo.com/video/124421450?autoplay=0&api=1', width: window.innerWidth * 0.9, height: window.innerWidth * 0.9 * 0.525, frameBorder: '0', allowFullScreen: true }),
	      _react2.default.createElement(
	        'div',
	        { className: 'columnWrapper' },
	        _react2.default.createElement(
	          'div',
	          { className: 'column headline' },
	          _react2.default.createElement(
	            'p',
	            null,
	            '18 days, 345 kilometers,',
	            _react2.default.createElement('br', null),
	            '1 river, 31 adventurers, 100% open data.',
	            _react2.default.createElement('br', null),
	            'Join us in real-time as we explore'
	          ),
	          _react2.default.createElement(
	            'h1',
	            null,
	            'THE BEATING HEART OF OUR PLANET'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'column' },
	          _react2.default.createElement(
	            'p',
	            null,
	            'The Okavango Delta is one of the world’s last great wetland wildernesses. Although the Delta has been awarded UNESCO WHS Status its catchments in the highlands of Angola are still unprotected and largely unstudied. A team of Ba’Yei, scientists, engineers and adventurers will journey a 345 kilometers crossing the river, finding new species, exploring new ground, and taking the pulse of this mighty river that brings life-giving water to the Jewel of the Kalahari.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'This site displays data which is uploaded daily, via satellite, by the expedition team. Data is also available through a public API, allowing anyone to remix, analyze or visualize the collected information.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'columnWrapper' },
	        _react2.default.createElement(
	          'div',
	          { className: 'column' },
	          _react2.default.createElement(
	            'div',
	            { className: 'goalIcon' },
	            _react2.default.createElement('img', { src: 'static/img/iconIntroUnderstand.png' })
	          ),
	          _react2.default.createElement(
	            'h2',
	            null,
	            'UNDERSTAND',
	            _react2.default.createElement('br', null),
	            'THE WILDERNESS'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'To effectively protect the Okavango and its catchments it is essential to gain knowledge and insight into the functioning of the system as a whole. Starting in 2011 the Okavango Wilderness Project has conducted yearly transects of the Delta, gathering unique data and immersing the expedition members in the ebb and flow of this pristine wilderness. Traveling down the river, the team will collect data on insects, fish, birds, reptiles and mammals, as well as conduct water quality assessments and landscape surveys.'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'column' },
	          _react2.default.createElement(
	            'div',
	            { className: 'goalIcon' },
	            _react2.default.createElement('img', { src: 'static/img/iconIntroPreserve.png' })
	          ),
	          _react2.default.createElement(
	            'h2',
	            null,
	            'RAISE AWARENESS',
	            _react2.default.createElement('br', null),
	            'AND PRESERVE'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Although the Okavango itself is protected as a UNESCO World Heritage Site, its catchment and water supply in Angola and Namibia remain vulnerable to human interference. By gathering and freely disseminating information about the functioning and health of the entire system the 2016 expedition aims to raise the levels of both understanding and awareness of this unique and fragile system.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Once base-line data on the system becomes freely available effective measures can then be implemented to insure the continued health and survival of this great African wilderness.'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'columnWrapper credits' },
	        _react2.default.createElement(
	          'div',
	          { className: 'column' },
	          _react2.default.createElement(
	            'h2',
	            null,
	            'EXPEDITION TEAM',
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              _react2.default.createElement('span', { className: 'explorerBox legend' }),
	              ' National Geographic Emerging Explorers'
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Adjany Costa ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Assistant Director & 2nd Fish'
	            ),
	            _react2.default.createElement('br', null),
	            'Chris Boyes ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Expeditions Leader'
	            ),
	            _react2.default.createElement('br', null),
	            'Gobonamang "GB" Kgetho ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Poler'
	            ),
	            _react2.default.createElement('br', null),
	            'Gotz Neef ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Scienetific Collections & Leader Invertebrates'
	            ),
	            _react2.default.createElement('br', null),
	            'Jer Thorp ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Data'
	            ),
	            _react2.default.createElement('br', null),
	            'John Hilton ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Project Director'
	            ),
	            _react2.default.createElement('br', null),
	            'Kerllen Costa ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Plants & Mammals'
	            ),
	            _react2.default.createElement('br', null),
	            'Kyle Gordon ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Expedition Logistics'
	            ),
	            _react2.default.createElement('br', null),
	            'Leilamang "Schnapps" Kgetho ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Poler'
	            ),
	            _react2.default.createElement('br', null),
	            'Luke Manson ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Expedition Logistics'
	            ),
	            _react2.default.createElement('br', null),
	            'Mia Maestro ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Photographer'
	            ),
	            _react2.default.createElement('br', null),
	            'Motiemang “Judge” Xhikabora ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Poler'
	            ),
	            _react2.default.createElement('br', null),
	            'Neil Gelinas ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Filmmaker'
	            ),
	            _react2.default.createElement('br', null),
	            'Ninda Baptista ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Reptiles'
	            ),
	            _react2.default.createElement('br', null),
	            'Nkeletsang “Ralph” Moshupa ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Poler'
	            ),
	            _react2.default.createElement('br', null),
	            'Rachel Sussman ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Photographer'
	            ),
	            _react2.default.createElement('br', null),
	            'Shah Selbe ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Tech'
	            ),
	            _react2.default.createElement('br', null),
	            'Steve Boyes ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Project Leader & Birds'
	            ),
	            _react2.default.createElement('br', null),
	            'Topho "Tom" Retiyo ',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Poler'
	            ),
	            _react2.default.createElement('br', null),
	            'Tumeleto "Water" Setlabosha',
	            _react2.default.createElement(
	              'span',
	              { className: 'job' },
	              'Poler'
	            ),
	            _react2.default.createElement('br', null)
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'column' },
	          _react2.default.createElement(
	            'div',
	            { className: 'logos' },
	            _react2.default.createElement(
	              'a',
	              { href: 'http://www.nationalgeographic.com/' },
	              _react2.default.createElement('img', { src: 'static/img/natgeoLogo.svg', alt: 'National Geographic Logo', height: '35px' })
	            ),
	            _react2.default.createElement(
	              'a',
	              { href: 'http://conservify.org/' },
	              _react2.default.createElement('img', { src: 'static/img/conservify.png', alt: 'Conservify Logo', height: '35px' })
	            ),
	            _react2.default.createElement(
	              'a',
	              { href: 'http://www.o-c-r.org/' },
	              _react2.default.createElement('img', { src: 'static/img/ocrLogo.svg', alt: 'The Office for Creative Research Logo', height: '35px' })
	            ),
	            _react2.default.createElement(
	              'a',
	              { href: 'http://www.wildbirdtrust.com/' },
	              _react2.default.createElement('img', { src: 'static/img/wbtLogo.png', alt: 'Wild Bird Trust Logo', height: '35px' })
	            )
	          )
	        )
	      )
	    )
	  );
	};
	
	AboutPage.propTypes = {
	  // active: PropTypes.bool.isRequired
	};
	
	exports.default = AboutPage;

/***/ },

/***/ 1054:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SharePage = function SharePage() {
	  return _react2.default.createElement(
	    'div',
	    { className: 'page', id: 'sharePage' },
	    'Share page'
	  );
	};
	
	SharePage.propTypes = {
	  // active: PropTypes.bool.isRequired
	};
	
	exports.default = SharePage;

/***/ }

});