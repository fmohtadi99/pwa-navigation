"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backFunction = void 0;
var _index = require("../index");
var _theRoutes = require("./theRoutes");
var _drawer = require("../libs/drawer");
var _router = require("../libs/router");
var backFunction = function backFunction() {
  global.history.pushState(null, null, location.href);
  var drawer = document.getElementById(_index.appConfig.classDrawer);
  if (drawer) {
    var drawerOpened = drawer.getAttribute("data-open");
    if (drawerOpened == "opened") return (0, _drawer.closeDrawer)();
  }
  if (_theRoutes.theRoutes.length() > 1) return (0, _router.goBack)();
};
exports.backFunction = backFunction;