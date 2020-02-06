import { connect } from "react-redux"
import PostItem from './post_item';


const mapStateToProps = (state, ownProps) => ({
    // currentUser: state.entities.users[state.session.id],
    // user: state.entities.users[ownProps.match.params.id]
    posts: state.entities.posts

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);