import React, { Component } from 'react';
import './EditRecipe.css'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
class EditRecipe extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: '',
            urlImage: '',
            urlVideo: '',
            ingredient: '', 
            instruction: '',
            redirectTo: false
        }
        this._onHandleChangeName = this._onHandleChangeName.bind(this)
        this._onHandleChangeUrlImg = this._onHandleChangeUrlImg.bind(this)
        this._onHandleChangeUrlVideo = this._onHandleChangeUrlVideo.bind(this)
        this._onHandleChangeIngredients = this._onHandleChangeIngredients.bind(this)
        this._onHandleChangeInstructions = this._onHandleChangeInstructions.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
componentDidMount(){
    this._getRecipe(this.props.match.params.id)
}
_getRecipe(id) {
    axios.get('http://localhost:3001/api/recipes/'+id)
         .then((res) => {
              this.setState({
                  name: res.data.name,
                  urlImage: res.data.urlImage,
                  urlVideo: res.data.urlVideo,
                  ingredient: res.data.ingredient,
                  instruction: res.data.instruction
              })
         })
}

_onHandleChangeName(e){
  this.setState({
      name: e.target.value
  })
}

_onHandleChangeUrlImg(e){
    this.setState({
        urlImage: e.target.value
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
    e.preventDefault()
    const Recipe = {
           name: this.state.name,
           urlImage: this.state.urlImage,
           urlVideo: this.state.urlVideo,
           ingredient: this.state.ingredient,
           instruction: this.state.instruction
    }
    axios.put('http://localhost:3001/api/recipes/'+this.props.match.params.id, Recipe)
         .then(() => {
            this.setState({
                redirectTo: true
            })
         })
}


render(){
    const {name, urlImage, urlVideo, ingredient, instruction} = this.state

    if(this.state.redirectTo){
        return(
            <Redirect to="/recipes" />
        )
    }else {
        return (
            <div>
                <h1>Modifiy this recipe</h1>
                <form className="admin-add-recipe" onSubmit={this.onSubmit} >
                   <input type="text" id="name" placeholder="Nom de la recette"  onChange={this._onHandleChangeName} value={name}/>
                   <input type="text" id="img_address" placeholder="copiez coller ici l'addresse d' l'image"  onChange={this._onHandleChangeUrlImg} value={urlImage}/>
                   <input type="text" id="video_address" placeholder="copiez coller ici l'addresse du video"  onChange={this._onHandleChangeUrlVideo} value={urlVideo}/>
                   <textarea 
                      rows="6"
                      placeholder="mettez ici les ingrédients séparés par des virgules"
                      onChange = {this._onHandleChangeIngredients}
                      value={ingredient}
                   />
                   <textarea 
                      rows="6"
                      placeholder="mettez ici les instructions séparés par des virgules"
                      onChange={this._onHandleChangeInstructions}
                      value={instruction}
                   />
                   <button type="submit" id="button" onClick={this.onSubmit} >+Modifier une recette</button>
                </form>
            </div>
     );
    }
    
 }
}

export default EditRecipe;