import React from 'react';
import PostIndexContainer from '../posts/post_index_container';

class Timeline extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="timeline-container">
                <div className="timeline-left">
                    <div className="timeline-friends">
                        Friends
                    </div>
                </div>
                    <PostIndexContainer />
            </div>
        )
    }
}

export default Timeline;