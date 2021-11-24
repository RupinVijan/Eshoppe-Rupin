const express = require('express');

const app= express();

app.use(express.json());

app.use('/api/v1',require('./routes/products'))

module.exports=app