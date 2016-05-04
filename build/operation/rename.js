'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (from, to) {
  return {
    type: 'rename',
    from: from,
    to: to
  };
};