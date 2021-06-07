'use strict';

const server = require('../src/server');

const supertest = require('supertest');

const request = supertest(server.app);

describe('validator', () => {

  it('Query string is  empty', async() => {
    let result = await request.get('/person');
    expect(result.status).toEqual(500);
  });

  it('Query string is a name', async() => {
    let name = 'Nour';
    let result = await request.get(`/person?name=${name}`);
    expect(result.status).toEqual(200);
  });

  it('Query string is not a name', async() => {
    let name = '';
    let result = await request.get(`/person?name=${name}`);
    expect(result.status).toEqual(500);
  });

});





