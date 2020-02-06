export const fetchUserPosts = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/posts/${userId}`
    })
}

export const createPost = post => {
    return $.ajax({
        method: "POST",
        url: `/api/posts`,
        data: { post }
    })
}