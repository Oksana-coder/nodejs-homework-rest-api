const express = require('express');
const router = express.Router();
const { users } = require('../../controllers');
const { controllerWrapper, validation, authenticate } = require('../../middlewares');
const { subscriptionSchema } = require('../../models/users/user');

router.get('/current', authenticate, controllerWrapper(users.getCurrentUser));

router.patch('/', authenticate, validation(subscriptionSchema), controllerWrapper(users.updateSubscription));

module.exports = router;
