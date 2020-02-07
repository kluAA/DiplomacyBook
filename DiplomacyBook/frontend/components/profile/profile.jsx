import React from 'react';
import { Link, Switch } from 'react-router-dom';
import ProfilePhotoFormContainer from './profile_photo_form_container';
import ProfileFriendButtonContainer from './profile_friend_button_container';
import FriendsIndexContainer from './friends/friends_index_container'
import { ProtectedRoute } from '../../utils/route_util';
import TimelineContainer from './timeline_container'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            formModal: false,
            coverModal: false
        }
        this.closeModal = this.closeModal.bind(this);
        this.addFriend = this.addFriend.bind(this);
        this.closeCover = this.closeCover.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps) {
   
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId);
        }
    }

    closeModal() {
        this.setState({ formModal: false })
    }

    closeCover() {
        this.setState({ coverModal: false })
    }

    addFriend(e) {
        e.preventDefault();
    }
    

    render() {
        if (!this.props.user) return null

        const userId = this.props.match.params.userId
        const user = this.props.user;
        const currentUserId = this.props.currentUser.id;
        const action = user.photoUrl ? "Update" : "Add"
        const photoUrl = user.photoUrl
        const photoUpdate = (
            <div onClick={e => this.setState({formModal: true})}className="profile-update-photo">
                <i className="fas fa-camera"></i>
                <span>{action} Photo</span>
            </div>
        )

        const changeProfilePhoto = (
            <div className="profile-modal">
                <div className="profile-photo-form-container">
                    <div className="profile-photo-form-header">
                        <span>{action} Photo</span>
                        <i className="fas fa-times" onClick={e => this.setState({formModal: false})}></i>
                    </div>
                    <ProfilePhotoFormContainer action="photo" closeModal={this.closeModal} />
                </div>
            </div>
        )

        const coverUpdate = (
            <div onClick={e => this.setState({ coverModal: true })} className="profile-update-cover">
                <span>Update Cover Photo</span>
            </div>   
        )

        const changeCoverPhoto = (
            <div className="profile-modal">
                <div className="profile-photo-form-container">
                    <div className="profile-photo-form-header">
                        <span>Update Cover</span>
                        <i className="fas fa-times" onClick={e => this.setState({ coverModal: false })}></i>
                    </div>
                    <ProfilePhotoFormContainer action="cover" closeModal={this.closeCover} />
                </div>
            </div>
        )

        const coverImg = <img className="profile-cover-image" src={user.coverUrl}></img>

        return (
            <div className="bg-container">
                {this.state.formModal && changeProfilePhoto}
                {this.state.coverModal && changeCoverPhoto}
                <div className="profile-container">
                    <div className="profile-cover">
                        {currentUserId === user.id? coverUpdate : null}
                        {user.coverUrl ? coverImg : null}
                        <span className="profile-fn">{`${user.first_name} ${user.last_name}`}</span>
                        <div className="profile-photo-container">
                            <img className="profile-photo" src={photoUrl}></img>
                            {currentUserId === user.id ? photoUpdate : null}
                        </div>
                        <ProfileFriendButtonContainer />
                    </div>
                    <ul className="profile-nav">
                        <li>
                            <Link to={`/profile/${userId}`}>Timeline</Link>
                        </li>
                        <li>
                            <Link to={`/profile/${userId}/about`}>About</Link>
                        </li>
                        <li>
                            <Link to={`/profile/${userId}/friends`}>Friends</Link>
                        </li>
                        <li>
                            <Link to={`/profile/${userId}/photos`}>Photos</Link>
                        </li>
                        <li>
                            <Link to={`/profile/${userId}/#`}>More</Link>
                        </li>
                    </ul>
                    <Switch>
                        <ProtectedRoute exact path='/profile/:id/friends' component={FriendsIndexContainer} />
                        <ProtectedRoute path='/profile/:id' component={TimelineContainer} />

                    </Switch>
                </div>

            </div>
        )
    }
}

export default Profile;

//friends table
//friend_1 => sender
//friend_2 => receiver

//polymorphic association/self join for reference with dependent destroy

//friend request table 
//transaction 
