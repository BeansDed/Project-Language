const vocabulary = {
    german: {
        words: [
            { word: "Hund", translation: "dog", hint: "pet", audio: "../german/hund.mp3" },
            { word: "Katze", translation: "cat", hint: "feline", audio: "../german/katze.mp3" },
            { word: "Haus", translation: "house", hint: "dwelling", audio: "../german/haus.mp3" },
            { word: "Blau", translation: "blue", hint: "color", audio: "../german/blau.mp3" },
            { word: "Gelb", translation: "yellow", hint: "color", audio: "../german/gelb.mp3" },
            { word: "Rot", translation: "red", hint: "color", audio: "../german/rot.mp3" },
            { word: "Apfel", translation: "apple", hint: "fruit", audio: "../german/apfel.mp3" },
            { word: "Wasser", translation: "water", hint: "drink", audio: "../german/wasser.mp3" },
            { word: "Sonne", translation: "sun", hint: "celestial", audio: "../german/sonne.mp3" },
            { word: "Mond", translation: "moon", hint: "celestial", audio: "../german/mond.mp3" },
            { word: "Buch", translation: "book", hint: "read", audio: "../german/buch.mp3" },
            { word: "Auto", translation: "car", hint: "vehicle", audio: "../german/auto.mp3" },
            { word: "Bett", translation: "bed", hint: "sleep", audio: "../german/bett.mp3" },
            { word: "Zug", translation: "train", hint: "transport", audio: "../german/zug.mp3" },
            { word: "Stadt", translation: "city", hint: "urban", audio: "../german/stadt.mp3" },
            { word: "Spielen", translation: "play", hint: "game", audio: "../german/spielen.mp3" },
            { word: "Essen", translation: "eat", hint: "consume", audio: "../german/essen.mp3" },
            { word: "Trinken", translation: "drink", hint: "consume", audio: "../german/trinken.mp3" },
            { word: "Laufen", translation: "run", hint: "move", audio: "../german/laufen.mp3" },
            { word: "Fliegen", translation: "fly", hint: "move", audio: "../german/fliegen.mp3" },
            { word: "Lieben", translation: "love", hint: "emotion", audio: "../german/lieben.mp3" },
            { word: "Hassen", translation: "hate", hint: "emotion", audio: "../german/hassen.mp3" },
            { word: "Glücklich", translation: "happy", hint: "emotion", audio: "../german/glücklich.mp3" },
            { word: "Traurig", translation: "sad", hint: "emotion", audio: "../german/traurig.mp3" },
            { word: "Groß", translation: "tall", hint: "height", audio: "../german/groß.mp3" },
            { word: "Klein", translation: "small", hint: "size", audio: "../german/klein.mp3" },
            { word: "Stark", translation: "strong", hint: "strength", audio: "../german/stark.mp3" },
            { word: "Schwach", translation: "weak", hint: "strength", audio: "../german/schwach.mp3" },
            { word: "Kalt", translation: "cold", hint: "temperature", audio: "../german/kalt.mp3" },
            { word: "Heiß", translation: "hot", hint: "temperature", audio: "../german/heiß.mp3" },
            { word: "Winter", translation: "winter", hint: "season", audio: "../german/winter.mp3" },
            { word: "Sommer", translation: "summer", hint: "season", audio: "../german/sommer.mp3" },
            { word: "Frühling", translation: "spring", hint: "season", audio: "../german/frühling.mp3" },
            { word: "Herbst", translation: "autumn", hint: "season", audio: "../german/herbst.mp3" },
            { word: "Freund", translation: "friend", hint: "relationship", audio: "../german/freund.mp3" },
            { word: "Familie", translation: "family", hint: "relationship", audio: "../german/familie.mp3" },
            { word: "Arbeit", translation: "work", hint: "job", audio: "../german/arbeit.mp3" },
            { word: "Schule", translation: "school", hint: "education", audio: "../german/schule.mp3" },
            { word: "Lernen", translation: "learn", hint: "education", audio: "../german/lernen.mp3" },
            { word: "Lehren", translation: "teach", hint: "education", audio: "../german/lehren.mp3" }

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
