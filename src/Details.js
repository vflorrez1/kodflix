import React, { Component } from 'react'
// import films from './backend/filmList';
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
        fetch('/rest/shows')
        .then(res => res.json())
        .then (filmList => this.setState({
            show: filmList.find(filmobject => filmobject.urlext === this.props.match.params.showId),
            
        }))
    }
    render() {
        if (this.state.show === undefined) {
            return <Redirect to='/not-found' />
        } else if(!Object.keys(this.state.show).length) {
            return <div>Loading...</div>
        } else {
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
                            <img className="image" src={require(`./pics/${this.state.show.urlext}.jpg`)} alt="" />
                        </div>
                    </div>
                </div>
    
            )
        }
    }
}

