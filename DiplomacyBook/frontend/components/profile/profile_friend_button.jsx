import React from 'react';

class ProfileFriendButton extends React.Component {
    constructor(props) {
        super(props);
        this.addFriend = this.addFriend.bind(this);
        this.unFriend = this.unFriend.bind(this);
    }

    addFriend(e) {
        e.preventDefault();
        const request = {
            sender_id: this.props.currentUser.id,
            receiver_id: this.props.user.id
        }

        this.props.createFriendRequest(request);
    }

    unFriend(e) {
        e.preventDefault();
        this.props.unFriend(this.props.user.id);
    }

    render() {
        const { currentUser, user } = this.props;
        if (!user) return null
        let button;
        let unfriend = <div onClick={this.unFriend} className="profile-button-unfriend"><div className="triangle"></div>Unfriend :(</div>;
        if (currentUser.friends.includes(user.id)) {
            button = <button className="profile-button">
                        <i className="fas fa-check"></i>
                        Friends<i className="fas fa-caret-down"></i>
                        {unfriend}
                    </button>
        } else if (currentUser.requesteds.includes(user.id)) {
            button = <button className="profile-button">
                <i className="fas fa-check"></i>
                Friend Request Sent</button>
        } else if (currentUser.requesters.includes(user.id)) { 
            button = <button className="profile-button">
                <i className="fas fa-check"></i>
                Respond to Friend Request</button>
        } else if (currentUser.id === user.id) {
            return null;
        } else {
            button = <button onClick={this.addFriend} className="profile-button">
                <i className="fas fa-user-plus button-plus"></i>Add Friend</button>
        }

        return button 
    }
}

export default ProfileFriendButton;