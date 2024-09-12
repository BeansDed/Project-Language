const vocabulary = {
    zulu: {
        words: [
            { word: "indlu", translation: "house", hint: "place where one lives", audio: "../zulu/house.mp3" },
            { word: "umfana", translation: "boy", hint: "young male human", audio: "../zulu/boy.mp3" },
            { word: "umama", translation: "mother", hint: "female parent", audio: "../zulu/mother.mp3" },
            { word: "indoda", translation: "man", hint: "adult male human", audio: "../zulu/man.mp3" },
            { word: "umzimba", translation: "body", hint: "physical structure of a person or animal", audio: "../zulu/body.mp3" },
            { word: "inkomo", translation: "cow", hint: "female bovine animal", audio: "../zulu/cow.mp3" },
            { word: "isihlahla", translation: "tree", hint: "perennial woody plant", audio: "../zulu/tree.mp3" },
            { word: "ikhanda", translation: "head", hint: "upper part of the body", audio: "../zulu/head.mp3" },
            { word: "inkanyezi", translation: "star", hint: "luminous celestial body", audio: "../zulu/star.mp3" },
            { word: "isibhamu", translation: "river", hint: "natural watercourse", audio: "../zulu/river.mp3" },
            { word: "insimu", translation: "sky", hint: "atmospheric expanse above the earth", audio: "../zulu/sky.mp3" },
            { word: "induku", translation: "knife", hint: "sharp-edged cutting tool", audio: "../zulu/knife.mp3" },
            { word: "izinyoni", translation: "bird", hint: "winged creature", audio: "../zulu/bird.mp3" },
            { word: "inkanyezi", translation: "planet", hint: "celestial body orbiting a star", audio: "../zulu/planet.mp3" },
            { word: "isikhwama", translation: "rock", hint: "large natural stone", audio: "../zulu/rock.mp3" },
            { word: "isipho", translation: "gift", hint: "something given voluntarily", audio: "../zulu/gift.mp3" },
            { word: "indodana", translation: "son", hint: "male child in relation to his parents", audio: "../zulu/son.mp3" },
            { word: "intsango", translation: "friend", hint: "person one knows well and likes", audio: "../zulu/friend.mp3" },
            { word: "indlela", translation: "way", hint: "route or path", audio: "../zulu/way.mp3" },
            { word: "isizwe", translation: "nation", hint: "large group of people united by common descent, history, culture, or language", audio: "../zulu/nation.mp3" },
            { word: "inzuzo", translation: "joy", hint: "feeling of great pleasure or happiness", audio: "../zulu/joy.mp3" },
            { word: "isikhathi", translation: "time", hint: "indefinite continued progress of existence and events", audio: "../zulu/time.mp3" },
            { word: "ukudla", translation: "food", hint: "nutritive material consumed to sustain life", audio: "../zulu/food.mp3" },
            { word: "umuntu", translation: "person", hint: "individual human being", audio: "../zulu/person.mp3" },
            { word: "ukuthanda", translation: "love (verb)", hint: "to have a great affection or liking for", audio: "../zulu/love_verb.mp3" },
            { word: "umusa", translation: "kindness", hint: "quality of being friendly, generous, and considerate", audio: "../zulu/kindness.mp3" },
            { word: "umculo", translation: "music", hint: "art of combining sounds in a harmonious way", audio: "../zulu/music.mp3" },
            { word: "ukukhanya", translation: "light", hint: "visible form of electromagnetic radiation", audio: "../zulu/light.mp3" },
            { word: "induku", translation: "arrow", hint: "projectile fired from a bow", audio: "../zulu/arrow.mp3" },
            { word: "umhlaba", translation: "earth", hint: "planet on which we live", audio: "../zulu/earth.mp3" },
            { word: "indawo", translation: "place", hint: "particular position or location", audio: "../zulu/place.mp3" },
            { word: "isililo", translation: "sadness", hint: "state of being unhappy or sorrowful", audio: "../zulu/sadness.mp3" },
            { word: "ukubonga", translation: "gratitude", hint: "quality of being thankful", audio: "../zulu/gratitude.mp3" },
            { word: "ukufa", translation: "death", hint: "cessation of life", audio: "../zulu/death.mp3" },
            { word: "izwe", translation: "world", hint: "the earth, together with all of its countries and peoples", audio: "../zulu/world.mp3" },
            { word: "umoya", translation: "wind", hint: "natural movement of the air", audio: "../zulu/wind.mp3" },
            { word: "umoya", translation: "spirit", hint: "non-physical part of a person", audio: "../zulu/spirit.mp3" },
            { word: "ukufuna", translation: "desire", hint: "strong feeling of wanting to have something", audio: "../zulu/desire.mp3" },
            { word: "umvuzo", translation: "success", hint: "accomplishment of an aim or purpose", audio: "../zulu/success.mp3" }
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
let currentLanguage = "zulu"; // Default language

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
