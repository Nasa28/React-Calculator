import React from 'react';
import ReactDOM from 'react-dom';
import './component/styles/index.css';
// eslint-disable-next-line
import PropTypes from "prop-types";
// eslint-disable-next-line
import Big from "big.js";
import App from './component/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
