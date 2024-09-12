const vocabulary = {
    hausa: {
        words: [
            { word: "gidan", translation: "house", hint: "place where one lives", audio: "../hausa/house.mp3" },
            { word: "dogon", translation: "boy", hint: "young male human", audio: "../hausa/boy.mp3" },
            { word: "mama", translation: "mother", hint: "female parent", audio: "../hausa/mother.mp3" },
            { word: "mutum", translation: "man", hint: "adult male human", audio: "../hausa/man.mp3" },
            { word: "jiki", translation: "body", hint: "physical structure of a person or animal", audio: "../hausa/body.mp3" },
            { word: "fara", translation: "cow", hint: "female bovine animal", audio: "../hausa/cow.mp3" },
            { word: "ciwon", translation: "tree", hint: "perennial woody plant", audio: "../hausa/tree.mp3" },
            { word: "kai", translation: "head", hint: "upper part of the body", audio: "../hausa/head.mp3" },
            { word: "kumatu", translation: "star", hint: "luminous celestial body", audio: "../hausa/star.mp3" },
            { word: "kogi", translation: "river", hint: "natural watercourse", audio: "../hausa/river.mp3" },
            { word: "rana", translation: "sky", hint: "atmospheric expanse above the earth", audio: "../hausa/sky.mp3" },
            { word: "gwari", translation: "knife", hint: "sharp-edged cutting tool", audio: "../hausa/knife.mp3" },
            { word: "tsuntsu", translation: "bird", hint: "winged creature", audio: "../hausa/bird.mp3" },
            { word: "kogi", translation: "planet", hint: "celestial body orbiting a star", audio: "../hausa/planet.mp3" },
            { word: "mage", translation: "rock", hint: "large natural stone", audio: "../hausa/rock.mp3" },
            { word: "zabi", translation: "gift", hint: "something given voluntarily", audio: "../hausa/gift.mp3" },
            { word: "yasu", translation: "son", hint: "male child in relation to his parents", audio: "../hausa/son.mp3" },
            { word: "yaro", translation: "friend", hint: "person one knows well and likes", audio: "../hausa/friend.mp3" },
            { word: "hanya", translation: "way", hint: "route or path", audio: "../hausa/way.mp3" },
            { word: "tarihi", translation: "time", hint: "indefinite continued progress of existence and events", audio: "../hausa/time.mp3" },
            { word: "nono", translation: "food", hint: "nutritive material consumed to sustain life", audio: "../hausa/food.mp3" },
            { word: "mutum", translation: "person", hint: "individual human being", audio: "../hausa/person.mp3" },
            { word: "son", translation: "love (verb)", hint: "to have a great affection or liking for", audio: "../hausa/love_verb.mp3" },
            { word: "haskaka", translation: "kindness", hint: "quality of being friendly, generous, and considerate", audio: "../hausa/kindness.mp3" },
            { word: "rawa", translation: "music", hint: "art of combining sounds in a harmonious way", audio: "../hausa/music.mp3" },
            { word: "haiki", translation: "light", hint: "visible form of electromagnetic radiation", audio: "../hausa/light.mp3" },
            { word: "jagora", translation: "arrow", hint: "projectile fired from a bow", audio: "../hausa/arrow.mp3" },
            { word: "duniya", translation: "earth", hint: "planet on which we live", audio: "../hausa/earth.mp3" },
            { word: "wurin", translation: "place", hint: "particular position or location", audio: "../hausa/place.mp3" },
            { word: "haske", translation: "sadness", hint: "state of being unhappy or sorrowful", audio: "../hausa/sadness.mp3" },
            { word: "nagode", translation: "gratitude", hint: "quality of being thankful", audio: "../hausa/gratitude.mp3" },
            { word: "mutuwa", translation: "death", hint: "cessation of life", audio: "../hausa/death.mp3" },
            { word: "duniya", translation: "world", hint: "the earth, together with all of its countries and peoples", audio: "../hausa/world.mp3" },
            { word: "harmu", translation: "wind", hint: "natural movement of the air", audio: "../hausa/wind.mp3" },
            { word: "ruhun", translation: "spirit", hint: "non-physical part of a person", audio: "../hausa/spirit.mp3" },
            { word: "iyali", translation: "desire", hint: "strong feeling of wanting to have something", audio: "../hausa/desire.mp3" },
            { word: "yanke", translation: "success", hint: "accomplishment of an aim or purpose", audio: "../hausa/success.mp3" }
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
let currentLanguage = "hausa"; // Default language

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
