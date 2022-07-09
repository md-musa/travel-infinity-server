const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  guest: {
    type: Number,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Reserve', schema);
