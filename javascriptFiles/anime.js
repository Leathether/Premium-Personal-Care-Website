//// Function to check if an element is in the viewport
//function isInViewport(element) {
//    var rect = element.getBoundingClientRect();
//    return (
//      rect.top >= 0 &&
//      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
//  }
//  
//  let animationRun = false;
//  // Function to handle scroll event
//  function handleScroll(CSSClass, anime) {
//    var elements = document.getElementsByClassName(CSSClass);
//    if (isInViewport(elements)) {
//      elements.style.animation = anime;
//    }
//  }
//  
//  // Add scroll event listener
//  window.addEventListener("scroll", handleScroll);
//
//  // Initial check when page loads
//    handleScroll('.bgpage3','BGPage3Anime');
//    handleScroll('.duoDivision','duoDivisionAnime');
//    handleScroll('.trioDivision','trioDivisionAnime');
//  

// Function to check if an element is in the viewport
// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  var elements = document.querySelectorAll(".bgpage3");
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.style.animation = 'none';
      element.offsetHeight;
      element.style.animation = null;
    }
  });
}

function handleCroll() {
  var elements = document.querySelectorAll(".duoDivision");
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.style.animation = 'none';
      element.offsetHeight;
      element.style.animation = null;
    }
  });
}

function handleRoll() {
  var elements = document.querySelectorAll(".trioDivision");
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.style.animation = 'none';
      element.offsetHeight;
      element.style.animation = null;
    }
  });
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);
window.addEventListener("scroll", handleCroll);
window.addEventListener("scroll", handleRoll);

// Initial check when page loads
handleScroll();
handleCroll();
handleRoll()



