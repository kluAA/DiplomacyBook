export const fetchUser = (userId) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}`,
    });
}

export const updateUser = (user) => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${user.id}`
    })
}

export const updatePicture = (formData, userId) => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: 'PATCH',
        data: formData,
        contentType: false,
        processData: false
    })
}