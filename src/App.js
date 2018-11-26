import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Gallery from './Gallery.js';
import Details from './Details.js';




class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Gallery} />
        <Route exact path="/:showId" component={Details} />
      </div>
    );
  }
}

export default App;


