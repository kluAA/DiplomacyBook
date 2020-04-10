import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "" }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.multiline = React.createRef();
    }

    componentDidMount() {
        if (this.multiline) {
            this.multiline.style.height = 'auto';
        }
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
        this.multiline.style.height = 'auto';
        this.multiline.style.height = this.multiline.scrollHeight - 14 + 'px';
        this.setState({ body: e.target.value });
    }

    render() {
        const { currentUser, postId } = this.props;
        return (
            <form className="comment-form">
                <img className="comment-profile" src={currentUser.photoUrl} />
                
                <div className="comment-body-container">
                    <textarea 
                        rows={1}
                        id={`comment-${postId}`} 
                        onKeyDown={this.handleSubmit} 
                        onChange={this.handleChange} 
                        className="comment-body" 
                        placeholder="Write a comment..." 
                        value={this.state.body}
                        ref={ref => this.multiline = ref}
                        >
                    </textarea>
                </div>
            </form>
        )
    }
}

export default CommentForm;