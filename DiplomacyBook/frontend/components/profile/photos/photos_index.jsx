import React from 'react';

class PhotosIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="profile-component-container">
                <div className="profile-component-header">
                    <span><i className="far fa-images"></i>Photos</span>
                </div>

            </div>
        )
    }

}

export default PhotosIndex;