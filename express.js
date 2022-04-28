// const express = require("express");
// const app = express();

// class ExpressError extends Error {
//     constructor(message, status) {
//       super();
//       this.message = message;
//       this.status = status;
//       console.error(this.stack);
//     }
//   }

// app.get("/mean",function(req,res){
//     if (!req.query.nums) {
//         throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
//       }
//     let totalSum=0;
//     let numsAsStrings = req.query.nums.split(',');
//     let numArr=[];
//     for(let i=0; i<req.query.nums.length;i++){
//         let newNum=Number(numsAsStrings[i]);
//         numArr.push(newNum);
//     }
//     for(let i=0; i<numArr.length;i++){

//         totalSum = totalSum + numArr[i];
//     }
//     let response = {
//         operation:"mean",
//         value: totalSum/req.query.nums.length
//     }
//     return res.send(response);
// })

// app.get("/median",function(req,res){
//     if (!req.query.nums) {
//         throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
//       }
//     let numArr = req.query.nums.sort((a, b) => a - b);

//     let middleIndex = Math.floor(numArr / 2);
//     let median;

//     if (numArr.length % 2 === 0) {
//       median = (numArr[middleIndex] + numArr[middleIndex - 1]) / 2;
//     } else {
//       median = numArr[middleIndex];
//     }
//     let response ={
//         operation:"median",
//         value: median
//     }
//     return res.send(response);
//   });

// app.get("/mode", function(req,res){
//     if (!req.query.nums) {
//         throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
//       }
//     const obj={};
//     req.query.nums.forEach(number => {
//         if(!obj[number]){
//             obj[number] = 1;
//         } else {
//             obj[number] += 1;
//         }
//     });
//     let highestValue = 0;
//     let highestValueKey = -Infinity;

//     for(let key in obj){
//         const value = obj[key];
//         if(value > highestValue){
//             highestValue = value;
//             highestValue = key;
//         }
//     }
//     let response ={
//         operation: "mode",
//         value: Number(highestValueKey)
//     }
//     return res.send(response);
// });



// app.listen(3000, function() {
//     console.log(`Server starting on port 3000`);
//   });
