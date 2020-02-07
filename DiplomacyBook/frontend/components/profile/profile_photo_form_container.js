import { connect } from "react-redux"
import ProfilePhotoForm from './profile_photo_form';
import { updatePicture } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
    updatePicture: (formData, userId) => dispatch(updatePicture(formData, userId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhotoForm);