import React from 'react';
import './App.css';
import Header2 from './components1/Header/Header2'
import Content from './components1/Main/Content/Content'
import Buttons2 from './components1/Main/Buttons/Buttons2'
import Footer from './components1/Footer/Footer'

function App2() {
  return (
      <div className="App">
        <Header2/>
        <Content/>
        <Buttons2/>
        <Footer/>
      </div>
  );
}

export default App2;