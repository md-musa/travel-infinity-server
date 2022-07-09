const { addHotel, getHotel, getHotels } = require('../controllers/hotel');
const uploadImages = require('../middlewares/uploadImages');

const router = require('express').Router();

router.get('/', getHotels);
router.post('/', uploadImages, addHotel);
router.get('/:id', getHotel);

module.exports = router;
