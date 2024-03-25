const vocabulary = {
    german: {
        words: [
            { word: "Hund", translation: "Dog", hint: "common household pet" },
            { word: "Katze", translation: "Cat", hint: "furry and independent" },
            { word: "Haus", translation: "House", hint: "place where you live" },
            { word: "Blau", translation: "Blue", hint: "color of the sky" },
            { word: "Gelb", translation: "Yellow", hint: "color of the sun" },
            { word: "Rot", translation: "Red", hint: "color of passion" },
            { word: "Apfel", translation: "Apple", hint: "fruit often associated with teachers" },
            { word: "Wasser", translation: "Water", hint: "essential for life" },
            { word: "Sonne", translation: "Sun", hint: "central to our solar system" },
            { word: "Mond", translation: "Moon", hint: "Earth's natural satellite" },
            { word: "Buch", translation: "Book", hint: "source of knowledge" },
            { word: "Auto", translation: "Car", hint: "personal transportation" },
            { word: "Bett", translation: "Bed", hint: "where you sleep" },
            { word: "Zug", translation: "Train", hint: "mode of public transportation" },
            { word: "Stadt", translation: "City", hint: "urban area" },
            { word: "Spielen", translation: "To play", hint: "activity for fun" },
            { word: "Essen", translation: "To eat", hint: "necessary for survival" },
            { word: "Trinken", translation: "To drink", hint: "necessary for hydration" },
            { word: "Laufen", translation: "To run", hint: "physical activity" },
            { word: "Fliegen", translation: "To fly", hint: "how birds move" },
            { word: "Lieben", translation: "To love", hint: "deep affection" },
            { word: "Hassen", translation: "To hate", hint: "intense dislike" },
            { word: "Glücklich", translation: "Happy", hint: "positive emotion" },
            { word: "Traurig", translation: "Sad", hint: "opposite of happy" },
            { word: "Groß", translation: "Tall", hint: "height description" },
            { word: "Klein", translation: "Short", hint: "opposite of tall" },
            { word: "Stark", translation: "Strong", hint: "physical strength" },
            { word: "Schwach", translation: "Weak", hint: "opposite of strong" },
            { word: "Kalt", translation: "Cold", hint: "low temperature" },
            { word: "Heiß", translation: "Hot", hint: "high temperature" },
            { word: "Winter", translation: "Winter", hint: "coldest season" },
            { word: "Sommer", translation: "Summer", hint: "hottest season" },
            { word: "Frühling", translation: "Spring", hint: "season of blooming flowers" },
            { word: "Herbst", translation: "Autumn", hint: "season of falling leaves" },
            { word: "Freund", translation: "Friend", hint: "close companion" },
            { word: "Familie", translation: "Family", hint: "related by blood or marriage" },
            { word: "Arbeit", translation: "Work", hint: "employment or task" },
            { word: "Schule", translation: "School", hint: "place of education" },
            { word: "Lernen", translation: "To learn", hint: "process of acquiring knowledge" },
            { word: "Lehren", translation: "To teach", hint: "sharing knowledge with others" },
            { word: "Traum", translation: "Dream", hint: "imaginary experience during sleep" },
            { word: "Realität", translation: "Reality", hint: "what actually exists" },
            { word: "Stunde", translation: "Hour", hint: "unit of time" },
            { word: "Minute", translation: "Minute", hint: "small unit of time" },
            { word: "Sekunde", translation: "Second", hint: "smallest unit of time" }
        ],
        shuffle: function() {
            this.words.sort(() => Math.random() - 0.5);
        }
    },
};


Object.values(vocabulary).forEach(lang => {
    lang.shuffle();
});

let currentWordIndex = 0;
let wordsLearned = 0;
let currentLanguage = "german"; // Default language

function displayNextWord() {
    const wordElement = document.getElementById("word");
    const hintElement = document.getElementById("hint");
    const audioElement = document.getElementById("audio");

    const currentWord = vocabulary[currentLanguage].words[currentWordIndex];
    wordElement.textContent = currentWord.word;
    hintElement.textContent = "Hint: " + currentWord.hint;

    // Reset feedback and translation input
    document.getElementById("feedback").textContent = "";
    document.getElementById("translationInput").value = "";

}

// Function to check translation
function checkTranslation() {
    const userTranslation = document.getElementById("translationInput").value.trim().toLowerCase();
    const correctTranslation = vocabulary[currentLanguage].words[currentWordIndex].translation.toLowerCase();
    if (userTranslation === correctTranslation) {
        document.getElementById("feedback").textContent = "Correct!";
        wordsLearned++;
        updateProgress();

        // Increment currentWordIndex if translation is correct
        currentWordIndex = (currentWordIndex + 1) % vocabulary[currentLanguage].words.length;
        displayNextWord();
    } else {
        document.getElementById("feedback").textContent = "Incorrect. The correct translation is: " + correctTranslation;
    }
}

// Event listener for "keydown" event on the input field
document.getElementById("translationInput").addEventListener("keydown", function(event) {
    // Check if Enter key is pressed (keyCode 13) and call checkTranslation() function
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent default form submission behavior
        checkTranslation();
    }
});



function updateProgress() {
    const progressTextElement = document.getElementById("progressText");
    progressTextElement.textContent = `${wordsLearned} / ${vocabulary[currentLanguage].words.length} words learned`;
}

// Event listener for next word button
document.getElementById("nextWordButton").addEventListener("click", function() {
    currentWordIndex = (currentWordIndex + 1) % vocabulary[currentLanguage].words.length;
    displayNextWord();
});

// Event listener for check translation button
document.getElementById("checkTranslationButton").addEventListener("click", checkTranslation);

// Event listener for language selection
document.getElementById("languageSelect").addEventListener("change", function(event) {
    currentLanguage = event.target.value;
    currentWordIndex = 0; // Reset the word index when language changes
    displayNextWord();
    updateProgress();
});

// Initial display
displayNextWord();
updateProgress();
