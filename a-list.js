function arrayToList(array){
  let entry = null;
  for (let i = array.length-1; i >= 0; i--){
    entry = {value: array[i], rest: entry};
  }
  return entry;
}

//this is the only one I had to peek at the solution.
function listToArray(list){
  let array = [];
  for (let entry = list; entry; entry = entry.rest){
    array.push(entry.value);
  }
  return array;
}

function prepend(element, list){
	return {value: element, rest:list};
}

function nth(list, num){
  return listToArray(list)[num];
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20