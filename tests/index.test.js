const indexRouter = require('../routes/index');

const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use('/', indexRouter);

test('/ GET', done => {
    request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect({name: 'frodo'})
        .expect(200, done);
});

test('/test routes', done => {
    request(app)
        .post('/test')
        .type('form')
        .send({item: 'hello'})
        .then(() => {
            request(app)
                .get('/test')
                .expect({arr: ['hello']}, done);
        });
});