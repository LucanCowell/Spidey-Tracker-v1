document.addEventListener("DOMContentLoaded", () => {
    // Possible Missions
    const questPool = [
        { name: "Chemistry", area: "Academics", details: "Complete a Chemistry Practice Test" },
        { name: "Math Advanced", area: "Academics", details: "Complete a Practice Exam targetting weak areas" },
        { name: "Math Extension", area: "Academics", details: "Spend 1 hour reviwing 3D Trigonometry" },
        { name: "English Advanced", area: "Academics", details: "Complete a Short Answer Practice Exam" },
        { name: "Enterprise Computing", area: "Academics", details: "Spend 1 Hour reviewing the Ubiquity of Interactive Media" },
        { name: "Business Studies", area: "Academics", details: "Review the Business Report Structure" },
        { name: "SOR X", area: "Academics", details: "Spend half an hour reviewing Post-45 Content" },
        { name: "Calisthenics", area: "Fitness", details: "Spend 10 Minutes practicing Calisthenic Form and Abilities" },
        { name: "Novel Writing", area: "Queens", details: "Write 500 words on the Exotic Curse" }
    ];

    const slots = document.querySelectorAll(".mission-slot");

    let savedBoardState = JSON.parse(localStorage.getItem("spideyBoardState")) || {};

    // XP 
    let currentLevel = parseInt(localStorage.getItem("spideyLevel")) || 1;
    let currentXP = parseInt(localStorage.getItem("spideyXP")) || 0;

    const xpProgress = document.getElementById("xpProgress");
    const xpValueText = document.querySelector(".xpValue");
    const xpLevelText = document.querySelector(".xpLevel");

    function updateDashboardUI() {
        if (xpProgress) xpProgress.value = currentXP;
        if (xpValueText) xpValueText.textContent = `${currentXP}/100`;
        if (xpLevelText) xpLevelText.textContent = currentLevel;
    }

    function gainXP(amount) {
        currentXP += amount;
        while (currentXP >= 100) {
            currentXP -= 100;
            currentLevel++;
        }
        localStorage.setItem("spideyLevel", currentLevel);
        localStorage.setItem("spideyXP", currentXP);
        updateDashboardUI();
    }

    updateDashboardUI();

    // Cards generator
    function createMissionHTML(quest) {
        return `
            <div class="mission-container fade-in">
                <div class="mission-inner">
                    <!-- FRONT SIDE -->
                    <div class="mission-side mission-front">
                        <button class="flip-btn"><i class="fa-solid fa-rotate"></i></button>
                        <h1>${quest.name}</h1>
                        <h2 class="xp-reward" data-xp="${quest.xp}">+${quest.xp} XP</h2>
                        <h2>${quest.area}</h2>
                        <button class="accept"><i class="fa-solid fa-check"></i></button>
                    </div>
                    <!-- BACK SIDE -->
                    <div class="mission-side mission-back">
                        <button class="flip-btn back-flip"><i class="fa-solid fa-arrow-left"></i></button>
                        <h1>Details</h1>
                        <p>${quest.details}</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Deployment
    function deployQuest(slot, slotId) {
        if (!slot) return;

        let activeQuest;

        // CHECK MEMORY 
        if (savedBoardState[slotId]) {
            activeQuest = savedBoardState[slotId];
        } else {
            // makes sure no duplicates
            const namesOnBoard = Object.values(savedBoardState).map(q => q.name);
            let availableQuests = questPool.filter(q => !namesOnBoard.includes(q.name));
            
            if (availableQuests.length === 0) availableQuests = questPool;

            const baseQuest = availableQuests[Math.floor(Math.random() * availableQuests.length)];
            
            // Random XP
            const randomXP = Math.floor(Math.random() * (30 - 10 + 1)) + 10;

            activeQuest = {
                name: baseQuest.name,
                area: baseQuest.area,
                details: baseQuest.details,
                xp: randomXP
            };

            // Lock it in memory
            savedBoardState[slotId] = activeQuest;
            localStorage.setItem("spideyBoardState", JSON.stringify(savedBoardState));
        }

        // Render the card
        slot.innerHTML = createMissionHTML(activeQuest);

        const container = slot.querySelector(".mission-container");
        const flipBtns = slot.querySelectorAll(".flip-btn");
        const acceptBtn = slot.querySelector(".accept");
        const xpRewardElement = slot.querySelector(".xp-reward");

        // CARD FLIP
        flipBtns.forEach(btn => {
            btn.addEventListener("click", (event) => {
                event.stopPropagation();
                container.classList.toggle("is-flipped");
            });
        });

        // MISSION ACCEPT & RESPONSIBLE CLEARING
        acceptBtn.addEventListener("click", (event) => {
            event.stopPropagation();

            const xpEarned = parseInt(xpRewardElement.getAttribute("data-xp"));
            gainXP(xpEarned);

            container.classList.add("fade-out");

            // Clear ONLY this slot's configuration from storage so it rolls a new one on respawn
            delete savedBoardState[slotId];
            localStorage.setItem("spideyBoardState", JSON.stringify(savedBoardState));

            setTimeout(() => {
                slot.innerHTML = ""; 
                setTimeout(() => {
                    deployQuest(slot, slotId); 
                }, 2500);
            }, 500);
        });
    }

    slots.forEach((slot, index) => {
        const dynamicId = slot.classList[1] || slot.classList[0] || `slot_${index}`; 
        deployQuest(slot, dynamicId);
    });
});
//Use the command below to reset the user level

//localStorage.clear(); location.reload();
