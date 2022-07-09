let server;
const request = require('supertest');

describe('api/users', () => {
  beforeEach(() => (server = require('../../src/app')));
  afterAll(done => {
    server.close();
    done();
  });

  it('GET /', async () => {
    const res = await request(server)
      .post('/api/users/login')
      .send({ email: 'mohammad.musa706@gmail.com', password: '123456l' });

    expect(res.status).toBe(200);
  });

  it('GET /', async () => {
    const res = await request(server)
      .post('/api/users/login')
      .send({ email: 'mohammad.musa706@gmail.com', password: '1d23456l' });

    expect(res.status).toBe(401);
  });

  it('GET /', async () => {
    const res = await request(server)
      .post('/api/users/login')
      .send({ email: 'mohammad.mudfdsa706@gmail.com', password: '1d23456l' });

    expect(res.status).toBe(404);
  });

  it('GET /', async () => {
    const res = await request(server)
      .post('/api/users/login')
      .send({ email: '', password: '1d23456l' });

    expect(res.status).toBe(422);
  });
});
