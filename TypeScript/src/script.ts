// let age : number= 10;
// let level;

// if(age < 50)
//     age+=20;

// console.log(age);

// enum Size  { Small  = 1, Medium , Large}
// let MySize : Size = Size.Medium;
// console.log(MySize);


// function Calculate (First : number){

//     let result = First;
//     return result;

// }


// function Area(length : number ) : number{

//     let result = 5;
//     return result;
// }


// let Income = 50_000;
// console.log(Income);



function CalculateIncome(Income : number , Year ? : number )  {

    if( Income < 5_000)
         return Income * 1.2;

   return  Income *  2;
}


let Result = CalculateIncome(6_000); // no need to pass the year here year is optional 
console.log(Result)



//objects in TS


let employee : {
    id : number;
    name ?: string;   // here also name id optional 
}  =  {id : 1 }


employee.name = "prashant";


console.log(employee.name);

//touple

let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push(98437);

console.log(ourTuple);



let Touple: readonly[number, boolean, string];
Touple = [5, false, 'Coding God was here'];

//Touple.push(98437);   // we cannot push into the readonly touple


// casting 

let x: unknown = "jfhfgdfgsd";

//console.log((x as string).length);
console.log("length of the string is " + (<string>x).length)

let y : unknown = 5;
console.log((y as string).length) // undefine Force Casting 
