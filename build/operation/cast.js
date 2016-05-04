'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (from, to) {
  return {
    type: 'cast',
    from: from,
    to: _ramda2.default.equals('Function', _ramda2.default.type(to)) ? to : global[to]
  };
};