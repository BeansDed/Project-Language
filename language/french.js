const vocabulary = {
    french: {
        words: [
            { word: "maison", translation: "house", hint: "place where one lives", audio: "../french/house.mp3" },
            { word: "voiture", translation: "car", hint: "personal means of transportation", audio: "../french/car.mp3" },
            { word: "chien", translation: "dog", hint: "four-legged friend", audio: "../french/dog.mp3" },
            { word: "chat", translation: "cat", hint: "feline companion", audio: "../french/cat.mp3" },
            { word: "plage", translation: "beach", hint: "sunny seaside", audio: "../french/beach.mp3" },
            { word: "soleil", translation: "sun", hint: "source of light and heat", audio: "../french/sun.mp3" },
            { word: "lune", translation: "moon", hint: "Earth's natural satellite", audio: "../french/moon.mp3" },
            { word: "fleur", translation: "flower", hint: "beautiful creation of nature", audio: "../french/flower.mp3" },
            { word: "jardin", translation: "garden", hint: "green space at home", audio: "../french/garden.mp3" },
            { word: "eau", translation: "water", hint: "essential element for life", audio: "../french/water.mp3" },
            { word: "forêt", translation: "forest", hint: "place rich in trees", audio: "../french/forest.mp3" },
            { word: "montagne", translation: "mountain", hint: "high geological formation", audio: "../french/mountain.mp3" },
            { word: "ciel", translation: "sky", hint: "vast expanse above us", audio: "../french/sky.mp3" },
            { word: "étoile", translation: "star", hint: "bright point in the night sky", audio: "../french/star.mp3" },
            { word: "oiseau", translation: "bird", hint: "flying creature with feathers", audio: "../french/bird.mp3" },
            { word: "livre", translation: "book", hint: "source of knowledge", audio: "../french/book.mp3" },
            { word: "école", translation: "school", hint: "educational institution", audio: "../french/school.mp3" },
            { word: "professeur", translation: "teacher", hint: "educator in the classroom", audio: "../french/teacher.mp3" },
            { word: "amour", translation: "love", hint: "deep and tender feeling", audio: "../french/love.mp3" },
            { word: "amitié", translation: "friendship", hint: "emotional bond between friends", audio: "../french/friendship.mp3" },
            { word: "travail", translation: "work", hint: "professional activity", audio: "../french/work.mp3" },
            { word: "famille", translation: "family", hint: "group of people connected by family ties", audio: "../french/family.mp3" },
            { word: "temps", translation: "weather", hint: "atmospheric conditions", audio: "../french/weather.mp3" },
            { word: "bonheur", translation: "happiness", hint: "positive emotional state", audio: "../french/happiness.mp3" },
            { word: "paix", translation: "peace", hint: "absence of conflict", audio: "../french/peace.mp3" },
            { word: "rêve", translation: "dream", hint: "oniric experience during sleep", audio: "../french/dream.mp3" },
            { word: "espoir", translation: "hope", hint: "confident expectation of something positive", audio: "../french/hope.mp3" },
            { word: "musique", translation: "music", hint: "art of harmonious sounds", audio: "../french/music.mp3" },
            { word: "danse", translation: "dance", hint: "rhythmic body movement", audio: "../french/dance.mp3" },
            { word: "voyage", translation: "journey", hint: "movement from one place to another", audio: "../french/journey.mp3" },
            { word: "avenir", translation: "future", hint: "time that comes after the present", audio: "../french/future.mp3" },
            { word: "passé", translation: "past", hint: "elapsed time", audio: "../french/past.mp3" },
            { word: "rêver", translation: "dream (verb)", hint: "to have dreams during sleep", audio: "../french/dream_verb.mp3" },
            { word: "sourire", translation: "smile", hint: "joyful facial expression", audio: "../french/smile.mp3" },
            { word: "rire", translation: "laugh", hint: "humorous reaction", audio: "../french/laugh.mp3" },
            { word: "joie", translation: "joy", hint: "intense feeling of happiness", audio: "../french/joy.mp3" },
            { word: "peur", translation: "fear", hint: "emotion caused by a threat", audio: "../french/fear.mp3" },
            { word: "tristesse", translation: "sadness", hint: "emotional state of sorrow", audio: "../french/sadness.mp3" },
            { word: "colère", translation: "anger", hint: "intense emotion of dissatisfaction", audio: "../french/anger.mp3" }

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
let currentLanguage = "french"; // Default language

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
