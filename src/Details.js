import React, { Component } from 'react'
import films from './filmList';
import {Redirect} from "react-router-dom";

export default class Details extends Component {
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
        if (this.state.show !== undefined) {
            return <h1> {this.state.show.filmName} </h1>
        } else {
            return <Redirect to='/not-found' />
        }
    }
}

 