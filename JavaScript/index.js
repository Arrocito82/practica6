// swal("God Job Andre👌😘😎", "I'm Working...!!YEi", "info");

$("h1").on("mouseover", function() {
    $("h1").addClass("clicked-heading");
});

$("h1").on("mouseout", function() {
    $("h1").removeClass("clicked-heading");
});

$("input").keydown(function(event) {
    $("h1").text(event.key);
});

// $("h1").click(function() {
//     $("h1").addClass("clicked-heading");
//     $("h1").after('<p><em>Hi there, How are ya!</em></p>');
//     setTimeout(function() {
//         $("h1").removeClass("clicked-heading");
//     }, 500);

// });



// $("input").keydown(function(evt) {
//     $("input").after(evt.key);
// });