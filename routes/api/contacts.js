const express = require('express');
const router = express.Router();
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact
} = require('../../controllers');

const { controllerWrapper, validation } = require('../../middlewares');
const { joiSchema, favoriteSchema } = require('../../models/contacts/contact');

router.get('/', controllerWrapper(listContacts));

router.get('/:contactId', controllerWrapper(getContactById));

router.post('/', validation(joiSchema), controllerWrapper(addContact));

router.delete('/:contactId', controllerWrapper(removeContact));

router.put('/:contactId', validation(joiSchema), controllerWrapper(updateContact));

router.patch('/:contactId/favorite', validation(favoriteSchema), controllerWrapper(updateStatusContact));

module.exports = router;
