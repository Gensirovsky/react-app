/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/apps/WeatherForecast/Weather.jsx":
/*!**********************************************!*\
  !*** ./app/apps/WeatherForecast/Weather.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weather)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _header_Header_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/Header.jsx */ "./app/apps/WeatherForecast/header/Header.jsx");
/* harmony import */ var _header_SearchBar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/SearchBar.jsx */ "./app/apps/WeatherForecast/header/SearchBar.jsx");
/* harmony import */ var _content_WeatherToday_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/WeatherToday.jsx */ "./app/apps/WeatherForecast/content/WeatherToday.jsx");
/* harmony import */ var _content_WeatherWeek_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/WeatherWeek.jsx */ "./app/apps/WeatherForecast/content/WeatherWeek.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Weather() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Lviv'),
      _useState2 = _slicedToArray(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      weatherData = _useState4[0],
      setWeatherData = _useState4[1];

  function handlerLocation(value) {
    setLocation(value);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=".concat(location, "&units=metric&appid=3ccdcc7d9418e33a6d5833089853f381");
    fetch(weatherURL).then(function (res) {
      return res.json();
    }).then(function (data) {
      return setWeatherData(data.list);
    });
  }, [location]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_header_Header_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
    value: location,
    handlerLocation: handlerLocation
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_content_WeatherToday_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
    weatherData: weatherData
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_content_WeatherWeek_jsx__WEBPACK_IMPORTED_MODULE_4__.default, {
    weatherData: weatherData
  }));
}

/***/ }),

/***/ "./app/apps/WeatherForecast/content/WeatherHour.jsx":
/*!**********************************************************!*\
  !*** ./app/apps/WeatherForecast/content/WeatherHour.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherHour)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _img_sun_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/sun.svg */ "./app/apps/WeatherForecast/img/sun.svg");
/* harmony import */ var _img_sun_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_sun_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_cloud_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/cloud.svg */ "./app/apps/WeatherForecast/img/cloud.svg");
/* harmony import */ var _img_cloud_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_cloud_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_raining_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/raining.svg */ "./app/apps/WeatherForecast/img/raining.svg");
/* harmony import */ var _img_raining_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_raining_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_snowflake_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/snowflake.svg */ "./app/apps/WeatherForecast/img/snowflake.svg");
/* harmony import */ var _img_snowflake_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_snowflake_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_storm_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/storm.svg */ "./app/apps/WeatherForecast/img/storm.svg");
/* harmony import */ var _img_storm_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_storm_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_wind_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/wind.svg */ "./app/apps/WeatherForecast/img/wind.svg");
/* harmony import */ var _img_wind_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_wind_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_moon_2_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/moon_2.svg */ "./app/apps/WeatherForecast/img/moon_2.svg");
/* harmony import */ var _img_moon_2_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_moon_2_svg__WEBPACK_IMPORTED_MODULE_7__);








function WeatherHour(props) {
  function weatherStatus() {
    var time = props.weatherDataHour.dt_txt.slice(11, 13);
    var id = props.weatherDataHour.weather[0].id;

    switch (true) {
      case id <= 232:
        return (_img_storm_svg__WEBPACK_IMPORTED_MODULE_5___default());

      case id <= 531:
        return (_img_raining_svg__WEBPACK_IMPORTED_MODULE_3___default());

      case id <= 622:
        return (_img_snowflake_svg__WEBPACK_IMPORTED_MODULE_4___default());

      case id <= 781:
        return (_img_wind_svg__WEBPACK_IMPORTED_MODULE_6___default());

      case id <= 800:
        return time >= 6 && time < 21 ? (_img_sun_svg__WEBPACK_IMPORTED_MODULE_1___default()) : (_img_moon_2_svg__WEBPACK_IMPORTED_MODULE_7___default());

      case id <= 1000:
        return (_img_cloud_svg__WEBPACK_IMPORTED_MODULE_2___default());
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour__time"
  }, props.weatherDataHour.dt_txt.slice(11, 16)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour__status-img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: weatherStatus(),
    alt: "sun"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour__temperature"
  }, props.weatherDataHour.main.temp, "\xB0\u0421"));
}

