const router = require('express').Router();
const { reserveHotel } = require('../controllers/reserve');
const authenticateUser = require('../middlewares/auth');

router.post('/', authenticateUser, reserveHotel);

module.exports = router;
