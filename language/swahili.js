const vocabulary = {
    swahili: {
        words: [
            { word: "nyumba", translation: "house", hint: "place where one lives", audio: "../swahili/house.mp3" },
            { word: "gari", translation: "car", hint: "personal means of transportation", audio: "../swahili/car.mp3" },
            { word: "mbwa", translation: "dog", hint: "four-legged friend", audio: "../swahili/dog.mp3" },
            { word: "paka", translation: "cat", hint: "feline companion", audio: "../swahili/cat.mp3" },
            { word: "fukwe", translation: "beach", hint: "sunny seaside", audio: "../swahili/beach.mp3" },
            { word: "jua", translation: "sun", hint: "source of light and heat", audio: "../swahili/sun.mp3" },
            { word: "mwezi", translation: "moon", hint: "Earth's natural satellite", audio: "../swahili/moon.mp3" },
            { word: "maua", translation: "flower", hint: "beautiful creation of nature", audio: "../swahili/flower.mp3" },
            { word: "bustani", translation: "garden", hint: "green space at home", audio: "../swahili/garden.mp3" },
            { word: "maji", translation: "water", hint: "essential element for life", audio: "../swahili/water.mp3" },
            { word: "msitu", translation: "forest", hint: "place rich in trees", audio: "../swahili/forest.mp3" },
            { word: "mlima", translation: "mountain", hint: "high geological formation", audio: "../swahili/mountain.mp3" },
            { word: "angani", translation: "sky", hint: "vast expanse above us", audio: "../swahili/sky.mp3" },
            { word: "nyota", translation: "star", hint: "bright point in the night sky", audio: "../swahili/star.mp3" },
            { word: "ndege", translation: "bird", hint: "flying creature with feathers", audio: "../swahili/bird.mp3" },
            { word: "kitabu", translation: "book", hint: "source of knowledge", audio: "../swahili/book.mp3" },
            { word: "shule", translation: "school", hint: "educational institution", audio: "../swahili/school.mp3" },
            { word: "mwalimu", translation: "teacher", hint: "educator in the classroom", audio: "../swahili/teacher.mp3" },
            { word: "upendo", translation: "love", hint: "deep and tender feeling", audio: "../swahili/love.mp3" },
            { word: "urafiki", translation: "friendship", hint: "emotional bond between friends", audio: "../swahili/friendship.mp3" },
            { word: "kazi", translation: "work", hint: "professional activity", audio: "../swahili/work.mp3" },
            { word: "familia", translation: "family", hint: "group of people connected by family ties", audio: "../swahili/family.mp3" },
            { word: "hali ya hewa", translation: "weather", hint: "atmospheric conditions", audio: "../swahili/weather.mp3" },
            { word: "furaha", translation: "happiness", hint: "positive emotional state", audio: "../swahili/happiness.mp3" },
            { word: "amani", translation: "peace", hint: "absence of conflict", audio: "../swahili/peace.mp3" },
            { word: "ndoto", translation: "dream", hint: "oniric experience during sleep", audio: "../swahili/dream.mp3" },
            { word: "matumaini", translation: "hope", hint: "confident expectation of something positive", audio: "../swahili/hope.mp3" },
            { word: "muziki", translation: "music", hint: "art of harmonious sounds", audio: "../swahili/music.mp3" },
            { word: "kucheza", translation: "dance", hint: "rhythmic body movement", audio: "../swahili/dance.mp3" },
            { word: "safari", translation: "journey", hint: "movement from one place to another", audio: "../swahili/journey.mp3" },
            { word: "baadaye", translation: "future", hint: "time that comes after the present", audio: "../swahili/future.mp3" },
            { word: "iliyopita", translation: "past", hint: "elapsed time", audio: "../swahili/past.mp3" },
            { word: "ndotoni", translation: "dream (verb)", hint: "to have dreams during sleep", audio: "../swahili/dream_verb.mp3" },
            { word: "tabasamu", translation: "smile", hint: "joyful facial expression", audio: "../swahili/smile.mp3" },
            { word: "kucheka", translation: "laugh", hint: "humorous reaction", audio: "../swahili/laugh.mp3" },
            { word: "furaha", translation: "joy", hint: "intense feeling of happiness", audio: "../swahili/joy.mp3" },
            { word: "hofu", translation: "fear", hint: "emotion caused by a threat", audio: "../swahili/fear.mp3" },
            { word: "huzuni", translation: "sadness", hint: "emotional state of sorrow", audio: "../swahili/sadness.mp3" },
            { word: "hasira", translation: "anger", hint: "intense emotion of dissatisfaction", audio: "../swahili/anger.mp3" }
    

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
let currentLanguage = "swahili"; // Default language

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
