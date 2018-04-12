import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageUsers from 'Pages/Users';
import UsersProfile from 'Pages/UsersProfile';

const Users = () => {
    return (
        <div>
            <Route path="/users" component={PageUsers} />
            <Route path="/users/:id" component={UsersProfile} />
        </div>
    );
};

export default Users;