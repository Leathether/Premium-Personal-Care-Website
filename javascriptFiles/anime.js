
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
  elementsArray = Array.from(elements)
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.style.animation = 'none';
      element.offsetHeight;
      element.style.animation = null;
      if (elements.item(elementsArray.length -1) === element){
        console.log("hi")
        window.removeEventListener("scroll", handleScroll);
      }
    }
  });
}

function handleCroll() {
  var elements = document.querySelectorAll(".duoDivision");
  elementsArray = Array.from(elements)
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.style.animation = 'none';
      element.offsetHeight;
      element.style.animation = null;
      window.removeEventListener("scroll", handleCroll);
      if (elements.item(elementsArray.length -1) === element){
        console.log("hi")
        window.removeEventListener("scroll", handleCroll);
      }
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
      if (elements.item(elementsArray.length -1) === element){
        console.log("hi")
        window.removeEventListener("scroll", handleRoll);
      }
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



