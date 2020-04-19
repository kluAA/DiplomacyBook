import React from 'react';
import CommentEmoji from "./comments/CommentEmoji";
import ReactDOM from 'react-dom';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: props.post ? props.post.body : "",
            photoFile: null,
            photoUrl: props.post ? props.post.photoUrl : null,
            focused: false,
            hovered: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleUnfocus = this.handleUnfocus.bind(this);
        this.addEmoji = this.addEmoji.bind(this);
        this.multiline = React.createRef();
        this.fileInput = React.createRef();
    }

    componentDidMount() {
        if (this.multiline) {
            this.multiline.style.height = 'auto';
        }

        if (this.multiline && this.props.edit) {
            this.multiline.style.height = this.multiline.scrollHeight - 20 + 'px';
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
        if (!this.state.body) return null;
        let parsedBody = this.state.body.replace(/\n\s*\n\s*\n/g, '\n\n');
   
        const formData = new FormData();
        if (this.state.photoFile) { 
            formData.append("post[photo]", this.state.photoFile);
        } else if (!this.state.photoUrl && this.props.edit) {
            formData.append("post[photo]", "purge")
        }
        formData.append("post[body]", parsedBody);
       

        if (this.props.edit) {
            formData.append("post[user_id]", this.props.post.user_id);
            formData.append("post[author_id]", this.props.post.author_id);
            this.props.updatePost(formData, this.props.post.id)
                .then(() => {
                    this.props.closeModal();
                    document.body.style.overflowY = "scroll";
                });
                    
        } else {
            formData.append("post[user_id]", this.props.user.id);
            formData.append("post[author_id]", this.props.currentUser.id);
            this.props.createPost(formData)
        }
        //sets height of form back to original
        this.multiline.style.height = "auto";
        this.setState({body: "", photoFile: null, photoUrl: null, focused: false});
    }

    handleChange(e) {
        let scrollTop;
        let modal;
        if (this.props.edit) {
            //logic for preventing modal scroll position from resetting when overflow
            modal = document.getElementsByClassName("modal")[0];
            scrollTop = modal.scrollTop;
        }
        
        this.multiline.style.height = 'auto';
        this.multiline.style.height = this.multiline.scrollHeight - 20 + 'px';
        this.setState({body: e.target.value})
        if (this.props.edit) modal.scrollTo(0, scrollTop);
    }

    addEmoji(emoji) {
        this.setState({ body: this.state.body + emoji })
    }


    render() {
        const { currentUser, user, edit } = this.props;
        const { photoFile } = this.state;
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
            <form className="posts-form">
                <div className="posts-form-body">
                    <i className="fas fa-pencil-alt"></i> 
                    <span>{edit ? "Edit" : "Create"} Post</span>
                    <div className="post-add-photo">
                        <label htmlFor="post-file">
                            <i className="fas fa-camera"></i>
                            <span>{photoFile ? "Edit" : "Add"} Photo</span>
                        </label>  
                    </div>
                    <input type="file" ref={ref => this.fileInput = ref} id="post-file" accept=".jpg,.gif,.png" onChange={this.handleFile} />
                </div>
                <div className="textarea-container">
                    <textarea 
                        onChange={this.handleChange} 
                        value={this.state.body} 
                        placeholder={placeholder}
                        ref={ref => this.multiline = ref}
                        onFocus={e => this.setState({focused: true})}
                    >
                    </textarea>
                {this.state.focused && <div className="emojitime-2">
                    <CommentEmoji addEmoji={this.addEmoji} feed={this.props.feed} />
                </div>}
                </div>
                { this.state.photoUrl &&
                    <div className="posts-photo-preview"
                        onMouseEnter={e => this.setState({hovered: true})}
                        onMouseLeave={e => this.setState({hovered: false})}
                    >
                        <img src={this.state.photoUrl} />
                        { this.state.hovered && 
                            <div className="preview-overlay">
                            </div>
                        }
                        { this.state.hovered && 
                            <i className="fas fa-times"
                                onClick={e => this.setState({photoFile: null, photoUrl: null}, () => this.fileInput.value = null)}
                            ></i> 
                        }
                    </div>
                }
                <hr></hr>
                {!edit && <button className="posts-btn"
                    onClick={this.handleSubmit}
                    id={this.state.body ? null : "disabled"}
                    >
                    Post</button>}
                {edit &&
                    <div className="posts-edit-footer">
                        <button 
                            className="posts-edit-btn" 
                            onClick={this.handleSubmit}
                            id={this.state.body ? null : "save-disabled"}
                            >
                            Save</button>
                    </div>
                }
            </form>
        )
    }
}

export default PostForm;