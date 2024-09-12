document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const continent = button.dataset.continent;
            handleButtonClick(continent);
        });
    });
    
    function handleButtonClick(continent) {
        let pageURL;
        switch (continent.toLowerCase()) {
            case "europe":
                pageURL = "../europe/picker.html";
                break;
            case 'asia':
                pageURL = "../asia/picker.html";
                break;
            case 'africa':
                pageURL = "../africa/picker.html";
                break;
            // Add cases for other continents as needed
            default:
                pageURL = '404.html';
        }
        window.location.href = pageURL;
    }
});
