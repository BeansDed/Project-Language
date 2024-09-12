const vocabulary = {
    japan: {
        words: [
            { word: "いぬ (inu)", translation: "Dog", hint: "common household pet", audio: "../japanese/dog.mp3" },
            { word: "ねこ (neko)", translation: "Cat", hint: "furry and independent", audio: "../japanese/cat.mp3" },
            { word: "いえ (ie)", translation: "House", hint: "place where you live", audio: "../japanese/house.mp3" },
            { word: "あお (ao)", translation: "Blue", hint: "color of the sky", audio: "../japanese/blue.mp3" },
            { word: "きいろ (kiiro)", translation: "Yellow", hint: "color of the sun", audio: "../japanese/yellow.mp3" },
            { word: "あか (aka)", translation: "Red", hint: "color of passion", audio: "../japanese/red.mp3" },
            { word: "りんご (ringo)", translation: "Apple", hint: "fruit often associated with teachers", audio: "../japanese/apple.mp3" },
            { word: "みず (mizu)", translation: "Water", hint: "essential for life", audio: "../japanese/water.mp3" },
            { word: "たいよう (taiyou)", translation: "Sun", hint: "central to our solar system", audio: "../japanese/sun.mp3" },
            { word: "つき (tsuki)", translation: "Moon", hint: "Earth's natural satellite", audio: "../japanese/moon.mp3" },
            { word: "ほん (hon)", translation: "Book", hint: "source of knowledge", audio: "../japanese/book.mp3" },
            { word: "くるま (kuruma)", translation: "Car", hint: "personal transportation", audio: "../japanese/car.mp3" },
            { word: "べっど (beddo)", translation: "Bed", hint: "where you sleep", audio: "../japanese/bed.mp3" },
            { word: "でんしゃ (densha)", translation: "Train", hint: "mode of public transportation", audio: "../japanese/train.mp3" },
            { word: "とし (toshi)", translation: "City", hint: "urban area", audio: "../japanese/city.mp3" },
            { word: "あそぶ (asobu)", translation: "Play", hint: "activity for fun", audio: "../japanese/play.mp3" },
            { word: "たべる (taberu)", translation: "Eat", hint: "necessary for survival", audio: "../japanese/eat.mp3" },
            { word: "のむ (nomu)", translation: "Drink", hint: "necessary for hydration", audio: "../japanese/drink.mp3" },
            { word: "はしる (hashiru)", translation: "Run", hint: "physical activity", audio: "../japanese/run.mp3" },
            { word: "とぶ (tobu)", translation: "Fly", hint: "how birds move", audio: "../japanese/fly.mp3" },
            { word: "あいする (aisuru)", translation: "Love", hint: "deep affection", audio: "../japanese/love.mp3" },
            { word: "きらう (kirau)", translation: "Hate", hint: "intense dislike", audio: "../japanese/hate.mp3" },
            { word: "しあわせ (shiawase)", translation: "Happy", hint: "positive emotion", audio: "../japanese/happy.mp3" },
            { word: "かなしい (kanashii)", translation: "Sad", hint: "opposite of happy", audio: "../japanese/sad.mp3" },
            { word: "たかい (takai)", translation: "Tall", hint: "height description", audio: "../japanese/tall.mp3" },
            { word: "ひくい (hikui)", translation: "Short", hint: "opposite of tall", audio: "../japanese/short.mp3" },
            { word: "つよい (tsuyoi)", translation: "Strong", hint: "physical strength", audio: "../japanese/strong.mp3" },
            { word: "よわい (yowai)", translation: "Weak", hint: "opposite of strong", audio: "../japanese/weak.mp3" },
            { word: "さむい (samui)", translation: "Cold", hint: "low temperature", audio: "../japanese/cold.mp3" },
            { word: "あつい (atsui)", translation: "Hot", hint: "high temperature", audio: "../japanese/hot.mp3" },
            { word: "ふゆ (fuyu)", translation: "Winter", hint: "coldest season", audio: "../japanese/winter.mp3" },
            { word: "なつ (natsu)", translation: "Summer", hint: "hottest season", audio: "../japanese/summer.mp3" },
            { word: "はる (haru)", translation: "Spring", hint: "season of blooming flowers", audio: "../japanese/spring.mp3" },
            { word: "あき (aki)", translation: "Autumn", hint: "season of falling leaves", audio: "../japanese/autumn.mp3" },
            { word: "ともだち (tomodachi)", translation: "Friend", hint: "close companion", audio: "../japanese/friend.mp3" },
            { word: "かぞく (kazoku)", translation: "Family", hint: "related by blood or marriage", audio: "../japanese/family.mp3" },
            { word: "しごと (shigoto)", translation: "Work", hint: "employment or task", audio: "../japanese/work.mp3" },
            { word: "がっこう (gakkou)", translation: "School", hint: "place of education", audio: "../japanese/school.mp3" },
            { word: "まなぶ (manabu)", translation: "Learn", hint: "process of acquiring knowledge", audio: "../japanese/learn.mp3" },
            { word: "おしえる (oshieru)", translation: "Teach", hint: "sharing knowledge with others", audio: "../japanese/teach.mp3" },
            { word: "やめて(ください) (yamete kudasai)", translation: "Please stop", hint: "Something that you want to stop", audio: "../japanese/please_stop.mp3" },
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
let currentLanguage = "japan"; // Default language

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
        if else (userTranslation =/ correctTranslation) {
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
