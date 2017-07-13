/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 var data = [
   {
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
   },
   {
     "user": {
       "name": "Descartes",
       "avatars": {
         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
       },
       "handle": "@rd" },
     "content": {
       "text": "Je pense , donc je suis"
     },
     "created_at": 1461113959088
   },
   {
     "user": {
       "name": "Johann von Goethe",
       "avatars": {
         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
       },
       "handle": "@johann49"
     },
     "content": {
       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
     },
     "created_at": 1461113796368
   }
 ];

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
function renderTweets(tweets) {
  tweets.forEach((tweetData) => {
    var tweet = createTweetElement(tweetData);
    $('.tweets-container').append(tweet);
  });
}
$(document).ready(function() {
renderTweets(data);
})
