import React from 'react';
import { Link } from "react-router-dom";
import films from './filmList';

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
    <div className="container">{
      films.map(film =>
        <FilmBlock srcname={film.sourceName} filmname={"film.filmName"} urlext={"film.urlText"} />)
      }
    </div>
  );
}