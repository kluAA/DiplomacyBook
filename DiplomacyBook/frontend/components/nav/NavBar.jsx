import React from 'react';
import { Link } from 'react-router-dom';
import NavBarFriendRequestContainer from './NavBarFriendRequestContainer';
import ReactDOM from 'react-dom';
import NavBarMenu from "./NavBarMenu";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            showFriends: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
        this.closeExcept = this.closeExcept.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleLogOut(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleClick(e) {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(e.target)) {
            this.setState({
                showMenu: false,
                showFriends: false
            });
        }
    }

    handleDropDown(key) {
        return e => {
            e.preventDefault();
            //    this.setState({[key]: !this.state[key]})
            this.setState(this.closeExcept(key));
        }
    }

    closeExcept(key) {
        const dropdowns = Object.keys(this.state)
        let newState = {};
        dropdowns.forEach(name => {
            (name !== key) ? newState[name] = false : newState[name] = !this.state[name]
        })
        return newState;
    }

    toggleMenu(key) {


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
                        {/* <i onClick={this.handleDropDown("showFriends")} className={this.state.showFriends ? "fas fa-user-friends open" : "fas fa-user-friends"}></i> */}
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