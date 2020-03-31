import { connect } from 'react-redux';
import Comment from './comment';

const mapStateToProps = (state, ownProps) => ({
    comment: state.entities.comments[ownProps.comment_id]
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
