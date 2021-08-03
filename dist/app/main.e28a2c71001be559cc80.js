/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/apps/WeatherForecast/Weather.jsx":
/*!**********************************************!*\
  !*** ./app/apps/WeatherForecast/Weather.jsx ***!
  \**********************************************/
/***/ (() => {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\gensi\\Desktop\\React_Apps\\src\\app\\apps\\WeatherForecast\\Weather.jsx: Unexpected token (27:8)\n\n\u001b[0m \u001b[90m 25 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m     useEffect(() \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 27 |\u001b[39m         \u001b[33m.\u001b[39m\u001b[33m.\u001b[39msetLocation(\u001b[32m'Lviv'\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m         \u001b[36mlet\u001b[39m weatherURL \u001b[33m=\u001b[39m \u001b[32m`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=3ccdcc7d9418e33a6d5833089853f381`\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 29 |\u001b[39m         fetch(weatherURL)\u001b[0m\n\u001b[0m \u001b[90m 30 |\u001b[39m             \u001b[33m.\u001b[39mthen(res \u001b[33m=>\u001b[39m {\u001b[0m\n    at Object._raise (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:788:17)\n    at Object.raiseWithData (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:781:17)\n    at Object.raise (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:742:17)\n    at Object.unexpected (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:9929:16)\n    at Object.parseExprAtom (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:11349:20)\n    at Object.parseExprAtom (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:5222:20)\n    at Object.parseExprSubscripts (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:10914:23)\n    at Object.parseUpdate (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:10894:21)\n    at Object.parseMaybeUnary (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:10872:23)\n    at Object.parseExprOps (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:10733:23)");

/***/ }),

/***/ "./app/apps/WeatherForecast/index.jsx":
/*!********************************************!*\
  !*** ./app/apps/WeatherForecast/index.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var _Weather_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Weather.jsx */ "./app/apps/WeatherForecast/Weather.jsx");
/* harmony import */ var _styles_weather_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/weather-styles.scss */ "./app/apps/WeatherForecast/styles/weather-styles.scss");





function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Weather_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null));
}

react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById('weather-app'));

/***/ }),

/***/ "./app/index.jsx":
/*!***********************!*\
  !*** ./app/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _apps_WeatherForecast_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps/WeatherForecast/index.jsx */ "./app/apps/WeatherForecast/index.jsx");



/***/ }),

/***/ "./app/apps/WeatherForecast/styles/weather-styles.scss":
/*!*************************************************************!*\
  !*** ./app/apps/WeatherForecast/styles/weather-styles.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_react-dom_index_js"], () => (__webpack_require__("../node_modules/@babel/polyfill/lib/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_react-dom_index_js"], () => (__webpack_require__("./app/index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.e28a2c71001be559cc80.js.map