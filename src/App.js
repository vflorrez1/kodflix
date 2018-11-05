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
          <div className="item">
          <img className="movieImage" src={niceGuysFc} alt="" />
            <div className="overlay">
              <div className="text">Nice guys</div>
            </div>
          </div>
          <div className="item">
          <img className="movieImage" src={suitsFc} alt="" />
          <div className="overlay">
              <div className="text">Suits</div>
            </div>
         </div>
          <div className="item">
          <img className="movieImage" src={narutoFc} alt="" />
          <div className="overlay">
              <div className="text">Naruto</div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="item">
          <img className="movieImage" src={howimetyourmotherFc} alt="" />
          <div className="overlay">
              <div className="text">How I met your mother</div>
            </div>
          </div>
          <div className="item">
          <img className="movieImage" src={breakingbadFc} alt="" />
          <div className="overlay">
              <div className="text">Breaking Bad</div>
            </div>
          </div>
          <div className="item">
          <img className="movieImage" src={alteredcarbonFc} alt="" />
          <div className="overlay">
              <div className="text">Altered Carbon</div>
            </div>
          </div>
        </div>
      </div>
     );
    }
  }
          
          


export default App;
