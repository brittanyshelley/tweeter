/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

function createTweetElement(tweetData) {
  const $tweet = `
  <article class="tweet">
  <h1 class="tweet-header">
  <div class="tweet-header-left">
    <img src="${tweetData.user.avatars}" alt="Profile Picture">
    <span class="username">${tweetData.user.name}</span>
    </div>
    <span class="handle">${tweetData.user.handle}</span>
  </h1>
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
  `;
  return $tweet;
}

// Test / driver code (temporary). Eventually will get this from the server.


const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.



// // Fake data taken from initial-tweets.json
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd"
//     },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ];

// const renderTweets = function (tweets) {
//   const $tweetsContainer = document.getElementById('tweets-container');
//   // Clear existing content in the container
//   $tweetsContainer.innerHTML = '';
//   // Loop through tweets and append each tweet element to the container
//   tweets.forEach(tweet => {
//     const $tweet = createTweetElement(tweet);
//     $tweetsContainer.appendChild($tweet);
//   });
// };

// const createTweetElement = function (tweet) {
//   const $tweet = document.createElement('div');
//   $tweet.classList.add('tweet');

//   const $userProfile = document.createElement('div');
//   $userProfile.classList.add('user-profile');
//   $userProfile.innerHTML = `
//     <img src="${tweet.user.avatars}" alt="Profile Picture">
//     <span class="username">${tweet.user.name}</span>
//     <span class="handle">${tweet.user.handle}</span>
//   `;

//   const $content = document.createElement('div');
//   $content.classList.add('content');
//   $content.textContent = tweet.content.text;

//   const $createdAt = document.createElement('div');
//   $createdAt.classList.add('created-at');
//   $createdAt.textContent = new Date(tweet.created_at).toLocaleString();

//   // Append user profile, content, and created_at to the tweet element
//   $tweet.appendChild($userProfile);
//   $tweet.appendChild($content);
//   $tweet.appendChild($createdAt);

//   return $tweet;
//   console.log($tweet);
// };

// // Call renderTweets with the fake data
// renderTweets(data);
// createTweetElement(data[0]);