const Reserve = require('../models/reserve');

const reserveHotel = async (req, res) => {
  const userId = req.user._id;

  const { hotelId, guest, checkIn, checkOut, rent } = req.body;

  const newReserve = new Reserve({
    user: userId,
    hotel: hotelId,
    checkIn,
    checkOut,
    guest,
    rent,
  });

  await newReserve.save();
  res.status(201).send(newReserve);
};

module.exports = { reserveHotel };
