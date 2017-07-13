/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  function createTweetElement(tweetData){
    var $tweet = $("<article>");
    //headers
    var $header = $("<header>").addClass("tweet-header");
    $tweet.append($header);
    var $img = $("<img>").attr('src', tweetData.user.avatars.small);
    $header.append($img);
    var $profile = $("<span>").addClass("profile").text(tweetData.user.name);
    $header.append($profile);
    var $handler = $("<span>").addClass("atName").text(tweetData.user.handle);
    $header.append($handler);

    //body
    var $text = $("<p>").addClass("userMessage").text(tweetData.content.text);
    $tweet.append($text);

    //footer
    var $footer = $("<footer>").addClass("tweet-footer");
    $tweet.append($footer);
    var $date = $("<span>").addClass("date").text(tweetData.created_at);
    var relDate = moment($date).fromNow();
    $footer.append(relData);
    var $icon = $("<span>").addClass("icons");
    $footer.append($icon);

    // footer icons
    var $retweet = $("<i>").addClass("fa fa-retweet").attr('aria-hidden', 'true')
    $icon.append($retweet);
    var $heart = $("<i>").addClass("fa fa-heart").attr('aria-hidden', 'true')
    $icon.append($heart)
    var $flag = $("<i>").addClass("fa fa-flag").attr('aria-hidden', 'true')
    $icon.append($flag)

    return $tweet;
  };

  function renderTweets(tweets) {
    $('.tweets-container').empty();
    tweets.forEach((tweetData) => {
      var tweet = createTweetElement(tweetData);
      $('.tweets-container').prepend(tweet);
    });
  }

  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    const $form = $( this );
    $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'POST',
      data: $form.serialize()
    })
    .done((tweets) => {
      console.log('tweets:',tweets);

      renderTweets(tweets);
    });

  });


  $.ajax({
    url: 'http://localhost:8080/tweets',
    method: 'GET'
  })
  .done((tweets) => {
    console.log('tweets:',tweets);
    renderTweets(tweets);
  });

})
