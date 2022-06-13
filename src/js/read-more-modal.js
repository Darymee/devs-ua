(() => {
const refs = {
    openModalBtn: document.querySelector("[data-read-more-modal-open]"),
    closeModalBtn: document.querySelector("[data-read-more-modal-close]"),
    modal: document.querySelector("[data-read-more-modal]"),
    body: document.querySelector("body"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
}
})();