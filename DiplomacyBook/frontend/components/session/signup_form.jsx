import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: "",
            gender: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(Object.assign({}, this.state));
    }


    render() {
        return (
            <div className="sign-up-container">
                <h1>Sign Up</h1>
                <h3>It's quick and easy.</h3>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <div className="sign-up-form-name">
                        <input type="text" onChange={this.handleChange("first_name")} placeholder="First name" value={this.state.first_name}></input>
                        <input type="text" onChange={this.handleChange("last_name")} placeholder ="Last name" value={this.state.last_name}></input>
                    </div>
                    <input type="text" onChange={this.handleChange("email")} placeholder="Email" value={this.state.email}></input>
                    <input type="password" onChange={this.handleChange("password")} placeholder="New password" value={this.state.password}></input>
                    <label>Birthday
                        <input type="date" onChange={this.handleChange("birthday")} value={this.state.birthday}></input>
                    </label>
                    <label>Gender
                        <input type="radio" onClick={this.handleChange("gender")} name="gender" value="ally"/>Ally
                        <input type ="radio" onClick={this.handleChange("gender")} name="gender" value="comrade"/>Comrade
                    </label>
                    <input type="submit" value="Sign Up"></input>
                </form>
            </div>
        )
    }
}

export default SignupForm;