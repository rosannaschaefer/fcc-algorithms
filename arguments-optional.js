/**
 *sums two arguments together. If only one argument is provided, returns a function that expects one argument and returns the sum. If either argument isn't a valid number, returns undefined.
 *
 * @param {*} a
 * @param {*} b
 * @returns {number|undefined} sum of a and b or undefined
 */
function addTogether(a, b) {
  if (arguments.length === 2 && typeof(a, b) === "number") {
    return a + b
  } 
  else if (arguments.length === 1 && typeof(a) === "number") {
    return function addOther(c) {
        return addTogether(a, c);
    }
  } 
  else {
    return undefined
  }
}

addTogether(2)(3);