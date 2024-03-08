const router = require('express').Router()

const UsersController = require('../controllers/users')

router.get('/usuarios/:id?', UsersController.get)

router.post('/usuarios', UsersController.post)

// router.put('/usuarios', UsersController.put)
// router.delete('/usuarios', UsersController.delete)

module.exports = router