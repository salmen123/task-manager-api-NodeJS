const request = require('supertest');

const app = require('../src/app');
const User = require('../src/models/user');
const {
  userOneId,
  userOne,
  userTwoId,
  userTwo,
  setupDatabase
} = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should create user', async () => {
  const response = await request(app)
    .post('/users')
    .send({
      name: 'Salmen3',
      email: 'salme3n@example.com',
      password: 'hello789'
    })
    .expect(201);
  const user = await User.findById(response.body._id);
  expect(user).not.toBeNull();
  expect(response.body).toMatchObject({
    name: 'Salmen3',
    email: 'salme3n@example.com',
    password: 'hello789',
    age: 0
  });
});

test('Should fetch users', async () => {
  const response = await request(app)
    .get('/users')
    .send()
    .expect(200);
  expect(response.body.length).toEqual(2);
});

test('Should fetch user by ID', async () => {
  const response = await request(app)
    .get(`/users/${userOneId}`)
    .send()
    .expect(200);
  expect('' + userOne._id).toEqual(response.body._id);
  expect(userOne.name).toEqual(response.body.name);
  expect(userOne.email).toEqual(response.body.email);
  expect(userOne.password).toEqual(response.body.password);
});

test('Should edit user by ID', async () => {
  const response = await request(app)
    .patch(`/users/${userTwoId}`)
    .send({
      name: 'Salmen Saadi'
    })
    .expect(200);
  const user = await User.findById(userTwo._id);
  expect(user.name).toEqual('Salmen Saadi');
});

test('Should delete user by ID', async () => {
  const response = await request(app)
    .delete(`/users/${userTwoId}`)
    .send()
    .expect(200);
  const user = await User.findById(userTwo._id);
  expect(user).toBeNull();
});

test('Should upload avatar image', async () => {
  await request(app)
    .post(`/users/${userOneId}/avatar`)
    .attach('avatar', 'tests/fixtures/profile-pic.jpg')
    .expect(200)
  const user = await User.findById(userOneId);
  expect(user.avatar).toEqual(expect.any(Buffer));
});
