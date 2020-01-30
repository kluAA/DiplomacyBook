import React from 'react';
import NavUserContainer from '../nav/nav_user_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bg-container">
                <NavUserContainer />
            </div>
        )
    }
}

export default Profile;