import React from 'react';
import { Link } from 'react-router-dom';
import CommentOptionsContainer from "./CommentOptionsContainer";
import CommentFormContainer from "./comment_form_container";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEdit: false,
        }
        this.openEdit = this.openEdit.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
    }

    openEdit() {
        this.setState({ showEdit: true })
    }

    closeEdit() {
        this.setState({ showEdit: false })
    }

    render() {
        const comment = this.props.comment
        const author = this.props.comment.author
        const showEdit = this.state.showEdit;
        return (
            <React.Fragment>
                {!showEdit && 
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
                            <CommentOptionsContainer commentId={comment.id}
                                openEdit={this.openEdit}
                            />
                        }
                    </div>
                </div> }
                { showEdit && 
                    <React.Fragment>
                        <CommentFormContainer postId={comment.post_id}
                            edit={true}
                            comment={comment}
                            closeEdit={this.closeEdit}
                        />
                        <div className="co-escape">
                            Press Esc to <span onClick={e => this.closeEdit()} id="co-cancel">cancel</span>.
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default Comment;