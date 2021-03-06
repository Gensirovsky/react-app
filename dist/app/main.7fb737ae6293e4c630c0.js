/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/apps/ToDoList/TodoApp.jsx":
/*!***************************************!*\
  !*** ./app/apps/ToDoList/TodoApp.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _todo_TodoList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo/TodoList.jsx */ "./app/apps/ToDoList/todo/TodoList.jsx");
/* harmony import */ var _actions_Menu_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/Menu.jsx */ "./app/apps/ToDoList/actions/Menu.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todo-app__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "To-do list"));
}

function TodoApp() {
  localStorage.setItem("MarksMenu", false);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["main", "secondary", "last", "chell", "secondary", "secondary", "secondary", "secondary", "secondary", "secondary", "chell", "chell", "chell", "chell", "chell", "chell", "chell", "chell"]),
      _useState2 = _slicedToArray(_useState, 2),
      marks = _useState2[0],
      setMarks = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    id: 1631222044156,
    name: "???????? ?? ??????????????",
    depth: 1,
    mark: ["shop "],
    child: false,
    filtered: false,
    children: [{
      id: 1631222051647,
      name: "???????????? ??????",
      depth: 2,
      mark: null,
      children: null,
      child: true,
      filtered: false
    }, {
      id: 1631222051617,
      name: "???????????? ??????????",
      depth: 2,
      mark: null,
      children: null,
      child: true,
      filtered: false
    }, {
      id: 1631222052215,
      name: "???????????? ???????????????????? ?????????????????????? ?????? ???????????????????????? ??????",
      depth: 2,
      mark: ["shop "],
      child: true,
      filtered: false,
      children: [{
        id: 1631222052812,
        mark: null,
        name: "????????????",
        depth: 3,
        child: true,
        children: null,
        filtered: false
      }, {
        id: 1631222053345,
        name: "?????????? ??????????",
        depth: 3,
        mark: null,
        child: true,
        children: null,
        filtered: false
      }, {
        id: 1631222053347,
        name: "????????????",
        depth: 3,
        mark: null,
        child: true,
        children: null,
        filtered: false
      }]
    }]
  }, {
    id: 1631222046008,
    name: "??????????'?????????? ???????? ?? ??????????????",
    depth: 1,
    mark: ["main "],
    children: null,
    child: false,
    filtered: false
  }, {
    id: 1631222046983,
    name: "???????????????????? ?????? ?? ??????????",
    depth: 1,
    mark: ["main "],
    children: null,
    child: false,
    filtered: false
  }, {
    id: 1631222048185,
    name: "???????????????? ?????????? ?? ??????????",
    depth: 1,
    mark: ["main "],
    children: null,
    child: false,
    filtered: false
  }, {
    id: 1631222049905,
    name: "???????????? ?????? ??????????????",
    depth: 1,
    mark: ["secondary "],
    children: null,
    child: false,
    filtered: false
  }, {
    id: 1631222050975,
    name: "???? ??????????????????",
    depth: 1,
    mark: ["main "],
    child: false,
    filtered: false,
    children: false
  }, {
    id: 1631222050976,
    name: "?????????????????????????????? ????????",
    depth: 1,
    mark: ["main "],
    child: false,
    filtered: false,
    children: false
  }]),
      _useState4 = _slicedToArray(_useState3, 2),
      listToDo = _useState4[0],
      setListToDo = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isListFiltered = _useState6[0],
      setIsListFiltered = _useState6[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todo-app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_todo_TodoList_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
    todos: listToDo,
    isFiltered: isListFiltered,
    setListToDo: setListToDo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_actions_Menu_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    marks: marks,
    setMarks: setMarks,
    list: listToDo,
    setListToDo: setListToDo,
    isFiltered: isListFiltered,
    setIsListFiltered: setIsListFiltered
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoApp);

/***/ }),

/***/ "./app/apps/ToDoList/actions/AddTodo.jsx":
/*!***********************************************!*\
  !*** ./app/apps/ToDoList/actions/AddTodo.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _img_cancel_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/cancel.svg */ "./app/apps/ToDoList/img/cancel.svg");
/* harmony import */ var _img_cancel_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_cancel_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MarksMenu_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarksMenu.jsx */ "./app/apps/ToDoList/actions/MarksMenu.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





function AddTodo(_ref) {
  var setListToDo = _ref.setListToDo,
      marks = _ref.marks,
      setMarks = _ref.setMarks,
      isFiltered = _ref.isFiltered;

  function closeMenuAdd() {
    var menu = document.querySelector(".menu__container");
    menu.style.marginLeft = "0";
  }

  function addTodoHandler(e) {
    e.preventDefault();
    var todoName = e.target.elements.todoName.value;
    if (!todoName.length) return;
    var todoMarks = Array.from(document.querySelectorAll(".add-mark")).map(function (el) {
      return el.innerHTML + " ";
    });
    var todo = {
      id: Date.now(),
      name: todoName,
      depth: 1,
      mark: todoMarks.length ? todoMarks : null,
      child: false,
      children: null,
      filtered: isFiltered
    };
    console.log(todo);
    setListToDo(function (prev) {
      return [].concat(_toConsumableArray(prev), [todo]);
    });
    e.target.elements.todoName.value = "";
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__add"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__add__main-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    action: "",
    className: "menu__add__form",
    onSubmit: function onSubmit(e) {
      return addTodoHandler(e);
    },
    name: "addTodo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    placeholder: "Add task",
    className: "menu__add__input menu__add__npt",
    name: "todoName",
    autoComplete: "off"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "submit",
    value: "Add",
    className: "menu__add__submit menu__add__npt"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__add__marks",
    onClick: function onClick() {
      var marksDiv = document.querySelector("#menu-add-marks-list");
      marksDiv.hidden = false;
      marksDiv.focus();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__add__marks-title"
  }, "Marks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MarksMenu_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    marks: marks,
    setMarks: setMarks,
    divId: "menu-add-marks-list"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__add__close",
    onClick: function onClick() {
      return closeMenuAdd();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_cancel_svg__WEBPACK_IMPORTED_MODULE_1___default()),
    alt: "close"
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTodo);

/***/ }),

