import React from 'react';
import PostFormContainer from './post_form_container';
import PostItemContainer from './post_item_container';

class PostIndex extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            showAll: false
        }
        this.showAll = this.showAll.bind(this);
    }

    componentDidMount() {
        if (!this.state.showAll) {
            this.props.fetchUserPosts(this.props.match.params.id, "false")
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchUserPosts(this.props.match.params.id, "false")
        }
    }

    showAll(e) {
        this.props.fetchUserPosts(this.props.match.params.id, "true")
        this.setState({ showAll: true });
    }

    render() {
        const { posts } = this.props;
        if ( !posts || posts === [] ) return null;
        let mapPosts = (posts.length > 5 && !this.state.showAll) ? posts.slice(0, 5) : posts
        let showPosts = mapPosts.map(post => <li className="post" key={post.id}><PostItemContainer postId={post.id} /></li>)
        return (
            <div className="post-index-container">
                <PostFormContainer />
                 <ul className="posts-container">
                     {showPosts}
                 </ul>

                {!this.state.showAll && posts.length > 5 &&
                    <div onClick={this.showAll} id="show-all">
                        <span>Show All</span>
                    </div>
                }
                {this.state.showAll &&
                    <div onClick={e => this.setState({ showAll: false })} id="show-all">
                        <span>Hide All But 5</span>
                    </div>
                }
            </div>
        )    
    }   
}

export default PostIndex;