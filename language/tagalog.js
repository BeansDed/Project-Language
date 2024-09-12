const vocabulary = {
    tagalog: {
        words: [
            { word: "isla", translation: "Island", hint: "lupa na napaliligiran ng tubig", audio: "../tagalog/island.m4a" },
                { word: "bahay", translation: "House", hint: "tahanan ng tao", audio: "../tagalog/house.m4a" },
                { word: "puno", translation: "Tree", hint: "may mga sanga at dahon", audio: "../tagalog/tree.m4a" },
                { word: "asul", translation: "Blue", hint: "kulay ng kalangitan", audio: "../tagalog/blue.m4a" },
                { word: "dilaw", translation: "Yellow", hint: "kulay ng araw", audio: "../tagalog/yellow.m4a" },    
                { word: "pula", translation: "Red", hint: "kulay ng pagkahumaling", audio: "../tagalog/red.m4a" },
                { word: "buhay", translation: "Life", hint: "ang pagiging mayroong damdamin at kilos", audio: "../tagalog/life.m4a" },
                { word: "tubig", translation: "Water", hint: "isang likas na yaman na pangangailangan ng tao", audio: "../tagalog/water.m4a" },
                { word: "araw", translation: "Sun", hint: "pinagmulan ng liwanag at init sa ating planeta", audio: "../tagalog/sun.m4a" },
                { word: "buwan", translation: "Moon", hint: "ilaw sa gabi na nagbabago ang hugis", audio: "../tagalog/moon.m4a" },    
                { word: "bituin", translation: "Star", hint: "makikita sa kalangitan, simbolo ng pag-asa", audio: "../tagalog/star.m4a" },
                { word: "himpapawid", translation: "Sky", hint: "ang bahagi ng atmospera kung saan nakikita ang mga ulap at bituin", audio: "../tagalog/sky.m4a" },
                { word: "lupa", translation: "Land", hint: "ang pisikal na mundo kung saan tayo naninirahan", audio: "../tagalog/land.m4a" },
                { word: "halaman", translation: "Plant", hint: "may mga dahon, bulaklak, at tangkay", audio: "../tagalog/plant.m4a" },
                { word: "hayop", translation: "Animal", hint: "mga likas na nabubuhay na nilalang", audio: "../tagalog/animal.m4a" },
                { word: "tahanan", translation: "Home", hint: "kinalalagyan ng isang pamilya", audio: "../tagalog/home.m4a" },
                { word: "langit", translation: "Heaven", hint: "ang tahanan ng mga banal at ng Diyos", audio: "../tagalog/heaven.m4a" },
                { word: "dagat", translation: "Sea", hint: "malawak na bahagi ng tubig", audio: "../tagalog/sea.m4a" },
                { word: "ibon", translation: "Bird", hint: "may mga pakpak, mabilis lumipad", audio: "../tagalog/bird.m4a" },
                { word: "uniberso", translation: "Universe", hint: "lahat ng bagay na umiiral", audio: "../tagalog/universe.m4a" },
                { word: "silangan", translation: "East", hint: "direksyon kung saan sumisikat ang araw", audio: "../tagalog/east.m4a" },
                { word: "kanluran", translation: "West", hint: "direksyon kung saan naglalaho ang araw", audio: "../tagalog/west.m4a" },
                { word: "hatinggabi", translation: "Midnight", hint: "oras ng kahilomang gabi", audio: "../tagalog/midnight.m4a" },
                { word: "kanluran", translation: "West", hint: "direksyon kung saan naglalaho ang araw", audio: "../tagalog/west.m4a" },
                { word: "tanghali", translation: "Noon", hint: "oras ng tanghalian, katamtaman ang init", audio: "../tagalog/noon.m4a" },
                { word: "gabi", translation: "Night", hint: "oras ng dilim, panahon para magpahinga", audio: "../tagalog/night.m4a" },
                { word: "umaga", translation: "Morning", hint: "oras ng pagbubukang-liwayway", audio: "../tagalog/morning.m4a" },
                { word: "panahon", translation: "Weather", hint: "ang kalagayan ng atmospera sa isang lugar", audio: "../tagalog/weather.m4a" },
                { word: "ulan", translation: "Rain", hint: "tubig na bumabagsak mula sa langit", audio: "../tagalog/rain.m4a" },
                { word: "init", translation: "Heat", hint: "masusing pakiramdam ng temperatura", audio: "../tagalog/heat.m4a" },
                { word: "lamig", translation: "Cold", hint: "pangkaraniwang temperatura sa panahon ng taglamig", audio: "../tagalog/cold.m4a" },
                { word: "hangin", translation: "Wind", hint: "galaw ng himpapawid", audio: "../tagalog/wind.m4a" },
                { word: "kidlat", translation: "Lightning", hint: "pagniningas ng langit", audio: "../tagalog/lightning.m4a" },
                { word: "kulog", translation: "Thunder", hint: "malakas na ingay na kaakibat ng kidlat", audio: "../tagalog/thunder.m4a" },
                { word: "bagyo", translation: "Storm", hint: "malakas na hangin at pag-ulan", audio: "../tagalog/storm.m4a" },
                { word: "araw", translation: "Day", hint: "panahon ng liwanag", audio: "../tagalog/day.m4a" },
                { word: "gabi", translation: "Evening", hint: "oras bago magdamag", audio: "../tagalog/evening.m4a" },
                { word: "taglamig", translation: "Winter", hint: "panahon ng malamig na temperatura", audio: "../tagalog/winter.m4a" },
                { word: "tag-init", translation: "Summer", hint: "panahon ng mainit na temperatura", audio: "../tagalog/summer.m4a" },
                { word: "tag-ulan", translation: "Rainy Season", hint: "panahon ng pag-ulan", audio: "../tagalog/rainy_season.m4a" }
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
