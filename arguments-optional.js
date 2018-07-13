// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
  
  if (arguments.length > 1 && typeof(arguments[0], arguments[1]) === "number") {
    return arguments[0] + arguments[1]
  } else if (arguments.length === 1) {
    //can't figure out what goes here
  }

}

addTogether(5, "3");


//FIRST TRY----------------------------------------------------------------------------
// function addTogether() {
  
//   let base = 0;
//   //loop through the arguments passed in the function
//   for (let i = 0; i < arguments.length; i++){
//     //if there is more than one argument
//     if (arguments.length > 1) {
//       //add each argument to the variable
//       base += arguments[i];
//     } else {
//         return function(num) {
//           return arguments[i] + num;
//         }
//         base = addOther(num)
//       }
//   }
//   console.log(base);
// }

// addTogether(2, 3);

//SECOND TRY----------------------------------------------------------------------------
// function addTogether(x, y) {
  
//   //if there is more than one argument
//   if (arguments.length > 1) {
//    if (typeof(arguments[0]) === "number" && typeof(arguments[1]) === "number"){
//       return arguments[0] + arguments[1]
//     }
//     } else {
//       return function(z) {
//         return x + z;
//       }
//     }
// }
// console.log(addTogether([3]));

//THIRD TRY----------------------------------------------------------------------------
// function addTogether(x, y) {
  
//   //if there is more than one argument
//   if (arguments.length >= 1 && typeof(x) === "number" && typeof(y) === "number") {
//     return x + y;
//   } else if (typeof(x) !== "number" || typeof(y) !== "number"){
//       return undefined;
//     } else {
//       function addOther(z) {
//         return x + z;
//       }
//       addOther();
//     }
// }
// console.log(addTogether(2, "3"));