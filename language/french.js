const vocabulary = {
    tagalog: {
        words: [
            { word: "isla", translation: "Island", hint: "lupa na napaliligiran ng tubig" },
            { word: "bahay", translation: "House", hint: "tahanan ng tao" },
            { word: "puno", translation: "Tree", hint: "may mga sanga at dahon" },
            { word: "asul", translation: "Blue", hint: "kulay ng kalangitan" },
            { word: "dilaw", translation: "Yellow", hint: "kulay ng araw" },
            { word: "pula", translation: "Red", hint: "kulay ng pagkahumaling" },
            { word: "buhay", translation: "Life", hint: "ang pagiging mayroong damdamin at kilos" },
            { word: "tubig", translation: "Water", hint: "isang likas na yaman na pangangailangan ng tao" },
            { word: "araw", translation: "Sun", hint: "pinagmulan ng liwanag at init sa ating planeta" },
            { word: "buwan", translation: "Moon", hint: "ilaw sa gabi na nagbabago ang hugis" },
            { word: "bituin", translation: "Star", hint: "makikita sa kalangitan, simbolo ng pag-asa" },
            { word: "himpapawid", translation: "Sky", hint: "ang bahagi ng atmospera kung saan nakikita ang mga ulap at bituin" },
            { word: "lupa", translation: "Land", hint: "ang pisikal na mundo kung saan tayo naninirahan" },
            { word: "halaman", translation: "Plant", hint: "may mga dahon, bulaklak, at tangkay" },
            { word: "hayop", translation: "Animal", hint: "mga likas na nabubuhay na nilalang" },
            { word: "tahanan", translation: "Home", hint: "kinalalagyan ng isang pamilya" },
            { word: "langit", translation: "Heaven", hint: "ang tahanan ng mga banal at ng Diyos" },
            { word: "dagat", translation: "Sea", hint: "malawak na bahagi ng tubig" },
            { word: "ibon", translation: "Bird", hint: "may mga pakpak, mabilis lumipad" },
            { word: "uniberso", translation: "Universe", hint: "lahat ng bagay na umiiral" },
            { word: "silangan", translation: "East", hint: "direksyon kung saan sumisikat ang araw" },
            { word: "kanluran", translation: "West", hint: "direksyon kung saan naglalaho ang araw" },
            { word: "hatinggabi", translation: "Midnight", hint: "oras ng kahilomang gabi" },
            { word: "tanghali", translation: "Noon", hint: "oras ng tanghalian, katamtaman ang init" },
            { word: "gabi", translation: "Night", hint: "oras ng dilim, panahon para magpahinga" },
            { word: "umaga", translation: "Morning", hint: "oras ng pagbubukang-liwayway" },
            { word: "panahon", translation: "Weather", hint: "ang kalagayan ng atmospera sa isang lugar" },
            {word: "ulan", translation: "Rain", hint: "tubig na bumabagsak mula sa langit" },
            { word: "init", translation: "Heat", hint: "masusing pakiramdam ng temperatura" },
            { word: "lamig", translation: "Cold", hint: "pangkaraniwang temperatura sa panahon ng taglamig" },
            { word: "hangin", translation: "Wind", hint: "galaw ng himpapawid" },
            { word: "ulan", translation: "Rain", hint: "tubig na bumabagsak mula sa langit" },
            { word: "kidlat", translation: "Lightning", hint: "pagniningas ng langit" },
            { word: "kulog", translation: "Thunder", hint: "malakas na ingay na kaakibat ng kidlat" },
            { word: "bagyo", translation: "Storm", hint: "malakas na hangin at pag-ulan" },
            { word: "araw", translation: "Day", hint: "panahon ng liwanag" },
            { word: "gabi", translation: "Evening", hint: "oras bago magdamag" },
            { word: "taglamig", translation: "Winter", hint: "panahon ng malamig na temperatura" },
            { word: "tag-init", translation: "Summer", hint: "panahon ng mainit na temperatura" },
            { word: "tag-ulan", translation: "Rainy Season", hint: "panahon ng pag-ulan" },
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
let currentLanguage = "tagalog"; // Default language

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
    currentWordIndex = 0; // Reset the word index when language changes
    displayNextWord();
    updateProgress();
});

// Initial display
displayNextWord();
updateProgress();
