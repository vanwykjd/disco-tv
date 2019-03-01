import React from 'react';
import { Row, Col } from 'antd';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SearchBar from './SearchBar';

const HomeLink = () => (
  <Link className='nav-link' to={ROUTES.PAGES}>Disco TV</Link>
)

const Nav = () => (
    <Row type="flex" align="middle" className='nav'>
      <Col span={6} className='nav-item' > 
        <HomeLink />
      </Col>
      <Col span={12}>
        <SearchBar />
      </Col>
    </Row>
 
);
export default Nav;