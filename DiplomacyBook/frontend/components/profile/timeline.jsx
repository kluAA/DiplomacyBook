import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import TimelineFriendsContainer from './timeline_friends_container';
import TimelinePhotosContainer from './photos/timeline_photos_container';

class Timeline extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="timeline-container">
                <div className="timeline-left">
                    <TimelineFriendsContainer />
                    <TimelinePhotosContainer />
                </div>
                    <PostIndexContainer />
            </div>
        )
    }
}

export default Timeline;