'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

var _ctxeval = require('./ctxeval');

var _ctxeval2 = _interopRequireDefault(_ctxeval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectTransformer = function ObjectTransformer() {
  _classCallCheck(this, ObjectTransformer);
};

/*const FIELD_OP_FROM = 'from';
const FIELD_OP_TO = 'to';

const EXPANDABLE_FIELDS = [
  FIELD_OP_FROM,
  FIELD_OP_TO
];

const EXPAND_CHAR = '.';
const AFFECT = ' = ';

const IS_ARRAY_ITEM_REG = /^[a-z\.\_0-9]+(\[([0-9]+)\])+$/i;

const _eval = (script, ctx) => (new vm.Script(script)).runInContext(new vm.createContext(ctx));

const isExpanded = str => str.indexOf(EXPAND_CHAR) > -1;

const Filter = (() => {
  let object = { byType: type => operation => operation.type === type };
  OPERATIONS.forEach(operation => object[operation] = object.byType(operation));
  return object;
})();

const notObj = obj => [undefined, null].indexOf(obj) > -1;
const isArrayItemPath = str => str.match(IS_ARRAY_ITEM_REG);
const stringify = obj => ['number', 'boolean'].indexOf(typeof obj) === -1 ? JSON.stringify(obj) : obj;

const ObjectTransformer = function (operations, opts) {

  opts = opts || {};

  if (!Array.isArray(operations))
    operations = [ operations ];

  this.operations = operations;
  this.opts = opts;

  let normFields = obj => {
    let outObj = {};
    Object.keys(obj).forEach(key => {
      let nKey = String(key).toLowerCase().trim();
      let nValue = obj[key];
      if (typeof nValue === 'object') nValue = normFields(nValue);
      outObj[nKey] = nValue;
    });
    return outObj;
  };

  let build = source => {

    const sourceIsArray = Array.isArray(source);

    const parentPath = from => {
      const path = from.split(EXPAND_CHAR);
      return path.length === 1 ? null : path.slice(0, path.length - 1);
    };

    const parentValue = from => {
      const path = parentPath(from);
      return path ? _eval(path, source) : source;
    };

    const applyArrayItemOperation = operation => {
      console.log('IN', out);
      var itemComputer = new ObjectTransformer(operation, this.opts);
      parentValue(operation.from).forEach((value, i) => out[i] = itemComputer.build(value));
      //applyUpdate(update(operation.from, comp.build));
      console.log('OUT', out, '\n');
    };

    const applyCreate = operation => {
      const path = operation.to.split(EXPAND_CHAR);
      if (path.length === 1)
        return out[path.shift()] = operation.from(out);
      const firstChild = path.shift();
      const finalValue = operation.from(out);
      if (notObj(out[firstChild]))
        out[firstChild] = {};
      let currentPath = firstChild;
      while (path.length) {
        const child = path.shift();
        const val = path.length ? {} : finalValue;
        currentPath += (EXPAND_CHAR + child);
        if (notObj(_eval(currentPath, out)))
          _eval(currentPath + AFFECT + JSON.stringify(val), out);
      }
    };

    const applyRemove = operation => {
      if (sourceIsArray) return applyArrayItemOperation(operation);
      const arrayItem = isArrayItemPath(operation.from);
      if (!arrayItem)
        return _eval('delete ' + operation.from, out);
      const arrayPath = operation.from.substr(0, operation.from.length - arrayItem[1].length);
      let array = _eval(arrayPath, out);
      array.splice(Number(arrayItem[2]), 1);
      _eval(arrayPath + AFFECT + stringify(array), out);
    };

    const applyCast = operation => {
      if (sourceIsArray) return applyArrayItemOperation(operation);
      let funcName = operation.to.name;
      if (operation.to === Date)
        funcName = 'new ' + funcName;
      const castOne = value => _eval(funcName + '(' + JSON.stringify(value) + ')');
      const cast = value => Array.isArray(value) ? value.map(castOne) : castOne(value);
      _eval(operation.from + '=' + stringify(cast(_eval(operation.from, out))), out);
    };

    const applyUpdate = operation => {
      if (sourceIsArray) return applyArrayItemOperation(operation);
      _eval(operation.from + '=' + stringify(operation.to(_eval(operation.from, out))), out);
    };

    const applyRename = operation => {
      if (sourceIsArray) return applyArrayItemOperation(operation);
      if (isExpanded(operation.from) && !isExpanded(operation.to)) {
        const _parentPath = parentPath(operation.from);
        operation.to = _parentPath + EXPAND_CHAR + operation.to;
      }
      applyCreate(create(operation.to, _eval(operation.from, out)));
      applyRemove(remove(operation.from));
    };

    const applyCompute = operation => {
      if (sourceIsArray) return applyArrayItemOperation(operation);
      const childOperations = Object.keys(operation.operations).map(k => operation.operations[k]);
      const comp = new ObjectTransformer(childOperations, this.opts);
      applyUpdate(update(operation.from, comp.build));
    };

    const out = sourceIsArray ? source.slice() : JSON.parse(JSON.stringify(source));
    const _operations = operations.map(normFields);

    _operations.forEach((operation, step) => {

      if (OPERATIONS.indexOf(operation.type) === -1)
        return process.emitWarning('Unknown operation: ' + operation.type);

      switch (operation.type) {
        case OP_CREATE:
          return applyCreate(operation);
        case OP_REMOVE:
          return applyRemove(operation);
        case OP_CAST:
          return applyCast(operation);
        case OP_UPDATE:
          return applyUpdate(operation);
        case OP_RENAME:
          return applyRename(operation);
        case OP_COMPUTE:
          return applyCompute(operation);
      }

    });

    return out;
  };

  return { build: build };
};*/

exports.default = ObjectTransformer;