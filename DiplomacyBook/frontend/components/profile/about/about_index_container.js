import { connect } from "react-redux";
import AboutIndex from "./about_index";

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.id],
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AboutIndex);