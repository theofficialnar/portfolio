$(document).ready(function () {
    $('[data-toggle="popover"]').popover();

    $('#psu').iziModal({
        title: 'Pink Sadistic Unicorns',
        subtitle: 'A band website made with pure HTML and CSS.<br><a href="https://theofficialnar.github.io/Tuitt-Capstone1/" target="_blank"><button class="btn btn-default btn-xs"><i class="fa fa-eye" aria-hidden="true"></i> Live Preview</button></a> <a href="https://github.com/theofficialnar/Tuitt-Capstone1" target="_blank"><button class="btn btn-default btn-xs"><i class="fa fa-github" aria-hidden="true"></i> Source</button></a>',
        width: '800px',
        icon: 'fa fa-desktop',
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOutUp',
        headerColor: '#e7bb41'

    });
    $('#rodb').iziModal({
        title: 'myRagnarokdb',
        subtitle: 'A Ragnarok database website made with HTML, CSS, JQuery, AJAX, PHP & MySQL.<br><a href="http://myragnarokdb.x10host.com/" target="_blank"><button class="btn btn-default btn-xs"><i class="fa fa-eye" aria-hidden="true"></i> Live Preview</button></a> <a href="https://github.com/theofficialnar/ragnarok_database_cs2" target="_blank"><button class="btn btn-default btn-xs"><i class="fa fa-github" aria-hidden="true"></i> Source</button></a>',
        width: '800px',
        icon: 'fa fa-desktop',
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOutUp',
        headerColor: '#e7bb41'

    });
    $('#pi4').iziModal({
        title: 'PayIt4ward',
        subtitle: 'A payroll website made with HTML, CSS, JQuery, AJAX, Laravel & MySQL.<br><a href="https://payit4ward.000webhostapp.com/login" target="_blank"><button class="btn btn-default btn-xs"><i class="fa fa-eye" aria-hidden="true"></i> Live Preview</button></a> <a href="https://github.com/theofficialnar/PayIt4ward_cs3" target="_blank"><button class="btn btn-default btn-xs"><i class="fa fa-github" aria-hidden="true"></i> Source</button></a>',
        width: '800px',
        icon: 'fa fa-desktop',
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOutUp',
        headerColor: '#e7bb41'

    });

    $('#succEmail').iziModal({
        title: 'Email successfully sent!',
        subtitle: 'Thank you for contacting me. I\'ll get back to you soon.',
        headerColor: '#00af66',
        icon: 'fa fa-thumbs-o-up',
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOutUp',
        timeout: '5000',
        timeoutProgressbar: true
    });

    $('#scrollArrow').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    $("#particles").particles({
        amount: 70,
        duration: {
            random: true
        },
        speed: {
            speed: 1
        },
        layout: "after",
        color: {
            random: true
        },
        position: {
            x: 0
        }
    });
});

//auto init AOS on height change
$(function () {
    AOS.init();

    onElementHeightChange(document.body, function () {
        AOS.refresh();
    });
});

function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight
    var newHeight;

    (function run() {
        newHeight = elm.clientHeight;
        if (lastHeight !== newHeight) callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer) {
            clearTimeout(elm.onElementHeightChangeTimer);
        }

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
}


// porfolio gallery modals
$(document).on('click', '#psuTrigger', function (event) {
    event.preventDefault();
    $('#psu').iziModal('open');
    $('#psuSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#psuNav'
    });
    $('#psuNav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#psuSlider',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true
    });
});

$(document).on('click', '#rodbTrigger', function (event) {
    event.preventDefault();
    $('#rodb').iziModal('open');
    $('#rodbSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#rodbNav'
    });
    $('#rodbNav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#rodbSlider',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true
    });
});

$(document).on('click', '#pi4Trigger', function (event) {
    event.preventDefault();
    $('#pi4').iziModal('open');
    $('#pi4Slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#pi4Nav'
    });
    $('#pi4Nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#pi4Slider',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true
    });
});

// contact form modal
$(document).on('click', '#succEmailTrigger', function (event) {
    event.preventDefault();
    $('#succEmail').iziModal('open');
});