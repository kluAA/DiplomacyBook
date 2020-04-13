import * as PhotoAPIUtil from "../utils/photo_api_util";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";

const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
})

export const fetchPhotos = userId => dispatch => {
    return PhotoAPIUtil.fetchPhotos(userId)
        .then(photos => dispatch(receivePhotos(photos)));
};