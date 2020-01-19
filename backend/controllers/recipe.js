const Recipe = require('../modules/Recipe')

exports.getAllRecipes = (req, res, next) => {
    Recipe.find().then((recipes) => 
        res.status(200).json(recipes))
        .catch(() => res.status(400).json({error}))
}

exports.getOneRecipe = (req, res, next) => {
    Recipe.findOne({_id: req.params.id})
          .then((recipe) => {       
          //  recipe.instruction =req.body.instruction.split('/n')
            res.status(200).json(recipe)})
          .catch(() => res.status(400).json({error}))
}

exports.createRecipe = (req, res, next) => {
    delete req.body._id
    const recipe = new Recipe({
       ...req.body
    })
    recipe.save().then(() => {
        res.status(201).json({message: 'recette crée!'})})
                 .catch(() => res.status(400).json({error}))
}

exports.updateRecipe = (req, res, next) => {
    Recipe.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
          .then(() => res.status(200).json({message: 'updated !'}))
          .catch((error) => res.status(400).json({error}))
}

exports.deleteRecipe = (req, res, next) => {
    Recipe.deleteOne({_id: req.params.id})
          .then(() => res.status(200).json({message: 'deleted !'})) 
          .catch((error) => res.status(400).json({error}))
}