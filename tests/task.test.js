const request = require('supertest');

const app = require('../src/app');
const Task = require('../src/models/task');
const {
  userOne,
  userTwo,
  taskOne,
  taskTwo,
  taskThree,
  setupDatabase
} = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should create task for user', async () => {
  const response = await request(app)
    .post('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: 'From my test'
    })
    .expect(201);
  const task = await Task.findById(response.body._id);
  expect(task).not.toBeNull();
  expect(task.completed).toEqual(false);
});

test('Should fetch user tasks', async () => {
  const response = await request(app)
    .get('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
  expect(response.body.length).toEqual(2);
});

test('Should fetch user task by ID', async () => {
  const response = await request(app)
    .get(`/tasks/${taskOne._id}`)
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
  expect('' + taskOne._id).toEqual(response.body._id);
  expect(taskOne.description).toEqual(response.body.description);
  expect(taskOne.completed).toEqual(response.body.completed);
});

test('Should edit user task by ID', async () => {
  const response = await request(app)
    .patch(`/tasks/${taskTwo._id}`)
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
      completed: false
    })
    .expect(200);
  const task = await Task.findById(taskTwo._id);
  expect(task.completed).toEqual(false);
});

test('Should delete user task by ID', async () => {
  const response = await request(app)
    .delete(`/tasks/${taskThree._id}`)
    .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
    .send()
    .expect(200);
  const task = await Task.findById(taskThree._id)
  expect(task).toBeNull()
});

test('Should not delete other users tasks', async () => {
  const response = await request(app)
    .delete(`/tasks/${taskOne._id}`)
    .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
    .send()
    .expect(404);
  const task = await Task.findById(taskOne._id);
  expect(task).not.toBeNull();
});
