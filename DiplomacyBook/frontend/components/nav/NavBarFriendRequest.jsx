import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
class NavBarFriendRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFriends: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchFriendRequests();
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick(e) {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(e.target)) {
            this.setState({
                showFriends: false
            });
        }
    }

    handleRequest(id, action) {
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
                        <button className="confirm" onClick={this.handleRequest(friendrequest.id, "accept")}>Confirm</button>
                        <button className="delete" onClick={this.handleRequest(friendrequest.id, "decline")}>Delete</button>
                    </div>
                </div>
            </li>)

        const showFriendsMenu = (
            <div className="friend-requests-container">
                <div className="friend-requests-header">Friend Requests</div>
                <ul className="friend-requests">
                    {requests}
                </ul>
            </div>
        )
        return (
            <span className="nav-listener">
                <i onClick={e => this.setState({showFriends: !this.state.showFriends})} className={this.state.showFriends ? "fas fa-user-friends open" : "fas fa-user-friends"}>
                </i>
                    {this.state.showFriends ? showFriendsMenu : null}
            </span>
        )
    }
}

export default NavBarFriendRequest;