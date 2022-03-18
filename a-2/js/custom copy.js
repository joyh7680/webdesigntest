$(function(){//

    //  nav 
    $('header nav .gnb > li').hover(function(){
        $('nav .sub,.nav_bg').stop().slideDown();

    },function(){
        $('nav .sub,.nav_bg').stop().slideUp();

    });


   //slide 

   $(".slide li").eq(0).siblings().css("left","-1200px");

   var slideI = 0;

    setInterval(function () {

       if (slideI < 2){
           slideI++;
       } else {
           slideI = 0;
       }

    $("ul.slide li").eq(slideI).siblings().animate({
        left : "-1200px"
    },500);
    $("ul.slide li").eq(slideI).animate({
        left : "0px"
    },500);

   },3000); // 


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


})//