import { connect } from 'react-redux';
import PostLikes from "./PostLikes";
import { fetchLikes } from "../../actions/like_actions";

const mapStateToProps = (state, ownProps) => ({
    userLikes: state.entities.likes.likes
});

const mapDispatchToProps = dispatch => ({
    fetchLikes: postId => dispatch(fetchLikes(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostLikes);