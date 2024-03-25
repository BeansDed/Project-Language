const vocabulary = {
    korea: {
        words: [
            { word: "개", translation: "Dog", hint: "common household pet" },
            { word: "고양이", translation: "Cat", hint: "furry and independent" },
            { word: "집", translation: "House", hint: "place where you live" },
            { word: "파란색", translation: "Blue", hint: "color of the sky" },
            { word: "노란색", translation: "Yellow", hint: "color of the sun" },
            { word: "빨간색", translation: "Red", hint: "color of passion" },
            { word: "사과", translation: "Apple", hint: "fruit often associated with teachers" },
            { word: "물", translation: "Water", hint: "essential for life" },
            { word: "태양", translation: "Sun", hint: "central to our solar system" },
            { word: "달", translation: "Moon", hint: "Earth's natural satellite" },
            { word: "책", translation: "Book", hint: "source of knowledge" },
            { word: "차", translation: "Car", hint: "personal transportation" },
            { word: "침대", translation: "Bed", hint: "where you sleep" },
            { word: "기차", translation: "Train", hint: "mode of public transportation" },
            { word: "도시", translation: "City", hint: "urban area" },
            { word: "놀다", translation: "To play", hint: "activity for fun" },
            { word: "먹다", translation: "To eat", hint: "necessary for survival" },
            { word: "마시다", translation: "To drink", hint: "necessary for hydration" },
            { word: "달리다", translation: "To run", hint: "physical activity" },
            { word: "날다", translation: "To fly", hint: "how birds move" },
            { word: "사랑하다", translation: "To love", hint: "deep affection" },
            { word: "미워하다", translation: "To hate", hint: "intense dislike" },
            { word: "행복하다", translation: "Happy", hint: "positive emotion" },
            { word: "슬픔", translation: "Sad", hint: "opposite of happy" },
            { word: "큰", translation: "Tall", hint: "height description" },
            { word: "작은", translation: "Short", hint: "opposite of tall" },
            { word: "강하다", translation: "Strong", hint: "physical strength" },
            { word: "약하다", translation: "Weak", hint: "opposite of strong" },
            { word: "춥다", translation: "Cold", hint: "low temperature" },
            { word: "덥다", translation: "Hot", hint: "high temperature" },
            { word: "겨울", translation: "Winter", hint: "coldest season" },
            { word: "여름", translation: "Summer", hint: "hottest season" },
            { word: "봄", translation: "Spring", hint: "season of blooming flowers" },
            { word: "가을", translation: "Autumn", hint: "season of falling leaves" },
            { word: "친구", translation: "Friend", hint: "close companion" },
            { word: "가족", translation: "Family", hint: "related by blood or marriage" },
            { word: "일", translation: "Work", hint: "employment or task" },
            { word: "학교", translation: "School", hint: "place of education" },
            { word: "배우다", translation: "To learn", hint: "process of acquiring knowledge" },
            { word: "가르치다", translation: "To teach", hint: "sharing knowledge with others" },
            { word: "꿈", translation: "Dream", hint: "imaginary experience during sleep" },
            { word: "현실", translation: "Reality", hint: "what actually exists" },
            { word: "시간", translation: "Hour", hint: "unit of time" },
            { word: "분", translation: "Minute", hint: "small unit of time" },
            { word: "초", translation: "Second", hint: "smallest unit of time" }
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
let currentLanguage = "korea"; // Default language

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
