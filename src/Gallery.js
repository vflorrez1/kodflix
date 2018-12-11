import React from 'react';
import { Link } from "react-router-dom";

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
          <img className="movieImage" src={require(`./pics/${this.props.urlext}.jpg`)} alt='' />
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
        <FilmBlock filmname={film.filmName} urlext={film.urlext} />)
    )
  }
}
