const vocabulary = {
    spanish: {
        words: [
            { word: "cachorro", translation: "Dog", hint: "Pet", audio: "../spanish/dog.mp3" },
            { word: "gato", translation: "Cat", hint: "Feline", audio: "../spanish/cat.mp3" },
            { word: "casa", translation: "House", hint: "Dwelling", audio: "../spanish/house.mp3" },
            { word: "azul", translation: "Blue", hint: "Color", audio: "../spanish/blue.mp3" },
            { word: "amarelo", translation: "Yellow", hint: "Color", audio: "../spanish/yellow.mp3" },
            { word: "vermelho", translation: "Red", hint: "Color", audio: "../spanish/red.mp3" },
            { word: "maçã", translation: "Apple", hint: "Fruit", audio: "../spanish/apple.mp3" },
            { word: "água", translation: "Water", hint: "Drink", audio: "../spanish/water.mp3" },
            { word: "sol", translation: "Sun", hint: "Celestial", audio: "../spanish/sun.mp3" },
            { word: "lua", translation: "Moon", hint: "Celestial", audio: "../spanish/moon.mp3" },
            { word: "livro", translation: "Book", hint: "Read", audio: "../spanish/book.mp3" },
            { word: "carro", translation: "Car", hint: "Vehicle", audio: "../spanish/car.mp3" },
            { word: "cama", translation: "Bed", hint: "Sleep", audio: "../spanish/bed.mp3" },
            { word: "trem", translation: "Train", hint: "Transport", audio: "../spanish/train.mp3" },
            { word: "cidade", translation: "City", hint: "Urban", audio: "../spanish/city.mp3" },
            { word: "brincar", translation: "Play", hint: "Game", audio: "../spanish/play.mp3" },
            { word: "comer", translation: "Eat", hint: "Consume", audio: "../spanish/eat.mp3" },
            { word: "beber", translation: "Drink", hint: "Consume", audio: "../spanish/drink.mp3" },
            { word: "correr", translation: "Run", hint: "Move", audio: "../spanish/run.mp3" },
            { word: "voar", translation: "Fly", hint: "Move", audio: "../spanish/fly.mp3" },
            { word: "amor", translation: "Love", hint: "Emotion", audio: "../spanish/love.mp3" },
            { word: "ódio", translation: "Hate", hint: "Emotion", audio: "../spanish/hate.mp3" },
            { word: "feliz", translation: "Happy", hint: "Emotion", audio: "../spanish/happy.mp3" },
            { word: "triste", translation: "Sad", hint: "Emotion", audio: "../spanish/sad.mp3" },
            { word: "alto", translation: "Tall", hint: "Height", audio: "../spanish/tall.mp3" },
            { word: "pequeno", translation: "Small", hint: "Size", audio: "../spanish/small.mp3" },
            { word: "forte", translation: "Strong", hint: "Strength", audio: "../spanish/strong.mp3" },
            { word: "fraco", translation: "Weak", hint: "Strength", audio: "../spanish/weak.mp3" },
            { word: "frio", translation: "Cold", hint: "Temperature", audio: "../spanish/cold.mp3" },
            { word: "quente", translation: "Hot", hint: "Temperature", audio: "../spanish/hot.mp3" },
            { word: "inverno", translation: "Winter", hint: "Season", audio: "../spanish/winter.mp3" },
            { word: "verão", translation: "Summer", hint: "Season", audio: "../spanish/summer.mp3" },
            { word: "primavera", translation: "Spring", hint: "Season", audio: "../spanish/spring.mp3" },
            { word: "outono", translation: "Autumn", hint: "Season", audio: "../spanish/autumn.mp3" },
            { word: "amigo", translation: "Friend", hint: "Relationship", audio: "../spanish/friend.mp3" },
            { word: "família", translation: "Family", hint: "Relationship", audio: "../spanish/family.mp3" },
            { word: "trabalho", translation: "Work", hint: "Job", audio: "../spanish/work.mp3" },
            { word: "escola", translation: "School", hint: "Education", audio: "../spanish/school.mp3" },
            { word: "aprender", translation: "Learn", hint: "Education", audio: "../spanish/learn.mp3" },
            { word: "ensinar", translation: "Teach", hint: "Education", audio: "../spanish/teach.mp3" }
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
let currentLanguage = "spanish"; // Default language

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
