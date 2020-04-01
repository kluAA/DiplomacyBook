import { RECEIVE_LIKES } from "../actions/like_actions";


const likesReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_LIKES: 
            return action;
        default: 
            return state;
    }

}

export default likesReducer;