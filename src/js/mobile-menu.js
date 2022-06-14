(() => {
    const refs = {
        openMenuBtn: document.querySelector(".menu-open-btn"),
        closeMenuBtn: document.querySelector(".menu-close-btn"),
        menu: document.querySelector(".mobile__menu"),
        body: document.querySelector("body"),
    };
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    function toggleMenu() {
        refs.menu.classList.toggle("is-hidden");
        refs.body.classList.toggle("no-scroll");
    }
})();

// Открывание модалки моб меню
(() => {
    const refs = {
        openModalBtn: document.querySelector("[menu-mobile-modal-open]"),
        modal: document.querySelector("[data-mobile-menu]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();