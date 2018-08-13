const assert = require('chai').assert;
const Attachment = require('../../lib/attachment');
const Slot = require('../../lib/slot');

describe('Attachment', function() {
  describe('constructor', function() {
    it('should assign slot type, and name', function() {
      const attachment = new Attachment(Slot.TYPES[0], 'Attachment');
      assert.equal(attachment.slotType, Slot.TYPES[0]);
      assert.equal(attachment.name, 'Attachment');
    });

    it('should require a slot type', function() {
      assert.throws(_ => new Attachment(), TypeError, /slot type/);
    });
  });

  describe('toString', function() {
    it('should return a string', function() {
      const attachment = new Attachment(Slot.TYPES[0], 'Attachment');
      assert.isString(attachment.toString());
    });
  });

  describe('toJSON', function() {
    it('should return an object', function() {
      const attachment = new Attachment(Slot.TYPES[0], 'Attachment');
      assert.isObject(attachment.toJSON());
    });
  });
});
