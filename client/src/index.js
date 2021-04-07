import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bulma/css/bulma.min.css";
import { Router } from 'express';

ReactDOM.render(
   <Router>
        <App />
   </Router>, 
   document.getElementById('root'));



