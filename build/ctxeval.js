'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vm = require('vm');

var _vm2 = _interopRequireDefault(_vm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (script, ctx) {
  return new _vm2.default.Script(script).runInContext(new _vm2.default.createContext(ctx));
};