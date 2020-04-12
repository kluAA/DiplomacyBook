import React from 'react';
import CommentEmoji from "./comments/CommentEmoji";
import ReactDOM from 'react-dom';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            photoFile: null,
            photoUrl: null,
            focused: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleUnfocus = this.handleUnfocus.bind(this);
        this.addEmoji = this.addEmoji.bind(this);
        this.multiline = React.createRef();
    }

    componentDidMount() {
        if (this.multiline) {
            this.multiline.style.height = 'auto';
        }
        document.addEventListener('mousedown', this.handleUnfocus, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleUnfocus, false);
    }

    handleUnfocus(e) {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(e.target)) {
            this.setState({
                focused: false
            });
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let parsedBody = this.state.body.replace(/\n\s*\n\s*\n/g, '\n\n');
   
        const formData = new FormData();
        if (this.state.photoFile) formData.append("post[photo]", this.state.photoFile);
        formData.append("post[body]", parsedBody);
        formData.append("post[user_id]", this.props.user.id);
        formData.append("post[author_id]", this.props.currentUser.id);


        this.props.createPost(formData)
        //sets height of form back to original
        this.multiline.style.height = "auto";
        this.setState({body: ""});
    }

    handleChange(e) {
        this.multiline.style.height = 'auto';
        this.multiline.style.height = this.multiline.scrollHeight - 20 + 'px';
        this.setState({body: e.target.value})
    }

    addEmoji(emoji) {
        this.setState({ body: this.state.body + emoji })
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
                    <input type="file" accept=".jpg,.gif,.png" onChange={this.handleFile} />
                </label>
                <textarea 
                    onChange={this.handleChange} 
                    value={this.state.body} 
                    placeholder={placeholder}
                    ref={ref => this.multiline = ref}
                    onFocus={e => this.setState({focused: true})}
                >
            
                </textarea>
                {this.state.focused && <div className="emojitime-2">
                    <CommentEmoji addEmoji={this.addEmoji} />
                </div>}
                <hr></hr>
                <button>Post</button>
            </form>
        )
    }
}

export default PostForm;