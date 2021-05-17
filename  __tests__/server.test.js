
'use strict';
const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('server', () => {
  it('should get 404 status', async () => {
    const response = await request.get('/jhu');
    expect(response.status).toBe(404);
  });

  it('should get a welcome message', async () => {
    //arrange
    // let route = '/';
    //act
    const response = await request.get('/');
    //assert
    expect(response.status).toBe(200);
    expect(response.text).toBe('welcome to server.js');
  });

  it('should get an error', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });


});

// 'use strict';

// const server=require('../src/server');

// const superTest=require('supertest');
// const serverRequest=superTest(server.app);

// describe('testing server',()=>{
//   it('handle not found routes',async ()=>{
//     let response= await serverRequest.get('/not-found');
//     expect(response.status).toEqual(404);
//   });
//   it('handle server error',async ()=>{
//     let response= await serverRequest.get('/bad');
//     expect(response.status).toEqual(500);
//   });
//   it('handle home route',async ()=>{
//     let response= await serverRequest.get('/');
//     expect(response.status).toEqual(200);
//     expect(response.text).toEqual('welcome to server.js');
//   });
  //   it('handle  bad method',async ()=>{
  //     let response= await serverRequest.post('/person');
  //     expect(response.status).toEqual(404);
  //   });
  
//   it('status 500 if no name', async()=>{
//     const res=await serverRequest.get('/person');
//     expect(res.status).toEqual(500);
//   });
//   it('status 200 if name in query',async()=>{
//     const res=await serverRequest.get('/person?name=areen');
//     expect(res.status).toEqual(200);
//     expect(res.body.name).toEqual('areen');
//   });
// });