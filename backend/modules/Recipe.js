const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    name: { type: String, required: true},
    urlImage: {type: String, required: true},
    urlVideo: {type: String, required: true},
    ingredient: [{type: String, required: true}],
    instruction: [{type: String, required: true}]
})

module.exports = mongoose.model('Recipe', recipeSchema)