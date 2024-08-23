const express = require ('express')
const router = express.Router()
const userController = require('../controllers/usercontroller')
const { deleteUser } = require('../models/userModel')

//rota para buscar todos os usuarios
router.get('/users', userController.getUsers)

//rota para criar um novo usuario
router.post('/users', userController.createUser)

router.delete('/users/:id', userController.deleteUser)

router.put('/users/:id', userController.updateUser) //put para o update do post

module.exports = router