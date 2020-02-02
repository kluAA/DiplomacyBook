import React from 'react';
import { Route, Redirect, Switch, NavLink, Link } from 'react-router-dom';
import Splash from './session/splash';
import FeedIndex from './feed/feed_index';
import LoginFormContainer from './session/login_container';
import ProfileContainer from './profile/profile_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import ProfilePhotoForm from './profile/profile_photo_form';
const App = () => {
    return (
        <div>
            <AuthRoute exact path='/signup' component={Splash} />
            <ProtectedRoute exact path='/' component={FeedIndex} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <ProtectedRoute path='/profile/:userId' component={ProfileContainer} />
            <Route path='/test' component={ProfilePhotoForm} />
        </div>
    )
}

export default App;