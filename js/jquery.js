$(document).ready(function() {
    $('h3').hover(
        function() {
            $(this).css('background-color', 'blue');
        },
        function() {
            $(this).css('background-color', 'red');
        }
    );
});

$(document).ready(function() {
    $("h3").click(function() {
        $(this).next().slideToggle(500);
    })
})

$(document).ready(function() {
    $("h1").dblclick(function() {
        $(this).next().slideToggle(500);
    })
})

