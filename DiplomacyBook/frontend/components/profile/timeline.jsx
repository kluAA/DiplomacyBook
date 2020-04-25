import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import TimelineFriendsContainer from './timeline_friends_container';
import TimelinePhotosContainer from './photos/timeline_photos_container';
import TimelineAboutContainer from './about/timeline_about_container';

class Timeline extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="timeline-container">
                <div className="timeline-left">
                    <TimelineAboutContainer />
                    <TimelineFriendsContainer />
                    <TimelinePhotosContainer />
                </div>
                    <PostIndexContainer />
            </div>
        )
    }
}

export default Timeline;