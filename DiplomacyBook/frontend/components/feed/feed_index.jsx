import React from 'react';
import NavUserContainer from '../nav/nav_user_container';

class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavUserContainer />
                Feed
            </div>
        )
    }
}

export default FeedIndex;