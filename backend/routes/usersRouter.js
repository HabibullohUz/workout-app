const express = require('express');
const {signup, getAllUsers, login} = require('../controller/userContoller');
const router = express.Router();

router.get('/', getAllUsers);
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;