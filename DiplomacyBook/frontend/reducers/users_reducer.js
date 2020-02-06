import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { REMOVE_FRIEND } from '../actions/friend_actions';
import { RECEIVE_FRIEND_REQUEST } from '../actions/friend_request_actions';
import { merge } from 'lodash'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    let user;
    let index;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.user.id]: action.user});
        case RECEIVE_USER:
            return Object.assign({}, state, {[action.user.id]: action.user});
        case REMOVE_FRIEND:
            nextState = merge({}, state);
            user = nextState[action.friend.user_id];
            index = user.friends.indexOf(action.friend.friend_id)
            user.friends.splice(index);
            return nextState;
        case RECEIVE_FRIEND_REQUEST:
            nextState = merge({}, state);
            user = nextState[action.friendrequest.sender_id];
            user.requesteds.push(action.friendrequest.receiver_id);
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;