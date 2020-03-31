export const likePost = likepost => {
    return $.ajax({
        method: "POST",
        url: "/api/likeposts",
        data: { likepost }
    });
};

export const unlikePost = postId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/likeposts/${postId}`
    })
}