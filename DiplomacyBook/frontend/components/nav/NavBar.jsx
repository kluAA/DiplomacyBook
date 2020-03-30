import React from 'react';
import { Link } from 'react-router-dom';
import NavBarFriendRequestContainer from './NavBarFriendRequestContainer';
import NavBarMenu from "./NavBarMenu";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            showFriends: false
        }
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut(e) {
        e.preventDefault();
        this.props.logout();
    }


    render() {
        const user = this.props.currentUser
        const photoUrl = user.photoUrl ? user.photoUrl : window.defaultProfileURL;

        return (
            <div className="navbar-container">
                <div className="navbar">
                    <Link to='/'>
                        <i className="fab fa-facebook-square"></i>
                    </Link>
                    <div className="nav-search">
                        <input type="text" placeholder="Search"></input>
                        <button className="nav-search-btn"><i className="fas fa-search"></i></button>
                    </div>
                    <div className="nav-profile-container">
                        <Link to={`/profile/${user.id}`}><section className="nav-profile">
                            <img src={photoUrl} />
                            <span className="nav-profile-fn">{user.first_name}</span>
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
                        <NavBarFriendRequestContainer />
                        <i className="fab fa-facebook-messenger"></i>
                        <i className="fas fa-bell"></i>
                    </div>
                    <div className="nav-separator"></div>
        
                    <NavBarMenu handleLogOut={this.handleLogOut} />
                    {this.state.showFriends && friendrequests}
                </div>
            </div>
        )
    }

    
}

export default NavBar;