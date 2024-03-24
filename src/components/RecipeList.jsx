// Dashboard.js
import React, { useEffect, useState } from 'react';
import './RecipeList.css';
import Axios from 'axios';
import Recipe from './Recipe';


const RecipeList = (props) => {
  // const [searcKey, setSearcKey] = useState("walnut");
  // setSearcKey(props.searcKey);
  const searcKey = props.searcKey;
  const [historyList, updatehistoryList] = useState([]);
  const historyData = (data) => {
    // var array = [1, 2, 3, 4, 5];
    for (const element of historyList) {
      if(element === searcKey) return;
    }
    updatehistoryList([...historyList,data]);
  }
  const [recipeList, updateRecipeList] = useState([]);
  const [favRecipeList, updateFavRecipeList] = useState([]);
  const recieveDataFromChild = (data) => {
    // var array = [1, 2, 3, 4, 5];
    for (const element of favRecipeList) {
      if(element === data) return;
    }
    updateFavRecipeList([...favRecipeList,data]);
  }
  // https://api.edaman.com/api/recipes/v2?type=public&app_id=582e62db&app_key=07beda73b72b13f86602bcb115347266&q=walnut
  const fetchRecipes = async (searchString) => {
    try{
        const response = await Axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=ff85ad80&app_key=cb6256f348b05710bc8a69e3cc422752&q=${searchString}`);
        updateRecipeList(response.data.hits);   
        
    }catch (error) {
        if (error.response) {
          console.error('Server responded with error status:', error.response.status);
          console.error('Error data:', error.response.data);
        } else if (error.request) {
          console.error('No response received from server.');
        } else {
          console.error('Error occurred while setting up the request:', error.message);
        }
    }

  }
  console.log("favRecipeList-->",favRecipeList);
  useEffect(()=>{
    fetchRecipes(searcKey);
    for (const element of historyList) {
      if(element === searcKey) return;
    }
    updatehistoryList([...historyList,searcKey]);
  },[searcKey]);

  return (
    <>
    <h3>Favourite Recipes</h3>
    <ul>
      {
        favRecipeList.length && favRecipeList.map((recipeObj) => {
          return <li>{recipeObj}</li>
        })
      }
    </ul>
    <h3>History</h3>
    <ul>
      {
        historyList.length && historyList.map((recipeObj) => {
          if(recipeObj !== "")
          return <li>{recipeObj}</li>
        })
      }
    </ul>
    <div className='recipeContainer'>
      {
        recipeList.length && recipeList.map((recipeObj) => {
          return <Recipe recipeObj={recipeObj.recipe} passDataToParent={recieveDataFromChild}/>
        })
      }
    </div>
    </>
  );
};

export default RecipeList;
