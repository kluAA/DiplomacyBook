import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "", 
            showResults: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
    }

    handleChange(e) {
        this.setState({ query: e.target.value }, () => this.fetchUsers());
    }

    fetchUsers() {
        if (this.state.query) {
            this.props.fetchSearchUsers({ query: this.state.query });
        } 
        else {
            this.props.clearUsers();
        }
    }

    handleRedirect(user) {
        this.props.history.push(`/profile/${user.id}`);
        this.setState({query: ""})
    }

    showResults() {
        const users = this.props.users;
        //if there are users and query is not empty
        if (users.length && this.state.query) {
            console.log(users)
            return (
                <ul className="search-results">
                    {users.map(user => {
                        return (
                            <li onMouseDown={e => this.handleRedirect(user)} key={user.id}>
                                {user.first_name} {user.last_name}
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }

    render() {

        const { query, showResults } = this.state;

        return (
            <div className="nav-search">
                <input 
                    type="text" 
                    placeholder="Search"
                    onChange={this.handleChange}
                    onFocus={e => this.setState({showResults: true})}
                    onBlur={e => this.setState({showResults: false})}
                    value={query}
                />
                <button className="nav-search-btn"><i className="fas fa-search"></i></button>
                {showResults && this.showResults()}
            </div>
        )
    }
}

export default withRouter(NavSearch);