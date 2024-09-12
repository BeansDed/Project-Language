const vocabulary = {
    yoruba: {
        words: [
            { word: "ile", translation: "house", hint: "place where one lives", audio: "../yoruba/house.mp3" },
            { word: "òkùnrin", translation: "man", hint: "adult male human", audio: "../yoruba/man.mp3" },
            { word: "iya", translation: "mother", hint: "female parent", audio: "../yoruba/mother.mp3" },
            { word: "àbíkú", translation: "child", hint: "young human being", audio: "../yoruba/child.mp3" },
            { word: "ogun", translation: "war", hint: "armed conflict between nations or groups", audio: "../yoruba/war.mp3" },
            { word: "ogun", translation: "medicine", hint: "treatment of illness", audio: "../yoruba/medicine.mp3" },
            { word: "ayo", translation: "joy", hint: "emotion of happiness", audio: "../yoruba/joy.mp3" },
            { word: "òrò", translation: "word", hint: "unit of language", audio: "../yoruba/word.mp3" },
            { word: "irin", translation: "metal", hint: "solid material with metallic properties", audio: "../yoruba/metal.mp3" },
            { word: "ẹya", translation: "bird", hint: "winged creature", audio: "../yoruba/bird.mp3" },
            { word: "orin", translation: "song", hint: "musical composition with lyrics", audio: "../yoruba/song.mp3" },
            { word: "imo", translation: "knowledge", hint: "information, understanding, or skill", audio: "../yoruba/knowledge.mp3" },
            { word: "ìyá wa", translation: "our mother", hint: "female parent of 'us'", audio: "../yoruba/our_mother.mp3" },
            { word: "opolo", translation: "river", hint: "natural watercourse", audio: "../yoruba/river.mp3" },
            { word: "òrìṣà", translation: "deity", hint: "god or goddess", audio: "../yoruba/deity.mp3" },
            { word: "òsun", translation: "river goddess", hint: "female deity associated with rivers", audio: "../yoruba/river_goddess.mp3" },
            { word: "òkò", translation: "husband", hint: "male spouse", audio: "../yoruba/husband.mp3" },
            { word: "iyawo", translation: "wife", hint: "female spouse", audio: "../yoruba/wife.mp3" },
            { word: "iyawo", translation: "bride", hint: "woman on her wedding day", audio: "../yoruba/bride.mp3" },
            { word: "opa", translation: "staff", hint: "long stick carried as a symbol of authority", audio: "../yoruba/staff.mp3" },
            { word: "imo", translation: "brain", hint: "organ of thought", audio: "../yoruba/brain.mp3" },
            { word: "ase", translation: "power", hint: "ability to do something or act in a particular way", audio: "../yoruba/power.mp3" },
            { word: "òkò", translation: "hoe", hint: "agricultural tool", audio: "../yoruba/hoe.mp3" },
            { word: "ife", translation: "love", hint: "deep affection", audio: "../yoruba/love.mp3" },
            { word: "bìró", translation: "pen", hint: "writing instrument", audio: "../yoruba/pen.mp3" },
            { word: "ife", translation: "wish", hint: "desire or hope for something to happen", audio: "../yoruba/wish.mp3" },
            { word: "ìfẹ", translation: "salt", hint: "crystalline mineral", audio: "../yoruba/salt.mp3" },
            { word: "ìjò", translation: "dance", hint: "sequence of rhythmic movements to music", audio: "../yoruba/dance.mp3" },
            { word: "alailógbó", translation: "freedom", hint: "state of not being imprisoned or enslaved", audio: "../yoruba/freedom.mp3" },
            { word: "akọ́", translation: "farm", hint: "area of land used for growing crops", audio: "../yoruba/farm.mp3" },
            { word: "aso", translation: "cloth", hint: "fabric", audio: "../yoruba/cloth.mp3" },
            { word: "baba", translation: "father", hint: "male parent", audio: "../yoruba/father.mp3" },
            { word: "bàbá mi", translation: "my father", hint: "male parent belonging to 'me'", audio: "../yoruba/my_father.mp3" },
            { word: "omo", translation: "child", hint: "young human being", audio: "../yoruba/child.mp3" },
            { word: "apapo", translation: "classmate", hint: "fellow student in the same class", audio: "../yoruba/classmate.mp3" },
            { word: "ibere", translation: "challenge", hint: "test of one's abilities", audio: "../yoruba/challenge.mp3" },
            { word: "egbẹ", translation: "group", hint: "collection of individuals considered together", audio: "../yoruba/group.mp3" },
            { word: "òrìṣà", translation: "deity", hint: "god or goddess", audio: "../yoruba/deity.mp3" }
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
let currentLanguage = "yoruba"; // Default language

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
