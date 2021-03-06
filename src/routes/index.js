import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Search from '../pages/Search';
import Friends from '../pages/Friends';
import Profile from '../pages/Profile';
import Chat from '../pages/Chat';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/dashboard" exact component={Dashboard} isPrivate />
            <Route path="/search" exact component={Search} isPrivate />
            <Route path="/friends" exact component={Friends} isPrivate />
            <Route path="/profile" exact component={Profile} isPrivate />
            <Route path="/chat/:id" exact component={Chat} isPrivate />
            <Route path="/chat" exact component={Chat} isPrivate />
        </Switch>
    );
}
