import React from 'react';
import PostFormContainer from './post_form_container';
import PostItemContainer from './post_item_container';

class PostIndex extends React.Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        this.props.fetchUserPosts(this.props.match.params.id)
    }

    render() {
        const { posts } = this.props;
        if ( !posts || posts === [] ) return null;
        let showPosts = posts.map(post => <li className="post" key={post.id}><PostItemContainer postId={post.id} /></li>)
        return (
            <div className="post-index-container">
                <PostFormContainer />
                 <ul className="posts-container">
                     {showPosts}
                 </ul>
            </div>
        )    
    }   
}

export default PostIndex;