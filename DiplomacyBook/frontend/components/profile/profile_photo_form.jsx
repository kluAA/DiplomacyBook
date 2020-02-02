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
       return $.ajax({
            url: `/api/users/${this.props.currentUser.id}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        }).then ((user) => this.props.updatePicture(user));
    }

    render() {
        console.log(this.state);
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
            <form className="profile-photo-form" onSubmit={this.handleSubmit.bind(this)}>
                <input type="file"
                    onChange={this.handleFile.bind(this)} />
                <h3>Image preview </h3>
                {preview}
                <button>Add photo!</button>
            </form>
        );
    }
}

export default ProfilePhotoForm;