import * as CommentAPIUtil from '../utils/comment_api_util'; 
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)));
}