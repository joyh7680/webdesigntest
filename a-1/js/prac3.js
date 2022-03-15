$(function(){//

    // tab menu 

    $('header nav ul.gnb>li').hover(function(){
        $('header nav ul.gnb>li>ul.sub').stop().slideDown();
     

    },function(){
        $('header nav ul.gnb>li>ul.sub').stop().slideUp();

    })

    // slide 
    //1. e 형제들 안보이게 

    // $('.slide .slide_all > li').siblings().css(){};/??? 
    $('.slide .slide_all > li').eq(0).siblings().css("top","-300px");

    // 2 var 

    var slideI = 0;

    // 2 setInterval ?????????????????? 


    // 3 setInterval 

   setInterval(function(){

    // if(){}else()
    // 문법은 그냥 외워야돼 지원아 

    if (slideI<2){
        slideI++;
    }else{
        slideI=0;
      }

    //   console.log(slideI);

    // 4  animate 
    $('.slide .slide_all > li').eq(slideI).siblings().animate({"top":"-300px"},500);
    $('.slide .slide_all > li').eq(slideI).animate({"top":"0px"},500);


   },3000);


})//