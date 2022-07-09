const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  hotelName: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],

  roomSpecification: {
    maxGuest: {
      type: Number,
      required: true,
    },
    bedroom: {
      type: Number,
      required: true,
    },
    bed: {
      type: Number,
      required: true,
    },
    bath: {
      type: Number,
      required: true,
    },
  },
  amenities: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },

  rent: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  rating: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Hotel', schema);
