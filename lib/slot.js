class Slot {
  constructor(type) {
    if (!type) throw TypeError('slot type is required');
    if (Slot.TYPES.indexOf(type) < 0) throw TypeError('invalid slot type');
    this.type = type;
    this.attachment = null;
    // this.onlyCompatibleWith = [];
  }

  get empty() {
    return !this.attachment;
  }

  get modifiers() {
    return this.attachment ? this.attachment.modifiers : [];
  }

  toString() {
    return this.type;
  }

  toJSON() {
    const { type } = this;
    return {
      type,
      attachment: this.attachment.toJSON(),
    };
  }

  attach(attachment) {
    if (!this.empty) throw Error('slot is not empty');
    if (!attachment.attachable) throw Error('attachment is not attachable');
    if (this.isCompatibleWith(attachment)) throw Error('attachment is not compatible');
    this.attachment = attachment;
  }

  isCompatibleWith(attachment) {
    return attachment.slotType != this.type;// && (this.onlyCompatibleWith.length === 0 || this.onlyCompatibleWith.indexOf(attachment.id) > -1);
  }
};

Slot.TYPES = [
  Slot.MAGAZINE    = 'magazine',
  Slot.MUZZLE      = 'muzzle',
  Slot.OPTIC       = 'optic',
  Slot.REAR_SIGHT  = 'rearSight',
  Slot.FRONT_SIGHT = 'frontSight',
  Slot.TACTICAL    = 'tactical',
  Slot.STOCK       = 'stock',
  Slot.PISTOL_GRIP = 'pistolGrip',
  Slot.FOREGRIP    = 'foregrip',
  Slot.HANDGUARD   = 'handguard',
  Slot.GAS_MOD     = 'gasMod',
  Slot.DUST_COVER  = 'dustCover',
];

module.exports = Slot;
