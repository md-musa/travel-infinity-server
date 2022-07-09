const express = require('express');

const router = express.Router();
const authenticateAdmin = require('../middlewares/admin');
const authenticateUser = require('../middlewares/auth');
const { registerUser, loginUser, getUsers, makeAdmin } = require('../controllers/auth');

router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/', authenticateUser, authenticateAdmin, getUsers);
router.patch('/makeAdmin', authenticateUser, authenticateAdmin, makeAdmin);

module.exports = router;
