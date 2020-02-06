import { RECEIVE_FRIENDS, REMOVE_FRIEND } from '../actions/friend_actions';

const friendsReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FRIENDS:
            return action.friends;
        case REMOVE_FRIEND:
            let nextState = Object.assign({}, state)
            delete nextState[action.friend.id]
            return nextState;
        default: 
            return state;
    }
}

export default friendsReducer;