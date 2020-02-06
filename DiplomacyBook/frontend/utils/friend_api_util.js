export const fetchFriends = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}/friendships`
    })
}

export const unFriend = friendId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/friendships/${friendId}`
    })
}