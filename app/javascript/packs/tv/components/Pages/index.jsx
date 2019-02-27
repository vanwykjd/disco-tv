import React, { Component } from 'react';
// Components
import Popular from './Popular';

class Pages extends React.Component {
  
  render() {
    return(
      <div className='content'>
        <Popular {...this.props} />
      </div>
    )
  }
}
export default Pages