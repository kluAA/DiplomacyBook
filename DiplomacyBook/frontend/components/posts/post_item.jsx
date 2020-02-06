import React from 'react';

class PostItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { postId, posts } = this.props;
        const post = posts[postId];
        return (
            <div>
                <div className="post-header">
                    <img className="post-profile" src={post.author.photoUrl}></img>
                    <div className="post-info">
                        <span className="post-username">{post.author.first_name} {post.author.last_name}</span>
                        <span className="post-time">2 hrs <i className="fas fa-user-friends"></i></span>
                    </div>
                </div>
                <p className="post-body">{post.body}</p>
                <hr></hr>
            </div>
        )
    }
}

export default PostItem;