const Item = require('./item');

class Attachment extends Item {
  constructor(type, name) {
    if (!type) throw TypeError('slot type is required');
    super(name);
    this.slotType = type;
    this.modifiers = [];
  }

  toJSON() {
    const { slotType } = this;
    const modifiers = this.modifiers.map((modifier) => modifier.toString());
    return {
      ...super.toJSON(),
      slotType,
      modifiers,
    };
  }
};

module.exports = Attachment;
