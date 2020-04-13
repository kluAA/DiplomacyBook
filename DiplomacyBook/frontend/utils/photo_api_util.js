export const fetchPhotos = userId => {
    return $.ajax({
        url: `/api/photos/${userId}`
    })
}