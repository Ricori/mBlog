import React from 'react';
import {render} from 'react-dom';
import Main from '../templates/Main';
import '../scss/main.scss';

render(
    <Main />, 
    document.getElementById("container")
);