const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const listContacts = require('./listContacts');

const contactsPath = path.resolve('db/contacts.json');

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = { ...body, id: uuidv4() };
  const newContacts = [...contacts, newContact];
  await fs.writeFile(contactsPath, JSON.stringify(newContacts));
  return newContact;
};

module.exports = addContact;
