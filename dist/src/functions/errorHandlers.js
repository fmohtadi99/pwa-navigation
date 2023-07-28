"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandlers = void 0;
var _index = require("../index");
var errorHandlers = {
  mismatchTiming: function mismatchTiming(delay, speed) {
    if (delay >= speed) throw new Error("Action Delay is less than animation speed.");
  },
  noDrawer: function noDrawer(component) {
    if (!component) throw new Error("Drawer component is not defined. Please check if you have added it to the context.\nRefer to <Navigation drawer={...} />.");
  },
  notFound: function notFound(screenId) {
    var screenFound = _index.registeredScreens.find(function (screen) {
      return screen.id == screenId;
    });
    if (!screenFound) {
      throw new Error("Screen with id \"".concat(screenId, "\" not found. Please check if you have added it to the context.\nRefer to <Navigation screens={...} />."));
    }
  },
  styleOverload: function styleOverload(style) {
    var items = [style["this"], style.next];
    items.forEach(function (item) {
      var itemKeys = Object.keys(item);
      itemKeys.forEach(function (property) {
        if (item[property].length < 2) throw new Error("Style underload. Please check if you have added less than 2 styles in the array.");
        if (item[property].length > 2) throw new Error("Style overload. Please check if you have added more than 2 styles in the array.");
        item[property].forEach(function (value) {
          if (typeof value !== "string") throw new Error("Style value must be a string. Please check if you have added a string value in the array.");
        });
      });
    });
  }
};
exports.errorHandlers = errorHandlers;