export const fetchSearchUsers = query => {
    return $.ajax({
        url: '/api/users/search',
        data: { user: query }
    })
}