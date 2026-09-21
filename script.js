document.addEventListener("DOMContentLoaded", () => {

    
    // POSSIBLE MISSIONS
    

    const questPool = [

        
        // CHEMISTRY
        

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


        
        // MATH ADVANCED
        

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

    
        // MATH EXTENSION
    

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


        
        // ENGLISH ADVANCED
        

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


        
        // ENTERPRISE COMPUTING


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


        
        // BUSINESS STUDIES
        

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


        
        // SOR X
        

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


       
        // FITNESS
        

        { name: "Calisthenics", area: "Fitness", difficulty: "Beginner", details: "Spend 10 Minutes practicing Calisthenic Form and Abilities" },
        { name: "Home Gym", area: "Fitness", difficulty: "Intermediate", details: "Complete a variation of the 'CINDY' Workout: (5 Curls, 10 Squats, 15 Pushups)" },
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
        { name: "Calisthenics", area: "Fitness", difficulty: "Beginner", details: "Spend 15 minutes practising basic calisthenics movements with controlled form" },
        { name: "Calisthenics", area: "Fitness", difficulty: "Beginner", details: "Complete a short bodyweight mobility routine" },
        { name: "Calisthenics", area: "Fitness", difficulty: "Intermediate", details: "Complete a full-body bodyweight workout" },
        { name: "Calisthenics", area: "Fitness", difficulty: "Intermediate", details: "Complete 3 rounds of a bodyweight circuit" },
        { name: "Calisthenics", area: "Fitness", difficulty: "Advanced", details: "Complete a challenging full-body calisthenics session" },

        { name: "Home Gym", area: "Fitness", difficulty: "Beginner", details: "Complete a 20-minute strength session using available equipment" },
        { name: "Home Gym", area: "Fitness", difficulty: "Intermediate", details: "Complete 3 sets of an upper-body exercise with controlled form" },
        { name: "Home Gym", area: "Fitness", difficulty: "Intermediate", details: "Complete 3 sets of a lower-body exercise with controlled form" },
        { name: "Home Gym", area: "Fitness", difficulty: "Intermediate", details: "Complete a full-body strength session" },
        { name: "Home Gym", area: "Fitness", difficulty: "Advanced", details: "Complete a structured strength workout covering multiple muscle groups" },

        { name: "Core", area: "Fitness", difficulty: "Beginner", details: "Complete 10 minutes of core exercises" },
        { name: "Core", area: "Fitness", difficulty: "Intermediate", details: "Complete 3 rounds of a core circuit" },
        { name: "Core", area: "Fitness", difficulty: "Advanced", details: "Complete a challenging 20-minute core session with controlled technique" },

        { name: "Cardio", area: "Fitness", difficulty: "Beginner", details: "Complete 15 minutes of light cardio" },
        { name: "Cardio", area: "Fitness", difficulty: "Intermediate", details: "Complete 20 minutes of moderate cardio" },
        { name: "Cardio", area: "Fitness", difficulty: "Intermediate", details: "Complete a short interval-based cardio session" },
        { name: "Cardio", area: "Fitness", difficulty: "Advanced", details: "Complete a challenging cardio session while maintaining good technique" },

        { name: "Mobility", area: "Fitness", difficulty: "Beginner", details: "Complete 10 minutes of full-body mobility work" },
        { name: "Mobility", area: "Fitness", difficulty: "Intermediate", details: "Complete 20 minutes of mobility and flexibility work" },
        { name: "Mobility", area: "Fitness", difficulty: "Advanced", details: "Complete a structured full-body mobility session" },

        { name: "Recovery", area: "Fitness", difficulty: "Beginner", details: "Complete a 10-minute recovery and mobility session" },
        { name: "Recovery", area: "Fitness", difficulty: "Beginner", details: "Spend 15 minutes stretching and recovering after training" },
        { name: "Recovery", area: "Fitness", difficulty: "Intermediate", details: "Complete a 20-minute recovery session focusing on mobility" },

        { name: "Push", area: "Fitness", difficulty: "Beginner", details: "Practise push-up technique for 10 minutes" },
        { name: "Push", area: "Fitness", difficulty: "Intermediate", details: "Complete 3 sets of push-ups using controlled form" },
        { name: "Push", area: "Fitness", difficulty: "Advanced", details: "Complete a challenging push-focused bodyweight session" },

        { name: "Pull", area: "Fitness", difficulty: "Beginner", details: "Practise basic pulling movements for 10 minutes" },
        { name: "Pull", area: "Fitness", difficulty: "Intermediate", details: "Complete 3 sets of a suitable pulling exercise with controlled form" },
        { name: "Pull", area: "Fitness", difficulty: "Advanced", details: "Complete a challenging pull-focused workout using available equipment" },

        { name: "Legs", area: "Fitness", difficulty: "Beginner", details: "Practise squat and lunge technique for 10 minutes" },
        { name: "Legs", area: "Fitness", difficulty: "Intermediate", details: "Complete 3 sets of a chosen lower-body exercise with good form" },
        { name: "Legs", area: "Fitness", difficulty: "Advanced", details: "Complete a challenging lower-body workout using available equipment" },

        { name: "Endurance", area: "Fitness", difficulty: "Beginner", details: "Complete 15 minutes of continuous low-intensity activity" },
        { name: "Endurance", area: "Fitness", difficulty: "Intermediate", details: "Complete 30 minutes of continuous moderate activity" },
        { name: "Endurance", area: "Fitness", difficulty: "Advanced", details: "Complete a sustained endurance session while maintaining a steady pace" },

        { name: "Wood Cutting", area: "Fitness", difficulty: "Intermediate", details: "Cut some firewood with the Blockbuster if available" },
        { name: "Wood Cutting", area: "Fitness", difficulty: "Advanced", details: "Complete a longer firewood session if available and safe to do so" },

        { name: "Cindy", area: "Fitness", difficulty: "Intermediate", details: "Complete a variation of the Cindy workout using appropriate repetitions" },
        { name: "Cindy", area: "Fitness", difficulty: "Advanced", details: "Complete multiple rounds of a Cindy-style bodyweight workout at a sustainable pace" },


        
        // CREATIVITY
        

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
        { name: "Writing", area: "Creativity", difficulty: "Beginner", details: "Write 300 words on the Exotic Curse" },
        { name: "Writing", area: "Creativity", difficulty: "Intermediate", details: "Write 500 words on the Exotic Curse" },
        { name: "Writing", area: "Creativity", difficulty: "Advanced", details: "Write 1,000 words on the Exotic Curse" },
        { name: "Writing", area: "Creativity", difficulty: "Intermediate", details: "Write a new scene for the Exotic Curse" },
        { name: "Writing", area: "Creativity", difficulty: "Advanced", details: "Write a major turning point for an Exotic Curse character" },
        { name: "Writing", area: "Creativity", difficulty: "Intermediate", details: "Rewrite an old scene from a different character's perspective" },
        { name: "Writing", area: "Creativity", difficulty: "Beginner", details: "Write for 30 minutes without editing your work" },
        { name: "Writing", area: "Creativity", difficulty: "Intermediate", details: "Edit and improve 500 words of existing writing" },
        { name: "Writing", area: "Creativity", difficulty: "Advanced", details: "Rewrite a scene while significantly improving its dialogue and pacing" },
        { name: "Writing", area: "Creativity", difficulty: "Advanced", details: "Write a complete short story within one sitting" },

        { name: "Characters", area: "Creativity", difficulty: "Beginner", details: "Create a basic character profile for a new character" },
        { name: "Characters", area: "Creativity", difficulty: "Intermediate", details: "Develop a new character for the Exotic Curse" },
        { name: "Characters", area: "Creativity", difficulty: "Intermediate", details: "Create a character's personality, motivations, strengths, and weaknesses" },
        { name: "Characters", area: "Creativity", difficulty: "Advanced", details: "Design a character arc from beginning to end" },
        { name: "Characters", area: "Creativity", difficulty: "Advanced", details: "Create a complex antagonist with understandable motivations" },

        { name: "Worldbuilding", area: "Creativity", difficulty: "Beginner", details: "Develop a new location in Nallarica" },
        { name: "Worldbuilding", area: "Creativity", difficulty: "Intermediate", details: "Create a new piece of lore for Nallarica" },
        { name: "Worldbuilding", area: "Creativity", difficulty: "Intermediate", details: "Develop a new ability for a character" },
        { name: "Worldbuilding", area: "Creativity", difficulty: "Advanced", details: "Develop a new faction, organisation, or civilisation" },
        { name: "Worldbuilding", area: "Creativity", difficulty: "Advanced", details: "Create the history of an important location in Nallarica" },
        { name: "Worldbuilding", area: "Creativity", difficulty: "Advanced", details: "Develop a complete culture including its beliefs, traditions, and society" },
        { name: "Worldbuilding", area: "Creativity", difficulty: "Hero", details: "Design an entirely new region of Nallarica with its own history, geography, and civilisation" },

        { name: "Story Planning", area: "Creativity", difficulty: "Beginner", details: "Create a basic plot outline for a new story" },
        { name: "Story Planning", area: "Creativity", difficulty: "Intermediate", details: "Plan the major events of an Exotic Curse chapter" },
        { name: "Story Planning", area: "Creativity", difficulty: "Intermediate", details: "Create a three-act structure for a new story" },
        { name: "Story Planning", area: "Creativity", difficulty: "Advanced", details: "Plan an entire story arc including its beginning, climax, and ending" },
        { name: "Story Planning", area: "Creativity", difficulty: "Hero", details: "Design the complete plot structure for a new novel" },

        { name: "Music", area: "Creativity", difficulty: "Beginner", details: "Practise a musical instrument for 20 minutes" },
        { name: "Music", area: "Creativity", difficulty: "Intermediate", details: "Practise a musical instrument for 30 minutes" },
        { name: "Music", area: "Creativity", difficulty: "Intermediate", details: "Learn a new section of a piece of music" },
        { name: "Music", area: "Creativity", difficulty: "Advanced", details: "Learn and perform an entire new piece of music" },
        { name: "Music", area: "Creativity", difficulty: "Advanced", details: "Compose a short original piece of music" },

        { name: "Drama", area: "Creativity", difficulty: "Beginner", details: "Practise musical theatre lines for 20 minutes" },
        { name: "Drama", area: "Creativity", difficulty: "Intermediate", details: "Practise musical theatre lines for 30 minutes" },
        { name: "Drama", area: "Creativity", difficulty: "Intermediate", details: "Practise acting a scene for 20 minutes" },
        { name: "Drama", area: "Creativity", difficulty: "Advanced", details: "Perform a scene from memory without using your script" },
        { name: "Drama", area: "Creativity", difficulty: "Advanced", details: "Create and perform an original character monologue" },



        
        // PROGRAMMING
        

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
        { name: "JavaScript", area: "Programming", difficulty: "Beginner", details: "Practise using if statements, else statements, and comparison operators" },
        { name: "JavaScript", area: "Programming", difficulty: "Beginner", details: "Write 5 small programs using JavaScript loops" },
        { name: "JavaScript", area: "Programming", difficulty: "Beginner", details: "Create a JavaScript function that accepts inputs and returns a result" },
        { name: "JavaScript", area: "Programming", difficulty: "Intermediate", details: "Build a small calculator using JavaScript functions and event listeners" },
        { name: "JavaScript", area: "Programming", difficulty: "Intermediate", details: "Create a webpage that dynamically changes its content using JavaScript" },
        { name: "JavaScript", area: "Programming", difficulty: "Intermediate", details: "Practise working with arrays and array methods for 30 minutes" },
        { name: "JavaScript", area: "Programming", difficulty: "Intermediate", details: "Build a randomised JavaScript feature without following a tutorial" },
        { name: "JavaScript", area: "Programming", difficulty: "Advanced", details: "Build a JavaScript feature that stores and retrieves data using localStorage" },
        { name: "JavaScript", area: "Programming", difficulty: "Advanced", details: "Refactor an existing JavaScript function to make it cleaner and more efficient" },
        { name: "JavaScript", area: "Programming", difficulty: "Advanced", details: "Build a small application using multiple JavaScript functions and objects" },

        { name: "Python", area: "Programming", difficulty: "Beginner", details: "Practise Python lists, dictionaries, and sets for 30 minutes" },
        { name: "Python", area: "Programming", difficulty: "Beginner", details: "Write 5 Python programs using functions" },
        { name: "Python", area: "Programming", difficulty: "Intermediate", details: "Build a Python program that reads and processes a collection of data" },
        { name: "Python", area: "Programming", difficulty: "Intermediate", details: "Build a text-based Python game using functions and conditional logic" },
        { name: "Python", area: "Programming", difficulty: "Intermediate", details: "Write a Python program that sorts and searches through data" },
        { name: "Python", area: "Programming", difficulty: "Advanced", details: "Build a Python application that saves and loads data from a file" },
        { name: "Python", area: "Programming", difficulty: "Advanced", details: "Solve a programming challenge using an algorithm you designed yourself" },

        { name: "HTML", area: "Programming", difficulty: "Beginner", details: "Build a webpage using semantic HTML elements" },
        { name: "HTML", area: "Programming", difficulty: "Beginner", details: "Create an accessible HTML form with multiple input types" },
        { name: "HTML", area: "Programming", difficulty: "Intermediate", details: "Rebuild one of your existing webpages using cleaner semantic HTML" },

        { name: "CSS", area: "Programming", difficulty: "Beginner", details: "Practise CSS Flexbox by creating three different layouts" },
        { name: "CSS", area: "Programming", difficulty: "Beginner", details: "Practise CSS Grid by creating a responsive layout" },
        { name: "CSS", area: "Programming", difficulty: "Intermediate", details: "Make one of your existing webpages responsive for mobile screens" },
        { name: "CSS", area: "Programming", difficulty: "Intermediate", details: "Create a responsive navigation bar without following a tutorial" },
        { name: "CSS", area: "Programming", difficulty: "Advanced", details: "Build a complex responsive interface using Grid, Flexbox, and media queries" },

        { name: "Web Dev", area: "Programming", difficulty: "Beginner", details: "Build a simple webpage from scratch without using a template" },
        { name: "Web Dev", area: "Programming", difficulty: "Intermediate", details: "Build a webpage that responds to user interaction using HTML, CSS, and JavaScript" },
        { name: "Web Dev", area: "Programming", difficulty: "Intermediate", details: "Recreate a simple website interface from a screenshot" },
        { name: "Web Dev", area: "Programming", difficulty: "Advanced", details: "Build a complete interactive webpage without following a tutorial" },
        { name: "Web Dev", area: "Programming", difficulty: "Hero", details: "Build a complete web application combining HTML, CSS, JavaScript, and localStorage" },

        { name: "Debugging", area: "Programming", difficulty: "Beginner", details: "Find and fix 5 simple errors in a JavaScript program" },
        { name: "Debugging", area: "Programming", difficulty: "Intermediate", details: "Debug a program without immediately looking up the error online" },
        { name: "Debugging", area: "Programming", difficulty: "Intermediate", details: "Use browser developer tools to identify and fix a JavaScript error" },
        { name: "Debugging", area: "Programming", difficulty: "Advanced", details: "Debug a complex feature and document the cause and solution of each problem" },

        { name: "Algorithms", area: "Programming", difficulty: "Beginner", details: "Learn the basic concept of algorithms and write one in pseudocode" },
        { name: "Algorithms", area: "Programming", difficulty: "Intermediate", details: "Solve 3 programming problems using different approaches" },
        { name: "Algorithms", area: "Programming", difficulty: "Intermediate", details: "Write an algorithm for sorting a list of numbers" },
        { name: "Algorithms", area: "Programming", difficulty: "Advanced", details: "Compare two different algorithms for solving the same problem" },
        { name: "Algorithms", area: "Programming", difficulty: "Advanced", details: "Solve a difficult programming challenge without using a solution guide" },

        { name: "Data Structures", area: "Programming", difficulty: "Beginner", details: "Learn how arrays, objects, and dictionaries store data" },
        { name: "Data Structures", area: "Programming", difficulty: "Intermediate", details: "Implement a simple stack or queue in Python or JavaScript" },
        { name: "Data Structures", area: "Programming", difficulty: "Advanced", details: "Choose an appropriate data structure for a programming problem and justify your choice" },

        { name: "GitHub", area: "Programming", difficulty: "Beginner", details: "Create a new Git branch and merge it into your main branch" },
        { name: "GitHub", area: "Programming", difficulty: "Intermediate", details: "Review your GitHub repositories and improve their documentation" },
        { name: "GitHub", area: "Programming", difficulty: "Intermediate", details: "Create a professional README for one of your projects" },
        { name: "GitHub", area: "Programming", difficulty: "Advanced", details: "Create a feature branch, make multiple commits, and merge the completed feature" },

        { name: "Project Planning", area: "Programming", difficulty: "Beginner", details: "Write down the requirements for a new programming project" },
        { name: "Project Planning", area: "Programming", difficulty: "Intermediate", details: "Break a programming project into smaller features and development tasks" },
        { name: "Project Planning", area: "Programming", difficulty: "Advanced", details: "Create a complete development roadmap for a new application" },
        { name: "Project Planning", area: "Programming", difficulty: "Hero", details: "Design the architecture of a large application and explain how its systems will communicate" },

        { name: "Code Quality", area: "Programming", difficulty: "Beginner", details: "Review one of your old projects and identify 5 areas for improvement" },
        { name: "Code Quality", area: "Programming", difficulty: "Intermediate", details: "Refactor a section of your code to improve readability" },
        { name: "Code Quality", area: "Programming", difficulty: "Advanced", details: "Refactor an existing project while keeping all of its functionality working" },

        { name: "Problem Solving", area: "Programming", difficulty: "Beginner", details: "Solve 5 small programming problems without using a tutorial" },
        { name: "Problem Solving", area: "Programming", difficulty: "Intermediate", details: "Solve 3 programming problems using only documentation and your own reasoning" },
        { name: "Problem Solving", area: "Programming", difficulty: "Advanced", details: "Solve a difficult programming problem and explain your reasoning step by step" },



        
        // ELECTRICAL ENGINEERING
        

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
        { name: "Power", area: "Electrical Engineering", difficulty: "Beginner", details: "Learn how electrical power is calculated using voltage, current, and resistance" },
        { name: "Power", area: "Electrical Engineering", difficulty: "Intermediate", details: "Complete 10 electrical power and energy calculation problems" },
        { name: "Resistors", area: "Electrical Engineering", difficulty: "Beginner", details: "Learn how resistor values are represented using colour codes" },
        { name: "Resistors", area: "Electrical Engineering", difficulty: "Intermediate", details: "Calculate the equivalent resistance of series and parallel resistor networks" },
        { name: "Capacitors", area: "Electrical Engineering", difficulty: "Beginner", details: "Learn what capacitors do and identify common applications" },
        { name: "Capacitors", area: "Electrical Engineering", difficulty: "Intermediate", details: "Calculate the total capacitance of simple capacitor networks" },
        { name: "Diodes", area: "Electrical Engineering", difficulty: "Beginner", details: "Learn how a diode works and identify its purpose in a circuit" },
        { name: "Diodes", area: "Electrical Engineering", difficulty: "Intermediate", details: "Explain the difference between a standard diode, LED, and Zener diode" },
        { name: "Transistors", area: "Electrical Engineering", difficulty: "Intermediate", details: "Learn the basic function of a transistor and its three terminals" },
        { name: "Transistors", area: "Electrical Engineering", difficulty: "Advanced", details: "Explain how a transistor can be used as an electronic switch" },

        { name: "Kirchhoff's Laws", area: "Electrical Engineering", difficulty: "Intermediate", details: "Learn Kirchhoff's Current Law and Kirchhoff's Voltage Law" },
        { name: "Kirchhoff's Laws", area: "Electrical Engineering", difficulty: "Advanced", details: "Solve 5 circuit problems using Kirchhoff's Laws" },
        { name: "Circuit Analysis", area: "Electrical Engineering", difficulty: "Intermediate", details: "Calculate the current flowing through each branch of a parallel circuit" },
        { name: "Circuit Analysis", area: "Electrical Engineering", difficulty: "Advanced", details: "Analyse a multi-loop circuit and calculate unknown currents and voltages" },

        { name: "Digital Logic", area: "Electrical Engineering", difficulty: "Beginner", details: "Create truth tables for AND, OR, NOT, and XOR gates" },
        { name: "Digital Logic", area: "Electrical Engineering", difficulty: "Intermediate", details: "Combine multiple logic gates to create a simple digital logic circuit" },
        { name: "Digital Logic", area: "Electrical Engineering", difficulty: "Advanced", details: "Design a logic circuit that produces a specific output from multiple inputs" },
        { name: "Binary", area: "Electrical Engineering", difficulty: "Beginner", details: "Learn how binary numbers represent information in digital electronics" },
        { name: "Binary", area: "Electrical Engineering", difficulty: "Intermediate", details: "Convert 10 numbers between binary and decimal" },

        { name: "Microcontrollers", area: "Electrical Engineering", difficulty: "Beginner", details: "Learn the basic purpose of a microcontroller and identify its main components" },
        { name: "Microcontrollers", area: "Electrical Engineering", difficulty: "Intermediate", details: "Learn how digital input and output pins work on a microcontroller" },
        { name: "Microcontrollers", area: "Electrical Engineering", difficulty: "Intermediate", details: "Design a simple system where a sensor controls an output device" },
        { name: "Microcontrollers", area: "Electrical Engineering", difficulty: "Advanced", details: "Plan the electrical architecture for a microcontroller-based project" },

        { name: "Sensors", area: "Electrical Engineering", difficulty: "Beginner", details: "Learn how basic sensors convert physical conditions into electrical signals" },
        { name: "Sensors", area: "Electrical Engineering", difficulty: "Intermediate", details: "Research three different sensors and explain how each one works" },
        { name: "Sensors", area: "Electrical Engineering", difficulty: "Advanced", details: "Design a sensor system that detects a physical change and triggers an output" },

        { name: "Motors", area: "Electrical Engineering", difficulty: "Beginner", details: "Learn the basic differences between DC motors, servo motors, and stepper motors" },
        { name: "Motors", area: "Electrical Engineering", difficulty: "Intermediate", details: "Explain how a microcontroller can control a motor" },
        { name: "Motors", area: "Electrical Engineering", difficulty: "Advanced", details: "Design a basic motor-control system and identify the components required" },

        { name: "Soldering", area: "Electrical Engineering", difficulty: "Beginner", details: "Learn the basic principles of soldering and identify the purpose of each tool" },
        { name: "Breadboarding", area: "Electrical Engineering", difficulty: "Beginner", details: "Learn how a breadboard is internally connected" },
        { name: "Breadboarding", area: "Electrical Engineering", difficulty: "Intermediate", details: "Build a simple LED circuit on a breadboard" },
        { name: "Breadboarding", area: "Electrical Engineering", difficulty: "Advanced", details: "Build and troubleshoot a multi-component circuit on a breadboard" },

        { name: "Circuit Troubleshooting", area: "Electrical Engineering", difficulty: "Intermediate", details: "Identify possible causes of failure in a simple electronic circuit" },
        { name: "Circuit Troubleshooting", area: "Electrical Engineering", difficulty: "Advanced", details: "Diagnose a deliberately faulty circuit and identify the failed connection or component" },

        { name: "Multimeter", area: "Electrical Engineering", difficulty: "Beginner", details: "Learn what voltage, resistance, and continuity measurements tell you" },
        { name: "Multimeter", area: "Electrical Engineering", difficulty: "Intermediate", details: "Practise interpreting voltage and resistance measurements from a circuit" },
        { name: "Multimeter", area: "Electrical Engineering", difficulty: "Advanced", details: "Use systematic measurements to troubleshoot a low-voltage circuit" },

        { name: "Engineering Design", area: "Electrical Engineering", difficulty: "Intermediate", details: "Draw a schematic for a simple electronic device" },
        { name: "Engineering Design", area: "Electrical Engineering", difficulty: "Advanced", details: "Design a complete low-voltage electronic system from a set of requirements" },
        { name: "Engineering Design", area: "Electrical Engineering", difficulty: "Advanced", details: "Create a component list and electrical schematic for one of your future projects" },

        { name: "Power Systems", area: "Electrical Engineering", difficulty: "Intermediate", details: "Compare batteries, USB power, and other low-voltage power sources" },
        { name: "Power Systems", area: "Electrical Engineering", difficulty: "Advanced", details: "Calculate the approximate power requirements of a small electronic system" },

        { name: "Theory", area: "Electrical Engineering", difficulty: "Advanced", details: "Spend 1 hour studying an unfamiliar electrical engineering concept and write a summary from memory" },
        { name: "Engineering Research", area: "Electrical Engineering", difficulty: "Intermediate", details: "Research a real-world electrical engineering technology and explain how it works" },
        { name: "Engineering Research", area: "Electrical Engineering", difficulty: "Advanced", details: "Research an advanced electronics system and create a technical breakdown of its components" },

    ];


    
    // BOARD
    

    const slots = document.querySelectorAll(".mission-slot");

    let savedBoardState =
        JSON.parse(localStorage.getItem("spideyBoardState")) || {};


    
    // XP
    

    let currentLevel =
        parseInt(localStorage.getItem("spideyLevel")) || 1;

    let currentXP =
        parseInt(localStorage.getItem("spideyXP")) || 0;
    
    // SKILL STATS
    

    let skillStats =
        JSON.parse(localStorage.getItem("spideySkillStats")) || {
            Fitness: 0,
            Academics: 0,
            Creative: 0,
            Programming: 0,
            "Electrical Engineering": 0
        };


    // Skill points awarded based on difficulty

    const skillXP = {
        Beginner: 1,
        Intermediate: 2,
        Advanced: 3,
        Hero: 5
    };


    
    // DASHBOARD ELEMENTS
    

    const xpProgress =
        document.getElementById("xpProgress");

    const xpValueText =
        document.querySelector(".xpValue");

    const xpLevelText =
        document.querySelector(".xpLevel");


    
    // UPDATE XP UI
    

    function updateDashboardUI() {

        if (xpProgress) {
            xpProgress.value = currentXP;
        }

        if (xpValueText) {
            xpValueText.textContent = `${currentXP}/200`;
        }

        if (xpLevelText) {
            xpLevelText.textContent = currentLevel;
        }
    }


    
    // GAIN XP
    

    function gainXP(amount) {

        currentXP += amount;

        while (currentXP >= 200) {

            currentXP -= 200;
            currentLevel++;

        }

        localStorage.setItem(
            "spideyLevel",
            currentLevel
        );

        localStorage.setItem(
            "spideyXP",
            currentXP
        );

        updateDashboardUI();
    }


    
    // INCREASE SKILL
    

    function increaseSkill(area, difficulty) {

        if (!skillStats.hasOwnProperty(area)) {
            return;
        }

        const pointsEarned = skillXP[difficulty];

        if (!pointsEarned) {
            return;
        }

        skillStats[area] += pointsEarned;

        localStorage.setItem(
            "spideySkillStats",
            JSON.stringify(skillStats)
        );

        updateSkillUI();
    }


    
    // UPDATE SKILL UI
    

    function updateSkillUI() {

        updateStars("Fitness", "fitnessStars");

        updateStars("Academics", "academicsStars");

        updateStars("Creative", "creativeStars");

        updateStars("Programming", "programmingStars");

        updateStars(
            "Electrical Engineering",
            "electricalStars"
        );
    }


    
    // UPDATE STARS
    

    function updateStars(skill, elementId) {

        const element =
            document.getElementById(elementId);

        if (!element) {
            return;
        }

        const points = skillStats[skill] || 0;

        const stars =
            Math.min(5, Math.floor(points / 10));

        element.innerHTML = "";

        for (let i = 0; i < 5; i++) {

            const star =
                document.createElement("i");

            if (i < stars) {

                star.className =
                    "fa-solid fa-star";

            } else {

                star.className =
                    "fa-regular fa-star";

            }

            element.appendChild(star);
        }
    }


    
    // INITIAL UI UPDATE
    

    updateDashboardUI();
    updateSkillUI();


    
    // CREATE MISSION HTML
    

    function createMissionHTML(quest) {

        return `
            <div class="mission-container fade-in">

                <div class="mission-inner">

                    <!-- FRONT SIDE -->

                    <div class="mission-side mission-front">

                        <button class="flip-btn">
                            <i class="fa-solid fa-rotate"></i>
                        </button>

                        <h1>${quest.name}</h1>

                        <h2
                            class="xp-reward"
                            data-xp="${quest.xp}"
                        >
                            +${quest.xp} XP
                        </h2>

                        <h2>${quest.area}</h2>

                        <button class="accept">
                            <i class="fa-solid fa-check"></i>
                        </button>

                    </div>


                    <!-- BACK SIDE -->

                    <div class="mission-side mission-back">

                        <button class="flip-btn back-flip">
                            <i class="fa-solid fa-arrow-left"></i>
                        </button>

                        <h1>Details</h1>

                        <p>${quest.details}</p>

                        <h2>
                            Difficulty: ${quest.difficulty}
                        </h2>

                    </div>

                </div>

            </div>
        `;
    }


    
    // DEPLOY QUEST
    

    function deployQuest(slot, slotId) {

        if (!slot) {
            return;
        }

        let activeQuest;


        
        // CHECK SAVED BOARD STATE
        

        if (savedBoardState[slotId]) {

            activeQuest =
                savedBoardState[slotId];

        } else {


            
            // PREVENT DUPLICATE MISSIONS
            

            const missionsOnBoard =
                Object.values(savedBoardState)
                    .map(q => q.details);

            let availableQuests =
                questPool.filter(
                    q => !missionsOnBoard.includes(q.details)
                );


            if (availableQuests.length === 0) {

                availableQuests = questPool;

            }


            
            // RANDOM MISSION
            

            const baseQuest =
                availableQuests[
                    Math.floor(
                        Math.random() *
                        availableQuests.length
                    )
                ];


            
            // RANDOM XP BASED ON DIFFICULTY
            

            let minXP;
            let maxXP;


            switch (baseQuest.difficulty) {

                case "Beginner":

                    minXP = 10;
                    maxXP = 20;

                    break;


                case "Intermediate":

                    minXP = 20;
                    maxXP = 30;

                    break;


                case "Advanced":

                    minXP = 30;
                    maxXP = 40;

                    break;


                case "Hero":

                    minXP = 40;
                    maxXP = 50;

                    break;


                default:

                    minXP = 10;
                    maxXP = 20;

                    break;
            }


            const randomXP =
                Math.floor(
                    Math.random() *
                    (maxXP - minXP + 1)
                ) + minXP;


            
            // CREATE ACTIVE QUEST
            

            activeQuest = {

                name: baseQuest.name,

                area: baseQuest.area,

                details: baseQuest.details,

                xp: randomXP,

                difficulty: baseQuest.difficulty

            };


            
            // SAVE QUEST
            

            savedBoardState[slotId] =
                activeQuest;

            localStorage.setItem(
                "spideyBoardState",
                JSON.stringify(savedBoardState)
            );
        }


        
        // RENDER CARD
        

        slot.innerHTML =
            createMissionHTML(activeQuest);


        const container =
            slot.querySelector(
                ".mission-container"
            );

        const flipBtns =
            slot.querySelectorAll(
                ".flip-btn"
            );

        const acceptBtn =
            slot.querySelector(
                ".accept"
            );

        const xpRewardElement =
            slot.querySelector(
                ".xp-reward"
            );


        
        // CARD FLIP
        

        flipBtns.forEach(btn => {

            btn.addEventListener(
                "click",
                (event) => {

                    event.stopPropagation();

                    container.classList.toggle(
                        "is-flipped"
                    );

                }
            );

        });


        
        // COMPLETE MISSION
        

        acceptBtn.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();


                
                // GIVE XP
                

                const xpEarned =
                    parseInt(
                        xpRewardElement
                            .getAttribute("data-xp")
                    );

                gainXP(xpEarned);


                
                // INCREASE SKILL
                

                increaseSkill(
                    activeQuest.area,
                    activeQuest.difficulty
                );


                
                // FADE OUT
                

                container.classList.add(
                    "fade-out"
                );



                // REMOVE MISSION FROM STORAGE
                

                delete savedBoardState[slotId];

                localStorage.setItem(
                    "spideyBoardState",
                    JSON.stringify(savedBoardState)
                );


                
                // DEPLOY NEW MISSION
                

                setTimeout(() => {

                    slot.innerHTML = "";

                    setTimeout(() => {

                        deployQuest(
                            slot,
                            slotId
                        );

                    }, 2500);

                }, 500);

            }
        );
    }

    // DEPLOY ALL MISSIONS

    slots.forEach((slot, index) => {

        const dynamicId =
            slot.classList[1] ||
            slot.classList[0] ||
            `slot_${index}`;

        deployQuest(
            slot,
            dynamicId
        );

    });

    
