import React from 'react';

class WorkEducation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="ar-container">
                <li>
                    <h3>Work</h3>
                    <div className="ar-option">
                        <div className="ar-add">
                            <div>+</div>
                        </div>
                        <span>Add a workplace</span>
                    </div>
                </li>

                <li>
                    <h3>School</h3>
                    <div className="ar-option">
                        <div className="ar-add">
                            <div>+</div>
                        </div>
                        <span>Add a school</span>
                    </div>
                </li>
            </ul>
        )
    }
}

export default WorkEducation;