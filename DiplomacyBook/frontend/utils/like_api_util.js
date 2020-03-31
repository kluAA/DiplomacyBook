export const likePost = likepost => {
    return $.ajax({
        method: "POST",
        url: "/api/likeposts",
        data: { likepost }
    });
};