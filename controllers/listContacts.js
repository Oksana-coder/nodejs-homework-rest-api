const { Contact } = require('../models/contacts');

const listContacts = async (req, res, next) => {
  const contacts = await Contact.find({});
  res.json({
    status: 'success',
    code: 200,
    data: {
      contacts
    }
  });
};

module.exports = listContacts;
