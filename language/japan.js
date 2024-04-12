const vocabulary = {
    japan: {
        words: [
            { word: "いぬ (inu)", translation: "Dog", hint: "common household pet" },
            { word: "ねこ (neko)", translation: "Cat", hint: "furry and independent" },
            { word: "いえ (ie)", translation: "House", hint: "place where you live" },
            { word: "あお (ao)", translation: "Blue", hint: "color of the sky" },
            { word: "きいろ (kiiro)", translation: "Yellow", hint: "color of the sun" },
            { word: "あか (aka)", translation: "Red", hint: "color of passion" },
            { word: "りんご (ringo)", translation: "Apple", hint: "fruit often associated with teachers" },
            { word: "みず (mizu)", translation: "Water", hint: "essential for life" },
            { word: "たいよう (taiyou)", translation: "Sun", hint: "central to our solar system" },
            { word: "つき (tsuki)", translation: "Moon", hint: "Earth's natural satellite" },
            { word: "ほん (hon)", translation: "Book", hint: "source of knowledge" },
            { word: "くるま (kuruma)", translation: "Car", hint: "personal transportation" },
            { word: "べっど (beddo)", translation: "Bed", hint: "where you sleep" },
            { word: "でんしゃ (densha)", translation: "Train", hint: "mode of public transportation" },
            { word: "とし (toshi)", translation: "City", hint: "urban area" },
            { word: "あそぶ (asobu)", translation: "To play", hint: "activity for fun" },
            { word: "たべる (taberu)", translation: "To eat", hint: "necessary for survival" },
            { word: "のむ (nomu)", translation: "To drink", hint: "necessary for hydration" },
            { word: "はしる (hashiru)", translation: "To run", hint: "physical activity" },
            { word: "とぶ (tobu)", translation: "To fly", hint: "how birds move" },
            { word: "あいする (aisuru)", translation: "To love", hint: "deep affection" },
            { word: "きらう (kirau)", translation: "To hate", hint: "intense dislike" },
            { word: "しあわせ (shiawase)", translation: "Happy", hint: "positive emotion" },
            { word: "かなしい (kanashii)", translation: "Sad", hint: "opposite of happy" },
            { word: "たかい (takai)", translation: "Tall", hint: "height description" },
            { word: "ひくい (hikui)", translation: "Short", hint: "opposite of tall" },
            { word: "つよい (tsuyoi)", translation: "Strong", hint: "physical strength" },
            { word: "よわい (yowai)", translation: "Weak", hint: "opposite of strong" },
            { word: "さむい (samui)", translation: "Cold", hint: "low temperature" },
            { word: "あつい (atsui)", translation: "Hot", hint: "high temperature" },
            { word: "ふゆ (fuyu)", translation: "Winter", hint: "coldest season" },
            { word: "なつ (natsu)", translation: "Summer", hint: "hottest season" },
            { word: "はる (haru)", translation: "Spring", hint: "season of blooming flowers" },
            { word: "あき (aki)", translation: "Autumn", hint: "season of falling leaves" },
            { word: "ともだち (tomodachi)", translation: "Friend", hint: "close companion" },
            { word: "かぞく (kazoku)", translation: "Family", hint: "related by blood or marriage" },
            { word: "しごと (shigoto)", translation: "Work", hint: "employment or task" },
            { word: "がっこう (gakkou)", translation: "School", hint: "place of education" },
            { word: "まなぶ (manabu)", translation: "To learn", hint: "process of acquiring knowledge" },
            { word: "おしえる (oshieru)", translation: "To teach", hint: "sharing knowledge with others" },
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
let currentLanguage = "japan"; // Default language

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
