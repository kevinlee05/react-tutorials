import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from './components/App';
import Main from './components/Main';


ReactDOM.render(
    (<Router basename="/">
        <App />
    </Router>),
    document.getElementById('react-container')
);

