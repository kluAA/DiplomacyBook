import React from 'react';
import SignupFormContainer from './signup_form_container';
import SessionFormContainer from './session_form_container';

class Signup extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <SessionFormContainer />
                <SignupFormContainer />
            </div>
        )
    }
}

export default Signup;