export const fetchUserPosts = (userId, all) => {
    return $.ajax({
        method: "GET",
        url: `/api/posts/${userId}`,
        data: { post: { all: all }}
    })
}

export const fetchFeedPosts = (all) => {
    return $.ajax({
        method: "GET",
        url: '/api/posts',
        data: { post: { all: all } }
    })

}

export const createPost = formData => {
    return $.ajax({
        method: "POST",
        url: `/api/posts`,
        data: formData,
        contentType: false,
        processData: false
    })
}

export const deletePost = postId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/posts/${postId}`
    })
}

export const updatePost = (formData, postId) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/posts/${postId}`,
        data: formData,
        contentType: false,
        processData: false
    })
}