import { connect } from "react-redux"
import TimelinePhotos from './timeline_photos';
import { withRouter } from 'react-router-dom';
import { fetchPhotos } from "../../../actions/photo_actions"

const mapStateToProps = state => ({
    photos: Object.values(state.entities.photos)
})

const mapDispatchToProps = dispatch => ({
    fetchPhotos: userId => dispatch(fetchPhotos(userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimelinePhotos));