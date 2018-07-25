//https://eloquentjavascript.net/04_data.html#i_8ZspxiCEC/

function range(start, end, step = 1){
  let theRange = [start];
  while (start < end && step > 0){
    start = start + step;
    theRange.push(start);
  }
  while (start > end && step < 0){
    start = start + step;
    theRange.push(start);
  }
  return theRange;
}

function sum(array){
  let theSum = 0;
  for (let number of array){
    theSum = theSum + number;
  }
  return theSum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55