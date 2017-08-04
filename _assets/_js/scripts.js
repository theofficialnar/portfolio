$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
    $('#psu').iziModal({
        // openFullscreen: true
        title: 'Pink Sadistic Unicorns',
        subtitle: 'A band website made with pure HTML and CSS.<br><a href="https://theofficialnar.github.io/Tuitt-Capstone1/" target="_blank"><button class="btn btn-default btn-xs">Live Preview</button></a>',
        width: '800px'
      
    });

    

    
})

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