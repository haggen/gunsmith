class Item {
  constructor(name) {
    if (!name) throw TypeError('name is required');
    this.name = name;
    this.slots = [];
  }

  get attachable() {
    return !!this.slotType;
  }

  get slottable() {
    return this.slots.length > 0;
  }

  toString() {
    return this.name;
  }

  toJSON() {
    const { name } = this;
    const slots = this.slots.map((slot) => slot.toJSON());
    return {
      name,
      slots,
    };
  }

  attach(attachment) {
    if (!this.slottable) throw Error('item is not slottable');
    if (!attachment.attachable) throw Error('item is not attachable');

    for (const slot of this.slots) {
      if (slot.type === attachment.slotType) {
        if (slot.empty) {
          slot.attach(attachment);
        }
      }
    }
  }
};

module.exports = Item;
