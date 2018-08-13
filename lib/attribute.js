class Attribute {
  constructor(name, min = 0, max = Infinity) {
    if (!name) throw TypeError('name is required');
    this.name = name;
    this.min = min;
    this.max = max;
  }

  toString() {
    return this.name;
  }

  toJSON() {
    const { name, min, max } = this;
    return {
      name,
      min,
      max
    };
  }

  constraint(value) {
    return Math.round(value > this.max ? this.max : (value < this.min ? this.min : value));
  }

  applyModifier(modifier, value) {
    if (modifier.attribute != this) throw Error('attribute modifier mismatch');
    return this.constraint(modifier.modify(value));
  }

  filterAndApplyModifiers(modifiers, value) {
    for (const modifier of modifiers) {
      if (modifier.attribute === this) {
        value = this.applyModifier(modifier, value);
      }
    }
    return value;
  }
}

Attribute.Ergonomics = new Attribute('Ergonomics', 0, 100);
Attribute.Recoil = new Attribute('Recoil', 40);
Attribute.Range = new Attribute('Range', 0, 1000);

module.exports = Attribute;
