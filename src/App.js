import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import React from 'react';
import './App.css';
import Header from './components1/Header/Header'
import Content from './components1/Main/Content/Content'
import Buttons from './components1/Main/Buttons/Buttons'
import Footer from './components1/Footer/Footer'
import App2 from './App2'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <ul>
          <li><a href="/Reboot">Reboot</a></li>
        </ul>
        <div classNmae="content">
          <Route path="/Reboot" component={App2}/>
        </div>
        <Header/>
        <Content/>
        <Buttons/>
        <Footer/>
        <App2/>
      </div>
    </HashRouter>
  );
}

export default App;
