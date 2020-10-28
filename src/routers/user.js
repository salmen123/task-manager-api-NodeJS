const express = require('express');

const {
  addUser,
  readUsers,
  readUserByID,
  editUserByID,
  deleteUserByID,
  upload,
  addAvatarToUserByID,
  errorMulterMiddelware,
  deleteAvatarUserByID,
  getAvatarUserByID
} = require('../controllers/user');

const router = new express.Router();

router.post('/users', addUser);

router.get('/users', readUsers);

router.get('/users/:id', readUserByID);

router.patch('/users/:id', editUserByID);

router.delete('/users/:id', deleteUserByID);

router.post('/users/:id/avatar', upload.single('avatar'), addAvatarToUserByID, errorMulterMiddelware);

router.delete('/users/:id/avatar', deleteAvatarUserByID);

router.get('/users/:id/avatar', getAvatarUserByID);

module.exports = router;
