$(function(){ //start 
    // tab menu 
    $('header nav ul.gnb > li').hover(function(){
        // slide down 

        $('header nav ul.gnb > li > ul.snb').stop().slideDown();

    },function(){
        $('header nav ul.gnb > li > ul.snb').stop().slideUp();

    });


    // slide 

    // eq 첫번째 형제들을 없앤다 

    // @ css 가로 한번 만 !!! 
    $('.slide .slide_list li').eq(0).siblings().css("top","-300px");

    // 2 var 

    var slideI = 0;

    // 3 setInterval  1,2,0 반복되게 

    setInterval(function(){
        // if 문 

        if (slideI<2){
            slideI++;

            // 1,2 


        }else{
            slideI=0;
            // 0

        }
        // console.log(slideI);

        // animate 

        $('.slide .slide_list li').eq(slideI).siblings().animate({"top":"-300px"},500);

        $('.slide .slide_list li').eq(slideI).animate({"top":"0"},500);



    },3000)

}); //end 