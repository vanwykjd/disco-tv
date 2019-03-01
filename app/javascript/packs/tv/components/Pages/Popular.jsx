import React, { Component } from 'react';
import Slider from "react-slick";
import { Card, List, Avatar, Progress } from 'antd';

import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';

const { Meta } = Card;

const Anchor = (props) => (
  <a href={`#${props.id}`}>
    <img alt={props.name} src={props.poster_image} style={{width: '100%', maxHeight: '260px'}} />
  </a>
)

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
      autoplay: true,
      infinite: true,
      autoplaySpeed: 1,
      speed: 10000,
      cssEase: "linear",
      slidesToShow: 5,
      slidesToScroll: 1,
      pauseOnHover: true,
    };
   
    return(
      <div className='content'>
        <h2>Popular Shows</h2>
        { loading && <div>Loading...</div> }
        <div>
        { showList &&
        <Slider {...settings}>
          {showList.map( (show) => 
            <Anchor key={show.id} id={show.id} name={show.name} poster_image={show.poster_image} />
          )}
        </Slider>
        }
        { showList &&
        <List size="large" bordered  itemLayout="vertical" style={{marginTop: '35px', background: '#fff'}}>
          {showList.map( (show) => 
            <List.Item
              key={show.name}
              extra={
                <Link to={`${ROUTES.TV_SHOWS}/${show.id}`}>
                  <img alt={show.name} src={show.poster_image} style={{width: 272 }} />
                </Link>
              }
            >
              <List.Item.Meta
                avatar={ <Progress type="circle" percent={(show.vote_average * 10)} format={percent => `${(show.vote_average * 10)}%`} /> }
                title={ <Link  id={show.id} to={`${ROUTES.TV_SHOWS}/${show.id}`}>{show.name}</Link> }
              />
              <div style={{marginTop: '-10px', paddingLeft: '18px', paddingBottom: '20px'}}>
                Average Vote
              </div>
              {show.overview}
            </List.Item>
          )}
        </List>
        }
        </div>
      </div>
    )
  }
}
export default Popular