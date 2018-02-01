window.onload = function() {

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
                    window.open("./TOP.html")
                },1000);
            };
        }

        data(i);
    }
    

}
