import React from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css'

const Recipe = ({recipe}) => {
  return (
    <div>
      <Link to={`/recipes/${recipe._id}`}  id="link">
       <ul>
         <li id="image-item">
         <span><img src={recipe.urlImage} alt="img" className="img"/>
        </span>
        </li>
        <li id="description-item">{recipe.name}</li>
      </ul>
      </Link>
    </div>
  );
}

export default Recipe;