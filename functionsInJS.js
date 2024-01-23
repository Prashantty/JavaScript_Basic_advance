// Function Statement 
function a() {
    console.log("Normal Function Statement ")
}


// Function Expression 
// function acts like value 
var b  =  function() {

    console.log("Function Expression ")
}



//Function Declaration 
// fucntion statement and function declaration are the same thing 

function a() {
    console.log("Funtion Declaration")
}



// Anonymous function 
// function without a name 
// it is used in a place where funtions are used a values 
// syntax Error


// function (){     
// console.log("anonymous function")
// }



// Named Function Expression
var b  =  function xyz() {
    console.log("Named Function Expression ")
    console.log(xyz); // works locally
}

b();
xyz(); // error  reference error it will not hoisted in the global 


// First class Function 
// passing function inside the function as an argument , abiliy to use function as values 


var b = function(param){
    console.log(param);
}

b(function(){

})
//Arrow Function

