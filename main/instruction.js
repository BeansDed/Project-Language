document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("startLanguageButton").addEventListener("click", function() {
        window.location.href = "continent.html";
    });

    // Get the logo back button element
    var backToMainButton = document.getElementById("backToMainButton");

    // Add click event listener to the logo back button
    backToMainButton.addEventListener("click", function() {
        window.location.href = "../main/index.html";
    });
});