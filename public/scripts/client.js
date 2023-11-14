/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
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
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
$(document).ready(function() {
  renderTweets(tweetData);
});

// Assume renderTweets is implemented properly


// Function to render tweets
const renderTweets = function (tweets) {
  const $tweetsContainer = $('#tweets-container'); // jQuery selector
  $tweetsContainer.empty(); // jQuery method to clear the container

  // Loop through tweets and append each tweet element to the container
  tweets.forEach(tweet => {
    const $tweet = createTweetElement(tweet); // the $tweet is a jQuery object returned from createTweetElement
    $tweetsContainer.append($tweet); // jQuery method to append the tweet element
  });
};

// Function to create a tweet element
  function createTweetElement(tweetData) {
    const $tweet = $(`
    <article class="tweet">
    <header class="tweet-header">
    <div class="tweet-header-left">
      <img src="${tweetData.user.avatars}" alt="Profile Picture">
      <span class="username">${tweetData.user.name}</span>
      </div>
      <span class="handle">${tweetData.user.handle}</span>
    </header>
    <div class="tweet-body">
      <p>${tweetData.content.text}</p>
    </div>
    <footer class="tweet-footer">
      <span class="timestamp">${new Date(tweetData.created_at).toLocaleString()}</span>
      <div>
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
    </article>
    `);
    return $tweet;
  };

// Call renderTweets with the fake data when the page loads
window.onload = function () {
  renderTweets(tweetData);
};

createTweetElement(tweetData);
$(document).ready(function() {
  renderTweets(tweetData);
});

// Assume renderTweets is implemented properly

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.