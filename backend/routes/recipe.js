const express = require('express')
const router = express.Router()

const recipeCtrl = require('../controllers/recipe')


router.get('/', recipeCtrl.getAllRecipes)
router.get('/:id', recipeCtrl.getOneRecipe)
router.post('/', recipeCtrl.createRecipe)
router.put('/:id', recipeCtrl.updateRecipe)
router.delete('/:id', recipeCtrl.deleteRecipe)

module.exports = router