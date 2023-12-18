$(document).ready(function() {
    $("#contact-form").submit(function(event) {
        $.post("contact_form.php", function (data) {
            $("#contact-form").html('<div class="alert alert-success text-center">Success!</div>');
        }).fail(function () {
            $("#contact-form").html('<div class="alert alert-danger text-center">Could not reach server, please try again later.</div>')
        });
        event.preventDefault();
    });
    $("#booking-form").submit(function(event) {
        event.preventDefault();
        $.post("booking_form.php", function (data) {
            $("#booking-form").html('<div class="alert alert-success text-center">Booking Request Success!</div>');
        }).fail(function () {
            $("#booking-form").html('<div class="alert alert-danger text-center">Could not reach server, please try again later.</div>')
        });
        event.preventDefault();
    });
});



// function sendContact() {
//     // var valid;	
//     // valid = validateContactForm();
//     // if (valid) {
//     //     $("#contact-form-button").html("SENDING...");
//     //     jQuery.ajax({
//     //         url: "contact_form.php",
//     //         data:'name='+$("#cf-name").val()+
//     //         '&email='+$("#cf-email").val()+
//     //         '&phonenumber='+$("#cf-phonenumber").val()+
//     //         '&subject='+$("#cf-subject").val()+
//     //         '&message='+$("#cf-message").val(),
//     //         type: "POST",
//     //         success:function(_data){
//     //             $("#cf-button").html("SENT SUCCESSFULY!");
//     //         },
//     //         error:function (){
//     //             $("#cf-button").html("FAILED!");
//     //         }
//     //     });
//     //     $("#cf-button").html("SEND MESSAGE");
//     // }
// }

// function requestBooking() {
//     var valid;	
//     valid = validateBookingForm();
//     if(valid) {
//         $("#booking-form-button").html("BOOKING...");
//         jQuery.ajax({
//             url: "booking_form.php",
//             data:'name='+$("#bk-name").val()+
//             '&phonenumber='+$("#bk-phonenumber").val()+
//             '&service='+$("#bk-service").val()+
//             '&datetime='+$("#bk-datetime").val()+
//             '&notes='+$("#bk-notes").val(),
//             type: "POST",
//             success:function(data){
//                 $("#bk-button").html("BOOKING REQUESTED!");
//             },
//             error:function (){
//                 $("#bk-button").html("FAILED!");
//             }
//         });
//         $("#bk-button").html("BOOK NOW");
//     }
// }

// function validateContactForm() {
//     var valid = true;	
    
//     $(".cf-input").css('background-color','inherit');
//     $(".cf-info").html('');

//     required = "* Required";
//     if(!$("#cf-name").val()) {
//         $("#cf-name-info").html(required);
//         $("#cf-name").css('background-color','#FFFFDF');
//         valid = false;
//     }
//     if($("#cf-email").val()){
//         if(!$("#cf-email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
//             $("#cf-email-info").html("* Invalid");
//             $("#cf-email").css('background-color','#FFFFDF');
//             valid = false;
//         }
//     }
//     if(!$("#cf-phonenumber").val()) {
//         $("#cf-phonenumber-info").html(required);
//         $("#cf-phonenumber").css('background-color','#FFFFDF');
//         valid = false;
//     }
//     if(!$("#cf-subject").val()) {
//         $("#cf-subject-info").html(required);
//         $("#cf-subject").css('background-color','#FFFFDF');
//         valid = false;
//     }
//     if(!$("#cf-message").val()) {
//         $("#cf-message-info").html(required);
//         $("#cf-message").css('background-color','#FFFFDF');
//         valid = false;
//     }
//     return valid;
// }

// function validateBookingForm() {
//     var valid = true;	
    
//     $(".bk-input").css('background-color','');
//     $(".bk-info").html('');

//     required = "* Required";

//     if(!$("#bk-name").val()) {
//         $("#bk-name-info").html(required);
//         $("#bk-name").css('background-color','#FFFFDF');
//         valid = false;
//     }
//     if(!$("#bk-phonenumber").val()) {
//         $("#bk-phonenumber-info").html(required);
//         $("#bk-phonenumber").css('background-color','#FFFFDF');
//         valid = false;
//     }
//     if(!$("#bk-service").val()) {
//         $("#bk-service-info").html(required);
//         $("#bk-service").css('background-color','#FFFFDF');
//         valid = false;
//     }
//     if(!$("#bk-datetime").val()) {
//         $("#bk-datetime-info").html(required);
//         $("#bk-datetime").css('background-color','#FFFFDF');
//         valid = false;
//     }
//     return valid;
// }