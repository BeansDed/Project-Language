const vocabulary = {
    korea: {
        words: [
            { word: "개 (gae)", translation: "Dog", hint: "Pet", audio: "../korea/gae.mp3" },
            { word: "고양이 (goyangi)", translation: "Cat", hint: "Feline", audio: "../korea/goyangi.mp3" },
            { word: "집 (jib)", translation: "House", hint: "Shelter", audio: "../korea/jib.mp3" },
            { word: "파란색 (paransaek)", translation: "Blue", hint: "Sky", audio: "../korea/paransaek.mp3" },
            { word: "노란색 (noransaek)", translation: "Yellow", hint: "Sun", audio: "../korea/noransaek.mp3" },
            { word: "빨간색 (ppalgansaek)", translation: "Red", hint: "Passion", audio: "../korea/ppalgansaek.mp3" },
            { word: "사과 (sagwa)", translation: "Apple", hint: "Teacher", audio: "../korea/sagwa.mp3" },
            { word: "물 (mul)", translation: "Water", hint: "Life", audio: "../korea/mul.mp3" },
            { word: "태양 (taeyang)", translation: "Sun", hint: "Solar", audio: "../korea/taeyang.mp3" },
            { word: "달 (dal)", translation: "Moon", hint: "Satellite", audio: "../korea/dal.mp3" },
            { word: "책 (chaek)", translation: "Book", hint: "Knowledge", audio: "../korea/chaek.mp3" },
            { word: "차 (cha)", translation: "Car", hint: "Vehicle", audio: "../korea/cha.mp3" },
            { word: "침대 (chimdae)", translation: "Bed", hint: "Sleep", audio: "../korea/chimdae.mp3" },
            { word: "기차 (gicha)", translation: "Train", hint: "Transport", audio: "../korea/gicha.mp3" },
            { word: "도시 (dosi)", translation: "City", hint: "Urban", audio: "../korea/dosi.mp3" },
            { word: "놀다 (nolda)", translation: "Play", hint: "Fun", audio: "../korea/nolda.mp3" },
            { word: "먹다 (meokda)", translation: "Eat", hint: "Food", audio: "../korea/meokda.mp3" },
            { word: "마시다 (masida)", translation: "Drink", hint: "Fluid", audio: "../korea/masida.mp3" },
            { word: "달리다 (dallida)", translation: "Run", hint: "Sprint", audio: "../korea/dallida.mp3" },
            { word: "날다 (nalda)", translation: "Fly", hint: "Aviate", audio: "../korea/nalda.mp3" },
            { word: "사랑하다 (saranghada)", translation: "Love", hint: "Adore", audio: "../korea/saranghada.mp3" },
            { word: "미워하다 (miwohada)", translation: "Hate", hint: "Detest", audio: "../korea/miwohada.mp3" },
            { word: "행복하다 (haengbokhada)", translation: "Happy", hint: "Joy", audio: "../korea/haengbokhada.mp3" },
            { word: "슬픔 (seulpeum)", translation: "Sad", hint: "Grief", audio: "../korea/seulpeum.mp3" },
            { word: "큰 (keun)", translation: "Tall", hint: "Height", audio: "../korea/keun.mp3" },
            { word: "작은 (jageun)", translation: "Short", hint: "Height", audio: "../korea/jageun.mp3" },
            { word: "강하다 (ganghada)", translation: "Strong", hint: "Power", audio: "../korea/ganghada.mp3" },
            { word: "약하다 (yaghada)", translation: "Weak", hint: "Strength", audio: "../korea/yaghada.mp3" },
            { word: "춥다 (chupda)", translation: "Cold", hint: "Temperature", audio: "../korea/chupda.mp3" },
            { word: "덥다 (depda)", translation: "Hot", hint: "Temperature", audio: "../korea/depda.mp3" },
            { word: "겨울 (gyeoul)", translation: "Winter", hint: "Season", audio: "../korea/gyeoul.mp3" },
            { word: "여름 (yeoreum)", translation: "Summer", hint: "Season", audio: "../korea/yeoreum.mp3" },
            { word: "봄 (bom)", translation: "Spring", hint: "Season", audio: "../korea/bom.mp3" },
            { word: "가을 (gaeul)", translation: "Autumn", hint: "Season", audio: "../korea/gaeul.mp3" },
            { word: "친구 (chingu)", translation: "Friend", hint: "Companion", audio: "../korea/chingu.mp3" },
            { word: "가족 (gajok)", translation: "Family", hint: "Relatives", audio: "../korea/gajok.mp3" },
            { word: "일 (il)", translation: "Work", hint: "Job", audio: "../korea/il.mp3" },
            { word: "학교 (hakgyo)", translation: "School", hint: "Education", audio: "../korea/hakgyo.mp3" },
            { word: "배우다 (baeuda)", translation: "Learn", hint: "Knowledge", audio: "../korea/baeuda.mp3" },
            { word: "가르치다 (gareuchida)", translation: "Teach", hint: "Educate", audio: "../korea/gareuchida.mp3" }
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
let currentLanguage = "korea"; // Default language

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
