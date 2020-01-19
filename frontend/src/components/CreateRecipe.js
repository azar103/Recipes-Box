import React, { Component } from 'react';
import  './CreateRecipe.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
class CreateRecipe extends Component{

    constructor(props){
        super(props)
        this.state = {
             name: '',
             urlImg: '',
             urlVideo: '',
             inngredient: [], 
             instruction: [],
             redirectTo: false
        }
        this._onHandleChangeName =  this._onHandleChangeName.bind(this);
        this._onHandleChangeUrlImg = this._onHandleChangeUrlImg.bind(this);
        this._onHandleChangeUrlVideo = this._onHandleChangeUrlVideo.bind(this);
        this._onHandleChangeIngredients = this._onHandleChangeIngredients.bind(this);
        this._onHandleChangeInstructions = this._onHandleChangeInstructions.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



_onHandleChangeName(e) {
    this.setState({
       name: e.target.value
    })
}

_onHandleChangeUrlImg(e) {
    this.setState({
        urlImg: e.target.value
    })

}

_onHandleChangeUrlVideo(e){
    this.setState({
        urlVideo: e.target.value
    }) 
}

_onHandleChangeIngredients(e){
   this.setState({
       ingredient: e.target.value
   })
   
}

_onHandleChangeInstructions(e){
   this.setState({
       instruction: e.target.value
   })
}

onSubmit(e){
    e.preventDefault();
    const newRecipe = {
        name: this.state.name,
        urlImage: this.state.urlImg,
        urlVideo: this.state.urlVideo,
        ingredient: this.state.ingredient.split(","),
        instruction: this.state.instruction.split(",")
    }
   
    axios.post('http://localhost:3001/api/recipes', newRecipe)
         .then((res) => this.setState({
             redirectTo: true
         }))
 }
render(){
    if(this.state.redirectTo){
        return(<Redirect to="/recipes"/>)
    }else {
        return (
            <div>
                <h1>Here is the new Recipe</h1>
                <form className="admin-add-recipe" onSubmit={this.onSubmit} >
                   <input type="text" id="name" placeholder="Nom de la recette"  onChange={this._onHandleChangeName}/>
                   <input type="text" id="img_address" placeholder="copiez coller ici l'addresse d' l'image"  onChange={this._onHandleChangeUrlImg}/>
                   <input type="text" id="video_address" placeholder="copiez coller ici l'addresse du video"  onChange={this._onHandleChangeUrlVideo}/>
                   <textarea 
                      rows="6"
                      placeholder="mettez ici les ingrédients séparés par des virgules"
                      onChange = {this._onHandleChangeIngredients}
                   />
                   <textarea 
                      rows="6"
                      placeholder="mettez ici les instructions séparés par des virgules"
                      onChange={this._onHandleChangeInstructions}
                   />
                   <button type="submit" id="button" >+Ajouter une recette</button>
                </form>
            </div>
         );
    }
    
 }
}

export default CreateRecipe;