import { connect } from "react-redux"
import TimelineFriends from './timeline_friends';
import { fetchFriends } from '../../actions/friend_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    friends: Object.values(state.entities.friends).slice(0,9),
    friendsCount: Object.keys(state.entities.friends).length
})

const mapDispatchToProps = dispatch => ({
    fetchFriends: (userId) => dispatch(fetchFriends(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimelineFriends));