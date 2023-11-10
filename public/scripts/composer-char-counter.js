$(document).ready(function() {
console.log('loaded');
  // Get references to the input field and counter element
    var inputField = document.getElementById('tweet-text');
    var charCount = document.getElementById('charCount');
  // Add an input event listener to the input field
    inputField.addEventListener('input', function() {
        // Get the current value of the input field
        var inputValue = inputField.value;
        console.log('value: ' + inputValue);
        // Update the character count
        charCount.textContent = 140-inputValue.length;
        if (140-inputValue.length < 0) {
          charCount.classList.add('counter-red');
        } else {
          charCount.classList.remove('counter-red');
        }
    });
});

