import { RECEIVE_PHOTOS } from "../actions/photo_actions"
import { RECEIVE_POST } from "../actions/post_actions";

const photosReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PHOTOS:
            return action.photos;
        case RECEIVE_POST:
            if (action.payload.post.photoUrl) {
                return Object.assign({}, state, { [action.payload.post.id]: action.payload.post });
            }
        default:
            return state;
    }
}

export default photosReducer;