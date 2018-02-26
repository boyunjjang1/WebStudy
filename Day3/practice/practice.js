function init() { 
    var top = ["브라이트문", "BEST", "NEW", "TOP", "OUTER", "BOTTOM"
, "SKIRT", "BAG", "ACC", "SOCKS", "OM-MADE", "SALE"];

    var menu = ["상품문의", "배송문의", "입금문의", "교환반품", "구매후기",
    "피팅지원", "미확인입금자", "로그인", "회원가입", "장바구니", "주문조회",
    "마이페이지", "최근 본 상품"];


    var top_list = document.querySelector('.top_list');

    var bottom_list = document.querySelector('.bottom_list');


    for(var i = 0; i < top.length; i++)
    {
        top_list.innerHTML +=
        "<li>" + top[i] + "</li>";
    }

    for(var i = 0; i < menu.length; i++)
    {
        bottom_list.innerHTML +=
        "<li>" + menu[i] + "</li>";
    }


}
window.onload = function() {

    init();

    var pages = document.getElementsByTagName("li");
    
    for(var i =0; i < pages.length; i++)
    {
        // pages[i].onclick = function(){
        //     setTimeout(function(){
        //         console.log(i);
        //         window.open("./TOP.html")
        //     },1000);
        // };

        function data(value) {
            var temp = value;
            pages[i].onclick = function(){
                setTimeout(function(){
                    console.log(temp);
                    window.open("./index.html")
                },1000);
            };
        }

        data(i);
    }
    

}


 var imgs = document.querySelector('img');

 if(onclick('imgs'))
 {
     window.open("./index.html");
 }


