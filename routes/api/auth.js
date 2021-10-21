const express = require('express');
const router = express.Router();
const { auth } = require('../../controllers');
const { controllerWrapper, validation, authenticate } = require('../../middlewares');
const { joiSchema } = require('../../models/users/user');

router.post('/signup', validation(joiSchema), controllerWrapper(auth.signup));

router.post('/signin', validation(joiSchema), controllerWrapper(auth.signin));

router.get('/signout', authenticate, controllerWrapper(auth.signout));

router.get('/current-user', authenticate, controllerWrapper(auth.getCurrentUser));

module.exports = router;
