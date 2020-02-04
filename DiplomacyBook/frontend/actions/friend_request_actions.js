import * as FRAPIUtil from '../utils/friend_request_util';

export const RECEIVE_FRIEND_REQUEST = 'RECEIVE_FRIEND_REQUEST';
export const RECEIVE_FRIEND_REQUESTS = 'RECEIVE_FRIEND_REQUESTS';
export const REMOVE_FRIEND_REQUEST = 'REMOVE_FRIEND_REQUEST';

const receiveFriendRequest = (friendrequest) => ({
    type: RECEIVE_FRIEND_REQUEST,
    friendrequest
})

const receiveFriendRequests = (friendrequests) => ({
    type: RECEIVE_FRIEND_REQUESTS,
    friendrequests
})

const removeFriendRequest = (friendrequestId) => ({
    type: REMOVE_FRIEND_REQUEST,
    friendrequestId
})

export const createFriendRequest = friendrequest => dispatch => {
    return FRAPIUtil.createFriendRequest(friendrequest)
        .then(friendrequest => dispatch(receiveFriendRequest(friendrequest)));
}

export const destroyFriendRequest = (friendrequestId, action) => dispatch => {
    return FRAPIUtil.destroyFriendRequest(friendrequestId, action)
        .then(() => dispatch(removeFriendRequest(friendrequestId)));
}

export const fetchFriendRequests = () => dispatch => {
    return FRAPIUtil.fetchFriendRequests()
        .then(friendrequests => dispatch(receiveFriendRequests(friendrequests)));
}