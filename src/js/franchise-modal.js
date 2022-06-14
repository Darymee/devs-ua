(() => {
const refs = {
    openModalBtn: document.querySelector("[data-franchise-modal-open]"),
    closeModalBtn: document.querySelector("[data-franchise-modal-close]"),
    modal: document.querySelector("[data-franchise-modal]"),
    body: document.querySelector("body"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
}
})();