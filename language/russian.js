const vocabulary = {
   russia: {
        words: [
            { word: "Собака (suh-BAH-kah)", translation: "Dog", hint: "pet", audio: "../russian/dog.mp3" },
            { word: "Кот (kot)", translation: "Cat", hint: "feline", audio: "../russian/cat.mp3" },
            { word: "Дом (dom)", translation: "House", hint: "residence", audio: "../russian/house.mp3" },
            { word: "Синий (SEE-nee-ee)", translation: "Blue", hint: "color", audio: "../russian/blue.mp3" },
            { word: "Желтый (zhehl-TIH-ee)", translation: "Yellow", hint: "color", audio: "../russian/yellow.mp3" },
            { word: "Красный (KRAHS-nee)", translation: "Red", hint: "color", audio: "../russian/red.mp3" },
            { word: "Яблоко (yah-BLOH-kah)", translation: "Apple", hint: "fruit", audio: "../russian/apple.mp3" },
            { word: "Вода (VOH-dah)", translation: "Water", hint: "liquid", audio: "../russian/water.mp3" },
            { word: "Солнце (SOHLN-tseh)", translation: "Sun", hint: "celestial", audio: "../russian/sun.mp3" },
            { word: "Луна (LOO-nah)", translation: "Moon", hint: "celestial", audio: "../russian/moon.mp3" },
            { word: "Книга (KNEE-gah)", translation: "Book", hint: "read", audio: "../russian/book.mp3" },
            { word: "Машина (mah-SHEE-nah)", translation: "Car", hint: "vehicle", audio: "../russian/car.mp3" },
            { word: "Кровать (krah-VAHT)", translation: "Bed", hint: "sleep", audio: "../russian/bed.mp3" },
            { word: "Поезд (poh-YEHST)", translation: "Train", hint: "transport", audio: "../russian/train.mp3" },
            { word: "Город (GOH-ruht)", translation: "City", hint: "urban", audio: "../russian/city.mp3" },
            { word: "Играть (ee-GRAT')", translation: "Play", hint: "activity", audio: "../russian/play.mp3" },
            { word: "Еда (YEH-dah)", translation: "Food", hint: "consume", audio: "../russian/food.mp3" },
            { word: "Пить (peet')", translation: "Drink", hint: "consume", audio: "../russian/drink.mp3" },
            { word: "Бегать (beh-GAHT')", translation: "Run", hint: "movement", audio: "../russian/run.mp3" },
            { word: "Летать (le-TAHT')", translation: "Fly", hint: "movement", audio: "../russian/fly.mp3" },
            { word: "Любовь (lyu-BOHF')", translation: "Love", hint: "emotion", audio: "../russian/love.mp3" },
            { word: "Ненависть (nee-NAH-veesst')", translation: "Hate", hint: "emotion", audio: "../russian/hate.mp3" },
            { word: "Счастливый (schas-LIV-ee)", translation: "Happy", hint: "emotion", audio: "../russian/happy.mp3" },
            { word: "Грустный (groos-TNIY)", translation: "Sad", hint: "emotion", audio: "../russian/sad.mp3" },
            { word: "Высокий (vee-SOH-keey)", translation: "Tall", hint: "height", audio: "../russian/tall.mp3" },
            { word: "Маленький (ma-LYEN-kee)", translation: "Small", hint: "size", audio: "../russian/small.mp3" },
            { word: "Сильный (SEEL'niy)", translation: "Strong", hint: "strength", audio: "../russian/strong.mp3" },
            { word: "Слабый (SLAH-bee)", translation: "Weak", hint: "strength", audio: "../russian/weak.mp3" },
            { word: "Холодный (khah-LAHD-niy)", translation: "Cold", hint: "temperature", audio: "../russian/cold.mp3" },
            { word: "Горячий (gah-REE-cheey)", translation: "Hot", hint: "temperature", audio: "../russian/hot.mp3" },
            { word: "Зима (ZEE-muh)", translation: "Winter", hint: "season", audio: "../russian/winter.mp3" },
            { word: "Лето (LYEH-tuh)", translation: "Summer", hint: "season", audio: "../russian/summer.mp3" },
            { word: "Весна (VEHS-nuh)", translation: "Spring", hint: "season", audio: "../russian/spring.mp3" },
            { word: "Осень (ah-SEHN')", translation: "Autumn", hint: "season", audio: "../russian/autumn.mp3" },
            { word: "Друг (drook)", translation: "Friend", hint: "companion", audio: "../russian/friend.mp3" },
            { word: "Семья (SYEM'-yah)", translation: "Family", hint: "relatives", audio: "../russian/family.mp3" },
            { word: "Работа (rah-BOH-tah)", translation: "Work", hint: "employment", audio: "../russian/work.mp3" },
            { word: "Школа (SHKOH-lah)", translation: "School", hint: "education", audio: "../russian/school.mp3" },
            { word: "Учиться (oo-CHIT'-suh)", translation: "Learn", hint: "education", audio: "../russian/learn.mp3" },
            { word: "Учить (oo-CHIT')", translation: "Teach", hint: "education", audio: "../russian/teach.mp3" }

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
let currentLanguage = "russia"; // Default language

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
