import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { withRouter } from 'react-router-dom';
import { fetchFeedPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts).reverse()
})

const mapDispatchToProps = dispatch => ({
    fetchFeedPosts: (all) => dispatch(fetchFeedPosts(all))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedIndex));