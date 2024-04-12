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
            case "spain":
                pageURL = "../language/spanish.html";
                break;
            case 'korea':
                pageURL = "../language/korea.html";
                break;
            case 'pipino':
                pageURL = "../language/tagalog.html";
                break;
            case 'japan':
                pageURL = "../language/japan.html";
                break;
            case 'german':
                pageURL = "../language/german.html";
                break;
            case 'italy':
                pageURL = "../language/italian.html";
                break;
            case 'france':
                pageURL = "../language/french.html";
                break;
            case 'china':
                pageURL = "../language/chinese.html";
                break;
            case 'brazil':
                pageURL = "../language/portuguese.html";
                break;
            case 'russia':
                pageURL = "../language/russian.html";
                break;
            default:
                pageURL = '404.html';
        }
        window.location.href = pageURL;
    }
});
