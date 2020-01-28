import React from 'react';

const MONTHS = [
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
            day: this.date.getUTCDate(),
            year: this.date.getFullYear()-25,
            gender: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dateMonth = this.dateMonth.bind(this);
        this.dateDay = this.dateDay.bind(this);
        this.dateYear = this.dateYear.bind(this);
        
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
        delete newState.month;
        delete newState.day;
        delete newState.year;
        this.props.signup(Object.assign({}, newState));
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
        const currentDay = this.date.getUTCDate();
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

    render() {
        return (
            <div className="signup-container">
                <div className="signup-inner">
                    <div className="signup-info">

                    </div>
                    <div className="signup-fields">
                        <h1>Sign Up</h1>
                        <h2>It's quick and easy.</h2>
                        <form onSubmit={this.handleSubmit} className="signup-form">
                            <div className="signup-form-name">
                                <input className="signup-fn" type="text" onChange={this.handleChange("first_name")} placeholder="First name" value={this.state.first_name}></input>
                                <input className="signup-ln" type="text" onChange={this.handleChange("last_name")} placeholder ="Last name" value={this.state.last_name}></input>
                            </div>
                            <input className="signup-email" type="text" onChange={this.handleChange("email")} placeholder="Email" value={this.state.email}></input>
                            <input className="signup-password" type="password" onChange={this.handleChange("password")} placeholder="New password" value={this.state.password}></input>
                            <label className="signup-bday"><p>Birthday</p>
                                {this.dateMonth()}
                                {this.dateDay()}
                                {this.dateYear()}
                            </label>
                            <div className="signup-gender"><p>Gender</p>
                                <span>
                                    <input type="radio" onClick={this.handleChange("gender")} id="ally" name="gender" value="ally"/>
                                    <label htmlFor="ally">Ally</label>
                                </span>
                                <span>
                                    <input type="radio" onClick={this.handleChange("gender")} id="comrade" name="gender" value="comrade"/>
                                    <label htmlFor="comrade">Comrade</label>
                                </span>
                                <span>
                                    <input type="radio" onClick={this.handleChange("gender")} id="other" name="gender" value="other" />
                                    <label htmlFor="other">Other</label>
                                </span>
                            </div>
                            <input type="submit" className="signup-btn" value="Sign Up"></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;