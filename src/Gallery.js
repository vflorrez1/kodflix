import React from 'react';
import { Link } from "react-router-dom";
// import films from './backend/filmList';

class FilmBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      filmsList: {}
    }
  }

  componentDidMount() {
    fetch('/rest/shows')
      .then(res => res.json())
      .then(filmList => this.setState({ filmList }))
  }
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

export default class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      show: []
    }
  }
  componentDidMount() {
    fetch('/rest/shows')
      .then(res => res.json())
      .then(filmList => this.setState({
        show: filmList
      }));  
  }
  render() {
    return (
      this.state.show.map(film =>
        <FilmBlock srcname={film.sourceName} filmname={film.filmName} urlext={film.urlext} />)
    )
  }
}
