const vocabulary = {
    chinese: {
        words: [
            { word: "dǎo (dow)", translation: "island", hint: "land surrounded by water", audio: "../chinese/island.mp3" },
            { word: "fángzi (fahng-zuh)", translation: "house", hint: "human dwelling place", audio: "../chinese/house.mp3" },
            { word: "shù (shoo)", translation: "tree", hint: "plant with branches and leaves", audio: "../chinese/tree.mp3" },
            { word: "lán sè (lan suh)", translation: "blue", hint: "color of the sky", audio: "../chinese/blue.mp3" },
            { word: "huáng sè (hwahng suh)", translation: "yellow", hint: "color of the sun", audio: "../chinese/yellow.mp3" },
            { word: "hóng sè (hong suh)", translation: "red", hint: "color of passion", audio: "../chinese/red.mp3" },
            { word: "shēngmìng (shung-ming)", translation: "life", hint: "existence with emotions and actions", audio: "../chinese/life.mp3" },
            { word: "shuǐ (shway)", translation: "water", hint: "basic human need", audio: "../chinese/water.mp3" },
            { word: "tàiyáng (tie-yahng)", translation: "sun", hint: "source of light and heat on Earth", audio: "../chinese/sun.mp3" },
            { word: "yuèliang (yoo-eh-lyang)", translation: "moon", hint: "source of light at night, changes shape", audio: "../chinese/moon.mp3" },
            { word: "xīngxīng (shing-shing)", translation: "star", hint: "visible in the sky, symbol of hope", audio: "../chinese/star.mp3" },
            { word: "tiānkōng (tyen-kong)", translation: "sky", hint: "where clouds and stars are seen in the atmosphere", audio: "../chinese/sky.mp3" },
            { word: "tǔdì (too-dee)", translation: "land", hint: "physical world we inhabit", audio: "../chinese/land.mp3" },
            { word: "zhíwù (jee-wuh)", translation: "plant", hint: "has leaves, flowers, and stems", audio: "../chinese/plant.mp3" },
            { word: "dòngwù (dohng-wuh)", translation: "animal", hint: "natural beings", audio: "../chinese/animal.mp3" },
            { word: "jiā (jah)", translation: "home", hint: "where a family resides", audio: "../chinese/home.mp3" },
            { word: "tiāntáng (tyen-tahng)", translation: "heaven", hint: "abode of the divine and God", audio: "../chinese/heaven.mp3" },
            { word: "hǎiyáng (high-yahng)", translation: "sea", hint: "vast area of water", audio: "../chinese/sea.mp3" },
            { word: "niǎo (nyow)", translation: "bird", hint: "has wings, flies quickly", audio: "../chinese/bird.mp3" },
            { word: "yǔzhòu (yoo-joh)", translation: "universe", hint: "everything that exists", audio: "../chinese/universe.mp3" },
            { word: "dōngfāng (dong-fahng)", translation: "east", hint: "direction where the sun rises", audio: "../chinese/east.mp3" },
            { word: "xīfāng (shee-fahng)", translation: "west", hint: "direction where the sun sets", audio: "../chinese/west.mp3" },
            { word: "wǔyè (woo-yeh)", translation: "midnight", hint: "quiet time of night", audio: "../chinese/midnight.mp3" },
            { word: "zhōngwǔ (joong-woo)", translation: "noon", hint: "lunchtime, moderate temperature", audio: "../chinese/noon.mp3" },
            { word: "yèwǎn (yeh-wan)", translation: "night", hint: "dark time, time to rest", audio: "../chinese/night.mp3" },
            { word: "zǎoshang (zow-shahng)", translation: "morning", hint: "time of dawn", audio: "../chinese/morning.mp3" },
            { word: "tiānqì (tyen-chee)", translation: "weather", hint: "atmospheric conditions in a location", audio: "../chinese/weather.mp3" },
            { word: "yǔ (yoo)", translation: "rain", hint: "water falling from the sky", audio: "../chinese/rain.mp3" },
            { word: "rè (ruh)", translation: "heat", hint: "perception of temperature", audio: "../chinese/heat.mp3" },
            { word: "lěng (luhng)", translation: "cold", hint: "common temperature in winter", audio: "../chinese/cold.mp3" },
            { word: "fēng (fung)", translation: "wind", hint: "movement of air", audio: "../chinese/wind.mp3" },
            { word: "yǔ (yoo)", translation: "rain", hint: "water falling from the sky", audio: "../chinese/rain.mp3" },
            { word: "shǎndiàn (shahn-dyehn)", translation: "lightning", hint: "spark in the sky", audio: "../chinese/lightning.mp3" },
            { word: "léishēng (lay-shung)", translation: "thunder", hint: "loud sound accompanying lightning", audio: "../chinese/thunder.mp3" },
            { word: "fēngbào (fung-baow)", translation: "storm", hint: "strong wind and rainfall", audio: "../chinese/storm.mp3" },
            { word: "báitiān (bye-tyen)", translation: "day", hint: "sunny time", audio: "../chinese/day.mp3" },
            { word: "bàngwǎn (bahng-wan)", translation: "evening", hint: "time before nightfall", audio: "../chinese/evening.mp3" },
            { word: "dōngtiān (dong-tyen)", translation: "winter", hint: "cold season", audio: "../chinese/winter.mp3" },
            { word: "xiàtiān (shee-ah-tyen)", translation: "summer", hint: "hot season", audio: "../chinese/summer.mp3" },
            { word: "yǔjì (yoo-jee)", translation: "rainy season", hint: "season with heavy rainfall", audio: "../chinese/rainy season.mp3" }
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
let currentLanguage = "chinese"; // Default language

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
