const Attachment = require('./lib/attachment');
const Attribute = require('./lib/attribute');
const Modifier = require('./lib/modifier');
const Slot = require('./lib/slot');
const Weapon = require('./lib/weapon');


const attribute = new Attribute('Attribute');
const modifier = new Modifier(attribute, (value) => value + 1);
const attachment = new Attachment(Slot.MUZZLE, 'Supressor');
attachment.modifiers.push(modifier);
const slot = new Slot(Slot.MUZZLE);
const weapon = new Weapon('Weapon');
weapon.attributes.set(attribute, 0);
weapon.slots.push(slot);
weapon.attach(attachment);

console.log(JSON.stringify(weapon));
