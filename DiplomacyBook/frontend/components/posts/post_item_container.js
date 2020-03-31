import { connect } from "react-redux"
import PostItem from './post_item';
import { deletePost } from '../../actions/post_actions';
import { likePost, unlikePost } from "../../actions/like_actions";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,

})

const mapDispatchToProps = dispatch => ({
    deletePost: postId => dispatch(deletePost(postId)),
    likePost: like => dispatch(likePost(like)),
    unlikePost: postId => dispatch(unlikePost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);