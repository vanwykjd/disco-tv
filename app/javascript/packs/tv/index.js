import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('disco-tv'),
  );
});