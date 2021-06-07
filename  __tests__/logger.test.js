'use strict';

const logger = require('../src/middleware/logger');

describe('logger middleware', () => {
  let consoleSpy;
  const req = { method: 'get', path: 'test' };
  const res = {};
  const next = jest.fn();//any function
  // when I use logger -> console.log has been called spy يتجسس
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();//.mockImplementation() i can change the implementation for something else or i can implement it without this method; console is an object and log is a method for it 
  });
    
  afterEach(() => {
    consoleSpy.mockRestore();//after mocked you have to restore it else it will stay mock
  });
    
  it('should log all get requests', () => {
    //arrange
    //act
    logger(req, res, next);
    //assert
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('## request info ## ===>', 'get', 'test');
    expect(next).toHaveBeenCalledWith();// this means that there's no errors
  });
});
