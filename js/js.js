$(document).ready(function(){
    $('#goToHome').click(function(){
        $('html, body').animate({
            scrollTop: $("#banner").offset().top
        }, 500);
    });
                            
    $('#goToAbout').click(function(){
        $('html, body').animate({
            scrollTop: $(".about-me").offset().top
        }, 500);
    });
    $('#goToMyProject').click(function(){
        $('html, body').animate({
            scrollTop: $(".projects").offset().top
        }, 500);
    });
    $('#goToMyCurriculum').click(function(){
        $('html, body').animate({
            scrollTop: $(".examples").offset().top
        }, 500);
    });
    $('#goToNetwork').click(function(){
        $('html, body').animate({
            scrollTop: $(".social").offset().top
        }, 500);
    });
});    