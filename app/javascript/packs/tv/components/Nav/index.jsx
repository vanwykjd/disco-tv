import React from 'react';
import {Row} from 'antd';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SearchBar from './SearchBar';

const Nav = () => (

    <Row type="flex" justify="space-around" align="middle">
      <SearchBar />
    </Row>
 
);
export default Nav;