import * as LikeAPIUtil from "../utils/like_api_util";

export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
export const RECEIVE_LIKES = "RECEIVE_LIKES";

const receiveLikePost = like => ({
    type: LIKE_POST,
    like
});

const removeLikePost = like => ({
    type: UNLIKE_POST,
    like
});

const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
})

export const likePost = likePost => dispatch => {
    return LikeAPIUtil.likePost(likePost)
        .then(like => dispatch(receiveLikePost(like)));
}

export const unlikePost = postId => dispatch => {
    return LikeAPIUtil.unlikePost(postId) 
        .then(like => dispatch(removeLikePost(like)));
}