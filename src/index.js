import "bootswatch/dist/lux/bootstrap.min.css";
import React from 'react';
import reactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router,
        Switch,
        Route,
        Link
    } from "react-router-dom"


reactDOM.render(
    <Router>
            <App/>
    </Router>,
    document.getElementById('root')
);

