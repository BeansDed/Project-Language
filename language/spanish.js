const vocabulary = {
    spanish: {
        words: [
            { word: "Hola", translation: "Hello", hint: "Common greeting" },
            { word: "Adiós", translation: "Goodbye", hint: "Farewell" },
            { word: "Me llamo", translation: "MyNameIs", hint: "How you greet your name" },
            { word: "Buenos Dias", translation: "GoodMorning", hint: "What do you say to someone in the morning" },
            { word: "perro", translation: "Dog", hint: "common household pet" },
            { word: "gato", translation: "Cat", hint: "furry and independent" },
            { word: "casa", translation: "House", hint: "place where you live" },
            { word: "azul", translation: "Blue", hint: "color of the sky" },
            { word: "amarillo", translation: "Yellow", hint: "color of the sun" },
            { word: "rojo", translation: "Red", hint: "color of passion" },
            { word: "manzana", translation: "Apple", hint: "fruit often associated with teachers" },
            { word: "agua", translation: "Water", hint: "essential for life" },
            { word: "sol", translation: "Sun", hint: "central to our solar system" },
            { word: "luna", translation: "Moon", hint: "Earth's natural satellite" },
            { word: "libro", translation: "Book", hint: "source of knowledge" },
            { word: "coche", translation: "Car", hint: "personal transportation" },
            { word: "cama", translation: "Bed", hint: "where you sleep" },
            { word: "tren", translation: "Train", hint: "mode of public transportation" },
            { word: "ciudad", translation: "City", hint: "urban area" },
            { word: "jugar", translation: "ToPlay", hint: "activity for fun" },
            { word: "comer", translation: "ToEat", hint: "necessary for survival" },
            { word: "beber", translation: "ToDrink", hint: "necessary for hydration" },
            { word: "correr", translation: "ToRun", hint: "physical activity" },
            { word: "volar", translation: "ToFly", hint: "how birds move" },
            { word: "amar", translation: "ToLove", hint: "deep affection" },
            { word: "odiar", translation: "ToHate", hint: "intense dislike" },
            { word: "feliz", translation: "Happy", hint: "positive emotion" },
            { word: "triste", translation: "Sad", hint: "opposite of happy" },
            { word: "alto", translation: "Tall", hint: "height description" },
            { word: "bajo", translation: "Short", hint: "opposite of tall" },
            { word: "fuerte", translation: "Strong", hint: "physical strength" },
            { word: "débil", translation: "Weak", hint: "opposite of strong" },
            { word: "frío", translation: "Cold", hint: "low temperature" },
            { word: "caliente", translation: "Hot", hint: "high temperature" },
            { word: "invierno", translation: "Winter", hint: "coldest season" },
            { word: "verano", translation: "Summer", hint: "hottest season" },
            { word: "primavera", translation: "Spring", hint: "season of blooming flowers" },
            { word: "otoño", translation: "Autumn", hint: "season of falling leaves" },
            { word: "familia", translation: "Family", hint: "people you're related to" },
            { word: "amigo", translation: "Friend", hint: "someone you enjoy spending time with" }  
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

function displayNextWord() {
    const wordElement = document.getElementById("word");
    const hintElement = document.getElementById("hint");
    const audioElement = document.getElementById("audio");

    const currentWord = vocabulary[currentLanguage].words[currentWordIndex];
    wordElement.textContent = currentWord.word;
    hintElement.textContent = "Hint: " + currentWord.hint;

    // Reset feedback and translation input
    document.getElementById("feedback").textContent = "";
    document.getElementById("translationInput").value = "";

}

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
    currentWordIndex = 0; 
    displayNextWord();
    updateProgress();
});

// Initial display
displayNextWord();
updateProgress();