/***/ "./app/apps/ToDoList/actions/MarksMenu.jsx":
/*!*************************************************!*\
  !*** ./app/apps/ToDoList/actions/MarksMenu.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarksMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _img_cancel_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/cancel.svg */ "./app/apps/ToDoList/img/cancel.svg");
/* harmony import */ var _img_cancel_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_cancel_svg__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function MarksMenu(_ref) {
  var marks = _ref.marks,
      divId = _ref.divId,
      setMarks = _ref.setMarks;

  function closeMarks(e) {
    if (e.target.id === "cls") document.querySelector("#" + divId).hidden = true;
    e.stopPropagation();
  }

  function addMarkHandler(e) {
    e.preventDefault();
    var mark = e.target.elements.inputMark.value;
    setMarks(function (prev) {
      return [].concat(_toConsumableArray(prev), [mark]);
    });
    document.querySelector("#" + divId).hidden = false;
    document.querySelector("#" + divId).focus();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    hidden: true,
    className: "marks-list",
    id: divId,
    onClick: function onClick(e) {
      return closeMarks(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "marks-list__btn-close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_cancel_svg__WEBPACK_IMPORTED_MODULE_1___default()),
    alt: "close",
    id: "cls"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "marks-list__title"
  }, "Marks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "marks-list__mark-add",
    onSubmit: function onSubmit(e) {
      return addMarkHandler(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "input",
    name: "inputMark",
    placeholder: "Add mark",
    autoComplete: "off",
    className: "marks-list__mark-add-npt"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "submit",
    value: "Add",
    className: "marks-list__mark-add-btn"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "marks-list__marks-list"
  }, marks.map(function (el, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      onClick: function onClick(e) {
        return e.target.classList.toggle("add-mark");
      }
    }, el));
  })));
}

/***/ }),

/***/ "./app/apps/ToDoList/actions/Menu.jsx":
/*!********************************************!*\
  !*** ./app/apps/ToDoList/actions/Menu.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _AddTodo_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTodo.jsx */ "./app/apps/ToDoList/actions/AddTodo.jsx");
/* harmony import */ var _MenuDisplay_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuDisplay.jsx */ "./app/apps/ToDoList/actions/MenuDisplay.jsx");




function Menu(_ref) {
  var marks = _ref.marks,
      setMarks = _ref.setMarks,
      list = _ref.list,
      setListToDo = _ref.setListToDo,
      setIsListFiltered = _ref.setIsListFiltered,
      isFiltered = _ref.isFiltered;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todo-app__menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MenuDisplay_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    marks: marks,
    setMarks: setMarks,
    setListToDo: setListToDo,
    list: list,
    setIsListFiltered: setIsListFiltered
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddTodo_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
    setListToDo: setListToDo,
    marks: marks,
    setMarks: setMarks,
    isFiltered: isFiltered
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./app/apps/ToDoList/actions/MenuDisplay.jsx":
/*!***************************************************!*\
  !*** ./app/apps/ToDoList/actions/MenuDisplay.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuDisplay)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _img_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/add.svg */ "./app/apps/ToDoList/img/add.svg");
/* harmony import */ var _img_add_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_add_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_cancel_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/cancel.svg */ "./app/apps/ToDoList/img/cancel.svg");
/* harmony import */ var _img_cancel_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_cancel_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/search.svg */ "./app/apps/ToDoList/img/search.svg");
/* harmony import */ var _img_search_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_search_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_down_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/down-arrow.svg */ "./app/apps/ToDoList/img/down-arrow.svg");
/* harmony import */ var _img_down_arrow_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_down_arrow_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_folder_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/folder.svg */ "./app/apps/ToDoList/img/folder.svg");
/* harmony import */ var _img_folder_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_folder_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MarksMenu_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MarksMenu.jsx */ "./app/apps/ToDoList/actions/MarksMenu.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MenuDisplay(_ref) {
  var marks = _ref.marks,
      setMarks = _ref.setMarks,
      list = _ref.list,
      setListToDo = _ref.setListToDo,
      setIsListFiltered = _ref.setIsListFiltered;

  function addTodoHanler() {
    marksMenuHandler(false);
    var menu = document.querySelector(".menu__container");
    menu.style.marginLeft = "-100%";
  }

  function openFilterHander(e) {
    if (e.target.closest(".menu__filter-content")) {
      e.currentTarget.style.marginTop = -e.currentTarget.offsetHeight / 2 + "px";
    } else if (e.target.closest("#filterCls")) {
      e.currentTarget.style.marginTop = 0 + "px";
    }
  } //filter to-do-list


  function filterHandler(e, todos) {
    e.preventDefault();
    var filter = e.target.elements.filterValue.value;
    if (!filter.length) return;
    filter += " ";

    function filterFunc(todos) {
      return todos.map(function (el) {
        var _el$mark, _el$mark2, _el$mark3;

        if (el.children && (_el$mark = el.mark) !== null && _el$mark !== void 0 && _el$mark.includes(filter)) {
          return _objectSpread(_objectSpread({}, el), {}, {
            children: filterFunc(el.children)
          });
        }

        if (el.children && !((_el$mark2 = el.mark) !== null && _el$mark2 !== void 0 && _el$mark2.includes(filter))) {
          filterFunc(el.children);
        }

        if ((_el$mark3 = el.mark) !== null && _el$mark3 !== void 0 && _el$mark3.includes(filter)) {
          return el;
        }

        return _objectSpread(_objectSpread({}, el), {}, {
          filtered: true
        });
      });
    }

    console.log(filterFunc(todos));
    setIsListFiltered(true);
    setListToDo(filterFunc(todos));
  } //filter reset


  function filterClear(list) {
    setIsListFiltered(false);
    setListToDo(list.map(function (el) {
      if (el.child) return null;else {
        return _objectSpread(_objectSpread({}, el), {}, {
          filtered: false
        });
      }
    }).filter(function (el) {
      return el != null;
    }));
  } // open/close marksMenu


  function marksMenuHandler() {
    var open = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var marksDiv = document.querySelector("#marks-list");
    marksDiv.hidden = !open;
    marksDiv.querySelector(".marks-list__mark-add-npt").focus();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__main-item-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__add-button menu__button",
    onClick: function onClick() {
      return addTodoHanler();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_add_svg__WEBPACK_IMPORTED_MODULE_1___default()),
    alt: "Add task"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__text"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__filter menu__button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__filter-container",
    onClick: function onClick(e) {
      return openFilterHander(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__content menu__filter-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_search_svg__WEBPACK_IMPORTED_MODULE_3___default()),
    alt: "filter"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "filter__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: function onSubmit(e) {
      return filterHandler(e, list);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    className: "filter__input",
    type: "text",
    name: "filterValue",
    autoComplete: "off"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "filter__submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_search_svg__WEBPACK_IMPORTED_MODULE_3___default()),
    alt: "search"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "filter__clear",
    onClick: function onClick() {
      return filterClear(list);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_cancel_svg__WEBPACK_IMPORTED_MODULE_2___default()),
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "filter__close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_down_arrow_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    alt: "close filter",
    id: "filterCls"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__forlders menu__button",
    onClick: function onClick() {
      marksMenuHandler();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_folder_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    alt: "Folder"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu__text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MarksMenu_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {
    marks: marks,
    setMarks: setMarks,
    divId: "marks-list"
  }))));
}

