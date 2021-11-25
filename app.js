const express = require('express');

const errorMiddleware = require('./middleware/error')

const app= express();

app.use(express.json());

app.use(errorMiddleware);

app.use('/api/v1',require('./routes/products'))

module.exports=app