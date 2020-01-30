import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);