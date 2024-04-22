
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top <= 250
  );
}
let BGPage3Count = new Array();
// Function to handle scroll event
function handleScroll(){
  let elements = document.querySelectorAll(".bgpage3");
  i=0;
  elements.forEach(function(element) {
    element.style.id = String(i);
    i++;
    if (isInViewport(element)) {
      if (BGPage3Count.includes(element.style.id) === false){
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = null;
        BGPage3Count.push(element.style.id);
        console.log(element.style.id);
      }
    }
  });
}    

let duoDivisionCount = new Array();
// Function to handle scroll event
function handleCroll() {
  var elements = document.querySelectorAll(".duoDivision");
  i=0;
  elements.forEach(function(element) {
    element.style.id = String(i);
    i++;
    if (isInViewport(element)) {
      if (duoDivisionCount.includes(element.style.id) === false){
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = null;
        duoDivisionCount.push(element.style.id);
        console.log(element.style.id);
      }
    }
  });
}  

let trioDivisionCount = new Array();
// Function to handle scroll event
function handleRoll() {
  var elements = document.querySelectorAll(".trioDivision");
  i=0;
  elements.forEach(function(element) {
    element.style.id = String(i);
    i++;
    if (isInViewport(element)) {
      if (trioDivisionCount.includes(element.style.id) === false){
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = null;
        trioDivisionCount.push(element.style.id);
        console.log(element.style.id);
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
handleRoll();