/***/ }),

/***/ "./app/apps/ToDoList/index.jsx":
/*!*************************************!*\
  !*** ./app/apps/ToDoList/index.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var _styles_todolist_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/todolist-styles.scss */ "./app/apps/ToDoList/styles/todolist-styles.scss");
/* harmony import */ var _TodoApp_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoApp.jsx */ "./app/apps/ToDoList/TodoApp.jsx");





function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TodoApp_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null));
}

react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById('todolist-app'));

/***/ }),

/***/ "./app/apps/ToDoList/js/scrollBarFix.jsx":
/*!***********************************************!*\
  !*** ./app/apps/ToDoList/js/scrollBarFix.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function scrollBarFix() {
  var i = false;
  return function () {
    var elem = document.querySelector(".todos-do");

    if (elem.clientHeight !== elem.scrollHeight && !i) {
      elem.style.paddingRight = parseFloat(getComputedStyle(elem).paddingRight) - 5 + "px";
      i = true;
    }

    if (elem.clientHeight === elem.scrollHeight && i) {
      elem.style.paddingRight = parseFloat(getComputedStyle(elem).paddingRight) + 5 + "px";
      i = false;
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollBarFix());

/***/ }),

/***/ "./app/apps/ToDoList/todo/SubMenuTodo.jsx":
/*!************************************************!*\
  !*** ./app/apps/ToDoList/todo/SubMenuTodo.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _img_trashBin_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/trashBin.svg */ "./app/apps/ToDoList/img/trashBin.svg");
/* harmony import */ var _img_trashBin_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_trashBin_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_left_arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/left-arrow.svg */ "./app/apps/ToDoList/img/left-arrow.svg");
/* harmony import */ var _img_left_arrow_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_left_arrow_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_cancel_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/cancel.svg */ "./app/apps/ToDoList/img/cancel.svg");
/* harmony import */ var _img_cancel_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_cancel_svg__WEBPACK_IMPORTED_MODULE_3__);





function SubMenuTodo(_ref) {
  var item = _ref.item;

  function subMenuMarkers(e) {
    return e.target.closest(".todos-do__sub-menu").querySelectorAll(".todos-do__sub-menu-mark");
  }

  function delTodo(e) {
    e.target.closest(".todos-do").remove();
  }

  function delMarkers(e) {
    subMenuMarkers(e).forEach(function (el) {
      el.classList.contains("cls-mark") ? el.remove() : null;
    });
  }

  function marklist(markers) {
    return markers.map(function (el, id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "todos-do__sub-menu-mark",
        onClick: function onClick(e) {
          e.target.classList.toggle("cls-mark");
        },
        key: id
      }, el);
    });
  }

  function subMenuClose(e) {
    subMenuMarkers(e).forEach(function (el) {
      el.classList.remove("cls-mark");
    });
    e.target.closest(".todos-do").style.marginLeft = "0";
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todos-do__sub-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todos-do__sub-menu-content"
  }, item.mark ? marklist(item.mark) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todos-do__sub-menu-without-content"
  }, "empty")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todos-do__sub-menu-btn-del todos-do__sub-menu-btn",
    onClick: function onClick(e) {
      delMarkers(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_trashBin_svg__WEBPACK_IMPORTED_MODULE_1___default()),
    alt: "",
    title: "Remove marks"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todos-do__sub-menu-btn-del-todo todos-do__sub-menu-btn",
    onClick: function onClick(e) {
      delTodo(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_cancel_svg__WEBPACK_IMPORTED_MODULE_3___default()),
    alt: "",
    title: "Remove todo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todos-do__sub-menu-btn-cls todos-do__sub-menu-btn",
    onClick: function onClick(e) {
      return subMenuClose(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_left_arrow_svg__WEBPACK_IMPORTED_MODULE_2___default()),
    alt: ""
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubMenuTodo);

/***/ }),

/***/ "./app/apps/ToDoList/todo/TodoList.jsx":
/*!*********************************************!*\
  !*** ./app/apps/ToDoList/todo/TodoList.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _img_left_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/left-arrow.svg */ "./app/apps/ToDoList/img/left-arrow.svg");
