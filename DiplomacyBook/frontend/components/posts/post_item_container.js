import { connect } from "react-redux"
import PostItem from './post_item';
import { deletePost } from '../../actions/post_actions';
import { likePost, unlikePost } from "../../actions/like_actions";
import { openModal } from "../../actions/modal_actions";
import { fetchUserPosts } from "../../utils/post_api_util";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,

})

const mapDispatchToProps = dispatch => ({
    deletePost: postId => dispatch(deletePost(postId)),
    likePost: like => dispatch(likePost(like)),
    unlikePost: postId => dispatch(unlikePost(postId)),
    openModal: (modal, post) => dispatch(openModal(modal, post))

})

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);