// this fuction checks if the textarea has more than 140 characters
// if the user types more than 140 characters the font of span will change to red
// if characters > 140 there will be a error message beside the sumbit button
$(function() {
  $("textarea").keyup(function(event) {
    var textlength = $(this).val().length
    let counterVal =  $('.counter').text(140 - textlength);
    if (textlength > 140) {
      counterVal.css({
        'color': 'red'
      });
      $(".errMsg").text("You must enter less than 140 characters!! ")
    } else if(textlength === 0){
      $(".errMsg").text("Enter characters to sumbit tweet!")
    } else {
      counterVal.css({
        'color' : 'black'
      });
      $(".errMsg").text("");
    }
  });
});
