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
  const tweetContent = $('#tweet-text').val();

  //Error handling
  if (tweetContent.length > 140) {
    const errorMessage = $("#error-message");
    errorMessage.text('Tweet too long');
    $("#error-message").hide();
    // Use slideDown to reveal the error message with a slow animation
    $("#error-message").slideDown('slow', function () {
        // After sliding down, fade out the error message after a delay
        $(this).delay(2000).slideUp('slow');
    });


  } else if (tweetContent === '' || tweetContent === null) {
    const errorMessage = $("#error-message");
    errorMessage.text('No tweet to display');
    $("#error-message").hide();
    // Use slideDown to reveal the error message with a slow animation
    $("#error-message").slideDown('slow', function () {
        // After sliding down, fade out the error message after a delay
        $(this).delay(2000).slideUp('slow');
    });

  } else {
    //Posts the submitted tweet to "/tweets" page and then loads the tweets
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: formData
    })
    .then(() => {
      $('#tweet-text').val('');
      $('.counter').val('140');
      loadTweets();
    })
    .catch(function (err) {
      console.log('Error: ', err);
    });
  }
});
//Grabs the post information and displays it on the tweeter page
const loadTweets = function() {
  $.ajax({
    method: 'GET',
    url: '/tweets',
    success: function (tweetData) {
      console.log('Success: ', tweetData);
      renderTweets(tweetData);
    },
    error: function (err) {
      console.log('Error: ', err);
    }
  });

};
loadTweets();

});
