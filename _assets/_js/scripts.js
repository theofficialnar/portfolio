$(document).ready(function() {
    $('[data-toggle="popover"]').popover();

    $('#psu').iziModal({
        title: 'Pink Sadistic Unicorns',
        subtitle: 'A band website made with pure HTML and CSS.<br><a href="https://theofficialnar.github.io/Tuitt-Capstone1/" target="_blank"><button class="btn btn-default btn-xs">Live Preview</button></a>',
        width: '800px',
        icon: 'fa fa-desktop',
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOutUp'
      
    });
    $('#rodb').iziModal({
        title: 'myRagnarokdb',
        subtitle: 'A Ragnarok database website made with HTML, CSS, JQuery, AJAX, PHP & MySQL.<br><a href="http://myragnarokdb.x10host.com/" target="_blank"><button class="btn btn-default btn-xs">Live Preview</button></a>',
        width: '800px',
        icon: 'fa fa-desktop',
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOutUp'
      
    });
    $('#pi4').iziModal({
        title: 'PayIt4ward',
        subtitle: 'A payroll website made with HTML, CSS, JQuery, AJAX, Laravel & MySQL.<br><a href="https://payit4ward.000webhostapp.com/login" target="_blank"><button class="btn btn-default btn-xs">Live Preview</button></a>',
        width: '800px',
        icon: 'fa fa-desktop',
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOutUp'
      
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
})

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

$(document).scroll(function (){
    var doc = $(this).scrollTop();
    if(doc > 200){
        $('.year').trigger('click');
    }
    
    // $('.edu').each(function(){
    //     if(doc > 150){
    //         $(this).fadeIn();
    //     }else{
    //         $(this).fadeOut();
    //     }
    // })
});