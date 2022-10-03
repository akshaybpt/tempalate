
   // get the element to animate
var element = document.getElementById('parallexbox');
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll',fadeInUp);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

// animate element when it is in view
function fadeInUp() {
  // is element in view?
  if (inView()) {
      // element is in view, add class to element
      element.classList.add('fadeInUp');
  }
  
}


document.addEventListener("scroll", () => {
  function counter(id, start, end, duration) {
   let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
     current += increment;
     obj.textContent = current;
     if (current == end) {
      clearInterval(timer);
     }
    }, step);
  }
  counter("count1", 0, 345, 1500);
  counter("count2", 0, 672, 900);
  counter("count3", 0, 230, 1450);
  counter("count4", 0, 598, 950);
 });
   