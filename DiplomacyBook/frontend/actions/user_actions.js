import * as UserAPIUtil from '../utils/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const fetchUser = (userId) => dispatch => {
    return UserAPIUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)));
}

export const updatePicture = (formData, userId) => dispatch => {
    return UserAPIUtil.updatePicture(formData, userId)
    .then(user => dispatch(receiveUser(user)));
} 