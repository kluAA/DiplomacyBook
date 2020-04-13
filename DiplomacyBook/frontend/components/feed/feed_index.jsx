import React from 'react';
import FeedFormContainer from './feed_form_container';
import PostItemContainer from '../posts/post_item_container';
import { Link } from 'react-router-dom';

class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAll: false
        }
        this.showAll = this.showAll.bind(this);
    }

    componentDidMount() {
        if (!this.state.showAll) {
            this.props.fetchFeedPosts("false");
        } 
    }

    showAll(e) {
        this.props.fetchFeedPosts("true");
        this.setState({showAll: true});
    }


    render() {
        const { posts, currentUser } = this.props;
        if (!posts || posts === []) return null;
        let mapPosts = (posts.length > 5 && !this.state.showAll) ? posts.slice(0, 5) : posts
        let showPosts = mapPosts.map(post => <li className="post" key={post.id}><PostItemContainer postId={post.id} /></li>)
        return (
            <div className="bg-container">
                <div className="feed-container">
                    <div className="feed-left-container">
                        <ul className="feed-left">
                            <Link to={`/profile/${currentUser.id}`}>
                                <li id="fl-user">
                                    <img id="fl-icon" src={currentUser.photoUrl} />
                                    <span>{currentUser.first_name} {currentUser.last_name}</span>
                                </li>
                            </Link>
                            <span className="fl-header">Contact</span>
                            <a href="http://github.com/kluaa">
                                <li>
                                    <div className="icon-container">
                                        <i className="fab fa-github-square"></i>
                                    </div>
                                    <span>Github</span>
                                </li>
                            </a>
                            <a href="https://www.linkedin.com/in/kevin-lu-96b294191/">
                                <li>
                                    <div className="icon-container">
                                        <i className="fab fa-linkedin"></i>
                                    </div>
                                    <span>LinkedIn</span>
                                </li>
                            </a>
                            <a href="https://angel.co/u/kevin-lu-45">
                                <li>
                                    <div className="icon-container">
                                        <i className="fab fa-angellist"></i>
                                    </div>
                                    <span>AngelList</span>
                                </li>
                            </a>
                            <a href="http://kevinlu.netlify.com">
                                <li>
                                    <div className="icon-container">
                                        <i className="fas fa-folder"></i>
                                    </div>
                                    <span>Portfolio</span>
                                </li>
                            </a>
                            <span className="fl-header">Explore</span>
                            <a href="http://quarrel-pro.herokuapp.com">
                                <li>
                                    <div className="icon-container">
                                        <img className="fl-favicons" src={window.quarrelIcon} />
                                    </div>
                                    <span>Quarrel</span>
                                </li>
                            </a>
                            <a href="http://sleepify-dev.herokuapp.com">
                                <li>
                                    <div className="icon-container">
                                        <img className="fl-favicons" src={window.sleepifyIcon} />
                                    </div>
                                    <span>Sleepify</span>
                                </li>
                            </a>
                            <a href="https://kluaa.github.io/kosujs/">
                                <li>
                                    <div className="icon-container">
                                        <img className="fl-favicons" src={kosuIcon} />
                                    </div>
                                    <span>kosuJS</span>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="feed-index-container">
                        <FeedFormContainer />
                        <ul className="posts-container">
                            {showPosts}
                        </ul>
                        { !this.state.showAll && posts.length > 5 && 
                            <div onClick={this.showAll} id="show-all">
                                <span>Show All</span>
                            </div>
                        }
                        { this.state.showAll &&
                            <div onClick={e => this.setState({showAll: false})} id="show-all">
                                <span>Hide All But 5</span>
                            </div>
                        }
                    </div> 

                    <div className="feed-right-container">
                        <div className="fr-ad">
                            <span className="fr-header">Sponsored</span>
                            <a href="https://www.linkedin.com/in/kevin-lu-96b294191/">
                                <img className="fr-image" src={window.programmer} />
                                <span className="fr-ad-title">Top Developers in Your Area</span>
                                <p className="fr-ad-description">
                                    Need a top developer for a backend or frontend position?
                                    Look no further. Connect with a Kevin Lu today!
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
     
        )
    }
}

export default FeedIndex;