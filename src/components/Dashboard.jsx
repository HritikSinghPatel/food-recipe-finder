// Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import Header from './Header';
import RecipeList from './RecipeList';


const Dashboard = () => {
  const [searcKey,setSearcKey] = useState("");
  const receiveDataFromChild = (data) => {
    setSearcKey(data);
  };
  return (
    <div className='mainContainer'>
      <Header sendDataToParent={receiveDataFromChild} />
      <RecipeList searcKey={searcKey}/>
    </div>
  );
};

export default Dashboard;
