// Your code goes here
//click

const button = document.querySelector('.btn');
button.addEventListener( 'click', event => {
    
button.textContent = 'clicked';
    
});

// mouseOver

const intro = document.querySelector('.intro')
intro.addEventListener( 'mouseover', event => {

event.target.style.color = 'aqua';


// reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = " purple";
    }, 500);
  }, false);

//   scroll
// const doc = document.querySelectorAll('document');
var last_known_scroll_position = 0;
var ticking = false;
const p = document.querySelector('p')
function doSomething(scroll_pos) {

  p.textContent = 'Hello Beauiful!';
    
}

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
     
    ticking = true;

  }
  
});

// resize
const logoHeading = document.querySelectorAll('.logo-heading')
// logoHeading.onresize = function(event){
//     event.target.textContent = 'E.T phone home!';
// };


window.addEventListener('resize', myFunction);

var x = 0;
function myFunction() {
  var txt = x += 1;
  document.querySelector(".logo-heading").textContent = 'E.T phone home!';
}
// logoHeading.addEventListener('resize', function(event) {
//     console.log('red');
//     logoHeading.textContent = 'E.T phone home!';
// });