"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theRoutes = void 0;
var _index = require("../index");
var KEY = function KEY() {
  return _index.appConfig.storageKey;
};
var theRoutes = {
  add: function add(newRoute) {
    var routes = JSON.parse(global.sessionStorage.getItem(KEY()));
    routes.push(newRoute);
    global.sessionStorage.setItem(KEY(), JSON.stringify(routes));
  },
  get: function get() {
    var routes = JSON.parse(global.sessionStorage.getItem(KEY()));
    return routes;
  },
  init: function init(initial) {
    global.sessionStorage.setItem(KEY(), JSON.stringify([initial]));
  },
  last: function last() {
    var routes = JSON.parse(global.sessionStorage.getItem(KEY()));
    return routes[routes.length - 1];
  },
  length: function length() {
    var routes = JSON.parse(global.sessionStorage.getItem(KEY()));
    return routes.length;
  },
  pop: function pop() {
    var routes = JSON.parse(global.sessionStorage.getItem(KEY()));
    routes.pop();
    global.sessionStorage.setItem(KEY(), JSON.stringify(routes));
  },
  previous: function previous() {
    var routes = JSON.parse(global.sessionStorage.getItem(KEY()));
    return routes[routes.length - 2];
  }
};
exports.theRoutes = theRoutes;