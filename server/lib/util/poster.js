const tweet = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1699551517965
},

        // Example post object
        const post = {
            "user": {
              "name": "Newton",
              "avatars": "https://i.imgur.com/73hZDYK.png",
              "handle": "@SirIsaac"
            },
            "content": {
              "text": "If I have seen further it is by standing on the shoulders of giants"
            },
            "created_at": 1699551517965
          };


      // Function to create HTML structure for the post
      function createPostHTML(post) {
          const postContainer = document.getElementById('post-container');

          const html = `
              <div class="user-profile">
                  <img src="${post.profilePicture}" alt="Profile Picture">
                  <span class="username">${post.username}</span>
              </div>
              <div class="post-content">
                  <p>${post.content}</p>
              </div>
              <div class="post-metadata">
                  <span class="timestamp">${post.timestamp}</span>
                  <div class="actions">
                      <span class="likes">Likes: ${post.likes}</span>
                      <span class="retweets">Retweets: ${post.retweets}</span>
                      <span class="comments">Comments: ${post.comments}</span>
                  </div>
              </div>
          `;

          // Set the innerHTML of the post container
          postContainer.innerHTML = html;
      }

      // Call the function with the post object
      createPostHTML(post);
  </script>

</body>

</html>
