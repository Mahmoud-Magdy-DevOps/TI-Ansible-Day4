// script.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the heading element
    var heading = document.querySelector("h1");
  
    // Add a click event listener to the heading
    heading.addEventListener("click", function() {
      // Change the heading text color
      heading.style.color = getRandomColor();
    });
  
    // Function to generate a random color
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });