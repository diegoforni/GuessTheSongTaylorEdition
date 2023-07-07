(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    

    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 60,
            backSpeed: 10,
            smartBackspace: false,
            loop: false
        });
    }
    
})(jQuery);

const element = document.getElementById("start");
element.addEventListener("click", start);

function start() {
    document.getElementById("start").style.visibility="hidden";
    document.getElementById("album-select").style.visibility="visible";
    document.getElementById("song-select").style.visibility="visible";
      // Typed Initiate
      if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = ",You will now be given, 20 words of a random song, Try to guess the song's title!";
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(','),
            typeSpeed: 60,
            backSpeed: 20,
            loop: false,
            showCursor: false
        });
    }
}
