'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (to, fn) {
  return {
    type: 'create',
    from: _ramda2.default.equals('Function', _ramda2.default.type(fn)) ? fn : function () {
      return fn;
    },
    to: to
  };
};