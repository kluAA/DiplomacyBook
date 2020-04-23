import React from 'react';
import ReactDOM from 'react-dom'

class CommentOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.container = React.createRef();
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
            console.log(e.target)
            this.setState({showMenu: false});
            this.container.focus();
        };
    }

    render() {

        const menu = (
            <div className="co-menu">
                <ul>
                    <li>
                        Edit...
                    </li>
                    <li>
                        Delete...
                    </li>
                </ul>
            </div>
        )
        return (
            <div className="comment-options"
                id={this.state.showMenu && "co-active"} 
                tabIndex="0" 
                onClick={e => this.setState({showMenu: !this.state.showMenu})}
                ref={ref => this.container = ref}
            >
                <i className="fas fa-ellipsis-h"></i>
                { this.state.showMenu && menu }
            </div>
        )
    }
}

export default CommentOptions;