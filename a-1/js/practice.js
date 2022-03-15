$(function(){


    // tab menu 
    // 메인메뉴에 호버를 하면 
    $('header nav ul.gnb>li').hover(function(){
        $('.sub').stop().slideDown();

    },function(){
        $('.sub').stop().slideUp();

    });


    // slide 
    // 가로 안은 css에서 복붙하는걸로 하자 오타 x 
        // 1.일단 첫번째꺼 제외한 형제들꺼 안보이게 위로올리기
    $('.slide .slide_all > li').eq(0).siblings().css("top","-300px");

    // 이렇게하면 eq (0)번째만 화면에 보임 그러니까 첫번째 화면만 화면에 보임 


    // 2.슬라이드이미지 변수만들기 
    var slideI = 0;

    // 3. setInterval 반복 함수 이용하기 (3초마다 바뀌게)
    // setInterval(function(){},3000);
    setInterval(function(){
        // 4. if 구문으로 1,2,0 반복되게 하기 

        // if(){}else{}
        if(slideI<2){
            slideI++;
            // 만약에 slidei가 2보다 작다면 = 0,1 에 ++ 이면 1,2 로 셋인터벌 3초반복 

        }else{
            slideI=0;
            // slidei가2라면 slide i 는 0    0 으로 셋인터벌 3초동안 반복

            // 결국에 1,2,0으로 반복

        }
        // esle 밖에서 콘솔확인해야지 ? 
        console.log(slideI);
        

        // 1,2,0 보여지게 하기 

        // 인덱스 순서대로 보여지게 한다음에 나머지 형제들은 안보여지게 만들기 
        //  보여질때 모션 주기 aniamte 

        // 2) 

        $('.slide .slide_all > li').eq(slideI).siblings().animate({"top":"-300px"},500);

        // 1) 

        $('.slide .slide_all > li').eq(slideI).animate({"top":"0"},500);
        // slidei slide 인덱스 



    },3000);

   

})//END