import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {

  const [navCategories] = useState([
    'about me',
    'portfolio',
    'contact',
    'resume'
  ]);

  const [currentCategory, setCurrentCategory] = useState(navCategories[0]); 

  return (
    <div className="App">
      <Header navCategories={navCategories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Header>
      {currentCategory === navCategories[0] ? <h1>About me</h1> : <></>}
      {currentCategory === navCategories[1] ? <h1>Porfolio</h1> : <></>}
      {currentCategory === navCategories[2] ? <h1>Contact</h1> : <></>}
      {currentCategory === navCategories[3] ? <h1>Resume</h1> : <></>}
    </div>
  );
}

export default App;
