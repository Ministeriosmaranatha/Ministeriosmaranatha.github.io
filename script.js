// Add any global variables or functions here if needed

// Function to handle any onload events
function onPageLoad() {
    // Add the 'loaded' class to elements with the 'reveal-on-load' class to trigger animations
    var elementsToReveal = document.querySelectorAll('.reveal-on-load');
    elementsToReveal.forEach(function(element) {
        element.classList.add('loaded');
    });
}

// Event listener for the window's load event
window.addEventListener('load', onPageLoad);

// Add any additional JavaScript functions or event listeners here

// This is the end of the script.js content up to this point.

