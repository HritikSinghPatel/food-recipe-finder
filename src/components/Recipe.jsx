// Dashboard.js
import React, { useState } from 'react';
import './Recipe.css';


const Recipe = (props) => {
  // const [favRecipes, updateFavRecipes] = useState([]);
  const handleFavoriteClick = (favRec) => {
    // updateFavRecipes([...favRecipes,favRec]);
    // console.log(favRecipes);
    props.passDataToParent(favRec);
  }

  return (
    <div className='recipe'>
        <img src={props.recipeObj.image} alt='pizza..'/>        
        <div className='recipeName'>{props.recipeObj.label}</div>
        {
        props.recipeObj.ingredientLines.length && props.recipeObj.ingredientLines.map((inc) => {
          return <div>{inc}</div>
        })
        }
        <div className='seeMore' onClick={()=> window.open(props.recipeObj.url)}>See Full Recipe</div>
        <div className='favoriteButton' onClick={()=>handleFavoriteClick(props.recipeObj.label)}>Favorite</div>
    </div>
  );
};

export default Recipe;


            {/* <div className="appIcon">
                <img src={require("../images/pizza.jpg")} alt='pizza..'/>
            </div> */}
