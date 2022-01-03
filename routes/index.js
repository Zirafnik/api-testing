const express = require("express");

const index = express.Router();

const arr = [];

index.get('/', (req, res) => {
    res.json({name: 'frodo'});
    return;
})

index.get('/test', (req, res) => {
    res.json({arr});
    return;
})

index.post('/test', (req, res) => {
    arr.push(req.body.item);
    res.send('success!');
    return;
})

module.exports = index;