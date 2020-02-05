import React from 'react';
import { Link } from 'react-router-dom';
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
        const { friendrequests } = this.props;
        if (!friendrequests || friendrequests === []) return null;
       const requests = friendrequests.map( friendrequest => 
            <li key={friendrequest.id}>
                <Link to={`/profile/${friendrequest.sender_id}`}><img className="friend-requests-pic" src={friendrequest.sender.photoUrl}></img></Link>
                <div className="friend-requests-info">
                    <span>
                        <Link to={`/profile/${friendrequest.sender_id}`}>{friendrequest.sender.first_name} {friendrequest.sender.last_name}</Link>
                    </span>
                    <div className="friend-requests-buttons">
                        <button className="confirm" onClick={this.handleClick(friendrequest.id, "accept")}>Confirm</button>
                        <button className="delete" onClick={this.handleClick(friendrequest.id, "decline")}>Delete</button>
                    </div>
                </div>
            </li>)
        return (
            <div className="friend-requests-container">
                <div className="friend-requests-header">Friend Requests</div>
                <ul className="friend-requests">
                    {requests}
                </ul>
            </div>
        )
    }
}

export default FriendRequest;