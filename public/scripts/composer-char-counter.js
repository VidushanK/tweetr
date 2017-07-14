$(document).ready(function () {
  $("textarea").keyup(function(event) {
    var textlength = $(this).val().length
    let counterVal =  $('.counter').text(140 - textlength);
    if (textlength > 140) {
      counterVal.css({
        'color': 'red'
      });
      $(".errMsg").text("error : you must enter less than 140 characters!! ")
    }  else {
      counterVal.css({
        'color' : 'black'
      });
      $(".errMsg").text("");
    }
  });
});