/* harmony import */ var _img_left_arrow_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_left_arrow_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_document_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/document.svg */ "./app/apps/ToDoList/img/document.svg");
/* harmony import */ var _img_document_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_document_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_scrollBarFix_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/scrollBarFix.jsx */ "./app/apps/ToDoList/js/scrollBarFix.jsx");
/* harmony import */ var _img_submenu_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/submenu.svg */ "./app/apps/ToDoList/img/submenu.svg");
/* harmony import */ var _img_submenu_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_submenu_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SubMenuTodo_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubMenuTodo.jsx */ "./app/apps/ToDoList/todo/SubMenuTodo.jsx");
/* harmony import */ var _img_depth_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/depth.svg */ "./app/apps/ToDoList/img/depth.svg");
/* harmony import */ var _img_depth_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_depth_svg__WEBPACK_IMPORTED_MODULE_6__);
var _excluded = ["item", "isFiltered"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function subMenuOpen(e) {
  document.querySelectorAll(".todos-do").forEach(function (el) {
    el.style.transition = "margin-left 0.25s ease";
    el.style.marginLeft = "0";
  });
  var todosDiv = e.target.closest(".todos-do");
  todosDiv.style.marginLeft = "-100%"; //close parent block and turn arrow

  var todosDivParent = todosDiv.querySelector(".todos-do__child");
  if (!todosDivParent) return;

  if (!todosDivParent.classList.contains("visually-hidden")) {
    todosDivParent.classList.add("visually-hidden");
    todosDiv.querySelector(".todos-do__btn-down-img").style.transform = "rotate(0deg)";
  }
} // add a check mark to all children checkbox


function checkboxHandler(e) {
  if (!e.target.checked) return;
  var childrenCheckbox = e.target.closest(".todos-do__container").querySelectorAll(".todos-do__checkbox");

  if (childrenCheckbox.length) {
    childrenCheckbox.forEach(function (el) {
      el.checked = true;
    });
  }
}

function ListItem(_ref) {
  var item = _ref.item,
      isFiltered = _ref.isFiltered,
      props = _objectWithoutProperties(_ref, _excluded);

  // rotate button-arrow after click
  function listOpenHandler(event) {
    var target = event.target.closest(".todos-do__container");
    var children = target.parentNode.querySelector("ul");
    if (!children) return;
    children.classList.toggle("visually-hidden");
    event.target.style.transition = "all .25s ease";
    event.target.style.transform = children.classList.contains("visually-hidden") ? "rotate(0deg)" : "rotate(-90deg)"; // so that the scrollbar does not displace the contents
    //scrollBarFix()
  }

  if (item.filtered) return null;
  var children = null;

  if (!isFiltered) {
    if (item.children && item.children.length) {
      children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: "todos-do__child todos-do visually-hidden"
      }, item.children.map(function (i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListItem, {
          item: i,
          key: i.id,
          isFiltered: isFiltered,
          dragStartHandler: props.dragStartHandler,
          dragLeaveHandler: props.dragLeaveHandler,
          dragEndHandler: props.dragEndHandler,
          dragOverHandler: props.dragOverHandler,
          dropHandler: props.dropHandler
        });
      }));
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "todos-do",
    draggable: true,
    onDragStart: function onDragStart(e) {
      return props.dragStartHandler(e, item);
    },
    onDragLeave: function onDragLeave(e) {
      return props.dragLeaveHandler(e, item);
    },
    onDragEnd: function onDragEnd(e) {
      return props.dragEndHandler(e);
    },
    onDragOver: function onDragOver(e) {
      return props.dragOverHandler(e);
    },
    onDrop: function onDrop(e) {
      return props.dropHandler(e, item);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todos-do__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "todos-do__checkbox-label checkbox-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "checkbox",
    className: "todos-do__checkbox checkbox",
    onChange: function onChange(e) {
      return checkboxHandler(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "todos-do__checkbox-fake checkbox-fake"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, item.name)), children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todos-do__btn-down",
    onClick: function onClick(e) {
      return listOpenHandler(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_left_arrow_svg__WEBPACK_IMPORTED_MODULE_1___default()),
    className: "todos-do__btn-down-img"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todos-do__btn-down"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todos-do__btn-menu",
    onClick: function onClick(e) {
      return subMenuOpen(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_submenu_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todos-do__line"
  }), children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SubMenuTodo_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
    item: item
  }));
}

