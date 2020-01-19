import React, { Component } from 'react';
import axios from 'axios'
import './SingleRecipe.css'
import { Redirect, Link } from 'react-router-dom';
class SingleRecipe extends Component{

    constructor(props){
        super(props)
        this.state = {
            recipe: {},
            redirectTo: false
        }
        this._onDelete = this._onDelete.bind(this)
    }


componentDidMount(){
    this._getRecipe(this.props.match.params.id)
}
_getRecipe(id){
    axios.get('http://localhost:3001/api/recipes/'+id)
         .then((res) => {
             this.setState({
                 recipe: res.data
             })
         })
}    

_goToEditForm(){
    return(
        <Redirect to="/recipes/edit" />
    )
}

_onDelete(){
    axios.delete('http://localhost:3001/api/recipes/'+this.props.match.params.id)
         .then(() => {
             this.setState({
                   redirectTo: true
             })
         }).catch((error) => {
            console.log(error)
        })
}


render(){
    const {recipe  , redirectTo} = this.state
  //  console.log(this._renderStrToArray(recipe.ingredients))
  console.log(this.state.recipe.ingredient)
    if(redirectTo){
        return(
        <Redirect to="/recipes" />
        )  
    }else {
        return (
            <div className="DetailContainer">
                <div className="header">
                    <h1>{recipe.name}</h1>
                </div>
                <div>
                <div className="ingredient_header">
                   <span id="ingredient_title">Ingredients</span>
                </div>
                <ul id="ingredients_block">
                   {recipe.ingredient && recipe.ingredient.map((ingredient, i) => {
        return(<li key={i} className="item">{ingredient}</li>)
    })}
                </ul>
                </div>
                <div>
                <div className="ingredient_header">
                   <span id="ingredient_title">Instructions</span>
                </div>
                <ul id="ingredients_block">
                {recipe.instruction && recipe.instruction.map((instruction, i) => {
        return(<li key={i} className="item">{instruction}</li>)
    })}
                </ul>
                </div>
                <div className="video">
                  <video width="504" height="240" controls autoPlay >
                   <source src={recipe.urlVideo}  type="application/x-mpegURL" />
                 </video>
                  </div>
               <div className="btn-block">
               <Link to={ `/edit/${recipe._id}`} ><button className="btn btn-success" aria-label="edit" id="icon" >
                 Edit
             </button>
             </Link>
             <button className="btn btn-danger" aria-label="delete" onClick={this._onDelete}>
               Delete
              </button>
              </div>
              
            </div>
         );
    }
   
 }
}

export default SingleRecipe;