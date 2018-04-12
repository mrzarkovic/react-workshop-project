import React, { Component } from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';

import UsersProfile from 'Pages/UsersProfile';

class Users extends Component {
    render() {
        return (
            <div className="users">
                <ul>
                    <li><Link to="/users/1">User 1</Link></li>
                    <li><Link to="/users/2">User 2</Link></li>
                    <li><Link to="/users/3">User 3</Link></li>
                </ul>
            </div>
        );
    }
}

export default Users;