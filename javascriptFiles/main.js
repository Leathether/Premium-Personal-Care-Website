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
  var elements = document.getElementsByClassName("bgpage3");
  elements(function(element) {
    if (isInViewport(element)) {
      element.classList.add(bgpage3AnimeClass);
    }
  });
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Initial check when page loads
handleScroll();

