import React, { Component } from 'react';
import './App.css';
import { Route} from "react-router-dom";
import Gallery from './Gallery.js';


function Deets() {
  return (
    <h2 className="deetstext"> hey </h2>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Gallery} />
        <Route exact path="/:varurl" component={Deets} />
        
      </div>
    );
  }
}

export default App;


