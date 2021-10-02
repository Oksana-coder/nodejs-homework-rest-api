const fs = require('fs/promises');
const path = require('path');
const listContacts = require('./listContacts');

const contactsPath = path.resolve('db/contacts.json');

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(contact => contact.id === contactId);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { ...contacts[idx], ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts[idx];
};

module.exports = updateContact;
