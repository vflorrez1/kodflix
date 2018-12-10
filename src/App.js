import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Gallery from './Gallery.js';
import Details from './Details.js';
import notFoundMessage from './NotFound.js';




class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route exact path="/not-found" component={notFoundMessage} />
          <Route exact path="/:showId" component={Details} />
        </Switch>
      </div>
    );
  }
}

export default App;


