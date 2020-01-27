import React from 'react';

class NavLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(Object.assign({}, this.state))
            .then(this.props.history.push("/"))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <input type="text" onChange={this.handleChange("email")} value={this.state.email}></input>
                    </label>

                    <label>Password
                        <input type="password" onChange={this.handleChange("password")} value={this.state.password}></input>
                    </label>

                    <input type="submit" value="Log In"></input>
                </form>
            </div>
        )
    }
}

export default NavLogin;