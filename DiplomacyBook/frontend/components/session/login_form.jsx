import React from 'react'
import NavLoginContainer from '../nav/nav_login_container';

class LoginForm extends React.Component {
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
        this.props.login(Object.assign({}, this.state));
    }

    render() {
        return (
            <div>
                <NavLoginContainer />
                <div className="login-container">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <h1>Log Into Diplomacybook</h1>
                        <input type="text" onChange={this.handleChange("email")} value={this.state.email} placeholder="Email"></input>
                        <input type="password" onChange={this.handleChange("password")} value={this.state.password} placeholder="Password"></input>
                        <input type="submit" value="Log In"></input>
                    </form>
                    <button></button>
                </div>
            </div>
        )
    }
}

export default LoginForm;