"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flipClockwise = void 0;
var flipClockwise = {
  "this": {
    transform: ["rotateY(0deg)", "rotateY(180deg)"]
  },
  next: {
    transform: ["rotateY(-180deg)", "rotateY(0deg)"]
  }
};
exports.flipClockwise = flipClockwise;