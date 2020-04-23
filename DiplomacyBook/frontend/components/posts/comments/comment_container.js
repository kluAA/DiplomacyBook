import { connect } from 'react-redux';
import Comment from './comment';
import { deleteComment } from '../../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
    comment: state.entities.comments[ownProps.comment_id],
    currentUser: state.entities.users[state.session.id],

})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
