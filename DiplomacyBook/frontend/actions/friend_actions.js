import * as FriendAPIUtil from '../utils/friend_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS'
export const REMOVE_FRIEND = 'REMOVE_FRIEND'

const receiveFriends = friends => ({
    type: RECEIVE_FRIENDS,
    friends
})

const removeFriend = friend => ({
    type: REMOVE_FRIEND,
    friend
})


export const fetchFriends = userId => dispatch => {
    return FriendAPIUtil.fetchFriends(userId)
        .then(friends => dispatch(receiveFriends(friends)));
}

export const unFriend = friendId => dispatch => {
    return FriendAPIUtil.unFriend(friendId)
        .then(friend => dispatch(removeFriend(friend)));
}