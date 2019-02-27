import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Pages from '../Pages';
import Nav from '../Nav';
import TvShow from '../TvShow';


import * as ROUTES from '../../constants/routes';


const App = () => (
  <Router>
    <div className="app">
      <div className='header'>
        <Nav />
      </div>
      <div className="content-container">
        <Route exact path={ROUTES.PAGES} component={Pages} />
        <Route exact path={ROUTES.SHOW_DETAIL} component={TvShow} />
      </div>
    </div>
  </Router>
);

export default App;