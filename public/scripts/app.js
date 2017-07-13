/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 //function for momentjs


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
  var now = moment();
  var $date = now.startOf($date).fromNow()

  $footer.append($date);
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

var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

$(document).ready(function() {
var $tweet = createTweetElement(tweetData);
// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.tweets-container').append($tweet);
})
