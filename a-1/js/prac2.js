$(function(){// start 
    // @ function ()하고 준가로 {}

    // tab menu 

    $('header nav ul.gnb>li').hover(function(){
            // @ hover 가로 안에 펑션 두개 

        // slide down 
        // $('header nav ul.gnb>li>ul.sub').slideDown();
        // @ 멈추고 slide down 
        $('header nav ul.gnb>li>ul.sub').stop().slideDown();


    },function(){

        // slide up 
        // $('header nav ul.gnb>li>ul.sub').slideUp();
        // @ 멈추고 sldieup 
        $('header nav ul.gnb>li>ul.sub').stop().slideUp();

    });

        // @ 가로 잘 닫혔는지 확인 


    // slide funtion


    // @ 1. eq(0).siblings()안보이게 위로올려 
 
    $('.slide .slide_all > li').eq(0).siblings().css("top","-500px");

// @ 2. var 변수만들기  
  var slideI = 0;

//  @ 3. setInterval 가로 안에  function 가로 준가로 

    setInterval(function(){

        // 4.@  if 문 

    //   if (){}else {}
       if(slideI<2){
        slideI++;

       }else{
        slideI=0;

       }
    //    console.log(slideI);


    // @ 3000 안에서 작성해야지 ?? 
        // 5. animate  1,2,0 보이고 형제들은 안보이게 
        $('.slide .slide_all > li').eq(slideI).siblings().animate({"top":"-500px"},500);

        $('.slide .slide_all > li').eq(slideI).animate({"top":"0"},500);
    

    },3000);







});// end 