const { Contact } = require('../../models/contacts');

const listContacts = async (req, res) => {
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;
  const { _id } = req.user;
  let filter = { owner: _id };
  if (favorite) {
    filter = { owner: _id, favorite: true };
  }
  const contacts = await Contact.find(filter, '', { skip, limit: +limit }).populate('owner', 'email');
  res.json({
    status: 'success',
    code: 200,
    data: {
      contacts,
      quantity: contacts.length
    }
  });
};

module.exports = listContacts;
