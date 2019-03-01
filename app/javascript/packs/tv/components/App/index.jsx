import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Sider } = Layout;

import Pages from '../Pages';
import Nav from '../Nav';
import TvShow from '../Pages/TvShow';


import * as ROUTES from '../../constants/routes';


const App = () => (
  <Router>
    <Layout>
      <Header className="header">
        <Nav />
      </Header>
      <Layout className="main-content">
        <Route exact path={ROUTES.PAGES} component={Pages} />
        <Route exact path={ROUTES.SHOW_DETAIL} component={TvShow} />
      </Layout>
    </Layout>
  </Router>
);

export default App;