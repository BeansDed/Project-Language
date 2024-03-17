const vocabulary = {
    spanish: {
        words: [
            { word: "Hola", translation: "Hello", hint: "Common greeting" },
            { word: "Adiós", translation: "Goodbye", hint: "Farewell" },
            { word: "Hola", translation: "Hello", hint: "Common greeting" },
            { word: "Adiós", translation: "Goodbye", hint: "Farewell" },
            { word: "Me llamo", translation: "My Name Is", hint: "How you greet your name"},
            { word: "Buenos Dias", translation: "Good Morning", hint: "What do you say to someone in the morning"},
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
            { word: "jugar", translation: "To play", hint: "activity for fun" },
            { word: "comer", translation: "To eat", hint: "necessary for survival" },
            { word: "beber", translation: "To drink", hint: "necessary for hydration" },
            { word: "correr", translation: "To run", hint: "physical activity" },
            { word: "volar", translation: "To fly", hint: "how birds move" },
            { word: "amar", translation: "To love", hint: "deep affection" },
            { word: "odiar", translation: "To hate", hint: "intense dislike" },
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
            { word: "amigo", translation: "Friend", hint: "close companion" },
            { word: "familia", translation: "Family", hint: "related by blood or marriage" },
            { word: "trabajo", translation: "Work", hint: "employment or task" },
            { word: "escuela", translation: "School", hint: "place of education" },
            { word: "aprender", translation: "To learn", hint: "process of acquiring knowledge" },
            { word: "enseñar", translation: "To teach", hint: "sharing knowledge with others" },
            { word: "sueño", translation: "Dream", hint: "imaginary experience during sleep" },
            { word: "realidad", translation: "Reality", hint: "what actually exists" },
            { word: "hora", translation: "Hour", hint: "unit of time" },
            { word: "minuto", translation: "Minute", hint: "small unit of time" },
            { word: "segundo", translation: "Second", hint: "smallest unit of time" },
            { word: "playa", translation: "Beach", hint: "sandy shore by the ocean" }
        ],
        shuffle: function() {
            this.words.sort(() => Math.random() - 0.5);
        }
    },
    japanese: {
        words: [
            { word: "いぬ (inu)", translation: "Dog", hint: "common household pet" },
            { word: "ねこ (neko)", translation: "Cat", hint: "furry and independent" },
            { word: "いえ (ie)", translation: "House", hint: "place where you live" },
            { word: "あお (ao)", translation: "Blue", hint: "color of the sky" },
            { word: "きいろ (kiiro)", translation: "Yellow", hint: "color of the sun" },
            { word: "あか (aka)", translation: "Red", hint: "color of passion" },
            { word: "りんご (ringo)", translation: "Apple", hint: "fruit often associated with teachers" },
            { word: "みず (mizu)", translation: "Water", hint: "essential for life" },
            { word: "たいよう (taiyou)", translation: "Sun", hint: "central to our solar system" },
            { word: "つき (tsuki)", translation: "Moon", hint: "Earth's natural satellite" },
            { word: "ほん (hon)", translation: "Book", hint: "source of knowledge" },
            { word: "くるま (kuruma)", translation: "Car", hint: "personal transportation" },
            { word: "べっど (beddo)", translation: "Bed", hint: "where you sleep" },
            { word: "でんしゃ (densha)", translation: "Train", hint: "mode of public transportation" },
            { word: "とし (toshi)", translation: "City", hint: "urban area" },
            { word: "あそぶ (asobu)", translation: "To play", hint: "activity for fun" },
            { word: "たべる (taberu)", translation: "To eat", hint: "necessary for survival" },
            { word: "のむ (nomu)", translation: "To drink", hint: "necessary for hydration" },
            { word: "はしる (hashiru)", translation: "To run", hint: "physical activity" },
            { word: "とぶ (tobu)", translation: "To fly", hint: "how birds move" },
            { word: "あいする (aisuru)", translation: "To love", hint: "deep affection" },
            { word: "きらう (kirau)", translation: "To hate", hint: "intense dislike" },
            { word: "しあわせ (shiawase)", translation: "Happy", hint: "positive emotion" },
            { word: "かなしい (kanashii)", translation: "Sad", hint: "opposite of happy" },
            { word: "たかい (takai)", translation: "Tall", hint: "height description" },
            { word: "ひくい (hikui)", translation: "Short", hint: "opposite of tall" },
            { word: "つよい (tsuyoi)", translation: "Strong", hint: "physical strength" },
            { word: "よわい (yowai)", translation: "Weak", hint: "opposite of strong" },
            { word: "さむい (samui)", translation: "Cold", hint: "low temperature" },
            { word: "あつい (atsui)", translation: "Hot", hint: "high temperature" },
            { word: "ふゆ (fuyu)", translation: "Winter", hint: "coldest season" },
            { word: "なつ (natsu)", translation: "Summer", hint: "hottest season" },
            { word: "はる (haru)", translation: "Spring", hint: "season of blooming flowers" },
            { word: "あき (aki)", translation: "Autumn", hint: "season of falling leaves" },
            { word: "ともだち (tomodachi)", translation: "Friend", hint: "close companion" },
            { word: "かぞく (kazoku)", translation: "Family", hint: "related by blood or marriage" },
            { word: "しごと (shigoto)", translation: "Work", hint: "employment or task" },
            { word: "がっこう (gakkou)", translation: "School", hint: "place of education" },
            { word: "まなぶ (manabu)", translation: "To learn", hint: "process of acquiring knowledge" },
            { word: "おしえる (oshieru)", translation: "To teach", hint: "sharing knowledge with others" },
            { word: "ゆめ (yume)", translation: "Dream", hint: "imaginary experience during sleep" },
            { word: "げんじつ (genjitsu)", translation: "Reality", hint: "what actually exists" },
            { word: "じかん (jikan)", translation: "Hour", hint: "unit of time" },
            { word: "ふん (fun)", translation: "Minute", hint: "small unit of time" },
            { word: "びょう (byou)", translation: "Second", hint: "smallest unit of time" }
        ],
        shuffle: function() {
            this.words.sort(() => Math.random() - 0.5);
        }
    },
    tagalog: {
        words: [
            { word: "Kamusta", translation: "Hello", hint: "Common greeting" },
            { word: "Paalam", translation: "Goodbye", hint: "Farewell" },
            { word: "aso", translation: "Dog", hint: "karaniwang alaga sa bahay" },
            { word: "pusa", translation: "Cat", hint: "mahinhin at independiyenteng hayop" },
            { word: "bahay", translation: "House", hint: "lugar kung saan ka nakatira" },
            { word: "asul", translation: "Blue", hint: "kulay ng langit" },
            { word: "dilaw", translation: "Yellow", hint: "kulay ng araw" },
            { word: "pula", translation: "Red", hint: "kulay ng damdamin" },
            { word: "mansanas", translation: "Apple", hint: "prutas na madalas itali sa mga guro" },
            { word: "tubig", translation: "Water", hint: "mahalaga sa buhay" },
            { word: "araw", translation: "Sun", hint: "sentro ng ating solar system" },
            { word: "buwan", translation: "Moon", hint: "likas na satelayt ng daigdig" },
            { word: "aklat", translation: "Book", hint: "pinagmumulan ng kaalaman" },
            { word: "kotse", translation: "Car", hint: "personal na transportasyon" },
            { word: "higaan", translation: "Bed", hint: "lugar kung saan ka natutulog" },
            { word: "tren", translation: "Train", hint: "paraan ng pampublikong transportasyon" },
            { word: "lungsod", translation: "City", hint: "urbang lugar" },
            { word: "laro", translation: "To play", hint: "aktibidad para sa saya" },
            { word: "kain", translation: "To eat", hint: "kinakailangan para mabuhay" },
            { word: "inom", translation: "To drink", hint: "kinakailangan para sa pagyhydrate" },
            { word: "takbo", translation: "To run", hint: "pisikal na aktibidad" },
            { word: "lipad", translation: "To fly", hint: "paraan ng paglipad ng mga ibon" },
            { word: "mahal", translation: "To love", hint: "malalim na pagmamahal" },
            { word: "ayaw", translation: "To hate", hint: "matinding ayaw" },
            { word: "masaya", translation: "Happy", hint: "positibong damdamin" },
            { word: "malungkot", translation: "Sad", hint: "katumbas ng masaya" },
            { word: "taas", translation: "Tall", hint: "paglalarawan sa taas" },
            { word: "ibaba", translation: "Short", hint: "katumbas ng taas" },
            { word: "malakas", translation: "Strong", hint: "pisikal na lakas" },
            { word: "mahina", translation: "Weak", hint: "katumbas ng malakas" },
            { word: "malamig", translation: "Cold", hint: "mababang temperatura" },
            { word: "mainit", translation: "Hot", hint: "mataas na temperatura" },
            { word: "taglamig", translation: "Winter", hint: "pinakamalamig na panahon" },
            { word: "taginit", translation: "Summer", hint: "pinakamainit na panahon" },
            { word: "tagsibol", translation: "Spring", hint: "panahon ng mga bulaklak" },
            { word: "taglagas", translation: "Autumn", hint: "panahon ng mga nalalaglag na dahon" },
            { word: "kaibigan", translation: "Friend", hint: "malapit na kasama" },
            { word: "pamilya", translation: "Family", hint: "kaugnay sa dugo o kasal" },
            { word: "trabaho", translation: "Work", hint: "empleyo o gawain" },
            { word: "eskwela", translation: "School", hint: "lugar ng edukasyon" },
            { word: "matuto", translation: "To learn", hint: "proseso ng pagkuha ng kaalaman" },
            { word: "magturo", translation: "To teach", hint: "pagbabahagi ng kaalaman sa iba" },
            { word: "panaginip", translation: "Dream", hint: "imahinaryong karanasan habang natutulog" },
            { word: "realidad", translation: "Reality", hint: "ano ang talagang umiiral" },
            { word: "oras", translation: "Hour", hint: "yunit ng panahon" },
            { word: "minuto", translation: "Minute", hint: "maliit na yunit ng panahon" },
            { word: "segundo", translation: "Second", hint: "pinakamaliit na yunit ng panahon" },
            { word: "dalampasigan", translation: "Beach", hint: "mauugat na pampang sa tabi ng karagatan" }
        ],
        shuffle: function() {
            this.words.sort(() => Math.random() - 0.5);
        }
    },
    german:{
        words:[
            { word: "Hund", translation: "Dog", hint: "common household pet" },
            { word: "Katze", translation: "Cat", hint: "furry and independent" },
            { word: "Haus", translation: "House", hint: "place where you live" },
            { word: "Blau", translation: "Blue", hint: "color of the sky" },
            { word: "Gelb", translation: "Yellow", hint: "color of the sun" },
            { word: "Rot", translation: "Red", hint: "color of passion" },
            { word: "Apfel", translation: "Apple", hint: "fruit often associated with teachers" },
            { word: "Wasser", translation: "Water", hint: "essential for life" },
            { word: "Sonne", translation: "Sun", hint: "central to our solar system" },
            { word: "Mond", translation: "Moon", hint: "Earth's natural satellite" },
            { word: "Buch", translation: "Book", hint: "source of knowledge" },
            { word: "Auto", translation: "Car", hint: "personal transportation" },
            { word: "Bett", translation: "Bed", hint: "where you sleep" },
            { word: "Zug", translation: "Train", hint: "mode of public transportation" },
            { word: "Stadt", translation: "City", hint: "urban area" },
            { word: "Spielen", translation: "To play", hint: "activity for fun" },
            { word: "Essen", translation: "To eat", hint: "necessary for survival" },
            { word: "Trinken", translation: "To drink", hint: "necessary for hydration" },
            { word: "Laufen", translation: "To run", hint: "physical activity" },
            { word: "Fliegen", translation: "To fly", hint: "how birds move" },
            { word: "Lieben", translation: "To love", hint: "deep affection" },
            { word: "Hassen", translation: "To hate", hint: "intense dislike" },
            { word: "Glücklich", translation: "Happy", hint: "positive emotion" },
            { word: "Traurig", translation: "Sad", hint: "opposite of happy" },
            { word: "Groß", translation: "Tall", hint: "height description" },
            { word: "Klein", translation: "Short", hint: "opposite of tall" },
            { word: "Stark", translation: "Strong", hint: "physical strength" },
            { word: "Schwach", translation: "Weak", hint: "opposite of strong" },
            { word: "Kalt", translation: "Cold", hint: "low temperature" },
            { word: "Heiß", translation: "Hot", hint: "high temperature" },
            { word: "Winter", translation: "Winter", hint: "coldest season" },
            { word: "Sommer", translation: "Summer", hint: "hottest season" },
            { word: "Frühling", translation: "Spring", hint: "season of blooming flowers" },
            { word: "Herbst", translation: "Autumn", hint: "season of falling leaves" },
            { word: "Freund", translation: "Friend", hint: "close companion" },
            { word: "Familie", translation: "Family", hint: "related by blood or marriage" },
            { word: "Arbeit", translation: "Work", hint: "employment or task" },
            { word: "Schule", translation: "School", hint: "place of education" },
            { word: "Lernen", translation: "To learn", hint: "process of acquiring knowledge" },
            { word: "Lehren", translation: "To teach", hint: "sharing knowledge with others" },
            { word: "Traum", translation: "Dream", hint: "imaginary experience during sleep" },
            { word: "Realität", translation: "Reality", hint: "what actually exists" },
            { word: "Stunde", translation: "Hour", hint: "unit of time" },
            { word: "Minute", translation: "Minute", hint: "small unit of time" },
            { word: "Sekunde", translation: "Second", hint: "smallest unit of time" }
    
        ],
        shuffle: function() {
            this.words.sort(() => Math.random() - 0.5);
        }
    },
    korea: {
        words:[
            { word: "개", translation: "Dog", hint: "common household pet" },
            { word: "고양이", translation: "Cat", hint: "furry and independent" },
            { word: "집", translation: "House", hint: "place where you live" },
            { word: "파란색", translation: "Blue", hint: "color of the sky" },
            { word: "노란색", translation: "Yellow", hint: "color of the sun" },
            { word: "빨간색", translation: "Red", hint: "color of passion" },
            { word: "사과", translation: "Apple", hint: "fruit often associated with teachers" },
            { word: "물", translation: "Water", hint: "essential for life" },
            { word: "태양", translation: "Sun", hint: "central to our solar system" },
            { word: "달", translation: "Moon", hint: "Earth's natural satellite" },
            { word: "책", translation: "Book", hint: "source of knowledge" },
            { word: "차", translation: "Car", hint: "personal transportation" },
            { word: "침대", translation: "Bed", hint: "where you sleep" },
            { word: "기차", translation: "Train", hint: "mode of public transportation" },
            { word: "도시", translation: "City", hint: "urban area" },
            { word: "놀다", translation: "To play", hint: "activity for fun" },
            { word: "먹다", translation: "To eat", hint: "necessary for survival" },
            { word: "마시다", translation: "To drink", hint: "necessary for hydration" },
            { word: "달리다", translation: "To run", hint: "physical activity" },
            { word: "날다", translation: "To fly", hint: "how birds move" },
            { word: "사랑하다", translation: "To love", hint: "deep affection" },
            { word: "미워하다", translation: "To hate", hint: "intense dislike" },
            { word: "행복하다", translation: "Happy", hint: "positive emotion" },
            { word: "슬픔", translation: "Sad", hint: "opposite of happy" },
            { word: "큰", translation: "Tall", hint: "height description" },
            { word: "작은", translation: "Short", hint: "opposite of tall" },
            { word: "강하다", translation: "Strong", hint: "physical strength" },
            { word: "약하다", translation: "Weak", hint: "opposite of strong" },
            { word: "춥다", translation: "Cold", hint: "low temperature" },
            { word: "덥다", translation: "Hot", hint: "high temperature" },
            { word: "겨울", translation: "Winter", hint: "coldest season" },
            { word: "여름", translation: "Summer", hint: "hottest season" },
            { word: "봄", translation: "Spring", hint: "season of blooming flowers" },
            { word: "가을", translation: "Autumn", hint: "season of falling leaves" },
            { word: "친구", translation: "Friend", hint: "close companion" },
            { word: "가족", translation: "Family", hint: "related by blood or marriage" },
            { word: "일", translation: "Work", hint: "employment or task" },
            { word: "학교", translation: "School", hint: "place of education" },
            { word: "배우다", translation: "To learn", hint: "process of acquiring knowledge" },
            { word: "가르치다", translation: "To teach", hint: "sharing knowledge with others" },
            { word: "꿈", translation: "Dream", hint: "imaginary experience during sleep" },
            { word: "현실", translation: "Reality", hint: "what actually exists" },
            { word: "시간", translation: "Hour", hint: "unit of time" },
            { word: "분", translation: "Minute", hint: "small unit of time" },
            { word: "초", translation: "Second", hint: "smallest unit of time" }
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

function checkTranslation() {
    const userTranslation = document.getElementById("translationInput").value.trim().toLowerCase();
    const correctTranslation = vocabulary[currentLanguage].words[currentWordIndex].translation.toLowerCase();
    if (userTranslation === correctTranslation) {
        document.getElementById("feedback").textContent = "Correct!";
        wordsLearned++;
        updateProgress();
    } else {
        document.getElementById("feedback").textContent = "Incorrect. The correct translation is: " + correctTranslation;
    }
}

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
