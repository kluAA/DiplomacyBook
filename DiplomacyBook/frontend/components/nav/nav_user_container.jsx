import { connect } from "react-redux"
import { logout } from '../../actions/session_actions';
import NavUser from './nav_user';
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavUser));