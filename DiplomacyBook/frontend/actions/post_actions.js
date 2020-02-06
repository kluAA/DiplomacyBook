import * as PostAPIUtil from '../utils/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';


const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
})

const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

export const fetchUserPosts = (userId) => dispatch => {
    return PostAPIUtil.fetchUserPosts(userId)
        .then(posts => dispatch(receivePosts(posts)));
}

export const createPost = post => dispatch => {
    return PostAPIUtil.createPost(post)
        .then(post => dispatch(receivePost(post)));
}
