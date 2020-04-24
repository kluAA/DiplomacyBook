import React from 'react';

export const MONTHS = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"
 ]

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.date = new Date;
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            month: MONTHS[this.date.getMonth()],
            day: this.date.getDate(),
            year: this.date.getFullYear()-25,
            gender: "", 
            touched_first_name: false,
            touched_last_name: false,
            touched_email: false,
            touched_password: false,
            touched_gender: false,
            errors_first_name: false,
            errors_last_name: false,
            errors_email: false,
            errors_password: false,
            errors_gender: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dateMonth = this.dateMonth.bind(this);
        this.dateDay = this.dateDay.bind(this);
        this.dateYear = this.dateYear.bind(this);  
        this.handleCN = this.handleCN.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.errorMsg = this.errorMsg.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }
    
   

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { month, day, year } = this.state; 
        const bday = `${month}-${day}-${year}`;
        const newState = Object.assign({}, this.state, { birthday: bday });
        // delete newState.month;
        // delete newState.day;
        // delete newState.year;
        this.props.signup(Object.assign({}, newState))
            .fail(() => this.setErrors());
    }

    handleDemo(e) {
        e.preventDefault();
        this.props.removeSessionErrors();
        this.props.history.push("/login")
    }


    setErrors() {
        const errors = Object.keys(this.props.errors);
        let newState = {};
        errors.forEach(error => {
            let errorKey = `errors_${error}`
            let touchedError = `touched_${error}`
            newState[errorKey] = true;
            newState[touchedError] = false;
        })
        this.setState(newState);
    }

    dateMonth() {

         const index = this.date.getMonth()
         const currentMonth = MONTHS[index]
         return (
             <select defaultValue={currentMonth} onChange={this.handleChange("month")}>
                 <option value="">Month</option>
                 {MONTHS.map((month, i) => 
                    <option key={i}  
                     value={month}>{month}</option>)}
             </select>
         )
    }

    dateDay() {
        const numDays = Array.from(Array(31)).map((day,i) => ++i);
        const currentDay = this.date.getDate();
        const days = numDays.map((day, i) => 
            <option key={i} value={day}>{day}</option>)
        return (
            <select defaultValue={currentDay} onChange={this.handleChange("day")}>
                <option value="">Day</option>
                {days}
            </select>
        )
    }

    dateYear() {
        const endYear = this.date.getFullYear();
        const numYears = Array.from(Array(116)).map((year, i) => endYear - i++);
        const years = numYears.map((year, i) =>
            <option key={i} value={year}>{year}</option>)

        return (
            <select defaultValue={endYear-25} onChange={this.handleChange("year")}>
                <option value="">Year</option>
                {years}
            </select>
            );
    }


    handleFocus(field) {
        let error = `errors_${field}`
        let touched = `touched_${field}`;
        return e => {
            this.state[error] ? this.setState({[touched]: true}) : null
        }
    }

    handleBlur(field) {
        let error = `errors_${field}`
        let touched = `touched_${field}`;
        return e => {
            (this.state[error] && e.target.value === "") ? this.setState({[touched]: false}) : this.setState({[error]: false});
        }
    }

    handleGender(e) {
        this.setState({errors_gender: false, touched_gender: false})
    }


    handleCN(field, cn) {
            let error = `errors_${field}`
            let touched = `touched_${field}`;
            if (this.state[error] && this.state[touched]) {
                return `${cn}`;
            } else if (this.state[error]) {
                return `${cn} error`;
            } else {
                return `${cn}`;
            }
    }

    errorMsg(field) {
        let msg = this.props.errors[field];
        return (
            <div className={`error-msg error-${field}`}>
                {msg}
                <div className={`error-arrow error-arrow-${field}`}></div>
            </div>
        )
    }

    render() {
        const errorIcon = <span className="error-icon"><i className="fas fa-exclamation-circle"></i></span>
        const errorIcon2 = <span className="error-icon2"><i className="fas fa-exclamation-circle"></i></span>
        const errorIcon3 = <span className="error-icon3" ><i className="fas fa-exclamation-circle"></i></span>
        
        return (
            <div className="signup-container">
                <div className="signup-inner">
                    <div className="signup-info">
                        <div>
                            <h3>Connect with friends and the <br />world around you on Diplomacybook.</h3>
                        </div>
                        <div className="splash-captions-container">
                         <i className="far fa-newspaper"></i>
                         <span className="splash-caption"><span className="splash-bolded">See photos and updates</span> from friends in News Feed.</span>
                        </div>
                        <div className="splash-captions-container">
                            <i className="fas fa-desktop"></i>
                            <span className="splash-caption"><span className="splash-bolded">Share what's new</span> in your life on your Timeline.</span>
                        </div>
                        <div className="splash-captions-container">
                            <i className="fas fa-recycle"></i>
                            <span className="splash-caption"><span className="splash-bolded">Find more</span> of what you're missing out in life. ¯\_(ツ)_/¯</span>
                        </div>
                    </div>
                    <div className="signup-fields">
                        <h1>Sign Up</h1>
                        <h2>It's quick and easy.</h2>
                        <form onSubmit={this.handleSubmit} className="signup-form">
                            <div className="signup-form-name">
                                <span className="error-container">
                                    <input className={this.handleCN("first_name", "signup-fn")} type="text" 
                                        onChange={this.handleChange("first_name")}
                                        placeholder="First name" 
                                        onFocus={this.handleFocus("first_name")} 
                                        onBlur={this.handleBlur("first_name")}
                                        value={this.state.first_name}>   
                                    </input>
                                   {this.state.errors_first_name && !this.state.touched_first_name && errorIcon}
                                   {this.state.errors_first_name && this.state.touched_first_name && this.errorMsg("first_name")}
                                </span>
                                <span className="error-container">
                                    <input className={this.handleCN("last_name", "signup-ln")} type="text" 
                                        onChange={this.handleChange("last_name")} 
                                        placeholder ="Last name" 
                                        onFocus={this.handleFocus("last_name")}
                                        onBlur={this.handleBlur("last_name")}
                                        value={this.state.last_name}></input>
                                    {this.state.errors_last_name && !this.state.touched_last_name && errorIcon}
                                    {this.state.errors_last_name && this.state.touched_last_name && this.errorMsg("last_name")}
                                    </span>
                            </div>
                            <span className="error-container">
                                <input className={this.handleCN("email", "signup-email")} type="text" 
                                    onChange={this.handleChange("email")}
                                    onFocus={this.handleFocus("email")}
                                    onBlur={this.handleBlur("email")}
                                    placeholder="Email"
                                    value={this.state.email}>
                                </input>
                                {this.state.errors_email && !this.state.touched_email && errorIcon2}
                                {this.state.errors_email && this.state.touched_email && this.errorMsg("email")}
                            </span>
                            <span className="error-container">
                                <input className={this.handleCN("password", "signup-password")} type="password" 
                                        onChange={this.handleChange("password")} 
                                        onFocus={this.handleFocus("password")}
                                        onBlur={this.handleBlur("password")}
                                        placeholder="New password" 
                                        value={this.state.password}>
                                </input>
                                {this.state.errors_password && !this.state.touched_password && errorIcon2}
                                {this.state.errors_password && this.state.touched_password && this.errorMsg("password")}
                            </span>
                            <label className="signup-bday"><p>Birthday</p>
                                {this.dateMonth()}
                                {this.dateDay()}
                                {this.dateYear()}
                            </label>
                            <div className="signup-gender"><p>Gender</p>
                                <span className={this.handleCN("gender", "signup-gender-field")} >
                                    <input type="radio" 
                                    onClick={this.handleChange("gender")}
                                    onFocus={this.handleGender}
                                    id="ally" name="gender" value="ally"/>
                                    <label htmlFor="ally">Ally</label>
                                </span>
                                <span className={this.handleCN("gender", "signup-gender-field")}>
                                    <input type="radio" 
                                    onClick={this.handleChange("gender")} 
                                    onFocus={this.handleGender}
                                    id="comrade" name="gender" value="comrade"/>
                                    <label htmlFor="comrade">Comrade</label>
                                </span>
                                <span className={this.handleCN("gender", "signup-gender-field")}>
                                    <input type="radio" 
                                    onClick={this.handleChange("gender")}
                                    onFocus={this.handleGender}
                                    id="other" name="gender" value="other" />
                                    <label htmlFor="other">Unsure</label>
                                </span>
                                {this.state.errors_gender && !this.state.touched_gender && errorIcon3}
                                {this.state.errors_gender && this.state.touched_gender && this.errorMsg("gender")}
                            </div>
                            <div>
                                <input type="submit" className="signup-btn" value="Sign Up"></input>
                                <input onClick={this.handleDemo} type="submit" className="demo-btn" value="Demo Login"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;