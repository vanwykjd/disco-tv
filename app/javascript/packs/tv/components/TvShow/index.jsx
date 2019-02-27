import React, { Component } from 'react';
import Slider from "react-slick";
import { Icon, Row, Col } from 'antd';
// Components

class TvShow extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state ={
      show: null,
      loading: false,
    };
    
    this.getShowDetails = this.getShowDetails.bind(this);
  }
  
  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  
  getShowDetails() {
    this.setState({ loading: true });
    
    this.fetch(`/tv_show/${this.props.match.params.id}`)
    .then(show => {
      this.setState({ show: show, loading: false });
    })
  }
  
  componentDidMount() {
    console.log('Getting Show Details');
    this.getShowDetails();
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getShowDetails();
    }
  } 
  
  render() {
    const { show, loading } = this.state;
    
    return(
      <div>
        { show && 
        <h2>{show.name}</h2>
        }
      </div>
    )
  }
}
export default TvShow