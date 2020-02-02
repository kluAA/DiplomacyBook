import React from 'react'
import NavLoginContainer from '../nav/nav_login_container';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "", 
            password: "", 
            touched: false,
            error: Boolean(this.props.error),
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleCN = this.handleCN.bind(this);
        this.errorMsg = this.errorMsg.bind(this);
        this.demo = this.demo.bind(this);
        this.typeWriter = this.typeWriter.bind(this);
        
    }
    
    setErrors() {
        this.setState({touched: false, error: true})
    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.target.value }) 
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(Object.assign({}, this.state))
            .fail(() => this.setErrors());
    }

    handleFocus(e) {
        return this.state.error ? this.setState({ touched: true }) : null
    }

    handleCN(cn) {
        if (this.state.error && this.state.touched) {
            return `${cn}`;
        } else if (this.state.error) {
            return `${cn} error`;
        } else {
            return `${cn}`;
        }
    }

    errorMsg(field) {
        return (
            <div className={`error-msg error-${field}`}>
                {this.props.error}
                <div className={`error-arrow error-arrow-${field}`}></div>
            </div>
        )
    }

    handleBlur(e) {
        (this.state.error && e.target.value === "") ? this.setState({ touched: false }) : this.setState({ error: false }); 
    }

    demo(email, password) {
        return e => {
            e.preventDefault();
            return this.typeWriter(email, password)
        }        
    }
    
    typeWriter(email, password) {
        let i = 0;
        let j = 0;
        let speed = 50; 
        let emailInput = document.getElementById("email")
        let pwInput = document.getElementById("password");
        emailInput.value = "";
        pwInput.value = "";
        const login = () => {
            if (i < email.length) {
                emailInput.value += email.charAt(i);
                i++;
                setTimeout(login, speed);
            } else if (j < password.length) {
                pwInput.value += password.charAt(j);
                j++;
                setTimeout(login, speed)
            } else {
                this.setState({email: email, password: password});
                this.props.login(this.state);
            }

        }
        return login()
    }
  

    render() {
        const errorIcon = <span className="error-icon2"><i className="fas fa-exclamation-circle"></i></span>
        return (
            <div>
                <NavLoginContainer />
                <div className="login-container">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <h1>Log Into Diplomacybook</h1>
                        <div className="error-container">
                            <input id="email" className={this.handleCN("email", "")} type="text" 
                                onChange={this.handleChange("email")}
                                onFocus={this.handleFocus} 
                                onBlur={this.handleBlur}
                                autoFocus
                                value={this.state.email} placeholder="Email">
                            </input>
                            {this.state.error && !this.state.touched && errorIcon}
                            {this.state.error && this.state.touched && this.errorMsg("login-email")}
                        </div>
                        <div className="error-container">
                            <input id="password" type="password" onChange={this.handleChange("password")} value={this.state.password} placeholder="Password"></input>
                        </div>
                        <input type="submit" value="Log In"></input>
                        <div className="login-or">
                            <span className="login-or-line"></span>
                                or
                            <span className="login-or-line"></span>
                        </div>
                        <div className="login-demos-container">
                            <button className="demo-ally demo" 
                                onClick={this.demo("allykat@gmail.com", "tomato")}>Demo A</button>
                            <button className="demo-comrade demo" 
                                onClick={this.demo("comradepupper@gmail.com", "potato")}>Demo B</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;