// PROJECT FORM


const addProjectButton =
    document.querySelector(".addProject");

const projectModal =
    document.getElementById("projectModal");

const closeProjectForm =
    document.getElementById("closeProjectForm");

const projectForm =
    document.getElementById("projectForm");



// PROJECT STORAGE


let projects =
    JSON.parse(
        localStorage.getItem("spideyProjects")
    ) || [];



// SAVE PROJECTS


function saveProjects() {

    localStorage.setItem(
        "spideyProjects",
        JSON.stringify(projects)
    );

}



// RENDER PROJECTS

function renderProjects() {

    const container =
        document.querySelector(".projectsLoadContainer");


    // Remove old cards

    container
        .querySelectorAll(".projectCard")
        .forEach(card => card.remove());


    // Create cards from saved projects

    projects.forEach(project => {

        const projectCard =
            document.createElement("div");

        projectCard.classList.add("projectCard");


        projectCard.innerHTML = `

            <img
                src="/img/spider-logo-v1.png"
                class="projectLogo"
            >

            <h2>${project.name}</h2>

            <p>${project.description}</p>

            <p>
                <strong>Technologies:</strong>
                ${project.language}
            </p>

            <p>
                <strong>Status:</strong>
                ${project.status}
            </p>

            <div class="projectActions">
                <button class= "editProject">
                    <i class="fas fa-pen"></i>
                </button>

                <button class= "deleteProject">
                    <i class="fas fa-trash"></i>
                </button>
            </div>

        `;


        container.appendChild(projectCard);

    });

}

