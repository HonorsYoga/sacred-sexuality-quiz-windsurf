// Sacred Sexuality Quiz Data

const quizData = {
    // Quiz sections with questions
    sections: [
        {
            id: "gender_identity",
            title: "Gender Identity",
            intro: "Before we begin, please tell us about your gender identity.",
            questions: [
                {
                    text: "What is your gender identity?",
                    type: "select",
                    options: [
                        "Male",
                        "Female",
                        "Non-binary",
                        "Transgender",
                        "Other",
                        "Prefer not to say"
                    ]
                }
            ]
        },
        {
            id: "primal",
            title: "🔥 Primal Archetype 🔥",
            intro: "Now we'll explore aspects of your sexuality related to physical sensations, attraction, and primal desires. These questions help identify your connection to the Primal archetype.",
            questions: [
                {
                    text: "How important is physical attraction in a sexual encounter?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Extremely important"
                },
                {
                    text: "How interested are you in having a dominant partner?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not interested",
                    maxLabel: "Very interested"
                },
                {
                    text: "How interested are you in having a submissive partner?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not interested",
                    maxLabel: "Very interested"
                },
                {
                    text: "How much does your partner's physical body correlate to a passionate fiery sexual experience?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not at all",
                    maxLabel: "Very much"
                },
                {
                    text: "How important is having a highly physically skilled partner?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "Rate the importance of feeling physical chemistry with a partner prior to engaging with them sexually.",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How important is the smell of your partner during intimacy?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How important is maintaining good sexual chemistry with your partner(s)?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How important is it to keep your sex life spicy (trying new positions, incorporating BDSM, etc.)?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How important is it for your partner(s) to express strong feminine/masculine qualities?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "Do you enjoy spanking?",
                    type: "yesno"
                },
                {
                    text: "Do you enjoy blindfolds?",
                    type: "yesno"
                },
                {
                    text: "Do you enjoy handcuffs?",
                    type: "yesno"
                },
                {
                    text: "Are you turned on by moans and sounds during sex?",
                    type: "yesno"
                },
                {
                    text: "Do you like dirty talk?",
                    type: "yesno"
                },
                {
                    text: "Do you like your partner(s) to be rough (i.e., biting, scratching, hair pulling, etc.)?",
                    type: "yesno"
                },
                {
                    text: "Would you have sex with someone you're not physically attracted to?",
                    type: "yesno"
                },
                {
                    text: "If you had sex with someone not physically attractive to you but the sex was amazing, would you have sex with them again?",
                    type: "yesno"
                }
            ]
        },
        {
            id: "heart",
            title: "❤️ Heart Archetype ❤️",
            intro: "Let's shift focus to the emotional and connection aspects of your sexuality. These questions help identify your connection to the Heart archetype.",
            questions: [
                {
                    text: "How important is safe space during intimate encounters?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How important is the energy of love during the sexual encounter?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How important is intimacy and vulnerability?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How comfortable are you to openly express your sexual desires with your partner?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not comfortable",
                    maxLabel: "Very comfortable"
                },
                {
                    text: "How comfortable are you to be honest about your sexual desires with yourself?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not comfortable",
                    maxLabel: "Very comfortable"
                },
                {
                    text: "How important is knowing/understanding your partner's traumas prior to engaging with them sexually?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How important is it that you are friends with the person you are being intimate with?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "On a scale from 1 to 10, how well do you receive constructive sexual criticism?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not well",
                    maxLabel: "Very well"
                },
                {
                    text: "How important is it for you to create a safe environment for open and honest communication between yourself and your partner(s)?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How important is emotional intelligence in a sexual partner?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "Do you feel emotionally present/expressive during sex?",
                    type: "yesno"
                },
                {
                    text: "Do you stare into the other person's eyes during sex?",
                    type: "yesno"
                },
                {
                    text: "Do you want someone that will stare in your eyes during sex?",
                    type: "yesno"
                },
                {
                    text: "Have you ever had a cry-gasm?",
                    type: "yesno"
                },
                {
                    text: "Would you lose attraction if someone cried during sex?",
                    type: "yesno"
                },
                {
                    text: "Do you enjoy intimate foreplay?",
                    type: "yesno"
                },
                {
                    text: "Are you turned on by deeply personal conversations?",
                    type: "yesno"
                },
                {
                    text: "Do you feel being in love makes the sexual experience better?",
                    type: "yesno"
                }
            ]
        },
        {
            id: "mind",
            title: "🧠 Mind Archetype 🧠",
            intro: "Now we'll explore the mental and intellectual dimensions of your sexuality. These questions help identify your connection to the Mind archetype.",
            questions: [
                {
                    text: "How often do you fantasize about possible sexual experiences?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Rarely",
                    maxLabel: "Very often"
                },
                {
                    text: "How important is intelligence in a sexual partner?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How often do you learn things from porn and try them in the bedroom?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Never",
                    maxLabel: "Very often"
                },
                {
                    text: "How often do you use visualization to enhance your experience during sex?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Never",
                    maxLabel: "Very often"
                },
                {
                    text: "How important is verbal feedback from your partner during sex?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How often do you use orgasm as a space for manifestation?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Never",
                    maxLabel: "Very often"
                },
                {
                    text: "How important is it to be present in the moment during sex?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How often do you feel disconnected from your body during sex?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Never",
                    maxLabel: "Very often"
                },
                {
                    text: "How often do you spend too much time in your head during sex?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Never",
                    maxLabel: "Very often"
                },
                {
                    text: "How important is exploring your sexual fantasies during intimacy?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "Are you a sapiosexual? (turned on by the way someone's mind works)",
                    type: "yesno"
                },
                {
                    text: "Is lack of intelligence a turn off?",
                    type: "yesno"
                },
                {
                    text: "Do you enjoy exploring your partner's sexual fantasies during intimacy?",
                    type: "yesno"
                },
                {
                    text: "Do you tend to be attracted to intellectuals?",
                    type: "yesno"
                },
                {
                    text: "Do you like phone sex?",
                    type: "yesno"
                },
                {
                    text: "Are you an over-thinker?",
                    type: "yesno"
                },
                {
                    text: "Have you ever thought of a different person while having sex?",
                    type: "yesno"
                },
                {
                    text: "Do you use mental skills as a primary form of sexual engagement?",
                    type: "yesno"
                }
            ]
        },
        {
            id: "energetic",
            title: "✨ Energetic/Psychic Archetype ✨",
            intro: "Let's explore the energetic and spiritual dimensions of your sexuality. These questions help identify your connection to the Energetic/Psychic archetype.",
            questions: [
                {
                    text: "How important is music to your bedroom experience?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How important are mood enhancers (candles, lights, fragrances) during sex?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How important is location during sex?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "Does time of day affect the sexual experience?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not at all",
                    maxLabel: "Very much"
                },
                {
                    text: "How easily do you get in the mood?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Very difficult",
                    maxLabel: "Very easy"
                },
                {
                    text: "How often do you feel drained after a sexual encounter?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Never",
                    maxLabel: "Always"
                },
                {
                    text: "How much physical stamina do you have during sex?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Very little",
                    maxLabel: "Very much"
                },
                {
                    text: "How much do you experience the other person's energy still being merged with yours after sex is over?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not at all",
                    maxLabel: "Very much"
                },
                {
                    text: "How important is it to use sexual energy for spiritual growth?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "How important is it to use sexual energy you have cultivated to be creative, manifest, or heal?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Not important",
                    maxLabel: "Very important"
                },
                {
                    text: "Do you experience energetic orgasms during sex?",
                    type: "yesno"
                },
                {
                    text: "Are you turned by a person's aura?",
                    type: "yesno"
                },
                {
                    text: "Do you enjoy having astral sex?",
                    type: "yesno"
                },
                {
                    text: "Have you ever had sex during dreams?",
                    type: "yesno"
                },
                {
                    text: "Do you gain or lose energy during the sexual experience?",
                    type: "yesno",
                    yesLabel: "Gain",
                    noLabel: "Lose"
                },
                {
                    text: "Do you practice semen retention?",
                    type: "yesno"
                },
                {
                    text: "Do you consciously circulate sexual energy throughout your body during sex?",
                    type: "yesno"
                },
                {
                    text: "Do you consciously circulate sexual energy between you and your partner during sex?",
                    type: "yesno"
                },
                {
                    text: "Do you experience becoming one with a person during sex?",
                    type: "yesno"
                },
                {
                    text: "Do you enjoy having sex in front of a mirror?",
                    type: "yesno"
                }
            ]
        },
        {
            id: "orgasmic",
            title: "🌟 Orgasmic Living Test 💫",
            intro: "Now we'll explore your orgasmic experiences. This section helps assess your orgasmic potential and diversity of experiences.",
            questions: [
                {
                    text: "Have you experienced extended orgasmic states (2 mins or more)?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced multiple orgasms?",
                    type: "yesno"
                },
                {
                    text: "Have you used orgasmic energy for healing?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced non-sexual orgasmic experiences (nature, food, sensory)?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced spiritual orgasms (thought/breath, conscious, meditative)?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced dream-gasms?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced vaginal orgasms?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced chakra orgasms?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced full body orgasms?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced throat orgasms?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced anal orgasms?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced G-spot orgasms/squirting?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced cervical orgasms?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced orgasms from body organs other than genitals?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced breast orgasms?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced cry-gasms during sex?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced laugh-gasms during sex?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced valley orgasms?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced music-gasms?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced birth-gasms?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced pain-gasms?",
                    type: "yesno"
                },
                {
                    text: "Have you experienced self-induced sexual orgasms?",
                    type: "yesno"
                },
                {
                    text: "Rate your orgasmic ease during sex",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Very difficult",
                    maxLabel: "Very easy"
                },
                {
                    text: "How long do you usually take before orgasm?",
                    type: "scale",
                    min: 1,
                    max: 10,
                    minLabel: "Under 5 mins",
                    maxLabel: "Over an hour"
                }
            ]
        }
    ],
    
    // Archetype descriptions for results
    archetypeDescriptions: {
        primal: {
            title: "Primal Archetype",
            description: "You are primarily driven by physical sensations, passion, and primal desires in your sexuality. The body and its pleasures are central to your sexual experience. You value physical attraction, sensory stimulation, and the raw power of sexual energy.",
            strengths: [
                "Strong connection to physical pleasure and bodily sensations",
                "Passionate and intense sexual experiences",
                "Clear about physical desires and boundaries",
                "Appreciation for the sensory aspects of sexuality"
            ],
            growthAreas: [
                "Developing deeper emotional connections during intimacy",
                "Exploring the mental and spiritual dimensions of sexuality",
                "Finding balance between physical desires and other aspects of sexuality"
            ],
            recommendations: [
                "Explore tantric practices that honor physical pleasure while expanding awareness",
                "Experiment with conscious sensory experiences (mindful touch, breath work)",
                "Consider how physical passion can be a gateway to deeper connection"
            ],
            programs: [
                "Tantra for Couples: Passionate Connection",
                "Embodied Sexuality Workshops",
                "Sacred Sexuality Foundations (with focus on body practices)"
            ]
        },
        heart: {
            title: "Heart Archetype",
            description: "Your sexuality is primarily centered around emotional connection, intimacy, and vulnerability. Love and relationship are essential components of your sexual expression. You value safety, trust, and emotional resonance in your intimate encounters.",
            strengths: [
                "Deep capacity for emotional intimacy and connection",
                "Ability to create safe, nurturing spaces for vulnerability",
                "Strong empathy and attunement to partners",
                "Integration of love and sexuality"
            ],
            growthAreas: [
                "Embracing raw passion and primal desires",
                "Developing comfort with sexual expression outside of emotional contexts",
                "Finding balance between giving and receiving"
            ],
            recommendations: [
                "Explore practices that balance heart-centered connection with physical passion",
                "Experiment with expressing desires and boundaries more directly",
                "Consider how emotional intimacy can enhance rather than replace physical pleasure"
            ],
            programs: [
                "Tantra for Couples: Deepening Intimacy",
                "Heart-Centered Sexuality Workshops",
                "Sacred Sexuality Foundations (with focus on emotional practices)"
            ]
        },
        mind: {
            title: "Mind Archetype",
            description: "Your sexuality is primarily intellectual and fantasy-driven. The mental aspects of sex—imagination, fantasies, verbal expression—are central to your experience. You value mental stimulation, creative exploration, and conscious awareness in your sexuality.",
            strengths: [
                "Rich fantasy life and creative sexual imagination",
                "Ability to articulate desires and boundaries",
                "Appreciation for the intellectual aspects of sexuality",
                "Conscious awareness during intimate encounters"
            ],
            growthAreas: [
                "Developing deeper embodiment and physical presence",
                "Balancing thinking with feeling and sensing",
                "Letting go of overthinking during intimate encounters"
            ],
            recommendations: [
                "Explore practices that help ground mental energy in the body",
                "Experiment with mindfulness techniques during intimacy",
                "Consider how intellectual exploration can enhance rather than replace physical and emotional connection"
            ],
            programs: [
                "Conscious Sexuality Workshops",
                "Tantra Philosophy and Practice",
                "Sacred Sexuality Foundations (with focus on awareness practices)"
            ]
        },
        energetic: {
            title: "Energetic/Psychic Archetype",
            description: "Your sexuality is primarily spiritual and energetic in nature. You experience sex as an energy exchange and potentially transcendent experience. You value the subtle, energetic dimensions of sexuality and its connection to spiritual growth.",
            strengths: [
                "Awareness of subtle energies and their movement",
                "Capacity for transcendent sexual experiences",
                "Integration of sexuality and spirituality",
                "Ability to channel sexual energy for healing and transformation"
            ],
            growthAreas: [
                "Grounding spiritual experiences in the physical body",
                "Balancing transcendent aspects with emotional connection",
                "Avoiding spiritual bypassing of physical or emotional aspects"
            ],
            recommendations: [
                "Explore practices that balance spiritual awareness with embodiment",
                "Experiment with conscious energy circulation techniques",
                "Consider how energetic awareness can enhance rather than replace physical and emotional dimensions"
            ],
            programs: [
                "Advanced Tantra Practices",
                "Energy Circulation Workshops",
                "Sacred Sexuality Foundations (with focus on spiritual practices)"
            ]
        }
    },
    
    // Orgasmic Living categories for results
    orgasmicCategories: [
        {
            title: "Beginner Orgasmic Explorer",
            range: [0, 20],
            description: "You're at the beginning of your orgasmic journey. Your experiences have been primarily focused on conventional forms of orgasm, if any. There's a vast world of orgasmic potential waiting for you to discover.",
            recommendations: [
                "Focus on self-pleasure and self-discovery without pressure",
                "Explore basic breath work and body awareness practices",
                "Learn about different types of orgasms through reading and education"
            ]
        },
        {
            title: "Developing Orgasmic Awareness",
            range: [21, 40],
            description: "You've begun to explore beyond conventional orgasmic experiences. You're developing awareness of your body's potential for pleasure and may have experienced a few different types of orgasms.",
            recommendations: [
                "Experiment with different forms of stimulation and orgasmic experiences",
                "Practice conscious breathing during sexual experiences",
                "Explore tantric techniques for expanding orgasmic potential"
            ]
        },
        {
            title: "Intermediate Orgasmic Adventurer",
            range: [41, 60],
            description: "You have a good understanding of your orgasmic potential and have experienced several different types of orgasms. You're comfortable exploring new dimensions of pleasure and are open to expanding further.",
            recommendations: [
                "Deepen practices that have been successful for you",
                "Explore energy circulation techniques during orgasm",
                "Consider how emotional and spiritual dimensions can enhance orgasmic experiences"
            ]
        },
        {
            title: "Advanced Orgasmic Practitioner",
            range: [61, 80],
            description: "You have extensive experience with various types of orgasms and understand how to create diverse orgasmic experiences. You likely have practices that help you access different orgasmic states.",
            recommendations: [
                "Refine your ability to direct orgasmic energy for specific purposes",
                "Explore the healing and transformative potential of orgasmic energy",
                "Consider sharing your knowledge with partners or communities"
            ]
        },
        {
            title: "Master Orgasmic Being",
            range: [81, 100],
            description: "You have mastered multiple dimensions of orgasmic experience and can access diverse orgasmic states with relative ease. Your orgasmic experiences likely extend beyond the sexual realm into spiritual and energetic dimensions.",
            recommendations: [
                "Focus on integration of orgasmic wisdom into all aspects of life",
                "Explore the most subtle and transcendent forms of orgasmic experience",
                "Consider how your orgasmic mastery can contribute to healing and awakening"
            ]
        }
    ]
};
