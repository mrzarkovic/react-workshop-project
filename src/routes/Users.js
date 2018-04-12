import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageUsers from 'Pages/Users';
import UsersProfile from 'Pages/UsersProfile';

const Users = () => {
    return (
        <Switch>
            <Route exact path="/users" component={PageUsers} />
            <Route path="/users/:id" component={UsersProfile} />
        </Switch>
    );
};

export default Users;