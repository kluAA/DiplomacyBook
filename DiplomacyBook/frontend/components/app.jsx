import React from 'react';
import { Route, Redirect, Switch, NavLink, Link } from 'react-router-dom';
import Splash from './session/splash';
import FeedIndexContainer from './feed/feed_index_container';
import LoginFormContainer from './session/login_container';
import ProfileContainer from './profile/profile_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import NavBarContainer from './nav/NavBarContainer';

const App = () => {
    return (
        <div>
            <AuthRoute exact path='/signup' component={Splash} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <ProtectedRoute path='/profile/:userId' component={ProfileContainer} />
            <ProtectedRoute path='/' component={NavBarContainer} />
            <ProtectedRoute exact path='/' component={FeedIndexContainer} />
        </div>
    )
}

export default App;