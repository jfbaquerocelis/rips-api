const express = require('express');
const firebase = require('firebase/app');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { FIREBASE } = require('./config');

const login = require('./src/routes/login');

require('firebase/auth');
firebase.initializeApp(FIREBASE);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());

// Routes
app.use('/api', login);

module.exports = app;
