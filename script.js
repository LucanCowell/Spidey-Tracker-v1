document.addEventListener("DOMContentLoaded", () => {
    // Possible Missions
    const questPool = [
    //Chemistry
    { name: "Chemistry", area: "Academics", difficulty: "Advanced", details: "Complete a Chemistry Practice Test" },
    { name: "Chemistry", area: "Academics", difficulty: "Beginner", details: "Review Chemistry Fundamentals for 30 Minutes" },
    { name: "Chemistry", area: "Academics", difficulty: "Intermediate", details: "Enathalpy and Entropy Questions for 30 Minutes" },
    { name: "Chemistry", area: "Academics", difficulty: "Intermediate", details: "Practice Balancing Complex Equations for 30 minutes" },
    { name: "Chemistry", area: "Academics", difficulty: "Beginner", details: "Complete 15 multiple-choice Chemistry questions" },
    { name: "Chemistry", area: "Academics", difficulty: "Advanced", details: "Complete 5 extended-response Chemistry questions" },
    { name: "Chemistry", area: "Academics", difficulty: "Beginner", details: "Review and memorise key Chemistry definitions for 30 minutes" },
    { name: "Chemistry", area: "Academics", difficulty: "Advanced", details: "Complete a timed Chemistry section without notes" },
    { name: "Chemistry", area: "Academics", difficulty: "Intermediate", details: "Use active recall to test yourself on a Chemistry topic" },
    { name: "Chemistry", area: "Academics", difficulty: "Intermediate", details: "Review your mistakes from a previous Chemistry test" },
    { name: "Chemistry", area: "Academics", difficulty: "Intermediate", details: "Complete 30 minutes of calculations and quantitative Chemistry questions" },
    { name: "Chemistry", area: "Academics", difficulty: "Intermediate", details: "Create a one-page summary of a difficult Chemistry topic" },
    //Math Advanced
    { name: "Math Advanced", area: "Academics", difficulty: "Advanced", details: "Complete a Practice Exam targetting weak areas" },
    { name: "Math Advanced", area: "Academics", difficulty: "Intermediate", details: "Review Key Concepts in Weakest Areas" },
    { name: "Math Advanced", area: "Academics", difficulty: "Intermediate", details: "Complete a Chapter Review" },
    { name: "Math Advanced", area: "Academics", difficulty: "Intermediate", details: "Complete 10 questions from a weak area" },
    { name: "Math Advanced", area: "Academics", difficulty: "Beginner", details: "Complete 20 minutes of timed Mathematics questions" },
    { name: "Math Advanced", area: "Academics", difficulty: "Intermediate", details: "Redo questions previously answered incorrectly" },
    { name: "Math Advanced", area: "Academics", difficulty: "Intermediate", details: "Complete a set of questions without using your notes" },
    { name: "Math Advanced", area: "Academics", difficulty: "Intermediate", details: "Create a formula sheet from memory" },
    { name: "Math Advanced", area: "Academics", difficulty: "Advanced", details: "Spend 30 minutes mastering your weakest current topic" },
    { name: "Math Advanced", area: "Academics", difficulty: "Advanced", details: "Complete 5 challenging questions and write out full solutions" },
    { name: "Math Advanced", area: "Academics", difficulty: "Advanced", details: "Analyse a previous exam and identify your 3 biggest weaknesses" },
    //Math Extension
    { name: "Math Extension", area: "Academics", difficulty: "Advanced", details: "Spend 1 hour reviwing 3D Trigonometry" },
    { name: "Math Extension", area: "Academics", difficulty: "Intermediate", details: "Spend 30 reviwing the Binomial Theorum" },
    { name: "Math Extension", area: "Academics", difficulty: "Hero", details: "Complete a Practice Test" },
    { name: "Math Extension", area: "Academics", difficulty: "Advanced", details: "Complete 10 challenging Extension questions" },
    { name: "Math Extension", area: "Academics", difficulty: "Advanced", details: "Complete 30 minutes of difficult questions without notes" },
    { name: "Math Extension", area: "Academics", difficulty: "Advanced", details: "Redo your 5 hardest previously incorrect questions" },
    { name: "Math Extension", area: "Academics", difficulty: "Intermediate", details: "Create a summary sheet for a difficult Extension topic" },
    { name: "Math Extension", area: "Academics", difficulty: "Advanced", details: "Complete a timed set of Extension questions" },
    { name: "Math Extension", area: "Academics", difficulty: "Advanced", details: "Spend 30 minutes attacking your weakest Extension topic" },
    { name: "Math Extension", area: "Academics", difficulty: "Advanced", details: "Attempt 3 difficult questions before looking at any solutions" },
    //English Advanced
    { name: "English Advanced", area: "Academics", difficulty: "Advanced", details: "Complete a Short Answer Practice Exam" },
    { name: "English Advanced", area: "Academics", difficulty: "Beginner", details: "Review Quote Flashcards and create new Flashcards to address weak areas" },
    { name: "English Advanced", area: "Academics", difficulty: "Advanced", details: "Write a draft for a 20 mark responce" },
    { name: "English Advanced", area: "Academics", difficulty: "Advanced", details: "Write a 10-mark analytical response under timed conditions" },
    { name: "English Advanced", area: "Academics", difficulty: "Beginner", details: "Memorise 5 important quotes" },
    { name: "English Advanced", area: "Academics", difficulty: "Intermediate", details: "Analyse 3 quotes and identify their techniques and effects" },
    { name: "English Advanced", area: "Academics", difficulty: "Beginner", details: "Write one strong analytical paragraph" },
    { name: "English Advanced", area: "Academics", difficulty: "Intermediate", details: "Complete a timed essay plan" },
    { name: "English Advanced", area: "Academics", difficulty: "Advanced", details: "Improve an old English response using teacher feedback" },
    { name: "English Advanced", area: "Academics", difficulty: "Intermediate", details: "Practise writing an introduction and thesis statement" },
    { name: "English Advanced", area: "Academics", difficulty: "Intermediate", details: "Complete 30 minutes of quote recall without notes" },
    //Enterprise Computing
    { name: "E Computing", area: "Academics", difficulty: "Intermediate", details: "Spend 1 Hour reviewing the Ubiquity of Interactive Media" },
    { name: "E Computing", area: "Academics", difficulty: "Intermediate", details: "Answer 10 Practice Questions across the syllabus" },
    { name: "E Computing", area: "Academics", difficulty: "Beginner", details: "Practice Drawing Network Diagrams" },
    { name: "E Computing", area: "Academics", difficulty: "Beginner", details: "Complete 15 Enterprise Computing multiple-choice questions" },
    { name: "E Computing", area: "Academics", difficulty: "Intermediate", details: "Review one weak area of the syllabus for 30 minutes" },
    { name: "E Computing", area: "Academics", difficulty: "Advanced", details: "Complete a timed section of a past paper" },
    { name: "E Computing", area: "Academics", difficulty: "Intermediate", details: "Create a summary sheet for one syllabus topic" },
    { name: "E Computing", area: "Academics", difficulty: "Advanced", details: "Explain a difficult Computing concept without using notes" },
    { name: "E Computing", area: "Academics", difficulty: "Intermediate", details: "Practise writing pseudocode for 30 minutes" },
    { name: "E Computing", area: "Academics", difficulty: "Intermediate", details: "Draw and label 5 different system diagrams" },
    //Business Studies
    { name: "Business Studies", area: "Academics", difficulty: "Beginner", details: "Review the Business Report Structure" },
    { name: "Business Studies", area: "Academics", difficulty: "Advanced", details: "Answer past papers" },
    { name: "Business Studies", area: "Academics", difficulty: "Intermediate", details: "Review study notes and then use active recall" },
    { name: "Business Studies", area: "Academics", difficulty: "Beginner", details: "Complete 10 multiple-choice Business Studies questions" },
    { name: "Business Studies", area: "Academics", difficulty: "Advanced", details: "Write a 10-mark Business Studies response" },
    { name: "Business Studies", area: "Academics", difficulty: "Beginner", details: "Practise writing a Business Studies introduction" },
    { name: "Business Studies", area: "Academics", difficulty: "Beginner", details: "Memorise 10 important Business Studies terms" },
    { name: "Business Studies", area: "Academics", difficulty: "Intermediate", details: "Use active recall to test yourself on one syllabus topic" },
    { name: "Business Studies", area: "Academics", difficulty: "Advanced", details: "Improve a previous response using your marking criteria" },
    { name: "Business Studies", area: "Academics", difficulty: "Advanced", details: "Complete a timed Business Studies section" },
    { name: "Business Studies", area: "Academics", difficulty: "Intermediate", details: "Create a one-page summary of a Business Studies topic" },
    //SOR X
    { name: "SOR X", area: "Academics", difficulty: "Intermediate", details: "Spend half an hour reviewing Post-45 Content" },
    { name: "SOR X", area: "Academics", difficulty: "Intermediate", details: "Spend 1 hour reviewing Judaism Content" },
    { name: "SOR X", area: "Academics", difficulty: "Intermediate", details: "Spend 1 hour reviewing Christianity Content Content" },
    { name: "SOR X", area: "Academics", difficulty: "Intermediate", details: "Complete 10 SOR X practice questions" },
    { name: "SOR X", area: "Academics", difficulty: "Beginner", details: "Memorise 5 important quotes or sources" },
    { name: "SOR X", area: "Academics", difficulty: "Intermediate", details: "Complete 30 minutes of active recall" },
    { name: "SOR X", area: "Academics", difficulty: "Advanced", details: "Write a practice extended response" },
    { name: "SOR X", area: "Academics", difficulty: "Intermediate", details: "Create a summary sheet for one SOR X topic" },
    { name: "SOR X", area: "Academics", difficulty: "Intermediate", details: "Review mistakes from a previous SOR X response" },
    { name: "SOR X", area: "Academics", difficulty: "Advanced", details: "Practise recalling key Post-45 content without notes" },
    //Fitness
    { name: "Calisthenics", area: "Fitness", difficulty: "Beginner", details: "Spend 10 Minutes practicing Calisthenic Form and Abilities" },
    { name: "Home Gym", area: "Fitness", difficulty: "Intermediate", details: "Complete a variation of the 'CINDY' Workout: (5 Sit ups, 10 Squats, 15 Pushups)" },
    { name: "Wood Cutting", area: "Fitness", difficulty: "Intermediate", details: "Cut some firewood with the Blockbuster if available" },
    { name: "Calisthenics", area: "Fitness", difficulty: "Beginner", details: "Spend 15 minutes practising calisthenics technique" },
    { name: "Calisthenics", area: "Fitness", difficulty: "Beginner", details: "Practise push-up technique for 10 minutes" },
    { name: "Calisthenics", area: "Fitness", difficulty: "Beginner", details: "Practise squat and lunge technique for 10 minutes" },
    { name: "Calisthenics", area: "Fitness", difficulty: "Intermediate", details: "Complete a short full-body bodyweight workout" },
    { name: "Calisthenics", area: "Fitness", difficulty: "Intermediate", details: "Practise controlled bodyweight movements for 15 minutes" },
    { name: "Home Gym", area: "Fitness", difficulty: "Intermediate", details: "Complete a full-body strength session" },
    { name: "Home Gym", area: "Fitness", difficulty: "Intermediate", details: "Complete 3 sets of your chosen upper-body exercise with good form" },
    { name: "Home Gym", area: "Fitness", difficulty: "Intermediate", details: "Complete 3 sets of your chosen lower-body exercise with good form" },
    { name: "Mobility", area: "Fitness", difficulty: "Beginner", details: "Complete 15 minutes of mobility work" },
    { name: "Cardio", area: "Fitness", difficulty: "Intermediate", details: "Complete 20 minutes of moderate cardio" },
    { name: "Recovery", area: "Fitness", difficulty: "Beginner", details: "Complete a 10-minute recovery and mobility session" },
    //Creative
    { name: "Writing", area: "Creative", difficulty: "Intermediate", details: "Write 500 words on the Exotic Curse" },
    { name: "Music", area: "Creative", difficulty: "Intermediate", details: "Practise a Musical Instrument for 30 minutes" },
    { name: "Drama", area: "Creative", difficulty: "Intermediate", details: "Review lines for musicals for 30 minutes" },
    { name: "Writing", area: "Creativity", difficulty: "Intermediate", details: "Write 500 words on the Exotic Curse" },
    { name: "Writing", area: "Creativity", difficulty: "Advanced", details: "Write 1,000 words on the Exotic Curse" },
    { name: "Writing", area: "Creativity", difficulty: "Intermediate", details: "Develop a new character for the Exotic Curse" },
    { name: "Writing", area: "Creativity", difficulty: "Advanced", details: "Write a new scene for the Exotic Curse" },
    { name: "Writing", area: "Creativity", difficulty: "Intermediate", details: "Develop a new location in Nallarica" },
    { name: "Writing", area: "Creativity", difficulty: "Intermediate", details: "Develop a new ability for a character" },
    { name: "Writing", area: "Creativity", difficulty: "Beginner", details: "Write 30 minutes without editing your work" },
    { name: "Writing", area: "Creativity", difficulty: "Intermediate", details: "Edit and improve 500 words of existing writing" },
    { name: "Worldbuilding", area: "Creativity", difficulty: "Intermediate", details: "Create a new piece of lore for Nallarica" },
    { name: "Worldbuilding", area: "Creativity", difficulty: "Advanced", details: "Develop a new faction, organisation or civilisation" },
    { name: "Music", area: "Creativity", difficulty: "Intermediate", details: "Practise a musical instrument for 30 minutes" },
    { name: "Music", area: "Creativity", difficulty: "Intermediate", details: "Learn a new section of a piece of music" },
    { name: "Drama", area: "Creativity", difficulty: "Intermediate", details: "Practise musical theatre lines for 30 minutes" },
    { name: "Drama", area: "Creativity", difficulty: "Intermediate", details: "Practise acting a scene for 20 minutes" },
    //Programming
    { name: "JavaScript", area: "Programming", difficulty: "Beginner", details: "Spend 30 minutes learning JavaScript Concepts" },
    { name: "HTML", area: "Programming", difficulty: "Beginner", details: "Spend 30 minutes learning HTML Concepts" },
    { name: "CSS", area: "Programming", difficulty: "Beginner", details: "Spend 30 minutes learning CSS Styles" },
    { name: "Python", area: "Programming", difficulty: "Beginner", details: "Spend 30 minutes learning Python Logic" },
    { name: "Project Planning", area: "Programming", difficulty: "Intermediate", details: "Plan out future projects and concepts to be learnt" },
    { name: "JavaScript", area: "Programming", difficulty: "Beginner", details: "Spend 30 minutes learning JavaScript variables, data types, and basic operators" },
    { name: "JavaScript", area: "Programming", difficulty: "Intermediate", details: "Build a small interactive feature using JavaScript event listeners without following a tutorial" },
    { name: "JavaScript", area: "Programming", difficulty: "Advanced", details: "Debug a broken JavaScript program and identify exactly what caused each error" },
    { name: "Python", area: "Programming", difficulty: "Beginner", details: "Complete 5 beginner Python problems involving variables, conditionals, and loops" },
    { name: "Python", area: "Programming", difficulty: "Intermediate", details: "Build a small Python program that takes user input and processes the information" },
    { name: "Programming", area: "Programming", difficulty: "Advanced", details: "Solve a programming problem without using a tutorial, then explain your solution in your own words" },
    { name: "Web Dev", area: "Programming", difficulty: "Intermediate", details: "Build a webpage feature that combines HTML, CSS, and JavaScript" },
    { name: "Programming", area: "Programming", difficulty: "Advanced", details: "Learn an unfamiliar programming concept and implement it into one of your existing projects" },
    { name: "GitHub", area: "Programming", difficulty: "Beginner", details: "Make a meaningful commit and write a clear description explaining what you changed" },
    { name: "Project Planning", area: "Programming", difficulty: "Advanced", details: "Design the technical architecture for a new application, including its features, data, and required technologies" },
    //Electrical Engineering
    { name: "Circuit Theory", area: "Electrical Engineering", difficulty: "Beginner", details: "Spend 30 minutes learning the fundamentals of voltage, current, and resistance" },
    { name: "Ohm's Law", area: "Electrical Engineering", difficulty: "Beginner", details: "Complete 10 Ohm's Law problems involving voltage, current, and resistance" },
    { name: "Circuits", area: "Electrical Engineering", difficulty: "Beginner", details: "Draw and label a simple series circuit containing a battery, resistor, and LED" },
    { name: "Circuits", area: "Electrical Engineering", difficulty: "Intermediate", details: "Explain the difference between series and parallel circuits and give one practical example of each" },
    { name: "Components", area: "Electrical Engineering", difficulty: "Beginner", details: "Learn how resistors, capacitors, LEDs, and switches function in a circuit" },
    { name: "Digital Logic", area: "Electrical Engineering", difficulty: "Intermediate", details: "Learn how AND, OR, NOT, and XOR logic gates work and create their truth tables" },
    { name: "Electronics", area: "Electrical Engineering", difficulty: "Intermediate", details: "Design a simple LED circuit and calculate the appropriate resistor value" },
    { name: "Microcontrollers", area: "Electrical Engineering", difficulty: "Intermediate", details: "Spend 30 minutes learning how microcontrollers interact with electronic components" },
    { name: "Circuit Analysis", area: "Electrical Engineering", difficulty: "Advanced", details: "Analyse a simple circuit and calculate the voltage across each component" },
    { name: "Engineering Project", area: "Electrical Engineering", difficulty: "Advanced", details: "Design a working low-voltage electronics project and document how the circuit will operate" },
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
                        <h2>Difficulty: ${quest.difficulty}</h2>
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
                xp: randomXP,
                difficulty: baseQuest.difficulty,
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
