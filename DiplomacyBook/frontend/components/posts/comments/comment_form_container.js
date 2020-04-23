import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment, updateComment } from '../../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = (dispatch) => ({
    createComment: comment => dispatch(createComment(comment)),
    updateComment: (comment, commentId) => dispatch(updateComment(comment, commentId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));