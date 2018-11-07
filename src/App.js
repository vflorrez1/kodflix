import React, { Component } from 'react';
import './App.css';
import niceGuysFc from './niceguys.jpg';
import suitsFc from './suits.jpg';
import narutoFc from './naruto.jpg';
import howimetyourmotherFc from './howimetyourmother.jpg';
import breakingbadFc from './breakingbad.jpg';
import alteredcarbonFc from './alteredcarbon.jpg';
import { Route, Link } from "react-router-dom";


class FilmBlock extends React.Component {
  render() {
    return (
      <div className="item">
        <Link to={this.props.urlext}>
          <img className="movieImage" src={this.props.srcname} alt="" />
        </Link>
        <div className="overlay">
          <div className="text">
            {this.props.filmname}
          </div>
        </div>
      </div>
    );
  }
}


function Deets() {
  return (
    <h2 className="deetstext"> hey </h2>
  );
}



function Gallery() {
  return (
    <div>
      <div className="container">
        <FilmBlock srcname={niceGuysFc} filmname="Nice Guys" urlext="/nice-guys" />
        <FilmBlock srcname={suitsFc} filmname="Suits" urlext="/suits" />
        <FilmBlock srcname={narutoFc} filmname="Naruto" urlext="/naruto" />
        <FilmBlock srcname={howimetyourmotherFc} filmname="How I met your Mother" urlext="himym" />
        <FilmBlock srcname={breakingbadFc} filmname="Breaking Bad" urlext="breaking-bad" />
        <FilmBlock srcname={alteredcarbonFc} filmname="Altered Carbon" urlext="altered-carbon" />
      </div>
    </div>
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


