import * as CommentAPIUtil from '../utils/comment_api_util'; 
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
})

const changeComment = comment => ({
    type: UPDATE_COMMENT,
    comment
})

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)));
}

export const deleteComment = commentId => dispatch => {
    return CommentAPIUtil.deleteComment(commentId)
        .then(comment => dispatch(removeComment(comment)));
};

export const updateComment = (comment, commentId) => dispatch => {
    return CommentAPIUtil.updateComment(comment, commentId)
        .then(comment => dispatch(changeComment(comment)));
};