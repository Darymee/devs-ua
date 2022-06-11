(() => {
const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openMobileModalBtn: document.querySelector('[data-mobile-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-body-overflow]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.openMobileModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scrol');
}
})();