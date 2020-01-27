import React from 'react';
import SignupFormContainer from './signup_form_container';
import NavLoginContainer from '../nav/nav_login_container';

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavLoginContainer />
                <SignupFormContainer />
            </div>
        )
    }
}

export default Splash;