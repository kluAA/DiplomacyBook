export const createComment = comment => {
    return $.ajax({
        method: "POST",
        url: "/api/comments",
        data: { comment }
    })
}

export const deleteComment = commentId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/comments/${commentId}`
    })
}

export const updateComment = (comment, commentId) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/comments/${commentId}`,
        data: { comment }
    })
}