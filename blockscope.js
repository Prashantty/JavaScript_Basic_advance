// block scoped 
// let and const is hoisted in block scoped and once the block is no longer in the scope  the let and const is also no longer with the scope  

var a = 100;

// both these const and let are created in the seperate 'script space' 
// const b = 10000;
// let c =  10000000;
{
    var a = 10;
    const b = 100;
    let c = 1000;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);  // not define error  and stop/break the program 
console.log(c);  // not define error  and stop/break the program 


//function scoped 
// same for the function scoped but including the var also 

function fn()
{
    var p = 20;
    const q = 200;
    let r = 2000;

    console.log(p);
    console.log(q);
    console.log(r);
}

fn();
// console.log(p); //not define error  and stop/break the program 
// console.log(q); //not define error  and stop/break the program 
// console.log(r); //not define error  and stop/break the program 