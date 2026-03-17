const express = require('express');
const app = require('./app');

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// NOTE - run 'nodemon server' to start server (live update) or node server.js
