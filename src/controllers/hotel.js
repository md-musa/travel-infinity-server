const Hotel = require('../models/hotel');
const { NotFound } = require('../utils/errors');

const addHotel = async (req, res) => {
  const { title, hotelName, amenities, maxGuest, bedroom, bed, bath, description, rent, address } =
    req.body;
  const images = req.images;

  const newHotel = new Hotel({
    title,
    hotelName,
    images,
    roomSpecification: {
      maxGuest,
      bedroom,
      bed,
      bath,
    },
    amenities,
    description,
    rent,
    address,
  });

  await newHotel.save();

  res.status(201).send(newHotel);
};

const getHotels = async (req, res) => {
  const hotels = await Hotel.find();
  res.send(hotels);
};

const getHotel = async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  if (!hotel) throw new NotFound('There is no hotel with this id.');

  return res.send(hotel);
};

module.exports = { addHotel, getHotels, getHotel };
