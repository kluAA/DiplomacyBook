import React from 'react';

class WorkEducation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workForm: false,
            schoolForm: false,
            position: props.user.position,
            workplace: props.user.workplace,
            school: props.user.school,
            gradYear: props.user.gradYear
        }
    }

    render() {

        const { user, currentUser } = this.props;

        const addWorkplace = (
            <li>
                <h3>Work</h3>
                <div className="ar-option">
                    <div className="ar-add">
                        <div>+</div>
                    </div>
                    <span>Add a workplace</span>
                </div>
            </li>
        )

        const addSchool = (
            <li>
                <h3>School</h3>
                <div className="ar-option">
                    <div className="ar-add">
                        <div>+</div>
                    </div>
                    <span>Add a school</span>
                </div>
            </li>
        )

        return (
            <ul className="ar-container">
                { user.id === currentUser.id && addWorkplace}
                { user.id === currentUser.id && addSchool}
            </ul>
        )
    }
}

export default WorkEducation;