import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home';
import SignIn from './SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/signin" exact component={SignIn}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
