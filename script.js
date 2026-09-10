document.addEventListener("DOMContentLoaded", () => {
    // Possible Missions
    const questPool = [
        { name: "Chemistry", area: "Academics", details: "Complete a Chemistry Practice Test" },
        { name: "Chemistry", area: "Academics", details: "Review Chemistry Fundamentals for 30 Minutes" },
        { name: "Chemistry", area: "Academics", details: "Enathalpy and Entropy Questions for 30 Minutes" },
        { name: "Math Advanced", area: "Academics", details: "Complete a Practice Exam targetting weak areas" },
        { name: "Math Advanced", area: "Academics", details: "Review Key Concepts in Weakest Areas" },
        { name: "Math Advanced", area: "Academics", details: "Complete a Chapter Review" },
        { name: "Math Extension", area: "Academics", details: "Spend 1 hour reviwing 3D Trigonometry" },
        { name: "Math Extension", area: "Academics", details: "Spend 30 reviwing the Binomial Theorum" },
        { name: "Math Extension", area: "Academics", details: "Complete a Practice Test" },
        { name: "English Advanced", area: "Academics", details: "Complete a Short Answer Practice Exam" },
        { name: "English Advanced", area: "Academics", details: "Review Quote Flashcards" },
        { name: "English Advanced", area: "Academics", details: "Write a draft for a 20 mark responce" },
        { name: "E Computing", area: "Academics", details: "Spend 1 Hour reviewing the Ubiquity of Interactive Media" },
        { name: "E Computing", area: "Academics", details: "Answer 10 Practice Questions across the syllabus" },
        { name: "E Computing", area: "Academics", details: "Practice Drawing Network Diagrams" },
        { name: "Business Studies", area: "Academics", details: "Review the Business Report Structure" },
        { name: "Business Studies", area: "Academics", details: "Answer past papers" },
        { name: "Business Studies", area: "Academics", details: "Review study notes and then use active recall" },
        { name: "SOR X", area: "Academics", details: "Spend half an hour reviewing Post-45 Content" },
        { name: "SOR X", area: "Academics", details: "Spend 1 hour reviewing Judaism Content" },
        { name: "SOR X", area: "Academics", details: "Spend 1 hour reviewing Christianity Content Content" },
        { name: "Calisthenics", area: "Fitness", details: "Spend 10 Minutes practicing Calisthenic Form and Abilities" },
        { name: "Home Gym", area: "Fitness", details: "Complete a variation of the 'CINDY' Workout: (5 Sit ups, 10 Squats, 15 Pushups)" },
        { name: "Wood Cutting", area: "Fitness", details: "Cut some firewood with the Blockbuster if available" },
        { name: "Writing", area: "Creative", details: "Write 500 words on the Exotic Curse" },
        { name: "Music", area: "Creative", details: "Practise a Musical Instrument for 30 minutes" },
        { name: "Drama", area: "Creative", details: "Review lines for musicals for 30 minutes" },
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
