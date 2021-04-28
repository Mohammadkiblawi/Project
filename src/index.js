import $ from 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css'
import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min';

$(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        $("#navBar").addClass("noTransparrent");
    } else {
        $("#navBar").removeClass("noTransparrent");
    }
});


$(document).ready(function () {

    $('.nav-link').click(function () {

        $('.nav-item').removeClass("active");

        $(this).parent().addClass("active");

    });
    $("a.scroll").on('click', function (event) {

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800, function () {});
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800);

    });
});