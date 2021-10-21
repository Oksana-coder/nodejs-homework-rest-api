const { NotFound } = require('http-errors');
const { Contact } = require('../../models/contacts');

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      contact
    }
  });
};

module.exports = getContactById;
