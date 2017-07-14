/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {

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

  // why keep spelling out ajax, im lazy
  // also what happens when i dont use jquery at some point
  function request(url, method, data={}) {
    return $.ajax({url: url, method: method, data: data})
  }

  // gets user tweets from backend,
  function getTweetsAjax() {
    return request('/tweets', 'GET');
  }

  // sends tweets to backend, reusable function; so I won't reuse Ajax
  function saveTweetAjax(tweetData){
    return request('/tweets', 'POST', tweetData);
  }

  // render the tweets, delete all the msgs, then for each loop add all the tweets
  function renderTweets(tweets) {
    $('.tweets-container').empty();
    tweets.forEach((tweetData) => {
      var tweet = createTweetElement(tweetData);
      $('.tweets-container').prepend(tweet);
    });
  }
  // once you click the compose button, it will show new tweet
  $( "button" ).click(function() {
    $( ".new-tweet" ).slideToggle( "slow" );
  });

  // use the tweet users information to post a new message
  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    const $form = $( this );
    var tweetLength = $form.find('textarea').val().length;

    // tweet length must be within 140 but never empty
    // since we dont want to send empty tweets to server
    if (tweetLength > 140 || tweetLength === 0) { return false }
    var tweetData = $form.serialize();
    saveTweetAjax(tweetData).done(renderTweets);
  });

  // on initial page load get me all tweets from server via ajax
  getTweetsAjax().done(renderTweets);
})
