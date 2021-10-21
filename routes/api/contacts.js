const express = require('express');
const router = express.Router();
const { contacts } = require('../../controllers');
const { controllerWrapper, validation, authenticate } = require('../../middlewares');
const { joiSchema, favoriteSchema } = require('../../models/contacts/contact');

router.get('/', authenticate, controllerWrapper(contacts.listContacts));

router.get('/:contactId', authenticate, controllerWrapper(contacts.getContactById));

router.post('/', authenticate, validation(joiSchema), controllerWrapper(contacts.addContact));

router.delete('/:contactId', authenticate, controllerWrapper(contacts.removeContact));

router.put('/:contactId', authenticate, validation(joiSchema), controllerWrapper(contacts.updateContact));

router.patch('/:contactId/favorite', authenticate, validation(favoriteSchema), controllerWrapper(contacts.updateStatusContact));

module.exports = router;
