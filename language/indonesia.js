const vocabulary = {
    indonesia: {
        words: [
            { word: "pulau", translation: "island", hint: "land surrounded by water", audio: "../indonesia/island.mp3" },
            { word: "rumah", translation: "house", hint: "human dwelling place", audio: "../indonesia/house.mp3" },
            { word: "pohon", translation: "tree", hint: "plant with branches and leaves", audio: "../indonesia/tree.mp3" },
            { word: "biru", translation: "blue", hint: "color of the sky", audio: "../indonesia/blue.mp3" },
            { word: "kuning", translation: "yellow", hint: "color of the sun", audio: "../indonesia/yellow.mp3" },
            { word: "merah", translation: "red", hint: "color of passion", audio: "../indonesia/red.mp3" },
            { word: "hidup", translation: "life", hint: "existence with emotions and actions", audio: "../indonesia/life.mp3" },
            { word: "air", translation: "water", hint: "basic human need", audio: "../indonesia/water.mp3" },
            { word: "matahari", translation: "sun", hint: "source of light and heat on Earth", audio: "../indonesia/sun.mp3" },
            { word: "bulan", translation: "moon", hint: "source of light at night, changes shape", audio: "../indonesia/moon.mp3" },
            { word: "bintang", translation: "star", hint: "visible in the sky, symbol of hope", audio: "../indonesia/star.mp3" },
            { word: "langit", translation: "sky", hint: "where clouds and stars are seen in the atmosphere", audio: "../indonesia/sky.mp3" },
            { word: "tanah", translation: "land", hint: "physical world we inhabit", audio: "../indonesia/land.mp3" },
            { word: "tanaman", translation: "plant", hint: "has leaves, flowers, and stems", audio: "../indonesia/plant.mp3" },
            { word: "hewan", translation: "animal", hint: "natural beings", audio: "../indonesia/animal.mp3" },
            { word: "rumah", translation: "home", hint: "where a family resides", audio: "../indonesia/home.mp3" },
            { word: "surga", translation: "heaven", hint: "abode of the divine and God", audio: "../indonesia/heaven.mp3" },
            { word: "laut", translation: "sea", hint: "vast area of water", audio: "../indonesia/sea.mp3" },
            { word: "burung", translation: "bird", hint: "has wings, flies quickly", audio: "../indonesia/bird.mp3" },
            { word: "alam semesta", translation: "universe", hint: "everything that exists", audio: "../indonesia/universe.mp3" },
            { word: "timur", translation: "east", hint: "direction where the sun rises", audio: "../indonesia/east.mp3" },
            { word: "barat", translation: "west", hint: "direction where the sun sets", audio: "../indonesia/west.mp3" },
            { word: "tengah malam", translation: "midnight", hint: "quiet time of night", audio: "../indonesia/midnight.mp3" },
            { word: "tengah hari", translation: "noon", hint: "lunchtime, moderate temperature", audio: "../indonesia/noon.mp3" },
            { word: "malam", translation: "night", hint: "dark time, time to rest", audio: "../indonesia/night.mp3" },
            { word: "pagi", translation: "morning", hint: "time of dawn", audio: "../indonesia/morning.mp3" },
            { word: "cuaca", translation: "weather", hint: "atmospheric conditions in a location", audio: "../indonesia/weather.mp3" },
            { word: "hujan", translation: "rain", hint: "water falling from the sky", audio: "../indonesia/rain.mp3" },
            { word: "panas", translation: "heat", hint: "perception of temperature", audio: "../indonesia/heat.mp3" },
            { word: "dingin", translation: "cold", hint: "common temperature in winter", audio: "../indonesia/cold.mp3" },
            { word: "angin", translation: "wind", hint: "movement of air", audio: "../indonesia/wind.mp3" },
            { word: "hujan", translation: "rain", hint: "water falling from the sky", audio: "../indonesia/rain.mp3" },
            { word: "petir", translation: "lightning", hint: "spark in the sky", audio: "../indonesia/lightning.mp3" },
            { word: "guntur", translation: "thunder", hint: "loud sound accompanying lightning", audio: "../indonesia/thunder.mp3" },
            { word: "badai", translation: "storm", hint: "strong wind and rainfall", audio: "../indonesia/storm.mp3" },
            { word: "siang", translation: "day", hint: "sunny time", audio: "../indonesia/day.mp3" },
            { word: "sore", translation: "evening", hint: "time before nightfall", audio: "../indonesia/evening.mp3" },
            { word: "musim dingin", translation: "winter", hint: "cold season", audio: "../indonesia/winter.mp3" },
            { word: "musim panas", translation: "summer", hint: "hot season", audio: "../indonesia/summer.mp3" },
            { word: "musim hujan", translation: "rainy season", hint: "season with heavy rainfall", audio: "../indonesia/rainy_season.mp3" }
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
let currentLanguage = "indonesia"; // Default language

// Function to toggle language between English and Japanese
function toggleLanguage() {
    const languageButton = document.querySelector('.spain');
    const wordElement = document.getElementById("word");
    const hintElement = document.getElementById("hint");
    const audioButton = document.getElementById("audioButton"); // Corrected identification
    const languageSelect = document.getElementById("languageSelect");

    if (languageButton.textContent === 'Change Language') {
        languageButton.textContent = 'Change Back';
        wordElement.textContent = "こんにちは (Konnichiwa)";
        hintElement.textContent = "Japanese greeting";
        audioButton.textContent = "発音する"; // Change text to Japanese
        languageSelect.value = "japan"; // Set language select to Japanese
    } else {
        languageButton.textContent = 'Change Language';
        wordElement.textContent = 'Click "Next Word" to Start';
        hintElement.textContent = '';
        audioButton.textContent = 'Pronounce'; // Change text back to English
        languageSelect.value = ""; // Reset language select
    }
}

// Event listener for audio button
document.getElementById("audioButton").addEventListener("click", playAudio);


function displayNextWord() {
    const wordElement = document.getElementById("word");
    const hintElement = document.getElementById("hint");
    const audioElement = document.getElementById("audio");

    const currentWord = vocabulary[currentLanguage].words[currentWordIndex];
    wordElement.textContent = currentWord.word;
    hintElement.textContent = "Hint: " + currentWord.hint;
    audioElement.src = currentWord.audio; // Corrected audio source

    // Reset feedback and translation input
    document.getElementById("feedback").textContent = "";
    document.getElementById("translationInput").value = "";
}

// Function to play audio
function playAudio() {
    const audioElement = document.getElementById("audio");
    audioElement.play();
}

// Event listener for audio button
document.getElementById("audio").addEventListener("click", playAudio);


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
