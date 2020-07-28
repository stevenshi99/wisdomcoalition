import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Content from './components/Main/Content/Content'
import Buttons from './components/Main/Buttons/Buttons'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Buttons/>
      <Footer/>

    </div>
  );
}

export default App;
