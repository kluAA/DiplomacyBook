import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import friendRequestsReducer from './friend_requests_reducer.js';
import friendsReducer from './friends_reducer';
import postsReducer from './posts_reducer';
import commentsReducer from './comments_reducer';
import likesReducer from './likes_reducer';
import searchReducer from "./search_reducer";
import photosReducer from "./photos_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    friendrequests: friendRequestsReducer,
    friends: friendsReducer,
    posts: postsReducer,
    comments: commentsReducer,
    likes: likesReducer,
    search: searchReducer,
    photos: photosReducer
});

export default entitiesReducer;