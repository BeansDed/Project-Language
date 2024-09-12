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
            case 'korea':
                pageURL = "../language/korea.html";
                break;
            case 'japan':
                pageURL = "../language/japan.html";
                break;
            case 'china':
                pageURL = "../language/chinese.html";
                break;
            case 'pipino':
                pageURL = "../language/tagalog.html";
                break;
            case 'indonesia':
                pageURL = "../language/indonesia.html";
                break;
            default:
                pageURL = '404.html'; // If the selected language is not found, redirect to 404 page
        }
        window.location.href = pageURL;
    }
});
