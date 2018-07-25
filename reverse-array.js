// https://eloquentjavascript.net/04_data.html#i_6xTmjj4Rf5

function reverseArray(array){
  let newArray = [];
  for (let item of array){
    newArray.unshift(item);
  }
  return newArray;
}

function reverseArrayInPlace(array){
  for (let i = 0; i < Math.floor(array.length / 2); i++){
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]