function TodoList(_ref2) {
  var todos = _ref2.todos,
      isFiltered = _ref2.isFiltered,
      setListToDo = _ref2.setListToDo;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentItem = _useState2[0],
      setCurrentItem = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      currentElement = _useState4[0],
      setCurrentElement = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      dragImg = _useState6[0],
      setDragImg = _useState6[1]; // Load drag-image


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var img = new Image();
    img.src = (_img_document_svg__WEBPACK_IMPORTED_MODULE_2___default());

    img.onload = function () {
      return setDragImg(img);
    };
  }, []); // delete currentItem, before adding it to dropItem

  function deleteCurrentTodo(todosArr, todo) {
    todosArr = todosArr.filter(function (item) {
      return item.id !== todo.id;
    }).map(function (item) {
      if (item.children) {
        return _objectSpread(_objectSpread({}, item), {}, {
          children: deleteCurrentTodo(item.children, todo)
        });
      } else {
        return item;
      }
    });
    return todosArr;
  }

  function addCurrentTodo(todosArr, todo, parent) {
    todosArr = todosArr.map(function (item) {
      if (item.id === parent.id) {
        // Add currentItem 'todo' in item.children 'parent'
        return _objectSpread(_objectSpread({}, item), {}, {
          children: item.children ? [].concat(_toConsumableArray(item.children), [_objectSpread(_objectSpread({}, todo), {}, {
            child: true,
            depth: item.depth + 1
          })]) : item.children = [_objectSpread(_objectSpread({}, todo), {}, {
            child: true,
            depth: item.depth + 1
          })]
        });
      }

      if (item.children) {
        if (!item.children.length) {
          return _objectSpread(_objectSpread({}, item), {}, {
            children: null
          });
        }

        return _objectSpread(_objectSpread({}, item), {}, {
          children: addCurrentTodo(item.children, todo, parent)
        });
      } else {
        return item;
      }
    });
    return todosArr;
  }

  function getTodoElement(e) {
    return e.target.closest(".todos-do");
  }

  function setLineBackGround(e, color) {
    return e.target.closest(".todos-do").querySelector(".todos-do__line").style.backgroundColor = color;
  }

  function dragStartHandler(e, item) {
    e.stopPropagation();
    setCurrentItem(item);
    setCurrentElement(getTodoElement(e));
    getTodoElement(e).style.opacity = "0.5";
    e.dataTransfer.setDragImage(dragImg, 0, 0);
  }

  function dragLeaveHandler(e) {
    setLineBackGround(e, "");
  }

  function dragEndHandler() {
    currentElement.style.opacity = "";
    setCurrentElement(null);
  }

  function dragOverHandler(e) {
    e.preventDefault();
    if (currentElement === getTodoElement(e)) return;
    setLineBackGround(e, "#98C379");
  }

  function dropHandler(e, dropItem) {
    e.preventDefault();
    e.stopPropagation(); //  if (dropItem != currentItem && currentItem outside his parent && depth < 4)
    //  then Add currentItem in dropItem

    if (dropItem !== currentItem && isOutside() && getSumDepth(currentItem, dropItem) < 4) {
      var itemDeletedArr = deleteCurrentTodo(todos, currentItem);
      setListToDo(addCurrentTodo(itemDeletedArr, currentItem, dropItem));
    }

    setLineBackGround(e, ""); //currentItem outside his parent?

    function isOutside() {
      var outside = true;
      dropItem.children ? dropItem.children.forEach(function (el) {
        if (el.id === currentItem.id) outside = false;
      }) : outside = true;
      return outside;
    }

    function getSumDepth(currentObj, dropObj) {
      var SumLevel = 0;

      function depthCurrentObjObj(obj) {
        var level = 1;

        if (obj.children) {
          level++;
          obj.children.forEach(function (el) {
            var depth = depthCurrentObjObj(el) + 1;
            level = Math.max(depth, level);
          });
        }

        return level;
      }

      SumLevel += depthCurrentObjObj(currentObj) + dropObj.depth;
      return SumLevel;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "todo-app__todos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todo-app__depth-cls",
    style: currentElement ? {
      display: ""
    } : {
      display: "none"
    },
    onDragOver: function onDragOver(e) {
      e.preventDefault();
    },
    onDrop: function onDrop(e) {
      //move the item to the first level
      e.preventDefault();
      if (currentItem.depth === 1) return;
      var itemDeletedArr = deleteCurrentTodo(todos, currentItem);
      setListToDo([_objectSpread(_objectSpread({}, currentItem), {}, {
        depth: 1
      })].concat(_toConsumableArray(itemDeletedArr)));
      setCurrentElement(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "todo-app__depth-cls-img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_depth_svg__WEBPACK_IMPORTED_MODULE_6___default()),
    alt: "first level"
  }))), todos.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListItem, {
      item: item,
      isFiltered: isFiltered,
      key: item.id,
      dragStartHandler: dragStartHandler,
      dragLeaveHandler: dragLeaveHandler,
      dragEndHandler: dragEndHandler,
      dragOverHandler: dragOverHandler,
      dropHandler: dropHandler
    });
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);

/***/ }),

/***/ "./app/apps/WeatherForecast/Context.jsx":
/*!**********************************************!*\
  !*** ./app/apps/WeatherForecast/Context.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var weatherContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherContext);

/***/ }),

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
/* harmony import */ var _content_WeatherToday_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/WeatherToday.jsx */ "./app/apps/WeatherForecast/content/WeatherToday.jsx");
/* harmony import */ var _content_WeatherWeek_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/WeatherWeek.jsx */ "./app/apps/WeatherForecast/content/WeatherWeek.jsx");
/* harmony import */ var _Context_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Context.jsx */ "./app/apps/WeatherForecast/Context.jsx");
/* harmony import */ var _img_sun_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/sun.svg */ "./app/apps/WeatherForecast/img/sun.svg");
/* harmony import */ var _img_sun_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_sun_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_wind_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/wind.svg */ "./app/apps/WeatherForecast/img/wind.svg");
/* harmony import */ var _img_wind_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_wind_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_cloud_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/cloud.svg */ "./app/apps/WeatherForecast/img/cloud.svg");
/* harmony import */ var _img_cloud_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_cloud_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_raining_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/raining.svg */ "./app/apps/WeatherForecast/img/raining.svg");
/* harmony import */ var _img_raining_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_raining_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_snowflake_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/snowflake.svg */ "./app/apps/WeatherForecast/img/snowflake.svg");
/* harmony import */ var _img_snowflake_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_snowflake_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_storm_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/storm.svg */ "./app/apps/WeatherForecast/img/storm.svg");
/* harmony import */ var _img_storm_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_storm_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_moon_2_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/moon_2.svg */ "./app/apps/WeatherForecast/img/moon_2.svg");
/* harmony import */ var _img_moon_2_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_moon_2_svg__WEBPACK_IMPORTED_MODULE_11__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function Weather() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Lviv"),
      _useState2 = _slicedToArray(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Lviv"),
      _useState4 = _slicedToArray(_useState3, 2),
      city = _useState4[0],
      setCity = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      weatherDataDay = _useState6[0],
      setWeatherDataDay = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      weatherDataWeek = _useState8[0],
      setWeatherDataWeek = _useState8[1];

  var weatherToday = document.querySelector("#weather-today-carousel");

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedDay = _useState10[0],
      setSelectedDay = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isWork = _useState12[0],
      setIsWord = _useState12[1];

  function wDataHandler(data) {
    var today = weatherDataWeek.slice(0, 8);

    if (data[0].dt_txt === selectedDay) {
      animationDiv(weatherToday, function () {
        return setWeatherDataDay(today);
      });
      setSelectedDay(weatherDataWeek[0].dt_txt);
      return;
    }

    animationDiv(weatherToday, function () {
      return setWeatherDataDay(data);
    });
    setSelectedDay(data[0].dt_txt);
  }

  function animationDiv(elem, func) {
    var marginLeft = window.getComputedStyle(elem, null).getPropertyValue("margin-left");

    if (parseInt(marginLeft) < 0) {
      func();
      return;
    }

    if (isWork) return;
    setIsWord(true);
    setTimeout(function () {
      setIsWord(false);
    }, 750);

    function animationUp() {
      elem.style.transition = "margin-top 0s";
      elem.style.marginTop = "-100%";
    }

    function animationNormal() {
      elem.style.transition = "margin-top 0.3s";
      elem.style.marginTop = "0";
    }

    function animationDown() {
      elem.style.transition = "margin-top 0.3s";
      elem.style.marginTop = "100%";
    }

    animationDown();
    setTimeout(function () {
      animationUp();
      func();
      setTimeout(function () {
        animationNormal();
      }, 100);
    }, 300);
  }

  function weatherStatus(prps) {
    var time = prps.dt_txt.slice(11, 13);
    var id = prps.weather[0].id;

    switch (true) {
      case id <= 299:
        return (_img_storm_svg__WEBPACK_IMPORTED_MODULE_10___default());

      case id <= 599:
        return (_img_raining_svg__WEBPACK_IMPORTED_MODULE_8___default());

      case id <= 700:
        return (_img_snowflake_svg__WEBPACK_IMPORTED_MODULE_9___default());

      case id <= 799:
        return (_img_wind_svg__WEBPACK_IMPORTED_MODULE_6___default());

      case id <= 800:
        return time >= 6 && time < 21 ? (_img_sun_svg__WEBPACK_IMPORTED_MODULE_5___default()) : (_img_moon_2_svg__WEBPACK_IMPORTED_MODULE_11___default());

      case id <= 1000:
        return (_img_cloud_svg__WEBPACK_IMPORTED_MODULE_7___default());
    }
  }

  function daysOfWeek(prps) {
    var days = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday"
    };
    return days[new Date(prps.dt_txt).getDay()];
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      var locationNormalCase = e.target.value.split("").map(function (el, i) {
        return i === 0 ? el.toUpperCase() : el.toLowerCase();
      }).join("");
      setLocation(locationNormalCase);
    }
  }

  function updateAnimation() {
    document.querySelectorAll(".weather-day-card-animation").forEach(function (el) {
      el.classList.remove("select-border");
      el.classList.add("opacity");
      setTimeout(function () {
        el.classList.remove("opacity");
      }, 500);
    });
    animationDiv(document.querySelector("#weather-today-carousel"), function () {});
  }

  function errorDiv() {
    var errDiv = document.querySelector(".slideSource");
    errDiv.classList.add("fade");
    setTimeout(function () {
      errDiv.classList.remove("fade");
    }, 4000);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=".concat(location, "&units=metric&appid=b54007d1a20d9e5b6402cbb67162c324");
    fetch(weatherURL).then(function (res) {
      if (!res.ok) {
        console.log(res.status);
        throw Error(res.status);
      }

      return res.json();
    }).then(function (data) {
      setWeatherDataDay(data.list);
      setWeatherDataWeek(data.list);
      setCity(location);
      updateAnimation();
    })["catch"](function (err) {
      errorDiv();
    });
  }, [location]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_header_Header_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
    handleKeyPress: handleKeyPress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Context_jsx__WEBPACK_IMPORTED_MODULE_4__.default.Provider, {
    value: {
      daysOfWeek: daysOfWeek,
      weatherStatus: weatherStatus
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_content_WeatherToday_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    weatherData: weatherDataDay,
    city: city
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_content_WeatherWeek_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
    weatherData: weatherDataWeek,
    setWeatherData: wDataHandler
  })));
}

