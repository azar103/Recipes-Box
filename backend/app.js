const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const recipeRouter = require('./routes/recipe')
mongoose.connect('mongodb+srv://Denis:Denispassword@cluster0-eiz8m.mongodb.net/test?retryWrites=true&w=majority', 
                  {
                      useNewUrlParser: true,
                      useUnifiedTopology: true
                  }      )
        .then(() => console.log('la connexion à MongoDB est réussie !'))  
        .catch(() => console.log('la connexion à MongoDB est échouée !'))        
const app = express()
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  })     
  
app.use(bodyParser.json())
app.use('/api/recipes', recipeRouter)

module.exports = app