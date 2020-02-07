import React from 'react';
class ProfilePhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoFile: null,
            photoUrl: null,
            action: this.props.action
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
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

    handleSubmit(action) {
        return e => {
            e.preventDefault();
            const formData = new FormData();
            if (this.state.photoFile) {

                formData.append(`user[${action}]`, this.state.photoFile);
            }
            this.props.updatePicture(formData, this.props.currentUser.id)
            .then ((user) => this.props.closeModal());
        }
    }

    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
            <form className="profile-photo-form" onSubmit={this.handleSubmit(this.props.action)}>
                <input id="profile-photo-file" type="file"
                    onChange={this.handleFile} />
    <label htmlFor="profile-photo-file"><i className="fas fa-plus"></i>Upload {this.props.action}</label>
                <h3>{this.state.photoUrl ? "Image Preview" : null} </h3>
                {preview}
               {this.state.photoUrl ? <button>Save</button> : null}
            </form>
        );
    }
}

export default ProfilePhotoForm;