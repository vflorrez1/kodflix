import React, { Component } from 'react'
import films from './filmList';
import { Redirect } from "react-router-dom";
import './Detials.css'

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
            return (
                <div className="background">
                    <div className="film-name">
                        {this.state.show.filmName}
                    </div>
                    <div className="details-container">
                        <div className="synop">
                            {this.state.show.synopsis}
                        </div>
                        <div className="detials-container-cover">
                            <img className="image" src={this.state.show.sourceName} alt="" />
                        </div>
                    </div>
                </div>
    
            )
        } else {
            return <Redirect to='/not-found' />
        }
    }
}

