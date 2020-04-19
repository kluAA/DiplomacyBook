import React from 'react';
import ReactDOM from 'react-dom';

class PostOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPostOptions: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick(e) {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(e.target)) {
            this.setState({
                showPostOptions: false
            });
        }
    }

    render() {
        const { showPostOptions } = this.state;
        const { deletePost, post } = this.props;
        
        const postActions = (
            <ul className="post-actions">
                <li onClick={e => this.props.openModal("editPost", post)}>Edit</li>
                <div className="post-actions-divider"></div>
                <li onClick={e => deletePost(post.id) }>Delete</li>
                <div className="post-actions-divider"></div>
                <li onClick={e => this.setState({ showPostOptions: false })}>Cancel</li>
            </ul>
        )
        return (
            <div className="post-ellipsis">
                <i className="fas fa-ellipsis-h" onClick={e => this.setState({ showPostOptions: !showPostOptions })}></i>
                {showPostOptions && postActions}
            </div>
        )

    }
}

export default PostOptions;