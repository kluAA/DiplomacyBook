import React from 'react';

class FriendRequest extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFriendRequests();
    }

    handleClick(id, action) {
        return e => {
            e.preventDefault();
            this.props.destroyFriendRequest(id, action)
        }
    } 

    render() {

        if (!this.props.friendrequests || this.props.friendrequests === []) return null;
       const requests = this.props.friendrequests.map( friendrequest => 
            <li key={friendrequest.id}>
                {friendrequest.sender.first_name} {friendrequest.sender.last_name}
                <button onClick={this.handleClick(friendrequest.id, "accept")}>Accept</button>
                <button onClick={this.handleClick(friendrequest.id, "decline")}>Decline</button>
            </li>)
        return (
            <div className="friendrequests-container">
                <ul>
                    {requests}
                </ul>
            </div>
        )
    }
}

export default FriendRequest;