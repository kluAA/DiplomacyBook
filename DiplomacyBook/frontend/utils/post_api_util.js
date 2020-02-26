export const fetchUserPosts = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/posts/${userId}`
    })
}

export const fetchFeedPosts = () => {
    return $.ajax({
        method: "GET",
        url: '/api/posts'
    })
}

export const createPost = post => {
    return $.ajax({
        method: "POST",
        url: `/api/posts`,
        data: { post }
    })
}

export const deletePost = postId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/posts/${postId}`
    })
}