import React from 'react';

class CommentOptions extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="comment-options">
                <i className="fas fa-ellipsis-h"></i>
            </div>
        )
    }
}

export default CommentOptions;