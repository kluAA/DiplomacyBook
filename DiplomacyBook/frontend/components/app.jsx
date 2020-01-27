import React from 'react';
import { Route, Redirect, Switch, NavLink, Link } from 'react-router-dom';
import Signup from './session/signup';
import FeedIndex from './feed/feed_index';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

const App = () => {
    return (
        <div>
            <AuthRoute path='/signup' component={Signup} />
            <ProtectedRoute path='/' component={FeedIndex} />
        </div>
    )
}

export default App;