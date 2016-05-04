'use strict';

import should from 'should';

import ctxeval from '../src/ctxeval';

describe('Context Eval', () => {

  it('should eval raw', () => {
    ctxeval('"a"').should.be.exactly('a');
    ctxeval('40 + 2').should.be.exactly(42);
  });

  it('should not eval outside a context', () => {
    let a = 0;
    (function tryAffectOutsideCtx() { ctxeval('a++'); })
      .should.throw('a is not defined');
  });

  it('should eval inside a context', () => {
    const ctx = {};
    ctxeval('a = 42', ctx);
    ctx.should.have.property('a');
    ctx.a.should.exactly(42);
  });

});

/*const util = require('util');
const assert = require('assert');
const objc = require('./objComputer');

const source = {
  name: 'Brice Colucci',
  more: {
    birthday: '1988-09-27',
    isSingle: 'false'
  },
  children: {
    names: [ 'Ethan', 'Charlie', 'John' ],
    ages: [ '3.5', '0.6', '6' ],
    numbers: [ 1, 3, 2 ]
  },
  useless: 42
};

const expected = {
  fullname: 'Brice Colucci',
  birthday: new Date('1988-09-27'),
  age: 28,
  children: [
    { name: 'Ethan', _age: 3.5 },
    { name: 'Charlie', _age: 0.6 }
  ]
};

const childrenOperations = [
  objc.rename('_age', 'age'),
  objc.cast('age', Number),
  objc.update('children', value => value.names.map((name, i) => {
    return { name: name, _age: value.ages[i] };
  })),
  //objc.remove('children[2]'),
  //objc.cast('children._age', Number),
  //objc.rename('children._age', 'age')
];

const toBool = o => {
  if (typeof o === 'string')
    return o.toLowerCase() === 'true';
  if (typeof o === 'number')
    return o > 0;
  return o !== null && o !== undefined;
};

const operations = [
  objc.rename('name', 'fullname'),
  objc.rename('more.isSingle', 'single'),
  objc.cast('more.birthday', Date),
  objc.update('more.single', value => toBool(value)),
  objc.remove('useless'),
  objc.remove('children.numbers[1]'),
  objc.create('numbers.one.list', source => source.children.numbers),
  objc.create('age', source => new Date().getFullYear() - new Date(source.more.birthday).getFullYear()),
  objc.update('numbers.one.list', value => value.concat(3)),
  objc.update('children', value => value.names.map((name, i) => {
    return { name: name, _age: value.ages[i] };
  })),
  objc.compute('children', childrenOperations),
  { type: 'move' }
];

//assert.strictEqual(objc.eval('name', source), source.name);
//assert.strictEqual(objc.eval('children.names', source), source.children.names);
//assert.strictEqual(objc.eval('children.names[0]', source), source.children.names[0]);
//assert.strictEqual(objc.eval('children[0].name', expected), expected.children[0].name);

const opts = {};
const computer = new objc.ObjComputer(operations, opts);
const computed = computer.build(source);
console.log('\n\n', util.inspect(computed, {depth: null}));
//assert.deepStrictEqual(computed, expected);*/
