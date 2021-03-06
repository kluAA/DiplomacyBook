import React from 'react';
import { Link } from 'react-router-dom';
class TimelineFriends extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFriends(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchFriends(this.props.match.params.id);
        }
    }

    render() {
        const { friends, friendsCount } = this.props;
        if (!friends) return null;
        const mapFriends = friends.map(friend => {
            return (
                <li key={friend.id}>
                    <Link to={`/profile/${friend.id}`}>
                        <img src={friend.photoUrl}></img>
                        <span>{friend.first_name} {friend.last_name}</span>
                    </Link> 
                </li>
            )
        }) 
       
        return (
            <div className="timeline-box">
                <div className="timeline-box-header">
                    <img src={window.fbFriendsIconURL} className='timeline-header-icon' />
                    <Link to={`/profile/${this.props.match.params.id}/friends`}>
                        <span className='timeline-box-label'>Friends</span>
                    </Link>
                    <span className="timeline-box-count">{`(${friendsCount})`}</span>
                </div>
                <ul className='timeline-box-list'>
                    {mapFriends}
                </ul>
            </div>
        )
    }
}

export default TimelineFriends;