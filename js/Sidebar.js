(function ($) {

    "use strict";

    var fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
            var content = $('#content');
            content[0].style.marginLeft = '300px';
        });


    };
    fullHeight();

    $('#sidebarCollapse').on('click', function () {

        var content = $('#content');
        $('#sidebar').toggleClass('active');

        if (content[0].style.marginLeft == '300px') {
            content[0].style.marginLeft = '0';
        } else {
            content[0].style.marginLeft = '300px';
        }


        //if (slideActive[0].style.marginLeft != '-300px') {
        //    slideActive[0].style.marginLeft = '300px';
        //} else {
        //    slideActive[0].style.marginLeft = '0px';
        //}

        //if (slideActive[0] != 'nav#sidebar.active') {
        //    content[0].style.marginLeft = '300px';
        //} else {
        //    content[0].style.marginLeft = '-300px';
        //}

        //var slideActive = $('#sidebar.active');

        //if ($('#sidebar.active')) {
        //    content[0].style.marginLeft = '-300px';
        //} else {
        //    content[0].style.marginLeft = '3300px';
        //}
        //content[0].style.marginLeft = '+300px';

        //if ($('#sidebar:not(.active)')) {
        //    content[0].style.marginLeft = '+300px';
        //} else {
        //    content[0].style.marginLeft = '-300px';
        //}

        //if (content[0].style.marginLeft == '300px') {
        //    content[0].style.marginLeft = '-300px';
        //} else {
        //    content[0].style.marginLeft = '+300px';
        //}

        //if ($('#sidebar').toggleClass('active')) {
        //    $('#content').css('margin-left', '-300px');
        //} else {
        //    $('#content').css('margin-left', '+300px');
        //}
    });

    $('#sidebar:not(.active)')
    
    $('a.dropdown-toggle').on('click', function () {
        $('ul.collapse.list-unstyled').toggleClass('show');
    });

})(jQuery);
