const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('responds with hi', async() => {
    return await request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });
  it('responds with echo', async() => {
    return await request(app)
      .post('/echo')
      .send('echo')
      .then(res => {
        expect(res.text).toEqual("echo");
      });
  });
  it('responds with red', async() => {
    return await request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
      });
  });
  it('responds with green', async() => {
    return await request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>green</h1>');
      });
  });
  it('responds with blue', async() => {
    return await request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>blue</h1>');
      });
  });
});
