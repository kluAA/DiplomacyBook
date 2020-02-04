import { connect } from "react-redux"
import FriendRequest from './friend_request';
import { fetchFriendRequests, destroyFriendRequest } from '../../actions/friend_request_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    friendrequests: Object.values(state.entities.friendrequests)

})

const mapDispatchToProps = dispatch => ({
    fetchFriendRequests: () => dispatch(fetchFriendRequests()),
    destroyFriendRequest: friendrequestId => dispatch(destroyFriendRequest(friendrequestId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendRequest));