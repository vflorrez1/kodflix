import React from 'react';
import niceGuysFc from './pics/niceguys.jpg';
import suitsFc from './pics/suits.jpg';
import narutoFc from './pics/naruto.jpg';
import howimetyourmotherFc from './pics/howimetyourmother.jpg';
import breakingbadFc from './pics/breakingbad.jpg';
import alteredcarbonFc from './pics/alteredcarbon.jpg';
import { Link } from "react-router-dom";

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

export default function Gallery() {
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