import * as PostAPIUtil from '../utils/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = payload => ({
    type: RECEIVE_POSTS,
    payload
});

const receivePost = payload => ({
    type: RECEIVE_POST,
    payload
});

const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

export const fetchUserPosts = (userId, all) => dispatch => {
    return PostAPIUtil.fetchUserPosts(userId, all)
        .then(posts => dispatch(receivePosts(posts)));
};

export const createPost = post => dispatch => {
    return PostAPIUtil.createPost(post)
        .then(post => dispatch(receivePost(post)));
};

export const deletePost = postId => dispatch => {
    return PostAPIUtil.deletePost(postId)
        .then(() => dispatch(removePost(postId)));
};

export const fetchFeedPosts = (all) => dispatch => {
    return PostAPIUtil.fetchFeedPosts(all)
        .then(posts => dispatch(receivePosts(posts)));
};

export const updatePost = (post, postId) => dispatch => {
    return PostAPIUtil.updatePost(post, postId)
        .then(post => dispatch(receivePost(post)));
};