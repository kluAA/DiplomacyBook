import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.multiline = React.createRef();
    }

    componentDidMount() {
        if (this.multiline) {
            this.multiline.style.height = 'auto';
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let parsedBody = this.state.body.replace(/\n\s*\n\s*\n/g, '\n\n');
        const post = {
            body: parsedBody,
            user_id: this.props.user.id,
            author_id: this.props.currentUser.id
        }

        this.props.createPost(post)
        this.multiline.style.height = "auto";
        this.setState({body: ""});
    }

    handleChange(e) {
        this.multiline.style.height = 'auto';
        this.multiline.style.height = this.multiline.scrollHeight - 20 + 'px';
        this.setState({body: e.target.value})
    }


    render() {
        const { currentUser, user } = this.props;
        if (!currentUser) return null;
        let placeholder;
        if (currentUser === user) {
            placeholder = `What's on your mind ${currentUser.first_name}?`;
        } else if (this.props.match.path === "/") {
            placeholder = `What's on your mind?`;
        } else {
            placeholder = `Write something to ${user.first_name}...`
        }
        return (
            <form className="posts-form" onSubmit={this.handleSubmit}>
                <label className="post-body">
                    <i className="fas fa-pencil-alt"></i> Create Post
                </label>
                <textarea 
                    onChange={this.handleChange} 
                    value={this.state.body} 
                    placeholder={placeholder}
                    ref={ref => this.multiline = ref}
                >

                </textarea>
    
                <hr></hr>
                <button>Post</button>

            </form>
        )
    }
}

export default PostForm;