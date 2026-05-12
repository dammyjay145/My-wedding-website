/*
Version : 1.1
*/

jQuery(document).ready(function($){

    "use strict";

    /* Home RSVP Form */

    /* Home RSVP Form */
    $('#wdp_home_form').on('submit', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        var form = $(this);
        var name = $('#name').val();
        var guests = $('#guests').val();
        var events = $('#events').val();

        // Map 'Reception' to 'Redception' to match the typo on the Google Form radio button precisely
        if (events === "Reception") {
            events = "Redception";
        }

        var baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSectwsX6ROF3ikKA2cqouAtbP-aaO7K__Ot4OCXGmFHnHE2Fg/viewform";
        var params = new URLSearchParams();
        params.append("usp", "pp_url");
        params.append("entry.1498135098", name);
        params.append("entry.2606285", guests);
        params.append("entry.1214077163", events);

        var prefillUrl = baseUrl + "?" + params.toString();

        // Open the prefilled Google Form in a new tab for final verified submission
        window.open(prefillUrl, '_blank');

        // Reset the local form inputs
        form[0].reset();
        form.find('select').trigger('update.fs');
    });

    /* Page RSVP Form */
    $('#wdp_page_form').on('submit', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        var form = $(this);
        var name = form.find('input[name*="entry."], input[name="name"]').val();
        var guests = form.find('input[name*="entry."], input[name="guests"]').val();
        var events = form.find('select').val();

        if (events === "Reception") {
            events = "Redception";
        }

        var baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSectwsX6ROF3ikKA2cqouAtbP-aaO7K__Ot4OCXGmFHnHE2Fg/viewform";
        var params = new URLSearchParams();
        params.append("usp", "pp_url");
        params.append("entry.1498135098", name);
        params.append("entry.2606285", guests);
        params.append("entry.1214077163", events);

        var prefillUrl = baseUrl + "?" + params.toString();

        window.open(prefillUrl, '_blank');

        form[0].reset();
        form.find('select').trigger('update.fs');
    });

	/* FancySelect */
	
    $('select').fancySelect(); // Passing FancySelect classes to the element(s)
});