const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init db
require('./dbs/init.mongodb');

// init router
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: '123',
    });
});

// handle error

module.exports = app;
