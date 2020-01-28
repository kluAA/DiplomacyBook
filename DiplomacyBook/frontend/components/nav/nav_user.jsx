import React from 'react';
import { Link } from 'react-router-dom';
class NavUser extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

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
                        <i class="fas fa-search"></i>
                    </div>
                    <button onClick={this.handleClick}>Logout</button>
                </div>
            </div>
        )
    }
}

export default NavUser;