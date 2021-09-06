const express = require('express');
const route = express.Router();
const userController = require('../controllers/UserController');

route.get('/', userController.showAll);
route.get('/search/:id', userController.search);

route.post('/', userController.create);

route.patch('/:id', userController.update);

route.delete('/:id', userController.delete);

module.exports = route;