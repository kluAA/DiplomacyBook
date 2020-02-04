import { RECEIVE_FRIEND_REQUEST, RECEIVE_FRIEND_REQUESTS, REMOVE_FRIEND_REQUEST } from '../actions/friend_request_actions';
import { merge } from 'lodash/merge'
const friendRequestsReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FRIEND_REQUESTS:
            return action.friendrequests;
        case RECEIVE_FRIEND_REQUEST:
            return merge({}, state, { [action.friendrequest.id]: action.friendrequest})
        case REMOVE_FRIEND_REQUEST:
            
        default:
            return state;
    }
}

export default friendRequestsReducer;