let a = 10;
var b = 100;
const c = 1000; // const need to be initialize at the time of declaration   and cannot be reassigned value into it . 

// connot redeclare the block-scoped variable again [syntaxError ]
//let a = 100; 


// Temporal deadzone :- from hosted till its assign some value , get some value or initialize with some value  
// Ex :-

console.log(x); // refrence error ,  cannot access 'x' before initiallization

let x =10;

x = 100;


