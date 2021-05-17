'use strict';

const server = require('../src/server');

const supertest = require('supertest');

const request = supertest(server.app);

describe('validator', () => {

  it('Query string is  empty', async() => {
    let result = await request.get('/person');
    expect(result.status).toEqual(500);
  });

  it('Query string is not name', async() => {
    let name = 'Nour';
    let result = await request.get(`/person?name=${name}`);
    expect(result.status).toEqual(200);
  });

});




