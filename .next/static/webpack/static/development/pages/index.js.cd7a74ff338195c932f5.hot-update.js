webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Drawer/index.js":
/*!************************************!*\
  !*** ./components/Drawer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./components/Drawer/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "/Users/jwithington/cdx-react-thing/components/Drawer/index.js";



var Drawer = function Drawer(props) {
  var children = props.children,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children"]);

  var drawerContent = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      isOpen = _React$useState2[0],
      toggleDrawer = _React$useState2[1];

  var openClass = !isOpen && _styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.closed;
  var array = [_styles_css__WEBPACK_IMPORTED_MODULE_3___default.a.inner, openClass].join(' ');
  var contentHeight = isOpen ? drawerContent.current.clientHeight : 0;
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    console.log(drawerContent.current.clientHeight);
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "Drawer"
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: array,
    style: drawerContent.current && {
      height: "{contentHeight}px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    ref: drawerContent,
    id: "Drawer-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, children)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: function onClick() {
      return toggleDrawer(!isOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, isOpen ? 'Close Drawer' : 'Open Drawer'));
};

/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ })

})
//# sourceMappingURL=index.js.cd7a74ff338195c932f5.hot-update.js.map