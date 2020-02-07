import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const post = {
            body: this.state.body,
            user_id: this.props.user.id,
            author_id: this.props.currentUser.id
        }

        this.props.createPost(post)
        this.setState({body: ""});
    }

    handleChange(e) {
        this.setState({body: e.target.value})
    }

    render() {
        const { currentUser, user } = this.props;
        if (!currentUser) return null;
        let placeholder;
        if (currentUser === user) {
            placeholder = `What's on your mind ${currentUser.first_name}?`;
        } else {
            placeholder = `Write something to ${user.first_name}...`
        }
        return (
            <form className="posts-form" onSubmit={this.handleSubmit}>
                <label className="post-body">
                    <i className="fas fa-pencil-alt"></i> Create Post
                </label>
                <textarea onChange={this.handleChange} value={this.state.body} placeholder={placeholder}></textarea>
                <hr></hr>
                <button>Post</button>

            </form>
        )
    }
}

export default PostForm;