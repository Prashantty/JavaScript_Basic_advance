// Arrow function 



//callback function 

// setTimeout(() => {
//     console.log("after 6sec");
//     setTimeout(() => {
//         console.log("after 4sec");
//         setTimeout(() => {
//             console.log("after 2sec");
//             setTimeout(() => {
//                 console.log("after 1sec");
//             }, 1000);
            
//         }, 2000);
        
//     }, 4000);
    
// }, 6000);


setTimeout(() => {
    console.log("settimeout 0 sec")
}, 2000);

setImmediate( () => {
    console.log(" setImediate ")
})



// const fs = require('fs');
// const { emitKeypressEvents } = require('readline');

// fs.readFile('rea.txt', 'UTF8' ,(err , data) => {
//   setTimeout(() => {
//     if(err) console.log("Error !!!")
//     else console.log('timeout');
    
//    // console.log(data);
//   }, 0);


//   setImmediate(() => {
//     console.log('immediate');
//   });
// });


// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve([89, 45, 323]);
// 	}, 5000);
// });

// promise.then(values => {
// 	console.log(values[0]);
// });


const promise = Promise.resolve(3126);

const promise1 = new Promise((resolve, reject) => {
    resolve(2000);
	setTimeout(() => {
		promise.then(val => {console.log(val); resolve(val)});
	}, 5000);
});


    promise1.then(vals => {
        console.log('value comes from the promise1 '+vals);
    });

