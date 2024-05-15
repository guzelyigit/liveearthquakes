$(document).ready(function(){
    $(".sub-email-btn").on("click", function() {
        var email = $("#sub-email").val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            $("#sub-email").attr("style", "border-color: red;");

        } else {
            $("#confirmationModal").removeClass("fade");
            $("#confirmationModal").removeClass("modal");
            $("#confirmationModal").addClass("modal-show");

        }
    });

    $(".modal-close-btn").on("click", function() {
        $("#confirmationModal").removeClass("modal-show");
        $("#confirmationModal").addClass("modal");
        $("#confirmationModal").addClass("fade");
    });
});