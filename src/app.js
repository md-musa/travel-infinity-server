const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
require('express-async-errors');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const asyncErrorHandler = require('./middlewares/errorHandler');
const connectDatabase = require('./config/DB');
const fileUpload = require('express-fileupload');
const hotel = require('./routes/hotel');
const auth = require('./routes/auth');
const reserve = require('./routes/reserve');

console.log('MODE-->', process.env.NODE_ENV, process.env.MONGODB_URI);

connectDatabase();

app.use(cors());
app.use((req, res, next) => {
  console.log('PATH  ==> ', req.path);
  next();
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

app.use('/api/users', auth);
app.use('/api/hotels', hotel);
app.use('/api/reserves', reserve);
app.use(asyncErrorHandler);

const server = app.listen(PORT, () => console.log(' ✔️ Server started successfully'));
module.exports = server;
