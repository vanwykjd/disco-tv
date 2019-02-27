import React, { Component } from 'react';
import Slider from "react-slick";
import { Icon, Row, Col } from 'antd';
// Components

class Popular extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state ={
      showList: null,
      loading: false,
    };
    
    this.getPopularShows = this.getPopularShows.bind(this);
  }
  
  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }
  
  getPopularShows() {
    this.setState({ loading: true });
    
    this.fetch('/popular')
    .then(shows => {
        console.log(shows)
        this.setState({ showList: shows, loading: false })
    })
  }
  
  componentDidMount() {
    if (this.state.showList) {
      return;
    }
    console.log('Getting Popular Shows');
    this.getPopularShows();
  }
  
  
  render() {
    const { showList, loading } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };
   
    
    return(
      <div>
        <h2>Popular Shows</h2>
        { loading && <div>Loading...</div> }
        <Slider {...settings} >
    

            {  showList && showList.map( (show) => 
              <div style={{backgroundImage: 'url (show.image)', width: '18.4%'}}>
                <img alt={show.name} src={show.image} style={{width: '100%'}} />
              </div>
            )}

        </Slider>

      </div>
    )
  }
}
export default Popular