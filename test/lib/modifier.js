const assert = require('chai').assert;

const Modifier = require('../../lib/modifier');
const Attribute = require('../../lib/attribute');

describe('Modifier', function() {
  const attribute = new Attribute('Attribute');
  const modify = (value) => 0;

  describe('constructor', function() {
    it('should assign the attribute and a modify function', function() {
      const modifier = new Modifier(attribute, modify);
      assert.equal(modifier.attribute, attribute);
      assert.equal(modifier.modify, modify);
    })
  });

  describe('toString', function() {
    it('should return a string', function() {
      const modifier = new Modifier(attribute, modify);
      assert.isString(modifier.toString());
    });
  });

  describe('toJSON', function() {
    it('should return an object', function() {
      const modifier = new Modifier(attribute, modify);
      assert.isObject(modifier.toJSON());
    });
  });
});
