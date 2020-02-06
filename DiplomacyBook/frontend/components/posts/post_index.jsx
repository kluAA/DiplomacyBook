import React from 'react';
import PostFormContainer from './post_form_container';

class PostIndex extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div className="post-index-container">
                <PostFormContainer />
            </div>
        )    
    }   
}

export default PostIndex;