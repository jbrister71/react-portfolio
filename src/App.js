import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

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
      {currentCategory === navCategories[0] ? <AboutMe></AboutMe> : <></>}
      {currentCategory === navCategories[1] ? <Portfolio></Portfolio> : <></>}
      {currentCategory === navCategories[2] ? <Contact></Contact> : <></>}
      {currentCategory === navCategories[3] ? <Resume></Resume> : <></>}
      <Footer></Footer>
    </div>
  );
}

export default App;
