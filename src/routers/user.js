const express = require('express');

const auth = require('../middleware/auth');
const {
  signup,
  login,
  logout,
  logoutAll,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  upload,
  addAvatarUser,
  errorMulterMiddelware,
  deleteAvatarUser,
  getAvatarUserByID
} = require('../controllers/user');

const router = new express.Router();

router.post('/users', signup);

router.post('/users/login', login);

router.post('/users/logout', auth, logout);

router.post('/users/logoutAll', auth, logoutAll);

router.get('/users/me', auth, getUserProfile);

router.patch('/users/me', auth, updateUserProfile);

router.delete('/users/me', auth, deleteUser);

router.post('/users/me/avatar', auth, upload.single('avatar'), addAvatarUser, errorMulterMiddelware);

router.delete('/users/me/avatar', auth, deleteAvatarUser);

router.get('/users/:id/avatar', getAvatarUserByID);

module.exports = router;
