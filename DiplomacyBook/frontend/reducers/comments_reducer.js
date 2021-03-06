import { RECEIVE_COMMENT, REMOVE_COMMENT, UPDATE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_POSTS } from '../actions/post_actions';
import { merge } from 'lodash';

const commentsReducer = (state={}, action) => {
    Object.freeze(state);
        let nextState;
    switch (action.type) {
        case RECEIVE_POSTS:
            if (!action.payload.comments) return {};
            return action.payload.comments;
        case RECEIVE_COMMENT: 
            return merge({}, state, { [action.comment.id]: action.comment });
        case REMOVE_COMMENT: 
            nextState = merge({}, state);
            delete nextState[action.comment.id];
            return nextState;
        case UPDATE_COMMENT:
            nextState = merge({}, state);
            nextState[action.comment.id] = action.comment;
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;