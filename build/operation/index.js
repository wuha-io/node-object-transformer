'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

var _remove = require('./remove');

var _remove2 = _interopRequireDefault(_remove);

var _rename = require('./rename');

var _rename2 = _interopRequireDefault(_rename);

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

var _cast = require('./cast');

var _cast2 = _interopRequireDefault(_cast);

var _transform = require('./transform');

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: _create2.default,
  remove: _remove2.default,
  rename: _rename2.default,
  update: _update2.default,
  cast: _cast2.default,
  transform: _transform2.default,
  list: [_create2.default, _remove2.default, _rename2.default, _update2.default, _cast2.default, _transform2.default]
};