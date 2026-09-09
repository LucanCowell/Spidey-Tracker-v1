document.addEventListener("DOMContentLoaded", () => {
    const flipButtons = document.querySelectorAll(".flip-btn");

    flipButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            const container = button.closest(".mission-container");
            container.classList.toggle("is-flipped");
        })
    })
})