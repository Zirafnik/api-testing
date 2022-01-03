const express = require('express');
const indexRouter = require('./routes/index.js');

const app = express();

app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter);

app.listen(3000, () => console.log('Listening on port 3000'));