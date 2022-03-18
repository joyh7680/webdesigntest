$(function(){//

    // header nav .gnb > li 를  마우스 호버 하면 
    // header nav .gnb > li .sub 가 열린다 
    // header nav .nav_bg  여기 도 나타나야댐 
    // on class 주기 

    // $('header nav .gnb > li').hover(function(){
    //     $('header nav .gnb > li .sub').stop().removeClass('on');
    //     // 맞나 ? 
    //     $('header nav .gnb > li .sub').addClass('on');

    //     $(' header nav .nav_bg').stop().removeClass('on');
    //     $('header nav .nav_bg').addClass('on');


    // },function(){
    //     $('header nav .gnb > li .sub').removeClass('on');
    //     $('header nav .nav_bg').removeClass('on');
      

    // });

    // 참 길게도 썻다 

    //  v 

    // hover function 2개 . \
    // 1번쨰 펑션 은 stop slide down 
    // 2 번째 펑션 stop slidup


    //  nav 
    $('header nav .gnb > li').hover(function(){
        $('nav .sub,.nav_bg').stop().slideDown();

    },function(){
        $('nav .sub,.nav_bg').stop().slideUp();

    });


    // slide 
    //0 (1 2 0 1 2 0)
    // 이미지가 순서대로 좌우로 전환됌 

    // 0. 형제들 먼저 없애주는거 먼저! 

    $(".slide li").eq(0).siblings().css("left","-1200px");
    // .slide {overflow: hidden;}

    // 1. var 만들기
    var slideI = 0;
    // 순서대로 0,1,2     0 >1 1>2 2>3 

    // @@@@@@@@@@2slide 는 그냥 setInterval(() => {
        
    // },  !!!!! );


    // 2. * setinterval funtion 3000
    //  3초마다 이미지가 바껴야하니까  
    setInterval(function(){

        // 3.  * if(){}else{}
        //1,2,0 반복시켜줄 구문 -> if , else 

        if(slideI < 2) { //slideI 가 2보다 작다면 = 0, 1 이라면 
            slideI++; //1을 더해준다 -> 1, 2 
        }else{     // slide가 2보다 작은게 아니라면 = 나머지는 0 
            slideI = 0;      // 나머지는  0 이니까 
        }

            // * eq. animate 
        //반복문 만들었으니까 이제 순서대로 보여줘야겠지 ?
        //  첫번쨰꺼 보여주기전에 
        // 첫번째꺼의 형제들은 먼저 없에주기    eq. siblings. animate({style},500)

        $('.slide li').eq(slideI).siblings().animate({
            left : "-1200px"
        },500);
        $('.slide li').eq(slideI).animate({
            left : "0"
        },500);





    },3000); // slide end 



 



})//