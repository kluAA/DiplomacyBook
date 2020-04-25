import React from 'react'; 
import { withRouter, Link } from 'react-router-dom';

class TimelineAbout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="timeline-box">
                <div className="timeline-box-header">
                    <img src={window.fbAboutIconURL} className="timeline-header-icon" />
                    <Link to={`/profile/${this.props.match.params.id}/about`}>
                        <span className="timeline-box-label">About</span>
                    </Link>
                </div>

            </div>
        )
    }
}

export default withRouter(TimelineAbout);