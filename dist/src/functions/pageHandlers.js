"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePage = exports.createPage = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../index");
var _router = require("../libs/router");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } //@ts-check
var createPage = function createPage(component, id, zIndexIncrement, options) {
  var route = /*#__PURE__*/_react["default"].createElement(component, options);
  var styleKeys = Object.keys(_index.userConfig.transitionStyle.next);
  var style = {};
  styleKeys.forEach(function (key) {
    style[key] = _index.userConfig.transitionStyle.next[key][0];
  });

  /**
   * @type {{
   * 	type: "section",
   * 	props: {
   * 		id: string;
   * 		className: string;
   * 		style: React.CSSProperties;
   * 	},
   *		child: React.ReactNode;
   * }}
   */
  var section = {
    type: "section",
    props: {
      id: id,
      className: _index.appConfig.classRouter,
      style: _objectSpread(_objectSpread({}, style), {}, {
        transitionTimingFunction: _index.userConfig.transitionEase,
        zIndex: _index.userConfig.zIndex + zIndexIncrement
      })
    },
    child: route
  };
  _router.$routes.push(section);
  (0, _router.$updateRoutes)(new Date().getTime());
};
exports.createPage = createPage;
var removePage = function removePage() {
  _router.$routes.pop();
  (0, _router.$updateRoutes)(new Date().getTime());
};
exports.removePage = removePage;