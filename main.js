$(function(){

    gsap.registerPlugin(ScrollTrigger);
    
    /* header */
    $(".openbtn").click(function () {
        $(this).toggleClass('active');
        $("#g-nav").toggleClass('panelactive');
        $("#container").toggleClass('mainblur');
    });
    
    $("#g-nav a").click(function () {
        $(".openbtn").removeClass('active');
        $("#g-nav").removeClass('panelactive');
        $("#container").removeClass('mainblur');
    });

    // section間の線
    document.querySelectorAll(".line").forEach((item) => {
        gsap.to(
            item,
            {
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: 'bottom 75%', 
                },
            },
        );
    });

    // serviceの背景
    document.querySelectorAll(".service-box-color").forEach((item) => {
        gsap.from(
            item,
            {
            scaleY: 0,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: 'top 50%', 
                },
            },
        );
    });

    // workの画像
    document.querySelectorAll(".works-item").forEach((item) => {
        gsap.from(
            item,
            {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: 'top 60%', 
                },
            },
        );
    });

    // footer pagetop
    $('.fa-angle-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});