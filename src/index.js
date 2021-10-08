import React from 'react';
import reactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router,
        Switch,
        Route,
        Link
    } from "react-router-dom"

const jsxElement = <h1>Movie eCommerce Website</h1>

reactDOM.render(
    <Router>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
);

