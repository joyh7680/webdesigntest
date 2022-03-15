// $(function(){
// }

// li tab menu 호버했을 때 sub menu 열리도록 
// @ 웹헬퍼 아코디언메뉴 js 복습하기 
// 영상) 29:06 

$(document).ready(function(){ //

    // @나는 li class main_menu name 넣어서 하자 

    // @function 이 2개 !! 
    // "header nav ul.gnb>li").hover 했을때
    // hover 했을때 2가지 상황 
    //  마우스 다운, 업으로 기억 
    // 그래서 function 2개 
    // $("header nav ul.gnb>li").hover(function(){},function(){});
    
    $("header nav ul.gnb>li").hover(function(){
        // hover했을때 누구를 보여줄지 생각 
        // sub menu 전체를 보여줌 
        // 밑으로 내려서 보여줄건데 혹시 뭔가를 하고 있었으면 멈추고 보여줘 
        //  보통 멈췄다가 내려가잖아 
        $("ul.sub").stop().slideDown();

        // hover 땟을때 위로 올라가게 
    },function(){
        $("ul.sub").stop().slideUp();
    });

    // slide 
    // .slide .slide_all li
    // eq index값 012 012가 반복되게 만들어줘야함  


    // 0 번째가 1번째 
        // 형제들을 안보이게 
            //  위로 300px 올려라 -300px
                // css method 

                //1. 여기서 1,2, 0 을 안보여지게 만든거 
                // css 가로 한번하고 끝 
    $(".slide .slide_all > li").eq(0).siblings().css("top","-300px");
    // $(".slide .slide_all > li").eq(0).siblings().css({"top":"-300px"});

    // css - slide 에 overflow hidden 

    // 0 에서 부터 시작이 되니까( 메인 사진 ) 1 2 0 이 반복되게 

    // 1,2,0이 반복될수있게 변수 
    var slideI = 0;

    // 3초에 한번씩 반복 
    // setInterval(function(){},30000);
    setInterval(function(){
        // 1,2,0 으로 반복 -> if문으로 작업 

        // slideI 가 2 보다 작을 때와 = 0,1 

        if(slideI<2){
            slideI++;   // 1,2 가 된다 

            // 아닐 때의 상황 = slideI 가 2일때 
        }else{                
            slideI=0;      // 0이된다 
        }
        // 확인 
        console.log(slideI);
         // 콘솔 -> 1,2,0 순으로 돌아감 콘솔 


            // 2) 1,2,0 이 보여지게 만들기 
        //  보여지는 애는 top 이 0으로 오도록 
        // animate 사용 

                        //    eq slide index 번호에 이동시켜준다 
                        // top 을 0으로 이동시키기위해 그래야보임 
                        // 0.5초동안 바뀌게 500 

        // $(".slide .slide_all > li").eq(slideI).animate({"top":"0"},500);

        // 얘의 형제들은 안보이게 해줘야함 
        $(".slide .slide_all > li").eq(slideI).siblings().animate({"top":"-300px"},500);

        $(".slide .slide_all > li").eq(slideI).animate({"top":"0"},500);


    },3000);

   


}); //end



