/*
Version : 1.1
*/

jQuery(document).ready(function($){

    "use strict";

    /* Home RSVP Form */

    /* Home RSVP Form */
    $('#wdp_home_form').on('submit', function(e) {
        e.preventDefault();

        var name = $('#name').val();
        var guests = $('#guests').val();
        var events = $('#events option:selected').text();
        
        var message = "Hi, My name is " + name + ".\nI will be Attending your wedding.\nNo of guest: " + guests + ".\nAttending: " + events;
        var encodedMessage = encodeURIComponent(message);
        var phoneNumber = "2348102042019";
        
        var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
        
        window.open(whatsappUrl, '_blank');

        $('.wdp_home_form_success').addClass('show animated fadeInUp');
        $(this).hide();
    });

    /* Page RSVP Form */
    $('#wdp_page_form').on('submit', function(e) {
        e.preventDefault();
        
        var name = $(this).find('input[name="name"]').val();
        var guests = $(this).find('input[name="guests"]').val();
        var events = $(this).find('select[name="events"] option:selected').text();
        
        var message = "Hi, My name is " + name + ".\nI will be Attending your wedding.\nNo of guest: " + guests + ".\nAttending: " + events;
        var encodedMessage = encodeURIComponent(message);
        var phoneNumber = "2348102042019";
        
        var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
        
        window.open(whatsappUrl, '_blank');

        $('.wdp_page_form_success').addClass('show animated fadeInUp');
        $(this).hide();
    });

	/* FancySelect */
	
    $('select').fancySelect(); // Passing FancySelect classes to the element(s)
});