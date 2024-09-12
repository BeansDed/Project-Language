document.addEventListener('DOMContentLoaded', function() {
    const imageButtons = document.querySelectorAll('.button_image');
    imageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const language = button.querySelector(".language-thumb").alt;
            handleButtonClick(language);
        });
    });
    
    function handleButtonClick(language) {
        let pageURL;
        switch (language.toLowerCase()) {
            case 'amharic':
                pageURL = "../language/amharic.html";
                break;
            case 'hausa':
                pageURL = "../language/hausa.html";
                break;
            case 'zulu':
                pageURL = "../language/zulu.html";
                break;
            case 'pipino':
                pageURL = "../language/swahili.html";
                break;
                case 'pipino':
                    pageURL = "../language/yoruba.html";
                    break;
            default:
                pageURL = '404.html'; // If the selected language is not found, redirect to 404 page
        }
        window.location.href = pageURL;
    }
});