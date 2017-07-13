$(document).ready(function () {
  $("textarea").keyup(function(event) {
    var textlength = $(this).val().length
    let textcolor =  $('.counter').text(140 - textlength);
    if (textlength > 140) {
      textcolor.css({
        'color': 'red'
      });
      alert("Your post must be less than 140 characters!!");
    } else {
      textcolor.css({
        'color' : 'black'
      });
    }
  });
});
