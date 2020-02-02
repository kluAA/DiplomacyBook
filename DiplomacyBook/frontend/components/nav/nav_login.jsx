import React from 'react';
import { Link } from 'react-router-dom';

class NavLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toSignup = this.toSignup.bind(this);
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(Object.assign({}, this.state))
            .fail(()=>this.props.history.push('/login'))   
    }
    
    toSignup(e) {
        e.preventDefault();
        this.props.history.push('/');
    }
    
    render() {
        const form = (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={this.handleChange("email")} value={this.state.email}></input>
                </label>

                <label>
                    <p>Password</p>
                    <input type="password" onChange={this.handleChange("password")} value={this.state.password}></input>
                </label>

                <input type="submit" value="Log In"></input>
                <div className="nav-forgot">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Forgot account?</a>
                </div>
            </form>
        )

        const signupBtn = <button onClick={this.toSignup} className="nav-signup-btn">Sign Up</button>;
        
        return (
            <div className="nav-login">
                <div className="nav-login-container">
                    <Link to='/'><span className="logo">diplomacybook</span></Link>
                    {this.props.match.path === "/login" && signupBtn}
                    {this.props.match.path === "/signup" && form}
                </div>
            </div>
        )
    }
}

export default NavLogin;