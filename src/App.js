import React, { Component } from 'react';
import './App.css';
import niceGuysFc from './niceguys.jpg';
import suitsFc from './suits.jpg';
import narutoFc from './naruto.jpg';
import howimetyourmotherFc from './howimetyourmother.jpg';
import breakingbadFc from './breakingbad.jpg';
import alteredcarbonFc from './alteredcarbon.jpg';

class App extends Component {
  render() {


    return (
      <div className="App">

        <div className="container">
          <div className="item"><img className="movieImage" src={niceGuysFc} alt="" /></div>
          <div className="item"><img className="movieImage" src={suitsFc} alt="" /></div> 
          <div className="item"><img className="movieImage" src={narutoFc} alt="" /></div>
        </div>
        <div className="container">
          <div className="item"><img className="movieImage" src={howimetyourmotherFc} alt="" /></div>
          <div className="item"><img className="movieImage" src={breakingbadFc} alt="" /></div>
          <div className="item"><img className="movieImage" src={alteredcarbonFc} alt="" /></div>
        </div>
      </div>

    );
  }
}

export default App;
