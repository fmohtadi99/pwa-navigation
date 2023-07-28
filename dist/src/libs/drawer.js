"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openDrawer = exports.closeDrawer = exports.Drawer = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../index");
var _functions = require("../functions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var openDrawer = function openDrawer() {
  window.history.pushState(null, null, location.href);
  var drawer = document.getElementById(_index.appConfig.classDrawer);
  _functions.errorHandlers.noDrawer(drawer);
  drawer.setAttribute("data-open", "opened");
  var currentScreenId = _functions.theRoutes.last();
  var currentScreen = document.getElementById(currentScreenId);
  currentScreen.style.transform = "translateX(20%)";
  currentScreen.style.filter = "brightness(0.4)";
};
exports.openDrawer = openDrawer;
var closeDrawer = function closeDrawer() {
  var drawer = document.getElementById(_index.appConfig.classDrawer);
  if (!drawer) return;
  drawer.removeAttribute("data-open");
  var currentScreenId = _functions.theRoutes.last();
  var currentScreen = document.getElementById(currentScreenId);
  currentScreen.style.transform = "translateX(0px)";
  currentScreen.style.filter = "none";
};
exports.closeDrawer = closeDrawer;
var Drawer = function Drawer(_ref) {
  var component = _ref.component;
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: _index.appConfig.classDrawer,
    id: _index.appConfig.classDrawer,
    style: {
      zIndex: _index.userConfig.zIndex * 2
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _index.appConfig.classDrawer + "-cover",
    onClick: closeDrawer
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _index.appConfig.classDrawer + "-container"
  }, /*#__PURE__*/_react["default"].createElement(component)));
};
exports.Drawer = Drawer;