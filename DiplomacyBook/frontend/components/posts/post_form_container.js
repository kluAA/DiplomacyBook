import { connect } from "react-redux"
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.id]
})

const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));