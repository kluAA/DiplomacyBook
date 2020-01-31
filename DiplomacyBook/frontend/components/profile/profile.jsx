import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavUserContainer from '../nav/nav_user_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps) {
   
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId);
        }
    }

    render() {
        if (!this.props.user) return null

        const addFriendBtn = <button className="profile-add-friend"><i className="fas fa-user-plus"></i>Add Friend</button>

        const userId = this.props.match.params.userId
        const user = this.props.user;
        const photoUrl = user.photoUrl ? user.photoUrl : window.defaultProfileURL;
        return (
            <div className="bg-container">
                <NavUserContainer />
                <div className="profile-container">
                    <div className="profile-cover">
                        <span className="profile-fn">{`${user.first_name} ${user.last_name}`}</span>
                        <div className="profile-photo-container">
                            <img className="profile-photo" src={photoUrl}></img>
                        </div>
                        {this.props.currentUserId !== this.props.user.id && addFriendBtn}
                    </div>
                    <ul className="profile-nav">
                        <li>
                            <Link to={`/profile/${userId}`}>Timeline</Link>
                        </li>
                        <li>
                            <Link to={`/profile/${userId}/about`}>About</Link>
                        </li>
                        <li>
                            <Link to={`/profile/${userId}/friends`}>Friends</Link>
                        </li>
                        <li>
                            <Link to={`/profile/${userId}/photos`}>Photos</Link>
                        </li>
                        <li>
                            <Link to={`/profile/${userId}/#`}>More</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Profile;