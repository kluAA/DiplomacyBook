import React from 'react';
import { Link } from 'react-router-dom';
import FriendRequestContainer from '../profile/friend_request_container';
class NavUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            dropDownOpen: false,
            dropFriends: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleDropClose = this.handleDropClose.bind(this);
    }

    handleClick(e) {
        e.preventDefault()
        this.props.logout();
    }

    handleDropDown(key) {
       return e => {
           e.preventDefault();
           this.setState({[key]: !this.state[key]})
       }
    }

    handleDropClose(key, name) {
        return e => {
            e.preventDefault();
            if (e.target.className !== name) {
                this.setState({[key]: false})
            }
    }
    }
    render() {

        const friendrequests = (
            <div onClick={this.handleDropClose("dropFriends", "friendrequests-container")} className="menu-modal">
                <FriendRequestContainer />
            </div>
        )
     
        const menu = (
            <div onClick={this.handleDropClose("dropDownOpen", "menu")} className="menu-modal">
            <ul className="menu">
                <i className="fas fa-caret-up"></i>
                <li>First Item</li>
                <hr className="menu-divider"></hr>
                <li>Second Item</li>
                <hr className="menu-divider"></hr>
                <li>Another Item Here</li>
                <hr className="menu-divider"></hr>
                <li onClick={this.handleClick}>Log Out</li>
            </ul>
        </div>
        )
        //when modal opened, add event listener to document for clicking to close modal
        //modal to have eventlistener to stop propogation of click event
        //when modal closes remove document 
        const user = this.props.currentUser
        const photoUrl = user.photoUrl ? user.photoUrl : window.defaultProfileURL;

        return (
            <div className="nav-user">
                <div className="nav-user-container">
                    <Link to='/'>
                        <i className="fab fa-facebook-square"></i>
                    </Link>
                    <div className="nav-search">
                        <input type="text" placeholder="Search"></input>
                        <button className="nav-search-btn"><i className="fas fa-search"></i></button>
                    </div>
                    <div className="nav-profile-container">
                    <Link to={`/profile/${this.props.currentUser.id}`}><section className="nav-profile">
                        <img src={photoUrl} />
                        <span className="nav-profile-fn">{this.props.currentUser.first_name}</span>
                    </section></Link>
                    </div>
                    <div className="nav-separator"></div>
                    <Link to='/'><section className="nav-home">
                        <span>Home</span>
                    </section></Link>
                    <div className="nav-separator"></div>
                    <section className="nav-find-friends">
                        <span>Find Friends</span>
                    </section>
                    <div className="nav-separator"></div>
                    <section className="nav-create">
                        <span>Create</span>
                    </section>
                    <div className="nav-separator"></div>
                    <div className="nav-alerts">
                        <i onClick={this.handleDropDown("dropFriends")} className="fas fa-user-friends"></i>
                        <i className="fab fa-facebook-messenger"></i>
                        <i className="fas fa-bell"></i>
                    </div>
                    <div className="nav-separator"></div>
                    <i onClick={this.handleDropDown("dropDownOpen")} className={this.state.dropDownOpen ? "fas fa-caret-down open" : "fas fa-caret-down"}>
                    </i>
                        {this.state.dropDownOpen && menu}
                        {this.state.dropFriends && friendrequests}
                </div>
            </div>
        )
    }
}

export default NavUser;