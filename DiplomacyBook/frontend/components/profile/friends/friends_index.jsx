import React from 'react';
import { Link } from 'react-router-dom';

class FriendsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFriends(this.props.match.params.id)
    }

    render() {
        if (!this.props.friends) return "LOADING"
        const { friends } = this.props
        const listFriends = friends.map(friend => {
            return (
                <li key={friend.id}>
                    <Link to={`/profile/${friend.id}`}><img src={friend.photoUrl}></img></Link>
                    <div className="friends-info">
                        <span>
                            <Link to={`/profile/${friend.id}`}>
                                {friend.first_name} {friend.last_name}
                            </Link>
                            <p>{friend.gender}</p>
                        </span>
                    </div>
                </li>
            )
        })

        return (
            <div className="profile-component-container">
                <div className="profile-component-header">
                    <span><i className="fas fa-user-friends"></i>Friends</span>
                </div>
                <ul className="profile-component-friends">
                        {listFriends}
                </ul>
            </div>
        )
    }
}

export default FriendsIndex;