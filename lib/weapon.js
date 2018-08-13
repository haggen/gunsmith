const Item = require('./item');

class Weapon extends Item {
  constructor(name) {
    super(name);
    this.attributes = new Map();
  }

  toJSON() {
    const attributes = {};
    for (const [attribute, value] of this.getModifiedAttributes().entries()) {
      attributes[attribute.toString()] = value;
    }
    return {
      ...super.toJSON(),
      attributes
    };
  }

  getModifiedAttribute(attribute) {
    if (!this.attributes.has(attribute)) throw Error('item is missing the attribute');

    let value = this.attributes.get(attribute);
    for (const slot of this.slots) {
      value = attribute.filterAndApplyModifiers(slot.modifiers, value);
    }
    return value;
  }

  getModifiedAttributes() {
    const modifiedAttributes = new Map();
    for (const [attribute, value] of this.attributes.entries()) {
      modifiedAttributes.set(attribute, this.getModifiedAttribute(attribute));
    }
    return modifiedAttributes;
  }
};

module.exports = Weapon;
