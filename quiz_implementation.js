// Sacred Sexuality Quiz Implementation

// Import quiz data
// In a production environment, this would be done with proper imports
// For this prototype, we'll assume quiz_data.js is loaded before this script

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const elements = {
        // Sections
        introSection: document.getElementById('intro'),
        questionSection: document.getElementById('question-section'),
        resultsSection: document.getElementById('results'),
        
        // Navigation buttons
        startBtn: document.getElementById('start-btn'),
        backBtn: document.getElementById('back-btn'),
        nextBtn: document.getElementById('next-btn'),
        restartBtn: document.getElementById('restart-btn'),
        
        // Question elements
        sectionIntro: document.getElementById('section-intro'),
        questionContainer: document.querySelector('.question-container'),
        
        // Progress indicators
        progressFill: document.getElementById('progress-fill'),
        sectionDots: document.querySelectorAll('.section-dot'),
        
        // Results elements
        chartContainer: document.querySelector('.chart-container'),
        resultDescription: document.querySelector('.result-description'),
        recommendations: document.querySelector('.recommendations')
    };

    // Quiz state
    const quizState = {
        currentSection: 0,
        currentQuestion: 0,
        userResponses: {
            gender_identity: [],
            primal: [],
            heart: [],
            mind: [],
            energetic: [],
            orgasmic: []
        },
        results: {
            archetypes: {
                primal: 0,
                heart: 0,
                mind: 0,
                energetic: 0
            },
            orgasmicLiving: 0,
            dominantArchetype: "",
            orgasmicCategory: ""
        }
    };

    // Initialize the quiz
    function initQuiz() {
        // Set up event listeners
        setupEventListeners();
        
        // Show intro section
        showSection('intro');
    }

    // Set up event listeners
    function setupEventListeners() {
        // Start button
        elements.startBtn.addEventListener('click', function() {
            startQuiz();
        });
        
        // Back button
        elements.backBtn.addEventListener('click', function() {
            navigatePrevious();
        });
        
        // Next button
        elements.nextBtn.addEventListener('click', function() {
            navigateNext();
        });
        
        // Restart button
        elements.restartBtn.addEventListener('click', function() {
            restartQuiz();
        });
    }

    // Start the quiz
    function startQuiz() {
        quizState.currentSection = 0;
        quizState.currentQuestion = 0;
        showSection('question');
        loadQuestion();
        updateProgress();
    }

    // Load the current question
    function loadQuestion() {
        const section = quizData.sections[quizState.currentSection];
        const question = section.questions[quizState.currentQuestion];
        
        // Update section intro if first question in section
        if (quizState.currentQuestion === 0) {
            elements.sectionIntro.innerHTML = `
                <h2>${section.title}</h2>
                <p>${section.intro}</p>
            `;
        }
        
        // Clear previous question
        elements.questionContainer.innerHTML = '';
        
        // Create new question based on type
        if (question.type === 'scale') {
            createScaleQuestion(question);
        } else if (question.type === 'yesno') {
            createYesNoQuestion(question);
        } else if (question.type === 'select') {
            createSelectQuestion(question);
        }
        
        // Update navigation buttons
        updateNavigationButtons();
    }

    // Create a select question
    function createSelectQuestion(question) {
        const questionHTML = `
            <div class="question">${question.text}</div>
            <div class="select-container">
                <select class="select-input">
                    <option value="" disabled selected>Choose your answer</option>
                    ${question.options.map(option => `<option value="${option}">${option}</option>`).join('')}
                </select>
            </div>
        `;
        elements.questionContainer.innerHTML = questionHTML;
        
        // Add change event listener
        const selectInput = elements.questionContainer.querySelector('.select-input');
        selectInput.addEventListener('change', function() {
            saveAnswer();
        });
    }

    // Create a scale question
    function createScaleQuestion(question) {
        const questionHTML = `
            <div class="question">${question.text}</div>
            <div class="scale-container">
                <div class="scale-labels">
                    <span>${question.minLabel}</span>
                    <span>${question.maxLabel}</span>
                </div>
                <input type="range" min="${question.min}" max="${question.max}" value="5" class="slider" id="scale-slider">
                <div class="scale-value" id="scale-value">5</div>
            </div>
        `;
        
        elements.questionContainer.innerHTML = questionHTML;
        
        // Add event listener to slider
        const slider = document.getElementById('scale-slider');
        const value = document.getElementById('scale-value');
        
        // Set initial value from saved response if exists
        const sectionId = quizData.sections[quizState.currentSection].id;
        const savedResponse = quizState.userResponses[sectionId] && quizState.userResponses[sectionId][quizState.currentQuestion];
        if (savedResponse !== undefined) {
            slider.value = savedResponse;
            value.textContent = savedResponse;
        } else {
            // Save the default value (5) as the initial answer
            saveAnswer();
        }
        
        slider.addEventListener('input', function() {
            value.textContent = this.value;
            saveAnswer();
        });
    }

    // Create a yes/no question
    function createYesNoQuestion(question) {
        const yesLabel = question.yesLabel || "Yes";
        const noLabel = question.noLabel || "No";
        
        const questionHTML = `
            <div class="question">${question.text}</div>
            <div class="yes-no-container">
                <button class="yes-no-btn" data-value="yes">${yesLabel}</button>
                <button class="yes-no-btn" data-value="no">${noLabel}</button>
            </div>
        `;
        
        elements.questionContainer.innerHTML = questionHTML;
        
        // Add event listeners to yes/no buttons
        const yesNoButtons = document.querySelectorAll('.yes-no-btn');
        
        // Set selected button from saved response if exists
        const sectionId = quizData.sections[quizState.currentSection].id;
        const savedResponse = quizState.userResponses[sectionId][quizState.currentQuestion];
        if (savedResponse !== undefined) {
            yesNoButtons.forEach(button => {
                if (button.dataset.value === savedResponse) {
                    button.classList.add('selected');
                }
            });
        }
        
        yesNoButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove selected class from all buttons in this container
                const container = this.parentElement;
                container.querySelectorAll('.yes-no-btn').forEach(btn => {
                    btn.classList.remove('selected');
                });
                
                // Add selected class to clicked button
                this.classList.add('selected');
                
                // Save the answer and enable next button
                saveAnswer();
            });
        });
    }

    // Navigate to the next question or section
    function navigateNext() {
        const section = quizData.sections[quizState.currentSection];
        const question = section.questions[quizState.currentQuestion];
        
        // Save current answer
        saveAnswer();
        
        // Check if we have a valid answer before proceeding
        const currentAnswer = quizState.userResponses[section.id] && 
                            quizState.userResponses[section.id][quizState.currentQuestion];
        if (currentAnswer === undefined || currentAnswer === null) {
            return;
        }
        
        // Move to next question if available in current section
        if (quizState.currentQuestion < section.questions.length - 1) {
            quizState.currentQuestion++;
        }
        // Move to next section if available
        else if (quizState.currentSection < quizData.sections.length - 1) {
            quizState.currentSection++;
            quizState.currentQuestion = 0;
        }
        // Show results if quiz is complete
        else {
            calculateResults();
            showResults();
            showSection('results');
            return;
        }
        
        // Load the next question
        loadQuestion();
        updateProgress();
    }

    // Navigate to the previous question or section
    function navigatePrevious() {
        // Save current answer
        saveAnswer();
        
        // Move to previous question or section
        quizState.currentQuestion--;
        
        // If we've reached the beginning of questions in this section
        if (quizState.currentQuestion < 0) {
            quizState.currentSection--;
            
            // If we've reached the beginning of all sections
            if (quizState.currentSection < 0) {
                quizState.currentSection = 0;
                quizState.currentQuestion = 0;
                showSection('intro');
                return;
            }
            
            // Set to last question of previous section
            quizState.currentQuestion = quizData.sections[quizState.currentSection].questions.length - 1;
        }
        
        // Load the previous question
        loadQuestion();
        updateProgress();
    }

    // Save the current answer
    function saveAnswer() {
        const section = quizData.sections[quizState.currentSection];
        const question = section.questions[quizState.currentQuestion];
        let answer;
        
        if (question.type === 'scale') {
            const slider = document.getElementById('scale-slider');
            answer = parseInt(slider.value);
        } else if (question.type === 'yesno') {
            const selectedButton = document.querySelector('.yes-no-btn.selected');
            answer = selectedButton ? selectedButton.dataset.value : null;
        } else if (question.type === 'select') {
            const selectInput = document.querySelector('.select-input');
            answer = selectInput.value || null;
        }
        
        // Store the answer in userResponses
        if (answer !== null && answer !== undefined) {
            if (!quizState.userResponses[section.id]) {
                quizState.userResponses[section.id] = [];
            }
            quizState.userResponses[section.id][quizState.currentQuestion] = answer;
            updateNavigationButtons();
        }
    }

    // Update the progress indicators
    function updateProgress() {
        // Calculate total questions and current question number
        let totalQuestions = 0;
        let currentQuestionNumber = 0;
        
        quizData.sections.forEach((section, sectionIndex) => {
            if (sectionIndex < quizState.currentSection) {
                currentQuestionNumber += section.questions.length;
            } else if (sectionIndex === quizState.currentSection) {
                currentQuestionNumber += quizState.currentQuestion;
            }
            totalQuestions += section.questions.length;
        });
        
        // Update progress bar
        const progressPercentage = (currentQuestionNumber / totalQuestions) * 100;
        elements.progressFill.style.width = `${progressPercentage}%`;
        
        // Update section dots
        elements.sectionDots.forEach((dot, index) => {
            if (index <= quizState.currentSection) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Update navigation buttons based on current position
    function updateNavigationButtons() {
        const section = quizData.sections[quizState.currentSection];
        const question = section.questions[quizState.currentQuestion];
        
        // Back button visibility
        if (quizState.currentSection === 0 && quizState.currentQuestion === 0) {
            elements.backBtn.style.display = 'none';
        } else {
            elements.backBtn.style.display = 'inline-block';
        }
        
        // Next button visibility and state
        elements.nextBtn.style.display = 'inline-block';
        
        // Next button is enabled only when there's a valid answer
        const currentAnswer = quizState.userResponses[section.id] && 
                            quizState.userResponses[section.id][quizState.currentQuestion];
        elements.nextBtn.disabled = currentAnswer === undefined || currentAnswer === null;
        
        // Next button text changes on last question of last section
        if (quizState.currentSection === quizData.sections.length - 1 && 
            quizState.currentQuestion === quizData.sections[quizState.currentSection].questions.length - 1) {
            elements.nextBtn.textContent = 'See Results';
        } else {
            elements.nextBtn.textContent = 'Next';
        }
    }

    // Calculate quiz results
    function calculateResults() {
        // Calculate archetype scores
        calculateArchetypeScores();
        
        // Calculate orgasmic living score
        calculateOrgasmicLivingScore();
        
        // Determine dominant archetype
        determineDominantArchetype();
        
        // Determine orgasmic category
        determineOrgasmicCategory();
    }

    // Calculate archetype scores
    function calculateArchetypeScores() {
        // Calculate raw scores for each archetype
        const rawScores = {
            primal: calculateSectionScore('primal'),
            heart: calculateSectionScore('heart'),
            mind: calculateSectionScore('mind'),
            energetic: calculateSectionScore('energetic')
        };
        
        // Calculate maximum possible scores
        const maxScores = {
            primal: calculateMaxSectionScore('primal'),
            heart: calculateMaxSectionScore('heart'),
            mind: calculateMaxSectionScore('mind'),
            energetic: calculateMaxSectionScore('energetic')
        };
        
        // Calculate percentages
        const percentages = {
            primal: (rawScores.primal / maxScores.primal) * 100,
            heart: (rawScores.heart / maxScores.heart) * 100,
            mind: (rawScores.mind / maxScores.mind) * 100,
            energetic: (rawScores.energetic / maxScores.energetic) * 100
        };
        
        // Normalize percentages to sum to 100%
        const totalPercentage = percentages.primal + percentages.heart + percentages.mind + percentages.energetic;
        
        quizState.results.archetypes = {
            primal: Math.round((percentages.primal / totalPercentage) * 100),
            heart: Math.round((percentages.heart / totalPercentage) * 100),
            mind: Math.round((percentages.mind / totalPercentage) * 100),
            energetic: Math.round((percentages.energetic / totalPercentage) * 100)
        };
        
        // Ensure percentages sum to 100% (adjust for rounding errors)
        const sum = quizState.results.archetypes.primal + 
                   quizState.results.archetypes.heart + 
                   quizState.results.archetypes.mind + 
                   quizState.results.archetypes.energetic;
        
        if (sum !== 100) {
            // Find the highest value and adjust it
            let highest = 'primal';
            if (quizState.results.archetypes.heart > quizState.results.archetypes[highest]) highest = 'heart';
            if (quizState.results.archetypes.mind > quizState.results.archetypes[highest]) highest = 'mind';
            if (quizState.results.archetypes.energetic > quizState.results.archetypes[highest]) highest = 'energetic';
            
            quizState.results.archetypes[highest] += (100 - sum);
        }
    }

    // Calculate score for a section
    function calculateSectionScore(sectionId) {
        const sectionIndex = quizData.sections.findIndex(section => section.id === sectionId);
        const section = quizData.sections[sectionIndex];
        const responses = quizState.userResponses[sectionId];
        
        let score = 0;
        
        section.questions.forEach((question, index) => {
            const response = responses[index];
            
            if (question.type === 'scale' && response !== undefined) {
                score += parseInt(response);
            } else if (question.type === 'yesno' && response !== undefined) {
                score += (response === 'yes') ? 10 : 0;
            }
        });
        
        return score;
    }

    // Calculate maximum possible score for a section
    function calculateMaxSectionScore(sectionId) {
        const sectionIndex = quizData.sections.findIndex(section => section.id === sectionId);
        const section = quizData.sections[sectionIndex];
        
        let maxScore = 0;
        
        section.questions.forEach(question => {
            if (question.type === 'scale') {
                maxScore += question.max;
            } else if (question.type === 'yesno') {
                maxScore += 10; // Yes = 10 points
            }
        });
        
        return maxScore;
    }

    // Calculate orgasmic living score
    function calculateOrgasmicLivingScore() {
        const orgasmicSection = quizData.sections.find(section => section.id === 'orgasmic');
        const responses = quizState.userResponses.orgasmic;
        
        let yesCount = 0;
        let totalYesNoQuestions = 0;
        
        orgasmicSection.questions.forEach((question, index) => {
            const response = responses[index];
            
            if (question.type === 'yesno') {
                totalYesNoQuestions++;
                if (response === 'yes') {
                    yesCount++;
                }
            }
        });
        
        // Calculate percentage
        quizState.results.orgasmicLiving = Math.round((yesCount / totalYesNoQuestions) * 100);
    }

    // Determine dominant archetype
    function determineDominantArchetype() {
        const archetypes = quizState.results.archetypes;
        
        // Find the highest percentage
        let highest = 'primal';
        if (archetypes.heart > archetypes[highest]) highest = 'heart';
        if (archetypes.mind > archetypes[highest]) highest = 'mind';
        if (archetypes.energetic > archetypes[highest]) highest = 'energetic';
        
        quizState.results.dominantArchetype = highest;
    }

    // Determine orgasmic category
    function determineOrgasmicCategory() {
        const score = quizState.results.orgasmicLiving;
        
        for (const category of quizData.orgasmicCategories) {
            if (score >= category.range[0] && score <= category.range[1]) {
                quizState.results.orgasmicCategory = category.title;
                break;
            }
        }
    }

    // Show the results
    function showResults() {
        showSection('results');
        
        // Generate and display results
        displayArchetypeResults();
        displayOrgasmicResults();
    }

    // Display archetype results
    function displayArchetypeResults() {
        const dominantArchetype = quizState.results.dominantArchetype;
        const archetypeData = quizData.archetypeDescriptions[dominantArchetype];
        
        // Create pie chart (placeholder for now)
        elements.chartContainer.innerHTML = `
            <div style="text-align: center;">
                <h3>Your Archetype Distribution</h3>
                <div style="margin: 20px 0;">
                    <div style="display: inline-block; width: 20px; height: 20px; background-color: var(--primal-color); margin-right: 5px;"></div>
                    <span>Primal: ${quizState.results.archetypes.primal}%</span>
                </div>
                <div style="margin: 20px 0;">
                    <div style="display: inline-block; width: 20px; height: 20px; background-color: var(--heart-color); margin-right: 5px;"></div>
                    <span>Heart: ${quizState.results.archetypes.heart}%</span>
                </div>
                <div style="margin: 20px 0;">
                    <div style="display: inline-block; width: 20px; height: 20px; background-color: var(--mind-color); margin-right: 5px;"></div>
                    <span>Mind: ${quizState.results.archetypes.mind}%</span>
                </div>
                <div style="margin: 20px 0;">
                    <div style="display: inline-block; width: 20px; height: 20px; background-color: var(--energetic-color); margin-right: 5px;"></div>
                    <span>Energetic/Psychic: ${quizState.results.archetypes.energetic}%</span>
                </div>
            </div>
        `;
        
        // Display archetype description
        elements.resultDescription.innerHTML = `
            <h3>Your Dominant Archetype: ${archetypeData.title}</h3>
            <p>${archetypeData.description}</p>
            
            <h4>Strengths:</h4>
            <ul>
                ${archetypeData.strengths.map(strength => `<li>${strength}</li>`).join('')}
            </ul>
            
            <h4>Growth Areas:</h4>
            <ul>
                ${archetypeData.growthAreas.map(area => `<li>${area}</li>`).join('')}
            </ul>
        `;
        
        // Display recommendations
        const recommendationsContainer = document.querySelector('.recommendations');
        recommendationsContainer.innerHTML = `
            <h3>Personalized Recommendations</h3>
            ${archetypeData.recommendations.map(rec => `<div class="recommendation-item">${rec}</div>`).join('')}
            
            <h3>Recommended Programs</h3>
            ${archetypeData.programs.map(program => `<div class="recommendation-item">${program}</div>`).join('')}
        `;
    }

    // Display orgasmic results
    function displayOrgasmicResults() {
        const orgasmicScore = quizState.results.orgasmicLiving;
        const orgasmicCategory = quizState.results.orgasmicCategory;
        
        // Find the category data
        const categoryData = quizData.orgasmicCategories.find(cat => cat.title === orgasmicCategory);
        
        // Create a new chart container
        const orgasmicChartContainer = document.createElement('div');
        orgasmicChartContainer.className = 'chart-container';
        orgasmicChartContainer.innerHTML = `
            <div style="text-align: center;">
                <h3>Your Orgasmic Living Score: ${orgasmicScore}%</h3>
                <div style="margin: 20px auto; width: 80%; height: 30px; background-color: #eee; border-radius: 15px; overflow: hidden;">
                    <div style="height: 100%; width: ${orgasmicScore}%; background: linear-gradient(90deg, var(--accent-color), var(--dark-accent)); border-radius: 15px;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; width: 80%; margin: 0 auto; font-size: 0.8rem;">
                    <span>Beginner</span>
                    <span>Developing</span>
                    <span>Intermediate</span>
                    <span>Advanced</span>
                    <span>Master</span>
                </div>
            </div>
        `;
        
        // Insert after the first chart container
        elements.chartContainer.parentNode.insertBefore(orgasmicChartContainer, elements.chartContainer.nextSibling);
        
        // Create a new result description
        const orgasmicDescription = document.createElement('div');
        orgasmicDescription.className = 'result-description';
        orgasmicDescription.innerHTML = `
            <h3>Your Orgasmic Living Category: ${categoryData.title}</h3>
            <p>${categoryData.description}</p>
            
            <h4>Recommendations:</h4>
            <ul>
                ${categoryData.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
        `;
        
        // Insert after the first result description
        elements.resultDescription.parentNode.insertBefore(orgasmicDescription, elements.resultDescription.nextSibling);
    }

    // Show a specific section and hide others
    function showSection(sectionId) {
        elements.introSection.classList.remove('active');
        elements.questionSection.classList.remove('active');
        elements.resultsSection.classList.remove('active');
        
        if (sectionId === 'intro') {
            elements.introSection.classList.add('active');
        } else if (sectionId === 'question') {
            elements.questionSection.classList.add('active');
        } else if (sectionId === 'results') {
            elements.resultsSection.classList.add('active');
        }
    }

    // Restart the quiz
    function restartQuiz() {
        // Reset quiz state
        quizState.currentSection = 0;
        quizState.currentQuestion = 0;
        quizState.userResponses = {
            primal: [],
            heart: [],
            mind: [],
            energetic: [],
            orgasmic: []
        };
        
        // Show intro section
        showSection('intro');
    }

    // Initialize the quiz
    initQuiz();
});
