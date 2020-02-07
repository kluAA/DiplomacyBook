import React from 'react';
import FeedFormContainer from './feed_form_container';
import PostItemContainer from '../posts/post_item_container';

class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFeedPosts();
    }


    render() {
        const { posts } = this.props;
        if (!posts || posts === []) return null;
        let showPosts = posts.map(post => <li className="post" key={post.id}><PostItemContainer postId={post.id} /></li>)
        return (
            <div className="bg-container">
                <div className="feed-container">
                    <div className="post-index-container">
                        <FeedFormContainer />
                        <ul className="posts-container">
                            {showPosts}
                        </ul>
                    </div>
                </div>
            </div>
     
        )
    }
}

export default FeedIndex;