/***/ }),

/***/ "./app/apps/WeatherForecast/content/WeatherToday.jsx":
/*!***********************************************************!*\
  !*** ./app/apps/WeatherForecast/content/WeatherToday.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherDay)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _WeatherHour_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeatherHour.jsx */ "./app/apps/WeatherForecast/content/WeatherHour.jsx");
/* harmony import */ var _header_Loader_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/Loader.jsx */ "./app/apps/WeatherForecast/header/Loader.jsx");



function WeatherDay(props) {
  function SmallLine() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "weather-hour__line weather-hour__line--small"
    });
  }

  function Line() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "weather-hour__line"
    });
  }

  console.log(props.weatherData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app__weather-today"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SmallLine, null), props.weatherData ? props.weatherData.slice(0, 8).map(function (el, index) {
    return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WeatherHour_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
      weatherDataHour: el,
      key: index
    }), index != 7 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Line, {
      key: index + 2
    }) : null];
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_header_Loader_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SmallLine, null));
}

/***/ }),

/***/ "./app/apps/WeatherForecast/content/WeatherWeek.jsx":
/*!**********************************************************!*\
  !*** ./app/apps/WeatherForecast/content/WeatherWeek.jsx ***!
  \**********************************************************/
/***/ (() => {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\gensi\\Desktop\\React_Apps\\src\\app\\apps\\WeatherForecast\\content\\WeatherWeek.jsx: Unsyntactic continue. (19:16)\n\n\u001b[0m \u001b[90m 17 |\u001b[39m             \u001b[36mif\u001b[39m (day \u001b[33m===\u001b[39m newDay) {\u001b[0m\n\u001b[0m \u001b[90m 18 |\u001b[39m                 i\u001b[33m++\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 19 |\u001b[39m                 \u001b[36mcontinue\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 20 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 21 |\u001b[39m             }\u001b[0m\n\u001b[0m \u001b[90m 22 |\u001b[39m\u001b[0m\n    at Object._raise (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:788:17)\n    at Object.raiseWithData (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:781:17)\n    at Object.raise (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:742:17)\n    at Object.verifyBreakContinue (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:12837:12)\n    at Object.parseBreakContinueStatement (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:12819:10)\n    at Object.parseStatementContent (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:12596:21)\n    at Object.parseStatement (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:12580:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:13169:25)\n    at Object.parseBlockBody (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:13160:10)\n    at Object.parseBlock (C:\\Users\\gensi\\Desktop\\React_Apps\\node_modules\\@babel\\parser\\lib\\index.js:13144:10)");

/***/ }),

/***/ "./app/apps/WeatherForecast/header/Header.jsx":
/*!****************************************************!*\
  !*** ./app/apps/WeatherForecast/header/Header.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _SearchBar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.jsx */ "./app/apps/WeatherForecast/header/SearchBar.jsx");
/* harmony import */ var _img_moon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/moon.svg */ "./app/apps/WeatherForecast/img/moon.svg");
/* harmony import */ var _img_moon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_moon_svg__WEBPACK_IMPORTED_MODULE_2__);



function Header(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchBar_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
    value: props.value,
    handlerLocation: props.handlerLocation
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_moon_svg__WEBPACK_IMPORTED_MODULE_2___default()),
    alt: "moon",
    className: "weather-app__header-img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Weather")));
}

/***/ }),

/***/ "./app/apps/WeatherForecast/header/Loader.jsx":
/*!****************************************************!*\
  !*** ./app/apps/WeatherForecast/header/Loader.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _styles_loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/loader.css */ "./app/apps/WeatherForecast/styles/loader.css");


function Loader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lds-dual-ring"
  });
}

/***/ }),

/***/ "./app/apps/WeatherForecast/header/SearchBar.jsx":
/*!*******************************************************!*\
  !*** ./app/apps/WeatherForecast/header/SearchBar.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _img_location_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/location.svg */ "./app/apps/WeatherForecast/img/location.svg");
/* harmony import */ var _img_location_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_location_svg__WEBPACK_IMPORTED_MODULE_1__);


function searchBar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app__search-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "image",
    src: (_img_location_svg__WEBPACK_IMPORTED_MODULE_1___default())
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: props.value,
    onChange: function onChange(event) {
      return props.handlerLocation(event.target.value);
    }
  }));
}

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

