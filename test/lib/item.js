const assert = require('chai').assert;
const Item = require('../../lib/item');

describe('Item', function() {
  describe('constructor', function() {
    it('should assign a name', function() {
      const item = new Item('Item');
      assert.equal(item.name, 'Item');
    });
  });

  describe('toString', function() {
    it('should return a string', function() {
      const item = new Item('Item');
      assert.isString(item.toString());
    });
  });

  describe('toJSON', function() {
    it('should return an object', function() {
      const item = new Item('Item');
      assert.isObject(item.toJSON());
    });
  });
});
