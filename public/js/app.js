$( document ).ready(function() {

    $('.alert').hide();

    $("#registrationForm").on("submit", function(e) {
     if($("#inputName").val().length === 0) {
        $(".alert").fadeIn(1500);
        return false;
    } else if($("#inputEmail").val().length === 0) {
        $(".alert").fadeIn(1500);
        return false;
    } else if($("#inputMessage").val().length === 0){
        $(".alert").fadeIn(1500);
        return false;
    } else {
        return true;
    }
 });
});