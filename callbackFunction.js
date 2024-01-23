
// setTimeout(function () {
//     console.log("Callback Function ")

// }, 5000);


// function x(y) {
//     console.log("x")
//     y();
// }

// x(function y() {
//     console.log("y");
// })

// function myDisplayer(something) {

//     setTimeout(() => {
//         console.log(something);
//         console.log("hyy")

//     }, 1000);
// }

// function myCalculator(num1, num2, myCallback) {
//     setTimeout(() => {
//         let sum = num1 + num2;
//         myCallback(sum);
//         console.log("hello")
//     }, 3000);
// }

// myCalculator(5, 5, myDisplayer);



// setTimeout( function abc() {
//     console.log("inside the settimeout function  ");
//      myFunction(); 
// }, 3000);

// function myFunction(value) {
//   console.log("this is also a callback function inside the myfunction ")
// }

// let promise = new Promise( (resolve  , reject) => {
//   setTimeout(() => {
    
//     resolve("resolved ");
    
//   }, 5000);
// } )

// async function ab()
// {
//    var data = await promise;
//    return data;
   
// }


// ab().then( x =>  console.log(x));
// console.log("a");
// console.log("b");



function mainFunction(callback) {
  console.log("Performing operation...");
  // Use setTimeout to simulate an asynchronous operation
  setTimeout(function() {
    console.log(callback)
    callback("Operation complete");
  }, 5000);
  }
  
  
  // Define the callback function
  function callbackFunction(result) {
  console.log("Result: " + result);
  }
  
  // Call the main function with the callback function
  mainFunction(callbackFunction);
  //This code is contributed by Veerendra Singh Rajpoot
  
