import React from 'react';
import { Link } from 'react-router-dom';
class NavUser extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleDropClose = this.handleDropClose.bind(this);
        this.state = { dropDownOpen: false }
    }

    handleClick(e) {
        e.preventDefault()
        this.props.logout();
    }

    handleDropDown(e) {
        e.preventDefault();
        this.setState({dropDownOpen: !this.state.dropDownOpen})
    }

    handleDropClose(e) {
        e.preventDefault();
        if (e.target.className !== "menu") {
            this.setState({dropDownOpen: false})
        }
    }
    render() {
     
        const menu = (
            <div onClick={this.handleDropClose} className="menu-modal">
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
                    <Link to={`/profile/${this.props.currentUser.id}`}><section className="nav-profile">
                        <img src={photoUrl} />
                        <span className="nav-profile-fn">{this.props.currentUser.first_name}</span>
                    </section></Link>
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
                        <i className="fas fa-user-friends"></i>
                        <i className="fab fa-facebook-messenger"></i>
                        <i className="fas fa-bell"></i>
                    </div>
                    <div className="nav-separator"></div>
                    <i onClick={this.handleDropDown} className={this.state.dropDownOpen ? "fas fa-caret-down open" : "fas fa-caret-down"}>
                    </i>
                        {this.state.dropDownOpen && menu}
                </div>
            </div>
        )
    }
}

export default NavUser;