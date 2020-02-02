import { connect } from "react-redux";
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { removeSessionErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    signup: (user) => dispatch(signup(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));