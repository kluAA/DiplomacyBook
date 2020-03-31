import * as LikeAPIUtil from "../utils/like_api_util";

export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";

const receiveLikePost = like => ({
    type: LIKE_POST,
    like
});

const removeLikePost = likeId => ({
    type: UNLIKE_POST,
    likeId
});

export const likePost = likePost => dispatch => {
    return LikeAPIUtil.likePost(likePost)
        .then(like => dispatch(receiveLikePost(like)));
}
