export class Modal {
    static initialize() {
        const modal = document.querySelector(".modal");

        document.getElementById("skill-btn").addEventListener("click", function () {
            modal.classList.add('active');
        })
        document.querySelector(".modal_close-button").addEventListener("click", function () {
            modal.classList.remove('active');
        })
    }
}