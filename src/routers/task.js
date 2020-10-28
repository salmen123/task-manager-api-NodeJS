const express = require('express');

const auth = require('../middleware/auth');
const {
  addTask,
  readTasks,
  readTaskByID,
  editTaskByID,
  deleteTaskByID
} = require('../controllers/task');

const router = new express.Router();

router.post('/tasks', auth, addTask);

// GET /tasks?completed=true
// GET /tasks?limit=10&skip=20
// GET /tasks?sortBy=createdAt:desc
router.get('/tasks', auth, readTasks);

router.get('/tasks/:id', auth, readTaskByID);

router.patch('/tasks/:id', auth, editTaskByID);

router.delete('/tasks/:id', auth, deleteTaskByID);

module.exports = router;
