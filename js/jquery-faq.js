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
