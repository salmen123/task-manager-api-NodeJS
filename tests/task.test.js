const request = require('supertest');

const app = require('../src/app');
const Task = require('../src/models/task');
const {
  taskOne,
  taskTwo,
  taskThree,
  setupDatabase
} = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should create task', async () => {
  const response = await request(app)
    .post('/tasks')
    .send({
      description: 'From my test'
    })
    .expect(201);
  const task = await Task.findById(response.body._id);
  expect(task).not.toBeNull();
  expect(task.completed).toEqual(false);
});

test('Should fetch tasks', async () => {
  const response = await request(app)
    .get('/tasks')
    .send()
    .expect(200);
  expect(response.body.length).toEqual(3);
});

test('Should fetch task by ID', async () => {
  const response = await request(app)
    .get(`/tasks/${taskOne._id}`)
    .send()
    .expect(200);
  expect('' + taskOne._id).toEqual(response.body._id);
  expect(taskOne.description).toEqual(response.body.description);
  expect(taskOne.completed).toEqual(response.body.completed);
});

test('Should edit task by ID', async () => {
  const response = await request(app)
    .patch(`/tasks/${taskTwo._id}`)
    .send({
      completed: false
    })
    .expect(200);
  const task = await Task.findById(taskTwo._id);
  expect(task.completed).toEqual(false);
});

test('Should delete task by ID', async () => {
  const response = await request(app)
    .delete(`/tasks/${taskThree._id}`)
    .send()
    .expect(200);
  const task = await Task.findById(taskThree._id)
  expect(task).toBeNull()
});
