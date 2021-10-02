const fs = require('fs/promises');
const path = require('path');
const listContacts = require('./listContacts');

const contactsPath = path.resolve('db/contacts.json');

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(contact => contact.id === contactId);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter(contact => contact.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  return true;
};

module.exports = removeContact;
