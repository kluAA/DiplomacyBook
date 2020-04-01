import React, { Fragment } from 'react';

class PostLikes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchLikes(this.props.postId);
    }

    renderNames() {
        const userLikes = Object.values(this.props.userLikes);
        if (userLikes.length < 8) {
            return userLikes.map(user => (
                <li className="like-names" key={user.id}>
                    {user.first_name} {user.last_name}
                </li>
            ));
        } else {
            return (
                <Fragment>
                    {userLikes.slice(0,7).map(user => (
                        <li className="like-names" key={user.id}>
                            {user.first_name} {user.last_name}
                        </li> 
                    ))}
                    <li>and {userLikes.length-7} more...</li>
                </Fragment>
            )
        }
    }

    render() {
     
        return (
            <ul className="like-bubble">
                {!this.props.userLikes ? <li>Loading...</li> : this.renderNames()}
                <div id="like-triangle"></div>
            </ul>
        )
    }
}

export default PostLikes;