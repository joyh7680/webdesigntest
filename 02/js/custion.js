$(document).ready(function () {

    //네비게이션
    $("header nav ul.gnb > li").mouseenter(function () {
        $(".nav_bg,ul.sub").stop().slideDown();

    });
    $("header nav ul.gnb > li").mouseleave(function () {
        $(".nav_bg,ul.sub").stop().slideUp();

    });

    //슬라이드
    //0 (1 2 0 1 2 0)
    var slideI = 0;
    setInterval(function () {
        if (slideI < 2) {
            slideI++;
        } else {
            slideI = 0;
        }
        $("ul.slide li").eq(slideI).siblings().animate({
            left: "-1200px"
        }, 500);
        $("ul.slide li").eq(slideI).animate({
            left: "0"
        }, 500);
    }, 3000);

    //패밀리사이트
    $("footer .fam p").click(function () {
        $(this).toggleClass("on");
        $("footer .fam ul").stop().slideToggle();
    });

    
    //모달
    $(".contents .notice ul li").eq(0).click(function () {
        $(".modal").fadeIn();
    });

    $(".btn").click(function () {
        $(".modal").fadeOut();
    })



}); //ready end
