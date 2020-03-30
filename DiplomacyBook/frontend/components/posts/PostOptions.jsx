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
        const { deletePost, postId } = this.props;
        
        const postActions = (
            <ul className="post-actions">
                <li>Edit</li>
                <div className="post-actions-divider"></div>
                <li onClick={e => deletePost(postId) }>Delete</li>
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