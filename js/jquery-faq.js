$(document).ready(function() {
// Define the image
            let image1 = "images/pic1.jpg";
            let image2 = "images/pic2.jpg";
            let image3 = "images/pic3.jpg";

// Left frame to right
            $("#left-frame button").click(function() {
            let centerImage = $("#center-frame img").attr("src");
            $("#left-frame img").attr("src", centerImage);
            $("#center-frame img").attr("src", image1);
            });

// Center frame randomly
            $("#center-frame button").click(function() {
            let randomNumber = Math.floor(Math.random() * 2);
            if (randomNumber === 0) {
            let leftImage = $("#left-frame img").attr("src");
            $("#center-frame img").attr("src", leftImage);
            $("#left-frame img").attr("src", image2);
            } else {
            let rightImage = $("#right-frame img").attr("src");
            $("#center-frame img").attr("src", rightImage);
            $("#right-frame img").attr("src", image2);
            }
            });

// Right frame to left
            $("#right-frame button").click(function() {
            let centerImage = $("#center-frame img").attr("src");
            $("#right-frame img").attr("src", centerImage);
            $("#center-frame img").attr("src", image3);
            });

// Change first li color to blue on click
            $(".frame li:first-child").click(function() {
            $(this).css("color", "blue");
            });
            });

//Change H3's to bold
            $("h3").click(function() {
            $(this).next().find("li").css("font-weight", "bold");
            });
//Green button named "highlighter" will turn each last li to yellow

            $(document).ready(function() {
            $(".button").click(function () {
            $("ul li:last-child").css("background-color", "yellow");
            });
            });

//Change first li to blue
            $("li").click(function() {
            $(this).parent().find("li:first-child").css("color", "blue");
            });
// Change dt's to fade when clicked
            $('dt').on('click', function(){
            $(this).next().fadeToggle();
            });
//Change H3's to fade when clicked
            $('h3').on('click', function(){
            $(this).next().fadeToggle();

            });
