import React, { Component } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import RecipeList from './RecipeList';
import axios from 'axios';
class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            recipes: []
        }
    }
componentDidMount() {
   this._getRecipes();
}


_getRecipes() {
    axios.get('http://localhost:3001/api/recipes')
         .then((res) => {
             this.setState({
                 recipes: res.data
             })
         })
         .catch(error => console.log({error}))
}

render(){
    return (
        <div className="App">
            <h1>Ma Boite à recettes</h1>
         <Link to="/new"><button id="go_btn">Add Recipe</button></Link> 
         <div className="recipes-container">
         <RecipeList recipes={this.state.recipes} />
         </div>
        </div>
     );
 }
}

export default Home;