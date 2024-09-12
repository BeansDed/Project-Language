const vocabulary = {
    amharic: {
        words: [
            { word: "ሐይቅ (hayik)", translation: "love", hint: "deep affection or fondness", audio: "../amharic/love.mp3" },
            { word: "ሰላም (selam)", translation: "peace", hint: "absence of war or conflict", audio: "../amharic/peace.mp3" },
            { word: "ግጥም (gɨt'im)", translation: "work", hint: "activity involving mental or physical effort", audio: "../amharic/work.mp3" },
            { word: "ትምህርት (timhirit)", translation: "education", hint: "process of teaching or learning", audio: "../amharic/education.mp3" },
            { word: "የቤተሰብ (ye betä seb)", translation: "family", hint: "group of people related by blood or marriage", audio: "../amharic/family.mp3" },
            { word: "ታች (tach)", translation: "here", hint: "in or at this place", audio: "../amharic/here.mp3" },
            { word: "እዚህ (ɨzih)", translation: "there", hint: "in or at that place", audio: "../amharic/there.mp3" },
            { word: "ታች (tach)", translation: "this", hint: "referring to something nearby", audio: "../amharic/this.mp3" },,
            { word: "ምን (min)", translation: "what", hint: "asking for information about something", audio: "../amharic/what.mp3" },
            { word: "ምን (min)", translation: "something", hint: "referring to a thing unspecified or unknown", audio: "../amharic/something.mp3" },
            { word: "እንዴት (ɨndet)", translation: "how", hint: "in what way or manner", audio: "../amharic/how.mp3" },
            { word: "በውትር (bewäter)", translation: "where", hint: "in or to what place or position", audio: "../amharic/where.mp3" },
            { word: "ማን (man)", translation: "who", hint: "asking for information about someone", audio: "../amharic/who.mp3" },
            { word: "ሁሉ (hulu)", translation: "everyone", hint: "every person", audio: "../amharic/everyone.mp3" },
            { word: "እንደሚታወቅ (ɨndemɨtawäk)", translation: "why", hint: "for what reason or purpose", audio: "../amharic/why.mp3" },
            { word: "እንደሚታወቅ (ɨndemɨtawäk)", translation: "because", hint: "for the reason that", audio: "../amharic/because.mp3" },
            { word: "ተንቀሳቃሽ (tenkäsaqasha)", translation: "important", hint: "of great significance or value", audio: "../amharic/important.mp3" },
            { word: "ተግባራት (tegabarat)", translation: "difficult", hint: "needing much effort or skill to accomplish", audio: "../amharic/difficult.mp3" },
            { word: "ሰልፍ (selaf)", translation: "easy", hint: "requiring little effort or skill", audio: "../amharic/easy.mp3" },
            { word: "ሰላም (selam)", translation: "hello", hint: "greeting used when meeting or answering the telephone", audio: "../amharic/hello.mp3" },
            { word: "ተዘጋጅቶ (tezagajeto)", translation: "goodbye", hint: "expressing good wishes when parting or at the end of a conversation", audio: "../amharic/goodbye.mp3" },
            { word: "እንቅስቃሴ (ɨnqäsqase)", translation: "excuse me", hint: "phrase used to politely ask someone to move or to get attention", audio: "../amharic/excuse_me.mp3" },
            { word: "አይደለም (aydɨlam)", translation: "sorry", hint: "expressing regret or asking for forgiveness", audio: "../amharic/sorry.mp3" },
            { word: "እሺ (ɨshiy)", translation: "yes", hint: "affirmative response or agreement", audio: "../amharic/yes.mp3" },
            { word: "አዎ (awo)", translation: "no", hint: "negative response or disagreement", audio: "../amharic/no.mp3" },
            { word: "ውስጥ (wist)", translation: "outside", hint: "the external side or surface of something", audio: "../amharic/outside.mp3" },
            { word: "እዚህ (ɨzih)", translation: "inside", hint: "the inner part or surface of something", audio: "../amharic/inside.mp3" },
            { word: "ታች (tach)", translation: "up", hint: "in a higher position", audio: "../amharic/up.mp3" },
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
let currentLanguage = "amharic"; // Default language

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
