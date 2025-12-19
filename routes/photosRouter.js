const express = require('express');
const router = express.Router();
const photosController = require('../controllers/photosControllers');

router.get('/', photosController.getAll);
router.get('/add', photosController.getAddForm);
router.post('/add', photosController.postAdd);
router.get('/edit/:id', photosController.getEditForm);
router.post('/edit/:id', photosController.postEdit);
router.post('/delete/:id', photosController.deletePhoto);

module.exports = router;
