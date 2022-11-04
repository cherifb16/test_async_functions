// function sleep() {
//   console.log("sleep starts");
//   const startTime = new Date(); 
//   while (true) {

//     if (new Date() - startTime > 3000) {
//       console.log("sleep is over");
//       return;
//     }
//   }
// }

// console.log("Start process.");
// sleep();
// console.log("End of process");



// console.log("Start process.");
// setTimeout(function() {
//   console.log("Three seconds have passed.");
// }, 3000);
// console.log("End of process");



// console.log("Start the process.");  
// setTimeout(function() {  
//   setTimeout(function() { 
//     console.log("End of process"); 
//   }, 0);
//   console.log("Three seconds have passed."); 
// }, 3000);



// console.log("Start process.");
// setTimeout(function() {
//   setTimeout(function() {
//     setTimeout(function() {
//       setTimeout(function() {
//             console.log("End of process");
//           }, 1000);
//         console.log("Three seconds have passed.");
//       }, 1000);
//     console.log("Two seconds have passed.");
//   }, 1000);
//   console.log("One second has passed.");
// }, 1000);



// function sleep() {
//   console.log("SLEEP start");
//   const startTime = new Date();
//   while (true) {
//     if (new Date() - startTime > 3000){
//       console.log("SLEEP End");
//       return;
//     }
//   }
// }

// console.log("Start process.");

// const promise = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     sleep();
//     resolve("3 seconds elapsed."); 
//   }, 0);
// })

// promise.then(function(str){ 
//   console.log(`${str}Successful.`);
// })



// function sleep() {
//   console.log("SLEEP start");
//   const startTime = new Date();
//   while (true) {
//     if (new Date() - startTime > 3000){
//       console.log("SLEEP End");
//       return false; 
//     }
//   }
// }

// console.log("Start process.");

// const promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     if (sleep()) { 
//       resolve(); 
//     } else {
//       reject(); 
//     }
//   }, 0);
// })

// promise
// .then(function(){ 
//   console.log("Success.")
// })
// .catch(function() { 
//   console.log("Failed.")
// })



// function sleep() {
//   console.log("sleep start");
//   const startTime = new Date();
//   while (true) {
//     if (new Date() - startTime > 3000){
//       console.log("sleep end");
//       return false;
//     }
//   }
// }

// console.log("Start process.");

// const promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     if (sleep()) {
//       resolve("true.");
//     } else {
//       reject("false.");
//     }
//   }, 0);
// })

// promise
// .then(function(str){
//   console.log(`${str} Successful.`);
// })
// .catch(function(str) {
//   console.log(`${str} failed`);
// })



// function inputNumber(data) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       if (typeof(data) == "number") {
//         resolve(data + 1);
//       } else {
//         reject("Not in figures.");
//       }
//     }, 3000);
//   })
// }

// console.log("Start process.");

// inputNumber("hello")
// .then(function(data){
//   console.log(`${data}.`);
// })
// .catch(function(error) {
//   console.log(error);
// })




// function inputNumber(data) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       if (typeof(data) == "number") {
//         resolve(data + 1);
//       } else {
//         reject("Not in figures.");
//       }
//     }, 3000);
//   })
// }

// console.log("Start process");
// inputNumber(1)
// .then(function(data){
//   console.log(data);
//   return inputNumber(data);
// })
// .then(function(data){
//   console.log(data);
//   return inputNumber(data)
// })
// .then(function(data){
//   console.log(data);
// })



// function inputNumber(data) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       if (typeof(data) == "number") {
//         console.log(data)
//         resolve(data);
//       } else {
//         console.log("Not in figures.")
//         reject("Failed.");
//       }
//     }, 3000);
//   })
// }

// console.log("Start process.");

// Promise.all([
//   inputNumber(2),
//   inputNumber("hello"),
//   inputNumber(5),
// ])
// .then(function(){
//   console.log("All were successful.");
// })
// .catch(function(error) {
//   console.log(error);
// })



// function inputNumber(data) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       if (typeof(data) == "number") {
//         console.log(data)
//         resolve(data);
//       } else {
//         console.log("Not in figures.")
//         reject("Failed.");
//       }
//     }, 3000);
//   })
// }

// console.log("Start process.");

// Promise.all([
//   inputNumber(2),
//   inputNumber("hello"),
//   inputNumber(5),
// ])
// .then(function(){
//   console.log("All were successful.");
// })
// .catch(function(error) {
//   console.log(error);
// })




// async function inputNumber(data) {
//   return data + 1;
// }

// inputNumber(1).then(function(data){
//   console.log(`${data}.`);
// })



// function inputNumber(data) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(data + 1);
//     }, 3000);
//   })
// }
// console.log("start process");
// inputNumber(1)
// .then(function(data){
//   console.log(`${data}.`);
// })



// function inputNumber(data) {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve(data + 1);
//     }, 3000);
//   })
// }

// async function showNumber() {
//   const res = await inputNumber(1)
//   console.log(`${res}.`);
// }

// console.log("Start process.");
// showNumber();




function inputNumber(data) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof(data) == "number") {
        resolve(data + 1);
      } else {
        reject("Not in figures.");
      }
    },3000);
  })
}

async function showNumber() {
  const res1 = await inputNumber(1)
  console.log(`${res1}.`);
  const res2 = await inputNumber(res1)
  console.log(`${res2}.`);
  const res3 = await inputNumber(res2)
  console.log(`${res3}.`);
}

console.log("Start process.");
showNumber();