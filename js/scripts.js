/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
  $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
      var $next = $(this).next('.quote');
      fade($next.length > 0 ? $next : $(this).parent().children().first());
 });
}
fade($('.quoteLoop > .quote').first());


/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function() {

  if ($(window).scrollTop() > 300) {
      $('.main_nav').addClass('sticky');
  } else {
      $('.main_nav').removeClass('sticky');
  }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
  if ($('.main_nav').hasClass('open-nav')) {
      $('.main_nav').removeClass('open-nav');
  } else {
      $('.main_nav').addClass('open-nav');
  }
});

$('.main_nav li a').click(function() {
  if ($('.main_nav').hasClass('open-nav')) {
      $('.navigation').removeClass('open-nav');
      $('.main_nav').removeClass('open-nav');
  }
});


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function($) {

 $('smooth-scroll').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
        window.location.hash = target;
    });
});

});

const smoothScroll = function (target, duration) {
    const targetSection = document.querySelector(target);
    const targetPosition = targetSection.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    const animation = function (currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
  
    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  
    requestAnimationFrame(animation);
  };
  
  const smoothScrollLink = document.querySelector("#smooth-scroll-link");
  smoothScrollLink.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("#about", 1000);
  });
 
 
  const SmoothScroll = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
    };
  
TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);