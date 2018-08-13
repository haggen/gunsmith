const assert = require('chai').assert;
const Weapon = require('../../lib/weapon');

describe('Weapon', function() {
  describe('constructor', function() {
    // ...
  });

  describe('toString', function() {
    it('should return a string', function() {
      const weapon = new Weapon('Weapon');
      assert.isString(weapon.toString());
    });
  });

  describe('toJSON', function() {
    it('should return an object', function() {
      const weapon = new Weapon('Weapon');
      assert.isObject(weapon.toJSON());
    });
  });
});
