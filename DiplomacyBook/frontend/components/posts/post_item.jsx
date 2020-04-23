import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from './comments/comment_form_container';
import CommentContainer from './comments/comment_container';
import PostOptions from "./PostOptions";
import PostLikesContainer from "./PostLikesContainer";


class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeDetails: false
        }
    }

    parseTime(time) {
        const relTime = Math.floor((new Date() - time) / 1000);
        if (relTime < 1) {
            return "Just now";
        } 
        else if (relTime < 60) {
            return relTime === 1 ? `${relTime} second ago` : `${relTime} seconds ago`;
        } 
        else if (relTime < 3600) {
            let minutes = Math.floor(relTime / 60);
            return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;
        }
        else if (relTime < 3600 * 24) {
            let hours = Math.floor(relTime / (3600));
            return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
        } 
        else if (relTime < 3600 * 24 * 7) {
            let days = Math.floor(relTime / (3600 * 24));
            return days === 1 ? `${days} day ago` : `${days} days ago`;
        }
        else {
            return time.toDateString();
        }
        
    }

    handleLike(e, postId) {
        const likePost = { post_id: postId }
        this.props.likePost(likePost);
    }

    handleUnlike(e, postId) {
        this.props.unlikePost(postId)
    }

    likeMessage(isLiked, post) {
        const { liked_users } = post;
        const numLikes = liked_users.length
        if (isLiked && numLikes === 1) {
            return "You liked this.";
        } else if (isLiked && numLikes > 1) {
           return numLikes === 2 ? `You and ${numLikes-1} other` : `You and ${numLikes-1} others`
        } else if (numLikes) {
            return `${liked_users.length}`;
        }
    }

    handleMouseEnter(e) {
        this.setState({})
    }

    render() {
        const { postId, posts, currentUser, deletePost } = this.props;
        const post = posts[postId];
        const time = new Date(post.created_at);
        const parsedTime = this.parseTime(time);

        const isLiked = post.liked_users.includes(currentUser.id);
        const postHasLikes = post.liked_users.length > 0;

        const like = (
            <div className="like" onClick={e => this.handleLike(e, postId)}>
                <i className="far fa-thumbs-up"></i>Like
            </div>
        )

        const liked = (
            <div className="like" 
                id="liked"
                onClick={e => this.handleUnlike(e, postId)}
            >
                <i className="fas fa-thumbs-up"></i>Like
            </div>
        )

        const likeInfo = (
            <div className="like-container">
                <img className="like-icon" src={window.fbLikesIconURL} />
                <span id="like-message"
                    onMouseEnter={e => this.setState({ likeDetails: true })}
                    onMouseLeave={e => this.setState({ likeDetails: false })}
                >
                    {this.likeMessage(isLiked, post)}
                </span>
                    {this.state.likeDetails ? <PostLikesContainer postId={postId} /> : null}
            </div>
        )

        return (
            <div>
                <div className="post-header">
                    <Link to={`/profile/${post.author_id}`}><img className="post-profile" src={post.author.photoUrl}></img></Link>
                    <div className="post-info">
                        <span className="post-username"><Link to={`/profile/${post.author_id}`}>{post.author.first_name} {post.author.last_name}</Link></span>
                        <span className="post-time">{parsedTime}<i className="fas fa-user-tie"></i></span>
                    </div>
                    { currentUser.id == post.author_id && <PostOptions deletePost={deletePost} post={post} openModal={this.props.openModal} />}
                </div>
                <p className="post-body">{post.body}</p>
                {post.photoUrl && 
                    <div className="post-photo">
                        <img src={post.photoUrl} />
                    </div>
                }
                { postHasLikes ? likeInfo : null }
                {(!post.photoUrl || postHasLikes) && <hr id="linebreak"></hr>}
                <div className="post-options">
                    {isLiked ? liked : like}
                    <label htmlFor={`comment-${postId}`} className="comment"><i className="far fa-comment-alt"></i>Comment</label>
                    <div className="share"><i className="far fa-share-square"></i>Share</div>
                </div>
                <div className="comments-container">
                    {post.comment_ids.map(comment_id => <CommentContainer key={comment_id} comment_id={comment_id}/>)}
                </div>
                <CommentFormContainer postId={postId} comment={false} />
            </div>
        )
    }
}

export default PostItem;