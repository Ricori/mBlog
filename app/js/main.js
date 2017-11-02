import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {render} from 'react-dom';
import Main from '../templates/Main';
import '../scss/main.scss';

render(
    <Router>
        <Route exact path="/" component={Main} />
    </Router>,
    document.getElementById("container")
);