import { connect } from "react-redux"
import { logout } from '../../actions/session_actions';
import NavBar from './NavBar';
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => ({
    sessionId: state.session.id,
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));