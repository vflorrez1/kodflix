import React, { Component } from 'react'
import films from './filmList';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            show: {}
        }
    }
    componentDidMount() {
        this.setState({
            show: films.find(filmobject => filmobject.urlext === this.props.match.params.showId)
        })
    }
    render() {
        return (
            <h1> {this.state.show.filmName} </h1>
        )
    }
}

export default Details; 