import React from 'react';
import { Link } from 'react-router-dom';
import NavUserContainer from '../nav/nav_user_container';
import ProfilePhotoForm from './profile_photo_form';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { formModal: false }
        this.updatePicture = this.updatePicture.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps) {
   
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId);
        }
    }

    updatePicture(user) {
        this.setState({ formModal: false })
        this.props.receiveUser(user)
    }

    render() {
        if (!this.props.user) return null

        const addFriendBtn = <button className="profile-add-friend"><i className="fas fa-user-plus"></i>Add Friend</button>
        const userId = this.props.match.params.userId
        const user = this.props.user;
        const currentUserId = this.props.currentUser.id;
        const action = user.photoUrl ? "Update" : "Add"
        const photoUrl = user.photoUrl ? user.photoUrl : window.defaultProfileURL;
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
                    <ProfilePhotoForm updatePicture={this.updatePicture} currentUser={this.props.currentUser} />
                </div>
            </div>
        )
        return (
            <div className="bg-container">
                <NavUserContainer />
                {this.state.formModal && changeProfilePhoto}
                <div className="profile-container">
                    <div className="profile-cover">
                        <span className="profile-fn">{`${user.first_name} ${user.last_name}`}</span>
                        <div className="profile-photo-container">
                            <img className="profile-photo" src={photoUrl}></img>
                            {currentUserId === user.id ? photoUpdate : null}
                        </div>
                        {this.props.currentUser.id !== this.props.user.id && addFriendBtn}
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
                </div>
                
            </div>
        )
    }
}

export default Profile;