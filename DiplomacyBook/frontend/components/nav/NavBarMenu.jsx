import React from 'react';
import ReactDOM from 'react-dom';

class NavBarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
        this.handleClick = this.handleClick.bind(this);
 
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }


    handleClick(e) {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(e.target)) {
            this.setState({
                showMenu: false
            });
        }
    }

    render() {
        const menu = (
            <ul className="menu">
                <i className="fas fa-caret-up"></i>
                <li>First Item</li>
                <hr className="menu-divider"></hr>
                <li>Second Item</li>
                <hr className="menu-divider"></hr>
                <li>Another Item Here</li>
                <hr className="menu-divider"></hr>
                <li onClick={e => this.props.handleLogOut(e)}>Log Out</li>
            </ul>
        )

        return (
            <span className="nav-listener">
                <i onClick={e => this.setState({showMenu: !this.state.showMenu})} className={this.state.showMenu ? "fas fa-caret-down open" : "fas fa-caret-down"}>
                </i>
                    {this.state.showMenu && menu}
            </span>
        )
    }
}

export default NavBarMenu;