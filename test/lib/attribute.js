const assert = require('chai').assert;
const Attribute = require('../../lib/attribute');

describe('Attribute', function() {
  describe('constructor', function() {
    it('should assign attribute name, min, and max values', function() {
      const attribute = new Attribute('Attribute', 0, 100);
      assert.equal(attribute.name, 'Attribute');
      assert.equal(attribute.min, 0);
      assert.equal(attribute.max, 100);
    });

    it('should require a name', function() {
      assert.throws(_ => new Attribute(), TypeError, /name/);
    });

    it('should default min value to 0', function() {
      const attribute = new Attribute('Attribute');
      assert.equal(attribute.min, 0);
    });

    it('should default max value to Infinity', function() {
      const attribute = new Attribute('Attribute', 0);
      assert.equal(attribute.max, Infinity);
    });
  });

  describe('toString', function() {
    it('should return a string', function() {
      const attribute = new Attribute('Attribute');
      assert.isString(attribute.toString());
    });
  });

  describe('toJSON', function() {
    it('should return an object', function() {
      const attribute = new Attribute('Attribute');
      assert.isObject(attribute.toJSON());
    });
  });

  describe('constraint', function() {
    it('should constraint given value between min and max', function() {
      const attribute = new Attribute('Attribute', 25, 75);
      assert.equal(attribute.constraint(0), attribute.min);
      assert.equal(attribute.constraint(100), attribute.max);
    });

    it('should round returning value', function() {
      const attribute = new Attribute('Attribute');
      assert.equal(attribute.constraint(1.5), Math.round(1.5));
    });
  });
});
