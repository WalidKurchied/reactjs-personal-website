import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from './components/App.js';

import './sass/index.scss';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/public" component={App} />
        </Switch>
    </Router>
    ,document.getElementById('root'));
