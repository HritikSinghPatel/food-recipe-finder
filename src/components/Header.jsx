// Dashboard.js
import React, { useEffect, useState } from 'react';

import './Header.css';


const Header = (props) => {
  
  const [timeoutId, setTimeoutId] = useState();
  const [searchString, setSearchString] = useState("walnut");
  const [inputValue, setInputValue] = useState('');


  const onFieldChange = (event) => {
    // console.log("search on click-->",event.target.value);
    console.log("search on filed value-->",inputValue)
    setSearchString(inputValue);
    
    props.sendDataToParent(searchString);
    // clearTimeout(timeoutId);
    // const timeout = setTimeout(()=>{
    //     // fetchRecipes(searchString);
    // },2000)
    // setTimeoutId(timeout)
  }
  useEffect(()=>{
    props.sendDataToParent(searchString);
  })
  return (
    <div className="header">
            <div className="appName">
                Food Recipe Finder
            </div>
            <div className="searchBar">
                <div>Search</div>
                <div className="searchField">
                    <input type="text" placeholder='egg, tomato, panner.' value={inputValue} onChange={(event)=>setInputValue(event.target.value)} ></input>
                </div>
                <div class="button" onClick={onFieldChange}>Search</div>
            </div>                         
    </div>
  );
};

export default Header;
