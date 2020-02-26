import React from 'react';
import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions';
import { connect } from 'react-redux';

function Modal({ modal, closeModal }) {
    if (!modal) return null;

    let component;
    switch (modal) {
        case "editPost":
            component = "tobeedited"
            break;
        default: return null;
    }

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);