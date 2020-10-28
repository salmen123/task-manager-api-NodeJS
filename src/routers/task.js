const express = require('express');

const {
  addTask,
  readTasks,
  readTaskByID,
  editTaskByID,
  deleteTaskByID
} = require('../controllers/task');

const router = new express.Router();

router.post('/tasks', addTask);

// GET /tasks?completed=true
// GET /tasks?limit=10&skip=20
// GET /tasks?sortBy=createdAt:desc
router.get('/tasks', readTasks);

router.get('/tasks/:id', readTaskByID);

router.patch('/tasks/:id', editTaskByID);

router.delete('/tasks/:id', deleteTaskByID);

module.exports = router;
