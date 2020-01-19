import React from 'react';
import Recipe from './Recipe';
import './RecipeList.css'

const RecipeList = ({recipes}) => {
  return (
    
      recipes.map((recipe, index) => 
         <Recipe
            key={index}
            recipe={recipe}
         />
      )
  
  );
}

export default RecipeList;