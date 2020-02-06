import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import friendRequestsReducer from './friend_requests_reducer.js';
import friendsReducer from './friends_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    friendrequests: friendRequestsReducer,
    friends: friendsReducer
});

export default entitiesReducer;