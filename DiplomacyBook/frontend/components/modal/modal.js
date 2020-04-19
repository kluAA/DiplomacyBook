import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import PostFormContainer from '../posts/post_form_container';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    fixBackground() {
       document.body.style.overflowY = "hidden";
    }

    unfixBackground() {
        document.body.style.overflowY = "scroll";
    }

    render() {
        const { modal, closeModal } = this.props;

        if (!modal) {
            
            return null;
        }
    
        let component;
        switch (modal.type) {
            case "editPost":
                console.log(modal)
                this.fixBackground();
                component = <PostFormContainer edit="true" post={modal.post}/>;
                break;
            default: 
                return null;
        }
    
        return (
            <div className="modal">
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className="modal-close" onClick={e => {
                        closeModal(e);
                        this.unfixBackground();
                    }}>
                        <i className="fas fa-times"></i>
                    </div>
                    {component}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    modal: state.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);