const assert = require('chai').assert;
const Slot = require('../../lib/slot');

describe('Slot', function() {
  describe('constructor', function() {
    it('should assign a slot type', function() {
      const slot = new Slot(Slot.TYPES[0]);
      assert.equal(slot.type, Slot.TYPES[0]);
    });
  });

  describe('toString', function() {
    it('should return a string', function() {
      const slot = new Slot(Slot.TYPES[0]);
      assert.isString(slot.toString());
    });
  });

  describe('toJSON', function() {
    it('should return an object', function() {
      const slot = new Slot(Slot.TYPES[0]);
      assert.isObject(slot.toJSON());
    });
  });
});
