//closurs :- Function along with laxical environment 

function x(){
    var a = 7;
    function y() {
        console.log(a);
    }

    var a = 100;

    return y;
}

var z = x();
console.log(z);

//// after so many line of code 

z(); // return 100 because it holds the referece of the object 



function z1()
{
    function p(){
        var a = 7;
        function q() {
            console.log(a);
        }
    
        var a =100;
    
        return q;
    }
    return p;
}       

var v = z1()();
console.log(v);
v();

