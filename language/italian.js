const vocabulary = {
    italian: {
        words: [
            { word: "Cane", translation: "Dog", hint: "pet", audio: "../italian/dog.mp3" },
            { word: "Gatto", translation: "Cat", hint: "feline", audio: "../italian/cat.mp3" },
            { word: "Casa", translation: "House", hint: "dwelling", audio: "../italian/house.mp3" },
            { word: "Blu", translation: "Blue", hint: "color", audio: "../italian/blue.mp3" },
            { word: "Giallo", translation: "Yellow", hint: "color", audio: "../italian/yellow.mp3" },
            { word: "Rosso", translation: "Red", hint: "color", audio: "../italian/red.mp3" },
            { word: "Mela", translation: "Apple", hint: "fruit", audio: "../italian/apple.mp3" },
            { word: "Acqua", translation: "Water", hint: "drink", audio: "../italian/water.mp3" },
            { word: "Sole", translation: "Sun", hint: "celestial", audio: "../italian/sun.mp3" },
            { word: "Luna", translation: "Moon", hint: "celestial", audio: "../italian/moon.mp3" },
            { word: "Libro", translation: "Book", hint: "read", audio: "../italian/book.mp3" },
            { word: "Auto", translation: "Car", hint: "vehicle", audio: "../italian/car.mp3" },
            { word: "Letto", translation: "Bed", hint: "sleep", audio: "../italian/bed.mp3" },
            { word: "Treno", translation: "Train", hint: "transport", audio: "../italian/train.mp3" },
            { word: "Città", translation: "City", hint: "urban", audio: "../italian/city.mp3" },
            { word: "Gioco", translation: "Play", hint: "game", audio: "../italian/play.mp3" },
            { word: "Mangiare", translation: "Eat", hint: "consume", audio: "../italian/eat.mp3" },
            { word: "Bere", translation: "Drink", hint: "consume", audio: "../italian/drink.mp3" },
            { word: "Correre", translation: "Run", hint: "move", audio: "../italian/run.mp3" },
            { word: "Volare", translation: "Fly", hint: "move", audio: "../italian/fly.mp3" },
            { word: "Amore", translation: "Love", hint: "emotion", audio: "../italian/love.mp3" },
            { word: "Odio", translation: "Hate", hint: "emotion", audio: "../italian/hate.mp3" },
            { word: "Felice", translation: "Happy", hint: "emotion", audio: "../italian/happy.mp3" },
            { word: "Triste", translation: "Sad", hint: "emotion", audio: "../italian/sad.mp3" },
            { word: "Alto", translation: "Tall", hint: "height", audio: "../italian/tall.mp3" },
            { word: "Piccolo", translation: "Small", hint: "size", audio: "../italian/small.mp3" },
            { word: "Forte", translation: "Strong", hint: "strength", audio: "../italian/strong.mp3" },
            { word: "Debole", translation: "Weak", hint: "strength", audio: "../italian/weak.mp3" },
            { word: "Freddo", translation: "Cold", hint: "temperature", audio: "../italian/cold.mp3" },
            { word: "Caldo", translation: "Hot", hint: "temperature", audio: "../italian/hot.mp3" },
            { word: "Inverno", translation: "Winter", hint: "season", audio: "../italian/winter.mp3" },
            { word: "Estate", translation: "Summer", hint: "season", audio: "../italian/summer.mp3" },
            { word: "Primavera", translation: "Spring", hint: "season", audio: "../italian/spring.mp3" },
            { word: "Autunno", translation: "Autumn", hint: "season", audio: "../italian/autumn.mp3" },
            { word: "Amico", translation: "Friend", hint: "relationship", audio: "../italian/friend.mp3" },
            { word: "Famiglia", translation: "Family", hint: "relationship", audio: "../italian/family.mp3" },
            { word: "Lavoro", translation: "Work", hint: "job", audio: "../italian/work.mp3" },
            { word: "Scuola", translation: "School", hint: "education", audio: "../italian/school.mp3" },
            { word: "Imparare", translation: "Learn", hint: "education", audio: "../italian/learn.mp3" },
            { word: "Insegnare", translation: "Teach", hint: "education", audio: "../italian/teach.mp3" }
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
let currentLanguage = "italian"; // Default language

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
