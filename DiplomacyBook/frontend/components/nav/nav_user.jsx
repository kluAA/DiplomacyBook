import React from 'react';
import { Link } from 'react-router-dom';
class NavUser extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
//componentdidmount addeventlistener on doc itself
    handleClick(e) {
        e.preventDefault()
        this.props.logout();
    }

    render() {
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
                    <Link to='/profile'><section className="nav-profile">
                        <img src={window.defaultProfileURL} />
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
                    <i className="fas fa-caret-down"></i>
                    <button onClick={this.handleClick}>Logout</button>
                </div>
            </div>
        )
    }
}

export default NavUser;