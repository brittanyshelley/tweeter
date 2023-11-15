// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */




$(document).ready(function() {



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

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


// Function to create a tweet element
  const createTweetElement = function(tweetData) {
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
      <p>${escape(tweetData.content.text)}</p>
    </div>
    <footer class="tweet-footer">
    <span class="timestamp">${timeago.format(tweetData.created_at).toLocaleString()}</span>
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

  $("form").on("submit", function (event) {
  event.preventDefault();
  const formData = $("form").serialize();

    //Posts the tweet to "/tweets" page and then loads the tweets
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: formData
    }).then(loadTweets).catch(function (err) {
      console.log('Error: ', err);
    });

});
//Grabs the post information and displays it on the tweeter page
const loadTweets = function() {
  $.ajax({
    method: 'GET',
    url: '/tweets',
    success: function (data) {
      console.log('Success: ', data);
      renderTweets(data);
    },
    error: function (err) {
      console.log('Error: ', err);
    }
  });
};

  loadTweets()
});
