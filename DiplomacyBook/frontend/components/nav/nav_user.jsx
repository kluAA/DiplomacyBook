import React from 'react';
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
                <button onClick={this.handleClick}>Logout</button>
            </div>
        )
    }
}

export default NavUser;