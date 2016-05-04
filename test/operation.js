'use strict';

import should from 'should';

import operation from '../src/operation';

const isOpTriplet = operation => {
  operation.should.have.property('type');
  operation.should.have.property('from');
  operation.should.have.property('to');
};

describe('Operation', () => {

  it('Should Remove', () => {
    const removeOp = operation.remove('name');
    removeOp.should.have.property('type');
    removeOp.should.have.property('from');
    removeOp.type.should.be.exactly('remove');
    removeOp.from.should.be.exactly('name');
  });

  it('Should Rename', () => {
    const renameOp = operation.rename('name', 'fullname');
    isOpTriplet(renameOp);
    renameOp.type.should.be.exactly('rename');
    renameOp.from.should.be.exactly('name');
    renameOp.to.should.be.exactly('fullname');
  });

  it('Should Transform', () => {
    const operations = [ 1, 2, 3 ];
    const transformOp = operation.transform('children', operations);
    transformOp.should.have.property('type');
    transformOp.should.have.property('from');
    transformOp.should.have.property('operations');
    transformOp.type.should.be.exactly('transform');
    transformOp.from.should.be.exactly('children');
    transformOp.operations.should.be.exactly(operations);
  });

  describe('Should Create', () => {

    it('From function', () => {
      const createFn = () => [ 'brice', 'colucci' ].join(' ');
      const createOp = operation.create('name', createFn);
      isOpTriplet(createOp);
      createOp.type.should.be.exactly('create');
      createOp.from.should.be.exactly(createFn);
      createOp.to.should.be.exactly('name');
      createOp.from().should.be.exactly('brice colucci');
    });

    it('From value', () => {
      const createOp = operation.create('age', 42);
      isOpTriplet(createOp);
      createOp.type.should.be.exactly('create');
      createOp.from.should.be.a.Function();
      createOp.to.should.be.exactly('age');
      createOp.from().should.be.exactly(42);
    });

  });

  describe('Should Update', () => {

    it('From function', () => {
      const updateFn = value => value.toUpperCase();
      const updateOp = operation.update('name', updateFn);
      isOpTriplet(updateOp);
      updateOp.type.should.be.exactly('update');
      updateOp.from.should.be.exactly('name');
      updateOp.to.should.be.exactly(updateFn);
      updateOp.to('brice').should.be.exactly('BRICE');
    });

    it('From value', () => {
      const updateOp = operation.update('age', 28);
      isOpTriplet(updateOp);
      updateOp.type.should.be.exactly('update');
      updateOp.from.should.be.exactly('age');
      updateOp.to.should.be.a.Function();
      updateOp.to(42).should.be.exactly(28);
    });

  });

  describe('Should Cast', () => {

    it('From function', () => {
      const castOp = operation.cast('age', String);
      isOpTriplet(castOp);
      castOp.type.should.be.exactly('cast');
      castOp.from.should.be.exactly('age');
      castOp.to.should.be.a.Function();
      castOp.to(28).should.be.exactly('28');
    });

    it('From value', () => {
      global.castFn = value => Number(value);
      const castOp = operation.cast('age', 'castFn');
      isOpTriplet(castOp);
      castOp.type.should.be.exactly('cast');
      castOp.from.should.be.exactly('age');
      castOp.to.should.be.a.Function();
      castOp.to('28').should.be.exactly(28);
    });

  });

});
