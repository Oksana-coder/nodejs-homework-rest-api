const { NotFound } = require('http-errors');
const { Contact } = require('../../models/contacts');

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'Contact successfully deleted'
  });
};

module.exports = removeContact;
