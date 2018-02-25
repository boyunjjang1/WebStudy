
var a = 100;

var b = (
    foo = function () {
    var a = 10;
    console.log(a);
},
function () {
    foo();
    var b = 20;
    console.log(b);
}
);

console.log(b);

b();
foo();
foo2();