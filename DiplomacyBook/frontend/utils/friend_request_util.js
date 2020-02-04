export const createFriendRequest = (friendrequest) => {
    return $.ajax({
        method: "POST",
        url: "/api/friendrequests",
        data: { friendrequest }
    })
}

export const fetchFriendRequests = () => {
    return $.ajax({
        method: "GET",
        url: "/api/friendrequests"
    })
}

export const destroyFriendRequest = (friendrequestId, action) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/friendrequests/${friendrequestId}`,
        data: { friendrequest: { action: action }}
    })
}