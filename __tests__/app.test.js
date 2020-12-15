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
});
