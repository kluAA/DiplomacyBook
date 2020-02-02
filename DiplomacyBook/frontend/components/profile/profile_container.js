import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser, receiveUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    receiveUser: user => dispatch(receiveUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);