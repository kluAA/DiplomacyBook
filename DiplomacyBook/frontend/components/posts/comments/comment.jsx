import React from 'react';
import { Link } from 'react-router-dom';
import CommentOptionsContainer from "./CommentOptionsContainer";

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const comment = this.props.comment
        const author = this.props.comment.author
        return (
            <div className="comment-container">
                <Link to={`/profile/${author.id}`}>
                    <img className="comment-profile" src={author.photoUrl}></img>
                </Link>
                <div className="comment-box">
                    <span className="comment-user">
                        <Link to={`/profile/${author.id}`}>
                            {author.first_name} {author.last_name}
                        </Link>
                        <span className="comment">{comment.body}</span>
                    </span>
                    { this.props.currentUser.id === author.id && 
                        <CommentOptionsContainer commentId={comment.id}/>
                    }
                </div>
            </div>
        )
    }
}

export default Comment;