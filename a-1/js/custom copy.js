
$(document).ready(function(){ //

    // tab menu 

    $("header nav ul.gnb>li").hover(function(){
        $("ul.sub").stop().slideDown();
    },function(){
        $("ul.sub").stop().slideUp();
    });


    // slide  
    // /1. e 형제들 안보이게 
    $(".slide .slide_all > li").eq(0).siblings().css("top","-300px");

    // 2 var 설정 
    var slideI = 0;

    // 3 setInterval 3초마다 
    setInterval(function(){

        // 4 if 문 
        if(slideI<2){
            slideI++;
        }else{
            slideI=0;
        }

        // 5 console 확인 
        // console.log(slideI);

        // 6 animate 보이게 한뒤에 형제들은 안보이게 
        $(".slide .slide_all > li").eq(slideI).siblings().animate({"top":"-300px"},500);

        $(".slide .slide_all > li").eq(slideI).animate({"top":"0"},500);
    },3000);

}); //end



