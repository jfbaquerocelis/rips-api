require('dotenv').config();

const test = require('ava');
const request = require('supertest');
const app = require('../../../app');

test('Sign in an existing user', async (assert) => {
  const response = await request(app)
    .post('/api/login')
    .set('Content-Type', 'application/json')
    .send({ email: 'jfbaquerocelis@gmail.com', password: '123456' });

  assert.is(response.status, 200);
  assert.is(response.body.message, 'User logged in succesfuly');
});

test('Sign in an not existing user', async (assert) => {
  const response = await request(app)
    .post('/api/login')
    .set('Content-Type', 'application/json')
    .send({ email: 'foo@bar.com', password: 'foobar' });

  assert.is(response.status, 400);
  assert.is(
    response.body.message,
    'There is no user record corresponding to this identifier. The user may have been deleted.'
  );
});
