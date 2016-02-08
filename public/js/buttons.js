$( document ).ready(function() {

  $("#aboutBtn").click(function() {
    $('html, body').animate({
      scrollTop: $("#aboutsection").offset().top
    }, 1800);
  });

  $("#projectBtn").click(function() {
    $('html, body').animate({
      scrollTop: $("#allprojects").offset().top
    }, 1800);
  });

  $("#mainBtn").click(function() {
    $('html, body').animate({
      scrollTop: $("#allprojects").offset().top
    }, 1800);
  });

  $("#techBtn").click(function() {
    $('html, body').animate({
      scrollTop: $("#techsection").offset().top
    }, 1800);
  });

});


