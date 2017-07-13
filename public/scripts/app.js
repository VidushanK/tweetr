/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  function createTweetElement(tweetData){
    var $tweet = $("<article>");

    //headers
    var $header = $("<header>").addClass("tweet-header").appendTo($tweet);
    var $img = $("<img>").attr('src', tweetData.user.avatars.small).appendTo($header);
    var $profile = $("<span>").addClass("profile").text(tweetData.user.name).appendTo($header);
    var $handler = $("<span>").addClass("atName").text(tweetData.user.handle).appendTo($header);

    //body
    var $text = $("<p>").addClass("userMessage").text(tweetData.content.text).appendTo($tweet);

    //footer
    var $footer = $("<footer>").addClass("tweet-footer").appendTo($tweet);
    var $date = $("<span>").addClass("date").text(tweetData.created_at);
    var relDate = moment(tweetData.created_at).fromNow();
    $footer.append(relDate);
    // footer icons
    var $icon = $("<span>").addClass("icons").appendTo($footer);
    var $retweet = $("<i>").addClass("fa fa-retweet").attr('aria-hidden', 'true').appendTo($icon);
    var $heart = $("<i>").addClass("fa fa-heart").attr('aria-hidden', 'true').appendTo($icon);
    var $flag = $("<i>").addClass("fa fa-flag").attr('aria-hidden', 'true').appendTo($icon);

    return $tweet;
  };

// render the tweets, delete all the msgs, then for each loop add all the tweets
  function renderTweets(tweets) {
    $('.tweets-container').empty();
    tweets.forEach((tweetData) => {
      var tweet = createTweetElement(tweetData);
      $('.tweets-container').prepend(tweet);
    });
  }

// use the tweet users information to post a new message
  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    const $form = $( this );
    $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'POST',
      data: $form.serialize()
    })
    .done((tweets) => {
      renderTweets(tweets);
    });
  });
// ajax get method to get tweet users
  $.ajax({
    url: 'http://localhost:8080/tweets',
    method: 'GET'
  })
  .done((tweets) => {
    renderTweets(tweets);
  });
})
