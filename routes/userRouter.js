const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/register', (req, res) => res.render('pages/register'));
router.post('/register', userController.register);
router.get('/login', (req, res) => res.render('pages/login'));
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;