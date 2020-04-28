import { connect } from "react-redux";
import WorkEducation from "./work_education";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.id],
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({

});

export const WorkEducationContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkEducation));