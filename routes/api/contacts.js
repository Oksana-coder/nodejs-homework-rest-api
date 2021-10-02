const express = require('express');
const router = express.Router();
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact
} = require('../../controllers');

const { controllerWrapper, validation } = require('../../middlewares');
const { contactSchema } = require('../../schemas');

router.get('/', controllerWrapper(listContacts));

router.get('/:contactId', controllerWrapper(getContactById));

router.post('/', validation(contactSchema.schemaAdd), controllerWrapper(addContact));

router.delete('/:contactId', controllerWrapper(removeContact));

router.put('/:contactId', validation(contactSchema.schemaUpdate), controllerWrapper(updateContact));

module.exports = router;
