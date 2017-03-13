$(document).ready(function(){

  $('.getBio').click(function () {
    $('html, body').animate({
      scrollTop: $('#getBio').offset().top
    }, 1200);
  });

  $('.viewProjects').click(function () {
    $('html, body').animate({
      scrollTop: $('#viewProjects').offset().top
    }, 1200);
  });

  $('.contactMe').click(function () {
    $('html, body').animate({
      scrollTop: $('#contactMe').offset().top
    }, 1200);
  });

});
//
// $(document).ready(function () {
//   var scrollStart = 0;
//   var scrollEnd = 0;
//   var hOffset = $('#start-navbar-dark').offset();
//   var aOffset = $('#start-about-animation').offset();
//   var pOffset = $('#start-projects').offset();
//
//   // Optimization flags so that it doesnt change css every scroll
//   var aboutAnimate = true;
//   var headerAnimate = true;
//   var projectsAnimate = true;
//
//   $(document).scroll(function () {
//     scrollStart = $(this).scrollTop();
//     scrollEnd = scrollStart + $(window).height();
//     if (scrollStart > hOffset.top && headerAnimate) {
//       $('.navbar').css('background', '#373737');
//       headerAnimate = false;
//     } else if (scrollStart === hOffset.top) {
//       $('.navbar').css('background', 'none');
//       headerAnimate = true;
//     } else if (scrollEnd > aOffset.top && aboutAnimate) {
//       $('.about p, .about h4').addClass('animated fadeInUp');
//       $('.about h3').addClass('animated fadeInDown');
//       aboutAnimate = false;
//     } else if (scrollEnd > pOffset.top && projectsAnimate) {
//       $('.f3').addClass('animated fadeInUp');
//       $('.s3').addClass('animated fadeInUp');
//       projectsAnimate = false;
//     }
//   });
// });
