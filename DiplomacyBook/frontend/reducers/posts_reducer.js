import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from '../actions/post_actions';
import { merge } from 'lodash';

const postsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState;
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.payload.posts 
        case RECEIVE_POST:
            return Object.assign({}, state, { [action.payload.post.id]: action.payload.post})
        case REMOVE_POST:
            nextState = merge({}, state);
            delete nextState[action.postId];
            return nextState;
        default:
            return state;
    }
}

export default postsReducer;