const userController = require("../Controllers/userController");
const express = require('express')
const auth = require("../middlewares/Auth");
const userRoute = express.Router()

userRoute.post('/user/register', userController.register)
userRoute.post('/user/login', userController.login)

userRoute.get('/user/logout',auth.isAuth, userController.logout)



module.exports = userRoute;