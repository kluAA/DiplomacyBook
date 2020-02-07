import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "" }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            const post = {
                body: this.state.body,
                post_id: this.props.postId,
            }
            this.props.createComment(post)
            this.setState({ body: "" });
        }
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ body: e.target.value });
    }

    render() {
        const { currentUser, postId } = this.props;
        return (
            <form className="comment-form">
                <img className="comment-profile" src={currentUser.photoUrl}></img>
                <textarea id={`comment-${postId}`} onKeyDown={this.handleSubmit} onChange={this.handleChange} className="comment-body" placeholder="Write a comment..." value={this.state.body}></textarea>
            </form>
        )
    }
}

export default CommentForm;