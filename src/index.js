import $ from 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css'
import './scss/style.scss';
import './css/custom.css';
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

    $("#btn").on("click", function () {
        read();
    });


});

function read() {
    var description = document.getElementById("list");
    var moreText = document.getElementsByClassName("list-item");
    var btnText = document.getElementById("btn");
    if (description.style.display === "none") {
        description.style.display = "block";
        btnText.innerHTML = "عرض عناصر اقل";
        moreText.style.display = "none";

    } else {
        description.style.display = "none";
        btnText.innerHTML = "عرض المزيد";
        moreText.style.display = "block";
    }
}