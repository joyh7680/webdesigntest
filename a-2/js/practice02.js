$(function(){//

    //  nav 
    $('header nav .gnb > li').hover(function(){
        $('nav .sub,.nav_bg').stop().slideDown();

    },function(){
        $('nav .sub,.nav_bg').stop().slideUp();

    });


   //slide 
    //    eq 0 의 형제들 없애기 
   $(".slide li").eq(0).siblings().css("left","-1200px");

    //    style 가서 ㄴslide overflow hidden 

   var slideI = 0;

   setInterval(function(){
       if(slideI < 2){
           slideI++;

       }else{
           slideI = 0;

       }

       
    //    반복문만들었으니까 이제 형제들 animate 업생주기 

        $('.slide li').eq(slideI).siblings().animate({ 
            left : "-1200px"
        },500);
        $('.slide li').eq(slideI).animate({ 
            left : "0px"},500);

   },3000);



})//