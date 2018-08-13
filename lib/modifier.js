class Modifier {
  constructor(attribute, modify) {
    this.attribute = attribute;
    this.modify = modify;
  }

  toString() {
    return this.attribute.toString();
  }

  toJSON() {
    return {
      attribute: this.attribute.toString(),
      modify: this.modify.toString(),
    }
  }
};

module.exports = Modifier;
