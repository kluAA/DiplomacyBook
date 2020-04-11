export const RECEIVE_SEARCH_USERS = "RECEIVE_SEARCH_USERS";
export const CLEAR_SEARCH_USERS = "CLEAR_SEARCH_USERS";
import * as SearchAPIUtil from "../utils/search_api_util";

const receiveSearchUsers = users => ({
    type: RECEIVE_SEARCH_USERS,
    users
});

export const clearUsers = () => ({
    type: CLEAR_SEARCH_USERS
})

export const fetchSearchUsers = query => dispatch => {
    return SearchAPIUtil.fetchSearchUsers(query)
        .then(users => dispatch(receiveSearchUsers(users)));
};
