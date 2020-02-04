import React from 'react';
import { Route, Redirect, Switch, NavLink, Link } from 'react-router-dom';
import Splash from './session/splash';
import FeedIndex from './feed/feed_index';
import LoginFormContainer from './session/login_container';
import ProfileContainer from './profile/profile_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import NavUserContainer from './nav/nav_user_container';
import FriendRequestContainer from './profile/friend_request_container';

const App = () => {
    return (
        <div>
            <ProtectedRoute path='/' component={NavUserContainer} />
            <AuthRoute exact path='/signup' component={Splash} />
            <ProtectedRoute exact path='/' component={FeedIndex} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <ProtectedRoute path='/profile/:userId' component={ProfileContainer} />
            <ProtectedRoute exact path='/friends/requests' component={FriendRequestContainer} />
        </div>
    )
}

export default App;