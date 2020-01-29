import React from 'react';
import NavUserContainer from '../nav/nav_user_container';

class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="feed-container">
                <NavUserContainer />
                <div>

                </div>
            </div>
        )
    }
}

export default FeedIndex;