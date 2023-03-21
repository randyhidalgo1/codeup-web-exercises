$(document).ready(function() {
    // Define the image sources
    let image1 = "images/pic1.jpg";
    let image2 = "images/pic2.jpg";
    let image3 = "images/pic3.jpg";

    // Left frame swaps to right
    $("#left-frame button").click(function() {
        let centerImage = $("#center-frame img").attr("src");
        $("#left-frame img").attr("src", centerImage);
        $("#center-frame img").attr("src", image1);
    });

    // Center frame swaps randomly
    $("#center-frame button").click(function() {
        let randomNumber = Math.floor(Math.random() * 2); // 0 or 1
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

    // Right frame swaps to left
    $("#right-frame button").click(function() {
        let centerImage = $("#center-frame img").attr("src");
        $("#right-frame img").attr("src", centerImage);
        $("#center-frame img").attr("src", image3);
    });

    // Change first li color on click
    $(".frame li:first-child").click(function() {
        $(this).css("color", "blue");
    });
});

$("h3").click(function() {
    $(this).next().find("li").css("font-weight", "bold");
});
$(document).ready(function() {
    $(".button").click(function () {
        $("ul li:last-child").css("background-color", "yellow");
    });
});
$("li").click(function() {
    $(this).parent().find("li:first-child").css("color", "blue");
});

$('dt').on('click', function(){
    $(this).next().fadeToggle();
});

$('h3').on('click', function(){
    $(this).next().fadeToggle();

});
