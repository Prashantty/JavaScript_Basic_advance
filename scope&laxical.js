function a(){
    var b = 10;
    function c()
    {
        console.log(b);
    }
}

a();
console.log(b); // got an reference error , not defined 



///ex2 

var b = 10;
function a(){
    // var b = 10;
    function c()
    {
        console.log(b);
    }
}

a();
console.log(b); // value is 10


