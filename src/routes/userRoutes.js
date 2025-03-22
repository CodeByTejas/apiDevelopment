const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { userValidationRules } = require('../middleware/validators');

router.post('/', userValidationRules(), userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userValidationRules(), userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;