/***/ "../node_modules/css-loader/dist/cjs.js!./app/apps/WeatherForecast/styles/loader.css":
/*!*******************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./app/apps/WeatherForecast/styles/loader.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lds-dual-ring {\r\n  display: inline-block;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.lds-dual-ring:after {\r\n  content: \" \";\r\n  display: block;\r\n  width: 64px;\r\n  height: 64px;\r\n  margin: 8px;\r\n  border-radius: 50%;\r\n  border: 6px solid #fff;\r\n  border-color: #fff transparent #fff transparent;\r\n  animation: lds-dual-ring 1.2s linear infinite;\r\n}\r\n@keyframes lds-dual-ring {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./app/apps/WeatherForecast/styles/loader.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;AACA;EACE,YAAY;EACZ,cAAc;EACd,WAAW;EACX,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,sBAAsB;EACtB,+CAA+C;EAC/C,6CAA6C;AAC/C;AACA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[".lds-dual-ring {\r\n  display: inline-block;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.lds-dual-ring:after {\r\n  content: \" \";\r\n  display: block;\r\n  width: 64px;\r\n  height: 64px;\r\n  margin: 8px;\r\n  border-radius: 50%;\r\n  border: 6px solid #fff;\r\n  border-color: #fff transparent #fff transparent;\r\n  animation: lds-dual-ring 1.2s linear infinite;\r\n}\r\n@keyframes lds-dual-ring {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/apps/WeatherForecast/img/cloud.svg":
/*!************************************************!*\
  !*** ./app/apps/WeatherForecast/img/cloud.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/cloud.svg";

/***/ }),

/***/ "./app/apps/WeatherForecast/img/location.svg":
/*!***************************************************!*\
  !*** ./app/apps/WeatherForecast/img/location.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/location.svg";

/***/ }),

/***/ "./app/apps/WeatherForecast/img/moon.svg":
/*!***********************************************!*\
  !*** ./app/apps/WeatherForecast/img/moon.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/moon.svg";

/***/ }),

/***/ "./app/apps/WeatherForecast/img/moon_2.svg":
/*!*************************************************!*\
  !*** ./app/apps/WeatherForecast/img/moon_2.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/moon_2.svg";

/***/ }),

/***/ "./app/apps/WeatherForecast/img/raining.svg":
/*!**************************************************!*\
  !*** ./app/apps/WeatherForecast/img/raining.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/raining.svg";

/***/ }),

/***/ "./app/apps/WeatherForecast/img/snowflake.svg":
/*!****************************************************!*\
  !*** ./app/apps/WeatherForecast/img/snowflake.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/snowflake.svg";

/***/ }),

/***/ "./app/apps/WeatherForecast/img/storm.svg":
/*!************************************************!*\
  !*** ./app/apps/WeatherForecast/img/storm.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/storm.svg";

/***/ }),

/***/ "./app/apps/WeatherForecast/img/sun.svg":
/*!**********************************************!*\
  !*** ./app/apps/WeatherForecast/img/sun.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/sun.svg";

/***/ }),

/***/ "./app/apps/WeatherForecast/img/wind.svg":
/*!***********************************************!*\
  !*** ./app/apps/WeatherForecast/img/wind.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/wind.svg";

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


/***/ }),

/***/ "./app/apps/WeatherForecast/styles/loader.css":
/*!****************************************************!*\
  !*** ./app/apps/WeatherForecast/styles/loader.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./loader.css */ "../node_modules/css-loader/dist/cjs.js!./app/apps/WeatherForecast/styles/loader.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_css-loader_dist_runtime_api_js--91b776"], () => (__webpack_require__("../node_modules/@babel/polyfill/lib/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_css-loader_dist_runtime_api_js--91b776"], () => (__webpack_require__("./app/index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.f967e3efb218eaee39f7.js.map