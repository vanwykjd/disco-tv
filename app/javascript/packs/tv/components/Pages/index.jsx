import React, { Component } from 'react';
// Components
import Popular from './Popular';

const Pages = () => (
  
    <Page props={this.props} />

)

class Page extends React.Component {
  
  render() {
    return(
      <div className='content-container'>
        <Popular {...this.props} />
      </div>
    )
  }
}
export default Pages