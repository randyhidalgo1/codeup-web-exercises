"use strict";

// Konami code sequence

let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let konamiIndex = 0;

// Event listener for keyup events
$(document).keyup(function(event) {
    // Check if the key pressed matches the next key in the konami code sequence
    if (event.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        // If the whole sequence is entered correctly, show the cheater button
        if (konamiIndex === konamiCode.length) {
            let $cheaterButton = $("<button>").text("Click for your prize").attr("id", "cheater-button");
            $("body").append($cheaterButton);
        }
    } else {
        // If a wrong key is pressed, reset the konami code index
        konamiIndex = 0;
    }
});

// Click event listener for the cheater button
$(document).on("click", "#cheater-button", function() {
    alert("You are a winner!");
});