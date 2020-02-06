import { connect } from "react-redux"
import FriendsIndex from './friends_index';
import { fetchFriends } from '../../../actions/friend_actions';

const mapStateToProps = (state, ownProps) => ({
    friends: Object.values(state.entities.friends)
})

const mapDispatchToProps = (dispatch) => ({
    fetchFriends: (userId) => dispatch(fetchFriends(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsIndex);