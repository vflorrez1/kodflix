import React, { Component } from 'react';
import './App.css';
import niceGuysFc from './niceguys.jpg';
import suitsFc from './suits.jpg';
import narutoFc from './naruto.jpg';
import howimetyourmotherFc from './howimetyourmother.jpg';
import breakingbadFc from './breakingbad.jpg';
import alteredcarbonFc from './alteredcarbon.jpg';

class FilmBlock extends React.Component {
  render() {
    return (
      <div className="item">
        <img className="movieImage" src={this.props.srcname} alt="" />
        <div className="overlay">
          <div className="text">{this.props.filmname}</div>
        </div>
      </div>
    );
  }
}



class App extends Component {
  render() {


    return (
      <div className="App">
         <div className="container">

          <FilmBlock srcname={niceGuysFc} filmname="Nice guys" />
          <FilmBlock srcname={suitsFc} filmname="Suits" />
          <FilmBlock srcname={narutoFc} filmname="Naruto" />

         </div>

        <div className="container">

          <FilmBlock srcname={howimetyourmotherFc} filmname="How I met your Mother" />
          <FilmBlock srcname={breakingbadFc} filmname="Breaking Bad" />
          <FilmBlock srcname={alteredcarbonFc} filmname="Altere Carbon" />

        </div>
      </div>
    );
  }
}




export default App;
