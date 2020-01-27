import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});


const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const login = user => dispatch => {
    return SessionAPIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)));
}

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()));
}

export const signup = user => dispatch => {
    return SessionAPIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)));
}

