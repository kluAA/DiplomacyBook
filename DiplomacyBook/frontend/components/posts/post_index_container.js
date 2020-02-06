import { connect } from 'react-redux';
import PostIndex from './post_index';
import { withRouter } from 'react-router-dom';
import { fetchUserPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts).reverse()
})

const mapDispatchToProps = dispatch => ({
    fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));