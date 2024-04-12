const vocabulary = {
    korea: {
        words: [
            { word: "개 (gae)", translation: "Dog", hint: "Pet" },
            { word: "고양이 (goyangi)", translation: "Cat", hint: "Feline" },
            { word: "집 (jib)", translation: "House", hint: "Shelter" },
            { word: "파란색 (paransaek)", translation: "Blue", hint: "Sky" },
            { word: "노란색 (noransaek)", translation: "Yellow", hint: "Sun" },
            { word: "빨간색 (ppalgansaek)", translation: "Red", hint: "Passion" },
            { word: "사과 (sagwa)", translation: "Apple", hint: "Teacher" },
            { word: "물 (mul)", translation: "Water", hint: "Life" },
            { word: "태양 (taeyang)", translation: "Sun", hint: "Solar" },
            { word: "달 (dal)", translation: "Moon", hint: "Satellite" },
            { word: "책 (chaek)", translation: "Book", hint: "Knowledge" },
            { word: "차 (cha)", translation: "Car", hint: "Vehicle" },
            { word: "침대 (chimdae)", translation: "Bed", hint: "Sleep" },
            { word: "기차 (gicha)", translation: "Train", hint: "Transport" },
            { word: "도시 (dosi)", translation: "City", hint: "Urban" },
            { word: "놀다 (nolda)", translation: "Play", hint: "Fun" },
            { word: "먹다 (meokda)", translation: "Eat", hint: "Food" },
            { word: "마시다 (masida)", translation: "Drink", hint: "Fluid" },
            { word: "달리다 (dallida)", translation: "Run", hint: "Sprint" },
            { word: "날다 (nalda)", translation: "Fly", hint: "Aviate" },
            { word: "사랑하다 (saranghada)", translation: "Love", hint: "Adore" },
            { word: "미워하다 (miwohada)", translation: "Hate", hint: "Detest" },
            { word: "행복하다 (haengbokhada)", translation: "Happy", hint: "Joy" },
            { word: "슬픔 (seulpeum)", translation: "Sad", hint: "Grief" },
            { word: "큰 (keun)", translation: "Tall", hint: "Height" },
            { word: "작은 (jageun)", translation: "Short", hint: "Height" },
            { word: "강하다 (ganghada)", translation: "Strong", hint: "Power" },
            { word: "약하다 (yaghada)", translation: "Weak", hint: "Strength" },
            { word: "춥다 (chupda)", translation: "Cold", hint: "Temperature" },
            { word: "덥다 (depda)", translation: "Hot", hint: "Temperature" },
            { word: "겨울 (gyeoul)", translation: "Winter", hint: "Season" },
            { word: "여름 (yeoreum)", translation: "Summer", hint: "Season" },
            { word: "봄 (bom)", translation: "Spring", hint: "Season" },
            { word: "가을 (gaeul)", translation: "Autumn", hint: "Season" },
            { word: "친구 (chingu)", translation: "Friend", hint: "Companion" },
            { word: "가족 (gajok)", translation: "Family", hint: "Relatives" },
            { word: "일 (il)", translation: "Work", hint: "Job" },
            { word: "학교 (hakgyo)", translation: "School", hint: "Education" },
            { word: "배우다 (baeuda)", translation: "Learn", hint: "Knowledge" },
            { word: "가르치다 (gareuchida)", translation: "Teach", hint: "Educate" },
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
