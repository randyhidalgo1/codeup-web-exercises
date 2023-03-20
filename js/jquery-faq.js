//
// $.visible.on('click', function(){
//     // $(this).toggleClass('highlight');
//     $("dd").animate({
//         opacity: 0.25
//     }, 3000, function() {
//         // Animation complete.
//     });
// });

$('dt').on('click', function(){
    $(this).next().fadeToggle();
});

$('button').on('click', function(){
    $(this).next().fadeToggle();
    $( "li" ).last().css( "background-color", "yellow" );

});


// $('button').on('click', function(){
//     $(this).next().fontWeight(900);
// });


// $( "li" ).last("li").css( "background-color", "yellow" );