/***/ }),

/***/ "./app/apps/WeatherForecast/content/WeatherDay.jsx":
/*!*********************************************************!*\
  !*** ./app/apps/WeatherForecast/content/WeatherDay.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherDay)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _img_temperature_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/temperature.svg */ "./app/apps/WeatherForecast/img/temperature.svg");
/* harmony import */ var _img_temperature_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_temperature_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_drop_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/drop.svg */ "./app/apps/WeatherForecast/img/drop.svg");
/* harmony import */ var _img_drop_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_drop_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_umbrella_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/umbrella.svg */ "./app/apps/WeatherForecast/img/umbrella.svg");
/* harmony import */ var _img_umbrella_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_umbrella_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_wind_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/wind.svg */ "./app/apps/WeatherForecast/img/wind.svg");
/* harmony import */ var _img_wind_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_wind_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Context_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Context.jsx */ "./app/apps/WeatherForecast/Context.jsx");






function WeatherDay(props) {
  var weatherDay = props.weatherDay;
  var weatherRound = weatherDay[5];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context_jsx__WEBPACK_IMPORTED_MODULE_5__.default),
      daysOfWeek = _useContext.daysOfWeek,
      weatherStatus = _useContext.weatherStatus;

  function getTemp() {
    return Math.round(weatherRound.main.temp);
  }

  function getDrop() {
    return Math.round(weatherRound.main.humidity);
  }

  function getFall_out() {
    return Math.round(weatherRound.pop * 100);
  }

  function getWindSpeed() {
    return weatherRound.wind.speed;
  }

  function selectDiv(event) {
    var target = event.target.closest('.weather-day-card');

    if (target.closest('.select-border')) {
      target.classList.remove('select-border');
    } else {
      document.querySelectorAll('.weather-day-card').forEach(function (el) {
        return el.classList.remove('select-border');
      });
      target.classList.add('select-border');
    }
  }

  function closeDetail() {
    var elem = document.querySelector('#weather-today-carousel');
    elem.style.transition = 'margin-left 0.5s';
    elem.style.marginLeft = '0';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-day-card",
    onClick: function onClick(e) {
      closeDetail(), props.setWeatherData(weatherDay), selectDiv(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-day-card-animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-day-card__temperature incard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-img-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_temperature_svg__WEBPACK_IMPORTED_MODULE_1___default()),
    alt: "temperature"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, getTemp(), "\xB0C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-day-card__drop incard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-img-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_drop_svg__WEBPACK_IMPORTED_MODULE_2___default()),
    alt: "drop"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, getDrop(), "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-day-card__humidity incard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-img-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_umbrella_svg__WEBPACK_IMPORTED_MODULE_3___default()),
    alt: "umbrella"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, getFall_out(), "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-day-card__wind incard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-img-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_wind_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    alt: "wind"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, getWindSpeed().toFixed(1), "m/s")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-day-card__status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "weather-day-card__status-img",
    src: weatherStatus(weatherRound),
    alt: "sun"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "weather-day-card__title"
  }, daysOfWeek(weatherDay[0])))));
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
/* harmony import */ var _Context_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context.jsx */ "./app/apps/WeatherForecast/Context.jsx");


