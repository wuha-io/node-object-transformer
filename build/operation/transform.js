'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (from, operations) {
  return {
    type: 'transform',
    from: from,
    operations: operations
  };
};