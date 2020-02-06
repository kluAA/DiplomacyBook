import { connect } from "react-redux"
import PostItem from './post_item';
import { deletePost } from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    // user: state.entities.users[ownProps.match.params.id]
    posts: state.entities.posts,

})

const mapDispatchToProps = dispatch => ({
    deletePost: postId => dispatch(deletePost(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);