import { connect } from "react-redux"
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));