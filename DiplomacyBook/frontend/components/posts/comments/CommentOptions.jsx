import React from 'react';
import ReactDOM from 'react-dom'

class CommentOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
            this.setState({showMenu: false});
        };
    }

    handleDelete(e) {
        this.props.deleteComment(this.props.commentId);
    }

    render() {

        const menu = (
            <div className="co-menu">
                <div id="co-outer-triangle">
                    <div id="co-inner-triangle"></div>
                </div>
                <ul>
                    <li>
                        <i className="fas fa-edit"></i> Edit...
                    </li>
                    <li onClick={this.handleDelete}>
                        <i className="fas fa-trash-alt"></i> Delete...
                    </li>
                </ul>
            </div>
        )
        return (
            <div className="comment-options"
                id={this.state.showMenu ? "co-active" : null} 
                tabIndex="0" 
                onClick={e => this.setState({showMenu: !this.state.showMenu})}
            >
                <i className="fas fa-ellipsis-h"></i>
                { this.state.showMenu && menu }
            </div>
        )
    }
}

export default CommentOptions;