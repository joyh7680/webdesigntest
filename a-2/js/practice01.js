$(function(){//

    //  nav 
    $('header nav .gnb > li').hover(function(){
        $('nav .sub,.nav_bg').stop().slideDown();

    },function(){
        $('nav .sub,.nav_bg').stop().slideUp();

    });


   //slide 

//    0번쨰 없애기 

// v     css 가로 하나 
//    $('.slide li').eq(0).siblings().css({"left":"-1200px"});
    $('.slide li').eq(0).siblings().css("left","-1200px");

    var slideI = 0;

    // setinterval 가로 안에 펑션 
    setInterval(function(){
        if(slideI<2){
            slideI++;

        }else{
            slideI = 0;

        }

        // 반복문만들었으니까 이제 형제 없애주고 

        // v :  animate({ left: "-1200px"}, 500);
        // animate ({위치 : "px"},500)
        // animate ({"" : ""},)


        // $('.slide li').eq(slideI).siblings().animate({"left":"-1200px"});

        $('.slide li').eq(slideI).siblings().animate({left : "-1200px"},500);
        $('.slide li').eq(slideI).animate({left : "-0px"},500);

    },3000);





})//