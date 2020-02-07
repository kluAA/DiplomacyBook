import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser, updatePicture } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = (dispatch) => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    updatePicture: (formData, userId) => dispatch(updatePicture(formData, userId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);