// EDIT BUTTON




// OPEN FORM


addProjectButton.addEventListener("click", () => {

    projectModal.classList.add("active");

});



// CLOSE FORM


closeProjectForm.addEventListener("click", () => {

    projectModal.classList.remove("active");

});



// CLOSE WHEN CLICKING OUTSIDE


projectModal.addEventListener("click", (event) => {

    if (event.target === projectModal) {

        projectModal.classList.remove("active");

    }

});



// SUBMIT FORM


projectForm.addEventListener("submit", (event) => {

    event.preventDefault();


    // Get form values

    const projectName =
        document.getElementById("projectName").value;

    const projectDescription =
        document.getElementById("projectDescription").value;

    const projectLanguage =
        document.getElementById("projectLanguage").value;

    const projectStatus =
        document.getElementById("projectStatus").value;


    // Create project object

    const newProject = {

        name: projectName,

        id: Date.now(),

        description: projectDescription,

        language: projectLanguage,

        status: projectStatus

    };


    // Add to projects array

    projects.push(newProject);


    // Save to localStorage

    saveProjects();


    // Display project

    renderProjects();


    // Close form

    projectModal.classList.remove("active");


    // Reset form

    projectForm.reset();

});



// LOAD SAVED PROJECTS


renderProjects();


    

});



// RESET LEVEL / STATS

// localStorage.clear();
// location.reload();