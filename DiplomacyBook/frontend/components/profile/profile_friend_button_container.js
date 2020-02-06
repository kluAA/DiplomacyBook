import { connect } from "react-redux"
import ProfileFriendButton from './profile_friend_button';
import { createFriendRequest } from '../../actions/friend_request_actions';
import { unFriend } from '../../actions/friend_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
    createFriendRequest: friendrequest => dispatch(createFriendRequest(friendrequest)),
    unFriend: friendId => dispatch(unFriend(friendId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileFriendButton));