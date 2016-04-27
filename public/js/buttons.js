$( document ).ready(function() {

  $("#aboutBtn").click(function() {
    $('html, body').animate({
      scrollTop: $("#about-section").offset().top
    }, 1800);
  });

  $("#projectBtn").click(function() {
    $('html, body').animate({
      scrollTop: $("#projectsection").offset().top
    }, 1800);
  });  

  $("#contactBtn").click(function() {
    $('html, body').animate({
      scrollTop: $("#media-section").offset().top
    }, 1800);
  });


});


