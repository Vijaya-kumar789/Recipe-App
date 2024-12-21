const express = require('express')
const recipeController = require("../Controllers/recipeController");
const auth = require("../middlewares/Auth");

const recipeRoute = express.Router()

recipeRoute.get('/category', recipeController.getCategory);
recipeRoute.get('/filterByCategory/:category', auth.isAuth, recipeController.filterMealsByCategory);
recipeRoute.get('/getById/:id', auth.isAuth, recipeController.getMealByCategory);


module.exports = recipeRoute