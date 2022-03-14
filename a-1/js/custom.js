// $(function(){
// }

// li tab menu 호버했을 때 sub menu 열리도록 
// @ 웹헬퍼 아코디언메뉴 js 복습하기 

$(document).ready(function(){ //

    // @나는 li class main_menu name 넣어서 하자 

    // @function 이 2개 !! 
    $("header nav ul.gnb>li").hover(function(){
        // 보여줄 class 
        $("ul.sub").stop().slideDown();

    },function(){
        $("ul.sub").stop().slideUp();
    });


}); //end



// slide 
// .slide .slide_all li
// eq index값 012 012 반복 
// 형제들을 안보이게 
// ㅇ ㅏ 외부 cdn 을 못쓰니까...................... 그래서 jquery 다 외워야된다고했구나 이런..............젠쟝... 
// css method 
//  위로 300px 올려라 
$(".slide .slide_all li").eq(0).siblings().css("top","-300px");