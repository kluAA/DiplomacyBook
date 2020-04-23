import React from 'react';
import CommentEmoji from "./CommentEmoji";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            body: this.props.comment.body || "" 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.multiline = React.createRef();
        this.addEmoji = this.addEmoji.bind(this);
    }

    componentDidMount() {
        if (this.multiline) {
            this.multiline.style.height = 'auto';
        }
        // autofit height of content if edit form and focus at end
        if (this.multiline && this.props.edit) {
            this.multiline.style.height = this.multiline.scrollHeight + 10 + 'px';
            
            const length = this.multiline.value.length;
            this.multiline.focus();
            this.multiline.setSelectionRange(length, length);
        }
    }

    handleSubmit(e) {
        if (this.props.edit && e.key === "Escape") {
            this.props.closeEdit();
        }

        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            let parsedBody = this.state.body.replace(/\n\s*\n\s*\n/g, '\n\n');
            const comment = {
                body: parsedBody,
                post_id: this.props.postId,
            }
            this.props.edit ? this.props.updateComment(comment, this.props.comment.id) : this.props.createComment(comment);
            this.setState({ body: "" });
            this.multiline.style.height = 'auto';
        }
    }

    handleChange(e) {
        e.preventDefault();
        this.multiline.style.height = 'auto';
        if (!(this.multiline.scrollHeight === 31)) {
            this.multiline.style.height = this.multiline.scrollHeight + 10 + 'px';
        }
        this.setState({ body: e.target.value });
    }

    addEmoji(emoji) {
        this.setState({ body: this.state.body + emoji })
        if (this.multiline.scrollHeight === 31) {
            this.multiline.style.height = this.multiline.scrollHeight + 16 + 'px';
        }
    }

    render() {
        const { currentUser, postId, edit } = this.props;
        return (
            <form className="comment-form" id={edit ? "comment-edit" : null}>
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
                    <div className="emojitime">
                        <CommentEmoji addEmoji={this.addEmoji}/>
                    </div>
                </div>
            </form>
        )
    }
}

export default CommentForm;