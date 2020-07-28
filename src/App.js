import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Content from './components/Main/Content/Content'
import Buttons from './components/Main/Buttons/Buttons'

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Buttons/>

    </div>
  );
}

export default App;
