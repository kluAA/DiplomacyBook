import React from 'react';

class ProfilePhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoFile: null,
            photoUrl: null
        };
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (this.state.photoFile) {

            formData.append('user[photo]', this.state.photoFile);
        }
      $.ajax({
            url: `/api/users/${this.props.currentUser.id}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        }).then ((user) => this.props.updatePicture(user));
    }

    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
            <form className="profile-photo-form" onSubmit={this.handleSubmit.bind(this)}>
                <input id="profile-photo-file" type="file"
                    onChange={this.handleFile.bind(this)} />
                <label htmlFor="profile-photo-file"><i className="fas fa-plus"></i>Upload Photo</label>
                <h3>{this.state.photoUrl ? "Image Preview" : null} </h3>
                {preview}
               {this.state.photoUrl ? <button>Save</button> : null}
            </form>
        );
    }
}

export default ProfilePhotoForm;