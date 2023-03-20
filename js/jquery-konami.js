"use strict";

// Konami code sequence

let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let konamiIndex = 0;

// Event listener for keyup events
$(document).keyup(function(event) {
    // Check if the key pressed matches the next key in the konami code sequence
    if (event.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        // If the whole sequence is entered correctly, show the cheat button
        if (konamiIndex === konamiCode.length) {
            let $cheatButton = $("<button>").text("Click for your prize").attr("id", "cheat-button");
            $("body").append($cheatButton);
        }
    } else {
        // If a wrong key is pressed, reset the konami code index
        konamiIndex = 0;
    }
});
// Click event listener for the cheater button
$(document).on("click", "#cheat-button", function() {
    alert("You are a winner and have another 50 lives!");
});
