document.addEventListener("DOMContentLoaded", () => {
    // Possible Missions
    const questPool = [
        { name: "Chemistry", area: "Academics", details: "Complete a Chemistry Practice Test" },
        { name: "Chemistry", area: "Academics", details: "Review Chemistry Fundamentals for 30 Minutes" },
        { name: "Chemistry", area: "Academics", details: "Enathalpy and Entropy Questions for 30 Minutes" },
        { name: "Chemistry", area: "Academics", details: "Practice Balancing Complex Equations for 30 minutes" },
        { name: "Chemistry", area: "Academics", details: "Complete 15 multiple-choice Chemistry questions" },
        { name: "Chemistry", area: "Academics", details: "Complete 5 extended-response Chemistry questions" },
        { name: "Chemistry", area: "Academics", details: "Review and memorise key Chemistry definitions for 30 minutes" },
        { name: "Chemistry", area: "Academics", details: "Complete a timed Chemistry section without notes" },
        { name: "Chemistry", area: "Academics", details: "Use active recall to test yourself on a Chemistry topic" },
        { name: "Chemistry", area: "Academics", details: "Review your mistakes from a previous Chemistry test" },
        { name: "Chemistry", area: "Academics", details: "Complete 30 minutes of calculations and quantitative Chemistry questions" },
        { name: "Chemistry", area: "Academics", details: "Create a one-page summary of a difficult Chemistry topic" },
        { name: "Math Advanced", area: "Academics", details: "Complete a Practice Exam targetting weak areas" },
        { name: "Math Advanced", area: "Academics", details: "Review Key Concepts in Weakest Areas" },
        { name: "Math Advanced", area: "Academics", details: "Complete a Chapter Review" },
        { name: "Math Advanced", area: "Academics", details: "Complete 10 questions from a weak area" },
        { name: "Math Advanced", area: "Academics", details: "Complete 20 minutes of timed Mathematics questions" },
        { name: "Math Advanced", area: "Academics", details: "Redo questions previously answered incorrectly" },
        { name: "Math Advanced", area: "Academics", details: "Complete a set of questions without using your notes" },
        { name: "Math Advanced", area: "Academics", details: "Create a formula sheet from memory" },
        { name: "Math Advanced", area: "Academics", details: "Spend 30 minutes mastering your weakest current topic" },
        { name: "Math Advanced", area: "Academics", details: "Complete 5 challenging questions and write out full solutions" },
        { name: "Math Advanced", area: "Academics", details: "Analyse a previous exam and identify your 3 biggest weaknesses" },
        { name: "Math Extension", area: "Academics", details: "Spend 1 hour reviwing 3D Trigonometry" },
        { name: "Math Extension", area: "Academics", details: "Spend 30 reviwing the Binomial Theorum" },
        { name: "Math Extension", area: "Academics", details: "Complete a Practice Test" },
        { name: "Math Extension", area: "Academics", details: "Complete 10 challenging Extension questions" },
        { name: "Math Extension", area: "Academics", details: "Complete 30 minutes of difficult questions without notes" },
        { name: "Math Extension", area: "Academics", details: "Redo your 5 hardest previously incorrect questions" },
        { name: "Math Extension", area: "Academics", details: "Create a summary sheet for a difficult Extension topic" },
        { name: "Math Extension", area: "Academics", details: "Complete a timed set of Extension questions" },
        { name: "Math Extension", area: "Academics", details: "Spend 30 minutes attacking your weakest Extension topic" },
        { name: "Math Extension", area: "Academics", details: "Attempt 3 difficult questions before looking at any solutions" },
        { name: "English Advanced", area: "Academics", details: "Complete a Short Answer Practice Exam" },
        { name: "English Advanced", area: "Academics", details: "Review Quote Flashcards" },
        { name: "English Advanced", area: "Academics", details: "Write a draft for a 20 mark responce" },
        { name: "English Advanced", area: "Academics", details: "Write a 10-mark analytical response under timed conditions" },
        { name: "English Advanced", area: "Academics", details: "Memorise 5 important quotes" },
        { name: "English Advanced", area: "Academics", details: "Analyse 3 quotes and identify their techniques and effects" },
        { name: "English Advanced", area: "Academics", details: "Write one strong analytical paragraph" },
        { name: "English Advanced", area: "Academics", details: "Complete a timed essay plan" },
        { name: "English Advanced", area: "Academics", details: "Improve an old English response using teacher feedback" },
        { name: "English Advanced", area: "Academics", details: "Practise writing an introduction and thesis statement" },
        { name: "English Advanced", area: "Academics", details: "Complete 30 minutes of quote recall without notes" },
        { name: "E Computing", area: "Academics", details: "Spend 1 Hour reviewing the Ubiquity of Interactive Media" },
        { name: "E Computing", area: "Academics", details: "Answer 10 Practice Questions across the syllabus" },
        { name: "E Computing", area: "Academics", details: "Practice Drawing Network Diagrams" },
        { name: "E Computing", area: "Academics", details: "Complete 15 Enterprise Computing multiple-choice questions" },
        { name: "E Computing", area: "Academics", details: "Review one weak area of the syllabus for 30 minutes" },
        { name: "E Computing", area: "Academics", details: "Complete a timed section of a past paper" },
        { name: "E Computing", area: "Academics", details: "Create a summary sheet for one syllabus topic" },
        { name: "E Computing", area: "Academics", details: "Explain a difficult Computing concept without using notes" },
        { name: "E Computing", area: "Academics", details: "Practise writing pseudocode for 30 minutes" },
        { name: "E Computing", area: "Academics", details: "Draw and label 5 different system diagrams" },
        { name: "Business Studies", area: "Academics", details: "Review the Business Report Structure" },
        { name: "Business Studies", area: "Academics", details: "Answer past papers" },
        { name: "Business Studies", area: "Academics", details: "Review study notes and then use active recall" },
        { name: "Business Studies", area: "Academics", details: "Complete 10 multiple-choice Business Studies questions" },
        { name: "Business Studies", area: "Academics", details: "Write a 10-mark Business Studies response" },
        { name: "Business Studies", area: "Academics", details: "Practise writing a Business Studies introduction" },
        { name: "Business Studies", area: "Academics", details: "Memorise 10 important Business Studies terms" },
        { name: "Business Studies", area: "Academics", details: "Use active recall to test yourself on one syllabus topic" },
        { name: "Business Studies", area: "Academics", details: "Improve a previous response using your marking criteria" },
        { name: "Business Studies", area: "Academics", details: "Complete a timed Business Studies section" },
        { name: "Business Studies", area: "Academics", details: "Create a one-page summary of a Business Studies topic" },
        { name: "SOR X", area: "Academics", details: "Spend half an hour reviewing Post-45 Content" },
        { name: "SOR X", area: "Academics", details: "Spend 1 hour reviewing Judaism Content" },
        { name: "SOR X", area: "Academics", details: "Spend 1 hour reviewing Christianity Content Content" },
        { name: "SOR X", area: "Academics", details: "Complete 10 SOR X practice questions" },
        { name: "SOR X", area: "Academics", details: "Memorise 5 important quotes or sources" },
        { name: "SOR X", area: "Academics", details: "Complete 30 minutes of active recall" },
        { name: "SOR X", area: "Academics", details: "Write a practice extended response" },
        { name: "SOR X", area: "Academics", details: "Create a summary sheet for one SOR X topic" },
        { name: "SOR X", area: "Academics", details: "Review mistakes from a previous SOR X response" },
        { name: "SOR X", area: "Academics", details: "Practise recalling key Post-45 content without notes" },
        { name: "Calisthenics", area: "Fitness", details: "Spend 10 Minutes practicing Calisthenic Form and Abilities" },
        { name: "Home Gym", area: "Fitness", details: "Complete a variation of the 'CINDY' Workout: (5 Sit ups, 10 Squats, 15 Pushups)" },
        { name: "Wood Cutting", area: "Fitness", details: "Cut some firewood with the Blockbuster if available" },
        { name: "Calisthenics", area: "Fitness", details: "Spend 15 minutes practising calisthenics technique" },
        { name: "Calisthenics", area: "Fitness", details: "Practise push-up technique for 10 minutes" },
        { name: "Calisthenics", area: "Fitness", details: "Practise squat and lunge technique for 10 minutes" },
        { name: "Calisthenics", area: "Fitness", details: "Complete a short full-body bodyweight workout" },
        { name: "Calisthenics", area: "Fitness", details: "Practise controlled bodyweight movements for 15 minutes" },
        { name: "Home Gym", area: "Fitness", details: "Complete a full-body strength session" },
        { name: "Home Gym", area: "Fitness", details: "Complete 3 sets of your chosen upper-body exercise with good form" },
        { name: "Home Gym", area: "Fitness", details: "Complete 3 sets of your chosen lower-body exercise with good form" },
        { name: "Mobility", area: "Fitness", details: "Complete 15 minutes of mobility work" },
        { name: "Cardio", area: "Fitness", details: "Complete 20 minutes of moderate cardio" },
        { name: "Recovery", area: "Fitness", details: "Complete a 10-minute recovery and mobility session" },
        { name: "Writing", area: "Creative", details: "Write 500 words on the Exotic Curse" },
        { name: "Music", area: "Creative", details: "Practise a Musical Instrument for 30 minutes" },
        { name: "Drama", area: "Creative", details: "Review lines for musicals for 30 minutes" },
        { name: "Writing", area: "Creativity", details: "Write 500 words on the Exotic Curse" },
        { name: "Writing", area: "Creativity", details: "Write 1,000 words on the Exotic Curse" },
        { name: "Writing", area: "Creativity", details: "Develop a new character for the Exotic Curse" },
        { name: "Writing", area: "Creativity", details: "Write a new scene for the Exotic Curse" },
        { name: "Writing", area: "Creativity", details: "Develop a new location in Nallarica" },
        { name: "Writing", area: "Creativity", details: "Develop a new ability for a character" },
        { name: "Writing", area: "Creativity", details: "Write 30 minutes without editing your work" },
        { name: "Writing", area: "Creativity", details: "Edit and improve 500 words of existing writing" },
        { name: "Worldbuilding", area: "Creativity", details: "Create a new piece of lore for Nallarica" },
        { name: "Worldbuilding", area: "Creativity", details: "Develop a new faction, organisation or civilisation" },
        { name: "Music", area: "Creativity", details: "Practise a musical instrument for 30 minutes" },
        { name: "Music", area: "Creativity", details: "Learn a new section of a piece of music" },
        { name: "Drama", area: "Creativity", details: "Practise musical theatre lines for 30 minutes" },
        { name: "Drama", area: "Creativity", details: "Practise acting a scene for 20 minutes" },
        { name: "JavaScript", area: "Programming", details: "Spend 30 minutes learning JavaScript Concepts" },
        { name: "HTML", area: "Programming", details: "Spend 30 minutes learning HTML Concepts" },
        { name: "CSS", area: "Programming", details: "Spend 30 minutes learning CSS Styles" },
        { name: "Python", area: "Programming", details: "Spend 30 minutes learning Python Logic" },
        { name: "Project Planning", area: "Programming", details: "Plan out future projects and concepts to be learnt" },
        { name: "JavaScript", area: "Programming", details: "Spend 30 minutes learning JavaScript variables, data types, and basic operators" },
        { name: "JavaScript", area: "Programming", details: "Build a small interactive feature using JavaScript event listeners without following a tutorial" },
        { name: "JavaScript", area: "Programming", details: "Debug a broken JavaScript program and identify exactly what caused each error" },
        { name: "Python", area: "Programming", details: "Complete 5 beginner Python problems involving variables, conditionals, and loops" },
        { name: "Python", area: "Programming", details: "Build a small Python program that takes user input and processes the information" },
        { name: "Programming", area: "Programming", details: "Solve a programming problem without using a tutorial, then explain your solution in your own words" },
        { name: "Web Development", area: "Programming", details: "Build a webpage feature that combines HTML, CSS, and JavaScript" },
        { name: "Programming", area: "Programming", details: "Learn an unfamiliar programming concept and implement it into one of your existing projects" },
        { name: "GitHub", area: "Programming", details: "Make a meaningful commit and write a clear description explaining what you changed" },
        { name: "Project Planning", area: "Programming", details: "Design the technical architecture for a new application, including its features, data, and required technologies" },

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
        if (xpValueText) xpValueText.textContent = `${currentXP}/200`;
        if (xpLevelText) xpLevelText.textContent = currentLevel;
    }

    function gainXP(amount) {
        currentXP += amount;
        while (currentXP >= 200) {
            currentXP -= 200;
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
