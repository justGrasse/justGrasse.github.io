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
