export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal, post) => ({
    type: OPEN_MODAL,
    data: { type: modal, post: post } 
});

export const closeModal = () => ({
    type: CLOSE_MODAL,

});




