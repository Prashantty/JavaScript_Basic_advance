// Ex 1

var x = 3;

function getname() {

    console.log("Prashant")
}

//accessing after declaration 

console.log(x);
getname();


// Ex 2

// accessing before declaration 

console.log(y);
get();
console.log(get)

// Memory reserved for these two as variable in global scope  and initially it defined as "Undefined "
getname1();
getname2();


var y = 5;

function get() {

    console.log("Prashant")
}

var getname1 = () => {
    console.log("arraw function ")
}

var getname2 = function() {
    console.log("anonymous function")
}

