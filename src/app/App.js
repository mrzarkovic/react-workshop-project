import React, { Component } from 'react';
import {
    Route,
    Link,
    Switch,
    Prompt
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
                    <li><Link to="/asdf">404</Link></li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/users" component={Users} />
                    <Route render={() => <div>404</div>} />
                </Switch>
            </div>
        );
    }
}
