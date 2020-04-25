import React from 'react';

class AboutIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showOverview: true,
            showWork: false,
            showContact: false,
            showRelationships: false
        }
        this.handleShow = this.handleShow.bind(this);
    }

    resetFalse() {
        this.setState({
            showOverview: false,
            showWork: false,
            showContact: false,
            showRelationships: false
        })
    }

    handleShow(field) {
        return e => {
            this.resetFalse();
            this.setState({ [field]: true })
        }
    }

    render() {
        const { showOverview, showWork, showContact, showRelationships } = this.state;

        return (
            <div className="profile-component-container">
                <div className="profile-component-header">
                    <span><i className="fas fa-user-cog"></i>About</span>
                </div>
                <div className="about-container">
                    <ul className="about-left">
                        <li id={showOverview ? "a-active" : null}
                            onClick={this.handleShow("showOverview")}
                        >
                            Overview
                        </li>
                        <li id={showWork ? "a-active" : null}
                            onClick={this.handleShow("showWork")}
                        >
                            Work and Education
                        </li>
                        <li id={showContact ? "a-active" : null}
                            onClick={this.handleShow("showContact")}
                        >
                            Contact and Basic Info
                        </li>
                        <li id={showRelationships ? "a-active" : null}
                            onClick={this.handleShow("showRelationships")}
                        >
                            Relationships
                        </li>
                    </ul>

                    <div className="about-right">

                    </div>
                </div>
            </div>
        )
    }
}

export default AboutIndex;