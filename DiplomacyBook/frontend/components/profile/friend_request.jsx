import React from 'react';

class FriendRequest extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFriendRequests();
    }

    render() {
        if (!this.props.friendrequests) return null;
       const requests = this.props.friendrequests.map( friendrequest => 
            <li key={friendrequest.id}>
                {friendrequest.sender.first_name} {friendrequest.sender.last_name}
                <button>Add Friend</button>
                <button></button>
            </li>)
        return (
            <ul>
                {requests}
            </ul>
        )
    }
}

export default FriendRequest;