function WeatherHour(props) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context_jsx__WEBPACK_IMPORTED_MODULE_1__.default),
      weatherStatus = _useContext.weatherStatus;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour",
    onClick: function onClick() {
      return props.handlerDetails(props.weatherDataHour);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour__time"
  }, props.weatherDataHour.dt_txt.slice(11, 16)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour__status-img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: weatherStatus(props.weatherDataHour),
    alt: "sun"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour__temperature"
  }, Math.round(props.weatherDataHour.main.temp), "\xB0\u0421"));
}

/***/ }),

/***/ "./app/apps/WeatherForecast/content/WeatherHourDetail.jsx":
/*!****************************************************************!*\
  !*** ./app/apps/WeatherForecast/content/WeatherHourDetail.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherHourDetail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _Context_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context.jsx */ "./app/apps/WeatherForecast/Context.jsx");
/* harmony import */ var _img_temperature_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/temperature.svg */ "./app/apps/WeatherForecast/img/temperature.svg");
/* harmony import */ var _img_temperature_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_temperature_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_drop_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/drop.svg */ "./app/apps/WeatherForecast/img/drop.svg");
/* harmony import */ var _img_drop_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_drop_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_umbrella_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/umbrella.svg */ "./app/apps/WeatherForecast/img/umbrella.svg");
/* harmony import */ var _img_umbrella_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_umbrella_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_wind_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/wind.svg */ "./app/apps/WeatherForecast/img/wind.svg");
/* harmony import */ var _img_wind_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_wind_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_cloud_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/cloud.svg */ "./app/apps/WeatherForecast/img/cloud.svg");
/* harmony import */ var _img_cloud_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_cloud_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_pressure_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/pressure.svg */ "./app/apps/WeatherForecast/img/pressure.svg");
/* harmony import */ var _img_pressure_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_pressure_svg__WEBPACK_IMPORTED_MODULE_7__);








function WeatherHourDetail(props) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context_jsx__WEBPACK_IMPORTED_MODULE_1__.default),
      daysOfWeek = _useContext.daysOfWeek,
      weatherStatus = _useContext.weatherStatus;

  function Line() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "weather-hour-detail__line"
    });
  }

  if (!props.hourDetail) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail weather-app__carousel-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__detail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__temperature detail-p"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_temperature_svg__WEBPACK_IMPORTED_MODULE_2___default()),
    alt: "temperature"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__title"
  }, "Temperature"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Average ", Math.round(props.hourDetail.main.temp), "\xB0C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Feels like ", Math.round(props.hourDetail.main.feels_like), "\xB0C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__wind detail-p"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_wind_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    alt: "wind"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__title"
  }, "Wind"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Speed ", props.hourDetail.wind.speed, " m/s")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__pressure detail-p"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_pressure_svg__WEBPACK_IMPORTED_MODULE_7___default()),
    alt: "pressure"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__title"
  }, "Pressure"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, props.hourDetail.main.pressure, " pressure unit \"hPa\"")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__humidity detail-p"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_umbrella_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    alt: "umbrella"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__title"
  }, "Humidity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, props.hourDetail.main.humidity, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__pop detail-p"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_drop_svg__WEBPACK_IMPORTED_MODULE_3___default()),
    alt: "drop"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__title"
  }, "Rainfall"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, props.hourDetail.pop, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__cloudy detail-p"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_cloud_svg__WEBPACK_IMPORTED_MODULE_6___default()),
    alt: "cloud"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__title"
  }, "Cloudy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, props.hourDetail.clouds.all, "%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Line, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__header-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__city"
  }, props.city), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__day"
  }, daysOfWeek(props.hourDetail)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__date"
  }, props.hourDetail.dt_txt.slice(0, 11)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__time"
  }, props.hourDetail.dt_txt.slice(11, 16))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__img-status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-hour-detail__img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: weatherStatus(props.hourDetail),
    alt: ""
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "close",
    onClick: function onClick() {
      return props.closeDetail();
    }
  }));
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
/* harmony import */ var _WeatherHourDetail_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WeatherHourDetail.jsx */ "./app/apps/WeatherForecast/content/WeatherHourDetail.jsx");
/* harmony import */ var _Context_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context.jsx */ "./app/apps/WeatherForecast/Context.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function WeatherDay(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      detailsData = _useState2[0],
      setDetailsData = _useState2[1];

  var weatherToday = document.querySelector('#weather-today-carousel');

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context_jsx__WEBPACK_IMPORTED_MODULE_4__.default),
      daysOfWeek = _useContext.daysOfWeek;

  function handlerDetails(data) {
    setDetailsData(data);
    openDetail();
  }

  function openDetail() {
    weatherToday.style.transition = 'margin-left 0.5s';
    weatherToday.style.marginLeft = '-100%';
  }

  function closeDetail() {
    weatherToday.style.transition = 'margin-left 0.5s';
    weatherToday.style.marginLeft = '0';
  }

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app__weather-today-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app__weather-today-carousel-container",
    id: "weather-today-carousel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app__weather-today-content weather-app__carousel-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app__weather-today-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "weather-app__weather-today-city"
  }, props.city), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "weather-app__weather-today-day"
  }, props.weatherData ? daysOfWeek(props.weatherData[0]) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app__weather-today-date"
  }, props.weatherData ? props.weatherData[0].dt_txt.slice(0, 10) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app__weather-today"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SmallLine, null), props.weatherData ? props.weatherData.slice(0, 8).map(function (el, index) {
    return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WeatherHour_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
      weatherDataHour: el,
      handlerDetails: handlerDetails,
      key: index
    }), index != 7 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Line, {
      key: index + 2
    }) : null];
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_header_Loader_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SmallLine, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WeatherHourDetail_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {
    hourDetail: detailsData,
    city: props.city,
    closeDetail: closeDetail
  })));
}

