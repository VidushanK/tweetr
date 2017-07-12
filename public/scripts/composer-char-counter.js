$(document).ready(function () {
  $("textarea").keyup(function(event) {
    var textlength = $(this).val().length
    let textcolor =  $('.counter').text(140 - textlength);
    if (textlength > 140) {
      textcolor.css({
        'color': 'red'
      });
    } else {
      textcolor.css({
        'color' : 'black'
      });
    }
  });
});