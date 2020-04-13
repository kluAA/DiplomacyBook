import React from 'react';
import { Link } from 'react-router-dom';

class TimelinePhotos extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPhotos(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchPhotos(this.props.match.params.id);
        }
    }

    render() {
        const { photos } = this.props;
        if (!photos) return null;
        const mapPhotos = photos.map(photo => {
            return (
                <li key={photo.id}>
                    <img src={photo.photoUrl}></img>
                </li>
            )
        }) 

        return (
            <div className="timeline-box">
                <div className="timeline-box-header">
                    <img src={window.fbPhotosIconURL} className='timeline-header-icon' />
                    <Link to={`/profile/${this.props.match.params.id}/photos`}>
                        <span className='timeline-box-label'>Photos</span>
                    </Link>
                    {/* <span className="timeline-box-count">{`(${friendsCount})`}</span> */}
                </div>
                <ul className='timeline-box-list'>
                    {mapPhotos}
                </ul>
            </div>
        )
    }
}

export default TimelinePhotos;