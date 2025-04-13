# Sacred Sexuality Quiz User Guide

## Introduction

Welcome to your Interactive Sacred Sexuality Quiz! This guide will help you understand how to use, implement, and maintain your new quiz.

## Overview

The Sacred Sexuality Quiz is an interactive web-based assessment that helps users discover their sexual archetypes and orgasmic potential. The quiz consists of two main components:

1. **Archetype Assessment**: Determines the user's dominant sexual archetype(s) across four categories:
   - Primal: Body-centered, passionate, and sensory
   - Heart: Connection-centered, emotional, and intimate
   - Mind: Thought-centered, verbal, and fantasy-driven
   - Energetic/Psychic: Energy-centered, spiritual, and transcendent

2. **Orgasmic Living Test**: Evaluates the user's orgasmic experiences and capabilities

## Files and Structure

The quiz consists of the following files:

- `index.html`: The main HTML file that users will access
- `quiz_styles.css`: Contains all styling for the quiz
- `quiz_data.js`: Contains all questions, archetype descriptions, and result categories
- `quiz_implementation.js`: Contains the core functionality of the quiz

## Implementation Guide

### Basic Implementation

To implement the quiz on your website:

1. Upload all files to your web server
2. Link to the quiz from your website (e.g., "Take our Sacred Sexuality Quiz")
3. Users can access the quiz by visiting the URL where you've uploaded the files

### Customization Options

#### Changing Colors and Styling

You can customize the look and feel of the quiz by modifying the CSS variables at the top of `quiz_styles.css`:

```css
:root {
    --primal-color: #e94f37; /* Red */
    --heart-color: #f9a7b0;  /* Pink/Rose */
    --mind-color: #8a4fff;   /* Purple */
    --energetic-color: #3066be; /* Blue */
    --background-color: #f8f5f2;
    --text-color: #333;
    --accent-color: #d4a373;
    --light-accent: #f2e9e4;
    --dark-accent: #9c6644;
    /* ... other variables ... */
}
```

#### Modifying Questions

To modify questions, edit the `quiz_data.js` file. Each section contains an array of questions:

```javascript
{
    id: "primal",
    title: "Primal Archetype",
    intro: "Now we'll explore aspects of your sexuality...",
    questions: [
        {
            text: "How important is physical attraction in a sexual encounter?",
            type: "scale",
            min: 1,
            max: 10,
            minLabel: "Not important",
            maxLabel: "Extremely important"
        },
        // More questions...
    ]
}
```

#### Changing Result Descriptions

To modify the result descriptions, edit the `archetypeDescriptions` and `orgasmicCategories` objects in `quiz_data.js`.

## Hosting Recommendations

For optimal performance and user experience, we recommend:

1. **Shared Hosting**: For small to medium traffic sites, any standard web hosting service will work fine for this quiz.

2. **Content Delivery Network (CDN)**: For high-traffic sites, consider using a CDN to serve the static files for faster loading times.

3. **SSL Certificate**: Ensure your site uses HTTPS for security, especially if you plan to collect any user data.

## Integration with Your Programs

The quiz results page includes recommendations for your tantra programs based on the user's dominant archetype and orgasmic category. To customize these recommendations:

1. Edit the `programs` array in each archetype description in `quiz_data.js`
2. Update the `displayArchetypeResults()` function in `quiz_implementation.js` if you want to change how programs are displayed

## Maintenance and Updates

### Adding New Questions

To add new questions:

1. Open `quiz_data.js`
2. Locate the appropriate section's `questions` array
3. Add a new question object following the existing format
4. Update the scoring calculations in `quiz_implementation.js` if necessary

### Updating Scoring System

If you need to modify the scoring system:

1. Update the calculation functions in `quiz_implementation.js`:
   - `calculateArchetypeScores()`
   - `calculateOrgasmicLivingScore()`
   - `determineDominantArchetype()`
   - `determineOrgasmicCategory()`

## Future Enhancement Recommendations

Consider these enhancements for future versions:

1. **User Account Integration**: Allow users to save their results by connecting to your user account system
2. **Results Sharing**: Add social media sharing capabilities
3. **Advanced Analytics**: Implement tracking to gather anonymous data on quiz results
4. **Email Integration**: Offer to send results via email
5. **Localization**: Add support for multiple languages

## Technical Support

For technical support or questions about customizing the quiz, please contact your web developer or IT support team.

## Conclusion

This interactive Sacred Sexuality Quiz provides a valuable tool for helping users discover their sexual archetypes and orgasmic potential, while also connecting them to your tantra programs. With proper implementation and occasional updates, it will serve as an engaging and informative resource for your audience.
