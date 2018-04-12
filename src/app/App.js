import React, { Component } from 'react';
import {
    Route,
    Link
} from 'react-router-dom';

import Home from 'Pages/Home';
import Users from 'Routes/Users';

import 'Pages/Style.css';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>

                <hr />

                <Route exact path="/" component={Home}></Route>
                <Route path="/users" component={Users}></Route>
            </div>
        );
    }
}
