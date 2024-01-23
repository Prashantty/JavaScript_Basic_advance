// functional Programming 
//higherOrder Function :-  function which takes another function as an argumnet and return the function from it  


// callback function 
function x(){
    console.log("callback function ")
}


//higherOrder Function 
function y(x){
    return x();
}