$( document ).ready(function() {

  $("#aboutBtn").click(function() {
    $('html, body').animate({
      scrollTop: $("#aboutsection").offset().top
    }, 1800);
  });

  $("#projectBtn").click(function(e) {
    $('html, body').animate({
      scrollTop: $("#allprojects").offset().top
    }, 1800);
  });

  $("#mainBtn").click(function(e) {
    $('html, body').animate({
      scrollTop: $("#allprojects").offset().top
    }, 1800);
  });

});


