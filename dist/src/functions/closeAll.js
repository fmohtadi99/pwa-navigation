"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeAll = void 0;
var _theRoutes = require("./theRoutes");
var _router = require("../libs/router");
var closeAll = function closeAll() {
  // todo: improve the performance of this function
  var n = _theRoutes.theRoutes.length();
  if (n <= 1) return;
  for (var i = 1; i < n; i++) {
    setTimeout(_router.goBack, 200 * i);
  }
};
exports.closeAll = closeAll;