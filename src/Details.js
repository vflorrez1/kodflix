import React, { Component } from 'react'

class Details extends Component {
    constructor() {
      super();
      this.state = { 
          detailsOfShow: "Hello, this will be the detail page for each Movie & TV show :)" 
        }
    }
     
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          detailsOfShow: "Coming soon! :)"
        });
      }, 3000);
  
    }
    render() {
      return (
        <h1> {this.state.detailsOfShow} </h1>
      )
    }
  }

  export default Details; 