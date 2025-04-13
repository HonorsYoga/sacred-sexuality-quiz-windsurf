# Sacred Sexuality Quiz - Technical Documentation

## Overview

This document provides technical details about the Interactive Sacred Sexuality Quiz implementation for developers and maintainers.

## Architecture

The quiz follows a simple front-end architecture with the following components:

1. **HTML (index.html)**: Provides the structure and content containers
2. **CSS (quiz_styles.css)**: Handles all styling and responsive design
3. **Data (quiz_data.js)**: Contains all quiz content and result interpretations
4. **Implementation (quiz_implementation.js)**: Contains the core functionality and logic

## Technical Specifications

### HTML Structure

The HTML file uses semantic elements for better accessibility and SEO:
- `<header>`: Contains the quiz title
- `<section>`: Separate sections for introduction, questions, and results
- `<div>`: Used for content grouping and styling
- `<button>`: Interactive elements for navigation

### CSS Implementation

The CSS uses:
- CSS variables for easy theming and customization
- Flexbox for layout
- Media queries for responsive design
- Accessibility considerations (high contrast mode, reduced motion)
- Animations for transitions between sections

### JavaScript Architecture

The JavaScript implementation follows these principles:
- Separation of data and logic
- Event-driven programming for user interactions
- State management for tracking quiz progress
- Modular functions for specific tasks

### Data Structure

The quiz data is structured as follows:

```javascript
{
    sections: [
        {
            id: "sectionId",
            title: "Section Title",
            intro: "Section introduction text",
            questions: [
                {
                    text: "Question text",
                    type: "scale|yesno",
                    min: 1,            // For scale questions
                    max: 10,           // For scale questions
                    minLabel: "Label", // For scale questions
                    maxLabel: "Label"  // For scale questions
                },
                // More questions...
            ]
        },
        // More sections...
    ],
    
    archetypeDescriptions: {
        // Descriptions and recommendations for each archetype
    },
    
    orgasmicCategories: [
        // Categories and descriptions for orgasmic living scores
    ]
}
```

### Core Functions

Key functions in the implementation:

1. **Navigation**:
   - `startQuiz()`: Initializes the quiz
   - `navigateNext()`: Moves to the next question or section
   - `navigatePrevious()`: Moves to the previous question or section
   - `showSection()`: Displays a specific section

2. **Question Handling**:
   - `loadQuestion()`: Loads the current question
   - `createScaleQuestion()`: Creates a scale question UI
   - `createYesNoQuestion()`: Creates a yes/no question UI
   - `saveAnswer()`: Saves the user's response

3. **Scoring**:
   - `calculateResults()`: Calculates all results
   - `calculateArchetypeScores()`: Calculates archetype percentages
   - `calculateOrgasmicLivingScore()`: Calculates orgasmic living score
   - `determineDominantArchetype()`: Determines the dominant archetype
   - `determineOrgasmicCategory()`: Determines the orgasmic category

4. **Results Display**:
   - `showResults()`: Shows the results page
   - `displayArchetypeResults()`: Displays archetype results
   - `displayOrgasmicResults()`: Displays orgasmic living results

## Performance Considerations

The quiz is designed to be lightweight and performant:
- No external dependencies or libraries
- Minimal DOM manipulations
- Efficient event handling
- CSS animations optimized for performance

## Browser Compatibility

The quiz is compatible with:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Security Considerations

The quiz runs entirely client-side with no server interactions, minimizing security concerns. However, if integrating with a backend system, consider:
- Sanitizing any user inputs
- Implementing CSRF protection for form submissions
- Using HTTPS for all communications

## Accessibility

The quiz implements the following accessibility features:
- Semantic HTML structure
- Keyboard navigation support
- Sufficient color contrast
- Screen reader compatibility
- Support for reduced motion preferences
- High contrast mode support

## Extending the Quiz

### Adding New Question Types

To add a new question type:
1. Update the question data structure in `quiz_data.js`
2. Create a new function in `quiz_implementation.js` to render the question type
3. Update the `loadQuestion()` function to handle the new type
4. Update the `saveAnswer()` function to save responses for the new type
5. Update the scoring functions to handle the new type

### Modifying the Scoring System

To modify the scoring system:
1. Update the calculation functions in `quiz_implementation.js`
2. Ensure the results display functions are updated to reflect any changes

### Adding Analytics

To add analytics:
1. Create an analytics module
2. Add event tracking to key user interactions
3. Track quiz completion and results

## Deployment

The quiz can be deployed as static files on any web server. No server-side processing is required.

## Maintenance

Regular maintenance should include:
1. Updating browser compatibility as new versions are released
2. Reviewing and updating content in `quiz_data.js`
3. Testing with new devices and screen sizes
4. Updating styling to match current design trends

## Known Limitations

1. The quiz does not save progress if the user leaves the page
2. Results are not stored between sessions
3. The visualization uses simple HTML/CSS rather than a charting library

## Future Development Opportunities

1. Add local storage for saving progress
2. Implement a more sophisticated charting library for results
3. Add animation and transition effects
4. Create a backend API for storing results
5. Add user accounts and history tracking
6. Implement multilingual support
