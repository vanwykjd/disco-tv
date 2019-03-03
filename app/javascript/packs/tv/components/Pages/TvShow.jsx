import React, { Component } from 'react';
import Slider from "react-slick";
import { Row, Col, List, Card, Progress, Icon } from 'antd';

import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';


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
      <div className='content'>
        <Link to={ROUTES.PAGES}><h2 style={{color: 'rgba(0, 0, 0, .45)' }}><Icon type="left" style={{ fontSize: '16px', paddingRight: '2px', paddingBottom: '2px'}}/>Back</h2></Link>
        { show && 
          <div>
            <img className='tv-poster' alt={show.name} src={show.backdrop_image} style={{width: '100%', height: 'auto'}} />
            
            <Row type="flex" align="middle" className="show-title" style={{ paddingLeft: '15px', paddingRight: '15px' }}> 
              <Col span={12}>
                <Row style={{ fontSize: '150%'}}>
                  {show.name}
                </Row>
                
                <Row style={{ fontSize: '50%', paddingLeft: '5px'}}>
                  <a alt={show.homepage} href={show.homepage} style={{ color: 'rgba(26, 144, 255, 0.65)'}}>{show.name} homepage</a>
                </Row>
              </Col>
              
              <Col span={12} style={{ textAlign: 'right', paddingRight: '10px'}}>
                <span style={{ fontSize: '50%', lineHeight: 1, paddingRight: '10px'}}>Average Vote</span>
                
                <Progress type="circle" percent={(show.vote_average * 10)} format={percent => `${(show.vote_average * 10)}%`} />
              </Col>
            </Row> 
            
            <Row type="flex" justify="space-around" align="middle" className="tv-detail">
              <Col span={4} style={{ textAlign: 'center' }}>
                <Card  size="small" title="Networks">
                 {show.networks.map( (network) =>
                    `${network.name}`
                  )}
                </Card>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card size="small" title="Original Air Date">
                  {show.first_air_date}
                </Card>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card size="small" title="Last Air Date">
                  {show.last_air_date}
                </Card>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card size="small" title="Total Seasons">
                  {show.number_of_seasons}
                </Card>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card size="small" title="Total Episodes">
                  {show.number_of_episodes}
                </Card>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card size="small" title="Origin">
                  {show.origin_country.map( (country) =>
                    `${country}`
                  )}
                </Card>
              </Col>
            </Row>
            
            <Row type="flex" justify="space-around" align="middle" className="tv-detail">
              <Col span={24} style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <Row style={{ fontSize: '150%' }}>
                  Overview:
                </Row>
                
                <Row style={{ marginTop: '15px' }}>
                  {show.overview}
                </Row>
              </Col>
            </Row>
            <List
              header={<div>Seasons</div>}
              bordered
              style={{marginTop: '30px', background: '#fff'}}
            >
            {show.seasons.map( (season) =>
              <List.Item key={season.id}>
                <List.Item.Meta
                  title={season.name}
                  description={`Episodes: ${season.episode_count}`}
                />
                  Original air date: {season.air_date}
              </List.Item>   
            )}
            </List>
          </div>
        }
      </div>

    )
  }
}
export default TvShow