const express = require('express');
const router = express.Router();
const { contacts: controllers } = require('../../controllers');

const { controllerWrapper, validation } = require('../../middlewares');
const { contactSchema } = require('../../schemas');

router.get('/', controllerWrapper(controllers.listContacts));

router.get('/:contactId', controllerWrapper(controllers.getContactById));

router.post('/', validation(contactSchema.schemaAdd), controllerWrapper(controllers.addContact));

router.delete('/:contactId', controllerWrapper(controllers.removeContact));

router.put('/:contactId', validation(contactSchema.schemaUpdate), controllerWrapper(controllers.updateContact));

module.exports = router;
