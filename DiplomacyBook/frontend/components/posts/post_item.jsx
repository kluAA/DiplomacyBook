import React from 'react';

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            drop: false
        }
        this.closeDrop = this.closeDrop.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    closeDrop(e) {
        this.setState({drop: false})
    }

    handleDelete(e) {
        this.props.deletePost(this.props.postId);
    }


    render() {
        const { postId, posts, currentUser } = this.props;
        const post = posts[postId];
        let time = new Date(post.created_at);
        let parsedTime = time.toDateString();
        const actionsMenu = (
            <ul onMouseLeave={this.closeDrop}className="post-actions">
                <li>Edit</li>
                <div className="post-actions-divider"></div>
                <li onClick={this.handleDelete}>Delete</li>
                <div className="post-actions-divider"></div>
                <li onClick={this.closeDrop}>Cancel</li>
            </ul>
        )
        const postActions = (
            <i className="fas fa-ellipsis-h" onClick={e => this.setState({drop: !this.state.drop})}>
                { this.state.drop && actionsMenu }
            </i>
            )
        return (
            <div>
                <div className="post-header">
                    <img className="post-profile" src={post.author.photoUrl}></img>
                    <div className="post-info">
                        <span className="post-username">{post.author.first_name} {post.author.last_name}</span>
                        <span className="post-time">{parsedTime}<i className="fas fa-user-tie"></i></span>
                    </div>
                    { currentUser.id == post.author_id && postActions}
                </div>
                <p className="post-body">{post.body}</p>
                <hr></hr>
                <div className="post-options">
                    <a className="like"><i className="far fa-thumbs-up"></i>Like</a>
                    <a className="comment"><i className="far fa-comment-alt"></i>Comment</a>
                    <a className="share"><i className="far fa-share-square"></i>Share</a>
                </div>
            </div>
        )
    }
}

export default PostItem;