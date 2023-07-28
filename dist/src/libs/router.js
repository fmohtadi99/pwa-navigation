"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigate = exports.goBack = exports.Router = exports.$updateRoutes = exports.$routes = void 0;
var _react = _interopRequireWildcard(require("react"));
var _index = require("../index");
var _drawer = require("./drawer");
var _functions = require("../functions");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @param {string} screenId
 * @param {object} options
 */
var navigate = function navigate(screenId, options) {
  (0, _drawer.closeDrawer)();
  _functions.errorHandlers.notFound(screenId); // Check if screenId is registered
  _index.userConfig.disableBackFunction && window.history.pushState(null, null, location.href);
  var length = _functions.theRoutes.length();
  var uid = [_index.appConfig.packageName, screenId, length].join("-");
  var component = _index.registeredScreens.find(function (c) {
    return c.id === screenId;
  });
  (0, _functions.createPage)(component.screen, uid, length, options);

  // Apply transition style for current screen
  var thisScreenId = _functions.theRoutes.last();
  var thisScreen = document.getElementById(thisScreenId);
  thisScreen.style.transitionDuration = "".concat(_index.userConfig.transitionDuration / 1000, "s");
  var thisKeys = Object.keys(_index.userConfig.transitionStyle["this"]);
  thisKeys.forEach(function (key) {
    thisScreen.style[key] = _index.userConfig.transitionStyle["this"][key][1];
  });

  // Apply transition style for next screen
  setTimeout(function () {
    var nextScreen = document.getElementById(uid);
    var Y = window.scrollY;
    nextScreen.style.top = "".concat(Y, "px");
    nextScreen.style.transitionDuration = "".concat(_index.userConfig.transitionDuration / 1000, "s");
    var nextKeys = Object.keys(_index.userConfig.transitionStyle.next);
    nextKeys.forEach(function (key) {
      nextScreen.style[key] = _index.userConfig.transitionStyle.next[key][1];
    });
    _functions.theRoutes.add(uid);
  }, 10);
};
exports.navigate = navigate;
var goBack = function goBack() {
  // Apply transition style for previous screen
  var previousScreenId = _functions.theRoutes.previous();
  var previousScreen = document.getElementById(previousScreenId);
  previousScreen.style.transitionDuration = "".concat(_index.userConfig.transitionDuration / 1500, "s");
  var previousKeys = Object.keys(_index.userConfig.transitionStyle["this"]);
  previousKeys.forEach(function (key) {
    previousScreen.style[key] = _index.userConfig.transitionStyle["this"][key][0];
  });

  // Apply transition style for last screen
  var lastScreenId = _functions.theRoutes.last();
  var lastScreen = document.getElementById(lastScreenId);
  lastScreen.style.transitionDuration = "".concat(_index.userConfig.transitionDuration / 1500, "s");
  var lastKeys = Object.keys(_index.userConfig.transitionStyle.next);
  lastKeys.forEach(function (key) {
    lastScreen.style[key] = _index.userConfig.transitionStyle.next[key][0];
  });
  setTimeout(function () {
    _functions.theRoutes.pop();
    (0, _functions.removePage)();
  }, _index.userConfig.transitionDuration / 1.5);
};
exports.goBack = goBack;
var $routes = [];
exports.$routes = $routes;
var $updateRoutes = function $updateRoutes(e) {
  return e;
};
exports.$updateRoutes = $updateRoutes;
var Router = function Router() {
  var _React$useState = _react["default"].useState(new Date().getTime()),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    routes = _React$useState2[0],
    setRoutes = _React$useState2[1];
  exports.$updateRoutes = $updateRoutes = setRoutes;
  return $routes.map(function (c, i) {
    return /*#__PURE__*/_react["default"].createElement(c.type, _objectSpread(_objectSpread({}, c.props), {}, {
      key: i
    }), c.child);
  });
};
exports.Router = Router;