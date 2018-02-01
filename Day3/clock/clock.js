var realTime = setInterval(time,1000);

// setInterval(함수,시간)

function time(){

    var today = new Date();


// var h = today.getHours();
// var m = today.getMinutes();
// var s = today.getSeconds();

document.querySelector('.clock_1').innerHTML = today.getHours().toString() + ' : ' + today.getMinutes().toString();
document.querySelector('.clock_2').innerHTML = ' : ' + today.getSeconds().toString();

}


function stopTime(){
    clearInterval(realTime);
}