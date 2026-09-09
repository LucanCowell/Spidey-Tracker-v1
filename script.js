document.addEventListener("DOMContentLoaded", () => {
    
    // Card Flip
    
    const flipButtons = document.querySelectorAll(".flip-btn");

    flipButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            const container = button.closest(".mission-container");
            container.classList.toggle("is-flipped");
        })
    })
    

    // Xp Generation

    const xpHeaders = document.querySelectorAll(".xp-reward");
    xpHeaders.forEach(header => {
        const randomXP = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        header.textContent = `+${randomXP} XP`;
    })
})