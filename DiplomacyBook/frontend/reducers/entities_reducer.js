import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import friendRequestsReducer from './friend_requests_reducer.js';

const entitiesReducer = combineReducers({
    users: usersReducer,
    friendrequests: friendRequestsReducer
});

export default entitiesReducer;