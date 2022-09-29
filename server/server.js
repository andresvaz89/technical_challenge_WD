'use strict';

const path = require('path');
const express = require('express');
const createError = require('http-errors');
const cors = require('cors');
const logger = require('morgan');
const serveFavicon = require('serve-favicon');
const baseRouter = require('./routes/base');
const phonesRouter = require('./routes/phones');

const app = express();

app.use(serveFavicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(
  cors({
    ...(process.env.CLIENT_APP_ORIGINS && {
      origin: process.env.CLIENT_APP_ORIGINS.split(',')
    }),
    credentials: true
  })
);
app.use(express.json());

app.use(express.static('public'));

app.use('/', baseRouter);
app.use('/phones', phonesRouter);

// Catch missing routes and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Catch all error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ type: 'error', error: { message: error.message } });
});

module.exports = app;
