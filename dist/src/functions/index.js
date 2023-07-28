"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _backFunction = require("./backFunction");
Object.keys(_backFunction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _backFunction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _backFunction[key];
    }
  });
});
var _closeAll = require("./closeAll");
Object.keys(_closeAll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _closeAll[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _closeAll[key];
    }
  });
});
var _errorHandlers = require("./errorHandlers");
Object.keys(_errorHandlers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _errorHandlers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _errorHandlers[key];
    }
  });
});
var _theRoutes = require("./theRoutes");
Object.keys(_theRoutes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _theRoutes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _theRoutes[key];
    }
  });
});
var _pageHandlers = require("./pageHandlers");
Object.keys(_pageHandlers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _pageHandlers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pageHandlers[key];
    }
  });
});