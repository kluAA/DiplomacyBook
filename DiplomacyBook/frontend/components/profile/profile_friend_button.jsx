import React from 'react';

class ProfileFriendButton extends React.Component {
    constructor(props) {
        super(props);
        this.addFriend = this.addFriend.bind(this);
    }

    addFriend(e) {
        e.preventDefault();
        const request = {
            sender_id: this.props.currentUser.id,
            receiver_id: this.props.user.id
        }

        this.props.createFriendRequest(request);
    }

    render() {
        const addFriendBtn = <button onClick={this.addFriend} className="profile-add-friend"><i className="fas fa-user-plus"></i>Add Friend</button>
        return  ( this.props.currentUser.id !== this.props.user.id && addFriendBtn )
 
    }
}

export default ProfileFriendButton;