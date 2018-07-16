/**
 *https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional/ 
 *
 * @param {*} a
 * @param {*} b
 * @returns {number|undefined} sum of a and b or undefined
 */
function addTogether(a, b) {
  if (typeof(a, b) === "number") return a + b;

  if (arguments.length === 1 && typeof(a) === "number") 
    return b => addTogether(a, b);

  else return undefined;
}
addTogether(2)(3);