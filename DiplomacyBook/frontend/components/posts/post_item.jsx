import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from './comments/comment_form_container';
import CommentContainer from './comments/comment_container';
import PostOptions from "./PostOptions";


class PostItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { postId, posts, currentUser, deletePost } = this.props;
        const post = posts[postId];
        let time = new Date(post.created_at);
        let parsedTime = time.toDateString();

        return (
            <div>
                <div className="post-header">
                    <Link to={`/profile/${post.author_id}`}><img className="post-profile" src={post.author.photoUrl}></img></Link>
                    <div className="post-info">
                        <span className="post-username"><Link to={`/profile/${post.author_id}`}>{post.author.first_name} {post.author.last_name}</Link></span>
                        <span className="post-time">{parsedTime}<i className="fas fa-user-tie"></i></span>
                    </div>
                    { currentUser.id == post.author_id && <PostOptions deletePost={deletePost} postId={postId} />}
                </div>
                <p className="post-body">{post.body}</p>
                <hr id="linebreak"></hr>
                <div className="post-options">
                    <a className="like"><i className="far fa-thumbs-up"></i>Like</a>
                    <label htmlFor={`comment-${postId}`} className="comment"><i className="far fa-comment-alt"></i>Comment</label>
                    <a className="share"><i className="far fa-share-square"></i>Share</a>
                </div>
                <div className="comments-container">
                    {post.comment_ids.map(comment_id => <CommentContainer key={comment_id} comment_id={comment_id}/>)}
                </div>
                <CommentFormContainer postId={postId} />
            </div>
        )
    }
}

export default PostItem;