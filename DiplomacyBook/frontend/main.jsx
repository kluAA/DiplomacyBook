import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id, first_name: window.currentUser.first_name},
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            }
        };
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }
    delete window.currentUser;
    window.store = store;
    ReactDOM.render(<Root store={store} />, root);
})
