var array = [];

for(var i = 0; i<5;i++)
{
    array[i] = function (){
        return i;
    };
}

for(var d in array) {
    console.log(d);
}

console.log(i);

// 함수안에서만 멤버변수