const productContainers = [...document.querySelectorAll('.language-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const cardButtons = document.querySelectorAll('.card-btn');

cardButtons.forEach(button => {
    button.addEventListener('click', () => {
        const language = button.textContent.toLowerCase(); // Get the text content of the button and convert it to lowercase
        let pageURL;
        switch (language) { // Define URLs for each language
            case 'spanish':
                pageURL = "../language/spanish.html";
                break;
            case 'korea':
                pageURL = 'korea-practice.html';
                break;
            case 'philippines':
                pageURL = 'philippines-practice.html';
                break;
            case 'japan':
                pageURL = 'japan-practice.html';
                break;
            default:
                pageURL = '404.html'; // Redirect to a 404 page if the language is not found
        }
        window.location.href = pageURL; // Redirect to the corresponding language practice page
    });
});


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})