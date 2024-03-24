const router = require('express').Router()

const UsersController = require('../controllers/users')

router.get('/usuarios/:id?', UsersController.get)

router.post('/usuarios', UsersController.post)

router.put('/usuarios/:id', UsersController.put)

router.delete('/usuarios/:id', UsersController.remove)

module.exports = router