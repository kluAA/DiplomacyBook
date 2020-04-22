import { connect } from 'react-redux';
import CommentOptions from './CommentOptions';
import { deleteComment } from '../../../actions/comment_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    
})

const mapDispatchToProps = (dispatch) => ({
    deleteComment: commentId => dispatch(deleteComment(commentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentOptions)
