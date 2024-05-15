$(document).ready(function() {
    $(".amount-field").on("scroll", function() {
        var scrollAmount = $(".amount-field").scrollTop();
        $(".amount-field").scrollTop(scrollAmount + step);
    });

    $(".name-field-inpt").on("change", function() {
        var name = $(".name-field-inpt").val();
        var nameRegex = /^[a-zA-Z\s]+$/;

        if (!nameRegex.test(name)) {
            $(".name-field-inpt").attr("style", "border-color: red;");
            $(".name-field-desc").text("Name must contain only letters and spaces!");
        } else {
            $(".name-field-inpt").attr("style", "border-color: none;");
            $(".name-field-desc").text("");
        }
    });

    $(".email-field-inpt").on("change", function() {
        var email = $(".email-field-inpt").val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            $(".email-field-inpt").attr("style", "border-color: red;");
            $(".email-field-desc").text("Email must be contain @ and . characters!");
        } else {
            $(".email-field-inpt").attr("style", "border-color: none;");
            $(".email-field-desc").text("");
        }
    });

    $(".amount-field-inpt").on("change", function() {
        var amount = $(".amount-field-inpt").val();
        var amountRegex = /^\d+(\.\d{1,2})?$/;

        if (!amountRegex.test(amount)) {
            $(".amount-field-inpt").attr("style", "border-color: red;");
            $(".amount-field-desc").text("Amount must be a valid number!");
        } else {
            $(".amount-field-inpt").attr("style", "border-color: none;");
            $(".amount-field-desc").text("");
        }
    });

    $(".dnt-info-btn").on("click", function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var amount = $("#amount").val();
        var paymentType = $("#paymentType").val();

        if (name == "" || email == "" || amount == "" || paymentType == "") {
            alert("Please fill all fields!");
        } else {
            var nameRegex = /^[a-zA-Z\s]+$/;
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            var amountRegex = /^\d+(\.\d{1,2})?$/;

            if (!nameRegex.test(name)) {
                $(".name-field-inpt").attr("style", "border-color: red;");
                $(".name-field-desc").text("Name must contain only letters and spaces!");
            } else if (!emailRegex.test(email)) {
                $(".email-field-inpt").attr("style", "border-color: red;");
                $(".email-field-desc").text("Email must be contain @ and . characters!");
            } else if (!amountRegex.test(amount)) {
                $(".amount-field-inpt").attr("style", "border-color: red;");
                $(".amount-field-desc").text("Amount must be a valid number!");
            } else {

                if (paymentType == "creditCard") {
                    $(".donate-form").hide();
                    $(".donate-credit-card").show();
                } else if (paymentType == "bankTransfer") {
                    $(".donate-form").hide();
                    $(".donate-bank-transfer").show();
                } else {
                    alert("Please select a payment type!");
                }
            }


        }
    });

    $(".dnt-cc-btn").on("click", function() {
        var creditCardNumber = $("#creditCardNumber").val();
        var expirationDate = $("#expirationDate").val();
        var cvv = $("#cvv").val();

        if (creditCardNumber == "" || expirationDate == "" || cvv == "") {
            alert("Please fill all fields!");
        } else {
            var creditCardNumberRegex = /^[0-9]{1,16}$/;
            var expirationDateRegex = /^[0-9]{2}\/[0-9]{2}$/;
            var cvvRegex = /^[0-9]{3}$/;

            if (!creditCardNumberRegex.test(creditCardNumber)) {
                $(".credit-card-field-inpt").attr("style", "border-color: red;");
                $(".credit-card-field-desc").text("Credit card number must contain only numbers and must be 16 characters long!");
            } else if (!expirationDateRegex.test(expirationDate)) {
                $(".expiration-field-inpt").attr("style", "border-color: red;");
                $(".expiration-field-desc").text("Expiration date must be in MM/YY format!");
            } else if (!cvvRegex.test(cvv)) {
                $(".cvv-field-inpt").attr("style", "border-color: red;");
                $(".cvv-field-desc").text("CVV must be a 3 digit number!");
            } else {
                alert("Payment with credit card is successful!");
            }
        }
    });

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