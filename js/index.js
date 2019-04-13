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
      event.target.style.color = "";
    }, 500);
  }, false);

  