/***/ }),

/***/ "./app/apps/WeatherForecast/content/WeatherWeek.jsx":
/*!**********************************************************!*\
  !*** ./app/apps/WeatherForecast/content/WeatherWeek.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherWeek)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var _WeatherDay_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeatherDay.jsx */ "./app/apps/WeatherForecast/content/WeatherDay.jsx");


function WeatherWeek(props) {
  var weatherData = props.weatherData;

  function getWeatherArr() {
    var weatherDayArr = [];

    if (weatherData) {
      var day = new Date(props.weatherData[0].dt_txt).getDay();

      for (var i = 0; i <= weatherData.length - 8; i++) {
        var newDay = new Date(weatherData[i].dt_txt).getDay();
        if (day === newDay) continue;
        day = newDay;
        weatherDayArr.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WeatherDay_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
          setWeatherData: props.setWeatherData,
          weatherDay: weatherData.slice(i, i + 8),
          dayNum: day,
          key: i
        }));
        i + 8;
      }
    }

    return weatherDayArr;
  }

  return !weatherData ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app__weather-week"
  }, getWeatherArr());
}

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "city-\u200B\u200Bnot-found"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: " slideSource"
  }, "\u0421ity \u200B\u200Bnot found")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchBar_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {
    handleKeyPress: props.handleKeyPress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: (_img_moon_svg__WEBPACK_IMPORTED_MODULE_2___default()),
    alt: "moon",
    className: "weather-app__header-img"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "weather-app__title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Weather"))));
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
    type: "text",
    placeholder: "City",
    onKeyPress: function onKeyPress(event) {
      return props.handleKeyPress(event);
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
/* harmony import */ var _apps_ToDoList_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps/ToDoList/index.jsx */ "./app/apps/ToDoList/index.jsx");
/* harmony import */ var _apps_ToDoList_js_scrollBarFix_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apps/ToDoList/js/scrollBarFix.jsx */ "./app/apps/ToDoList/js/scrollBarFix.jsx");



 //open app-menu

document.addEventListener("click", function (e) {
  if (e.target.closest(".about-app-section__button-cls")) {
    var menu = e.target.closest(".about-app-section");
    menu.style.transition = "right 0.15s ease-in";
    console.log(menu.offsetWidth);
    menu.style.right = "-" + menu.offsetWidth + "px";
  }
}); //close app-menu

document.addEventListener("click", function (e) {
  var target = e.target.closest(".about-app-section-open");

  if (target) {
    var menu = document.querySelector("#".concat(target.dataset.id));
    menu.style.transition = "right 0.1s linear";
    menu.style.right = "0";
  }
});

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

/***/ "./app/apps/ToDoList/img/add.svg":
/*!***************************************!*\
  !*** ./app/apps/ToDoList/img/add.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/add.svg";

/***/ }),

/***/ "./app/apps/ToDoList/img/cancel.svg":
/*!******************************************!*\
  !*** ./app/apps/ToDoList/img/cancel.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/cancel.svg";

/***/ }),

/***/ "./app/apps/ToDoList/img/depth.svg":
/*!*****************************************!*\
  !*** ./app/apps/ToDoList/img/depth.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/depth.svg";

/***/ }),

/***/ "./app/apps/ToDoList/img/document.svg":
/*!********************************************!*\
  !*** ./app/apps/ToDoList/img/document.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/document.svg";

/***/ }),

/***/ "./app/apps/ToDoList/img/down-arrow.svg":
/*!**********************************************!*\
  !*** ./app/apps/ToDoList/img/down-arrow.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/down-arrow.svg";

/***/ }),

/***/ "./app/apps/ToDoList/img/folder.svg":
/*!******************************************!*\
  !*** ./app/apps/ToDoList/img/folder.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/folder.svg";

/***/ }),

/***/ "./app/apps/ToDoList/img/left-arrow.svg":
/*!**********************************************!*\
  !*** ./app/apps/ToDoList/img/left-arrow.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/left-arrow.svg";

/***/ }),

/***/ "./app/apps/ToDoList/img/search.svg":
/*!******************************************!*\
  !*** ./app/apps/ToDoList/img/search.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/search.svg";

/***/ }),

/***/ "./app/apps/ToDoList/img/submenu.svg":
/*!*******************************************!*\
  !*** ./app/apps/ToDoList/img/submenu.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/submenu.svg";

/***/ }),

/***/ "./app/apps/ToDoList/img/trashBin.svg":
/*!********************************************!*\
  !*** ./app/apps/ToDoList/img/trashBin.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/trashBin.svg";

/***/ }),

/***/ "./app/apps/WeatherForecast/img/cloud.svg":
/*!************************************************!*\
  !*** ./app/apps/WeatherForecast/img/cloud.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/cloud.svg";

/***/ }),

/***/ "./app/apps/WeatherForecast/img/drop.svg":
/*!***********************************************!*\
  !*** ./app/apps/WeatherForecast/img/drop.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/drop.svg";

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

/***/ "./app/apps/WeatherForecast/img/pressure.svg":
/*!***************************************************!*\
  !*** ./app/apps/WeatherForecast/img/pressure.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/pressure.svg";

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

/***/ "./app/apps/WeatherForecast/img/temperature.svg":
/*!******************************************************!*\
  !*** ./app/apps/WeatherForecast/img/temperature.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/temperature.svg";

/***/ }),

/***/ "./app/apps/WeatherForecast/img/umbrella.svg":
/*!***************************************************!*\
  !*** ./app/apps/WeatherForecast/img/umbrella.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/umbrella.svg";

/***/ }),

/***/ "./app/apps/WeatherForecast/img/wind.svg":
/*!***********************************************!*\
  !*** ./app/apps/WeatherForecast/img/wind.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "public/images/wind.svg";

/***/ }),

/***/ "./app/apps/ToDoList/styles/todolist-styles.scss":
/*!*******************************************************!*\
  !*** ./app/apps/ToDoList/styles/todolist-styles.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
//# sourceMappingURL=main.7fb737ae6293e4c630c0.js.map