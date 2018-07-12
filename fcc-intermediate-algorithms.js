//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  var flattenedArray = [];

  function flattenArray(arr) {
    arr.forEach((arg) => {
      if (!Array.isArray(arg)) {
        flattenedArray.push(arg)
      } else {
        flattenArray(arg)
      }
    });
  }

  flattenArray(arr);
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);

//----------------------------------------------------------------------------------

//Return an English translated sentence of the passed binary string. The binary string will be space separated.

function binaryAgent(str) {
  let newArr = str.split(' ');
  let textArr = [];

  for (let i = 0; i < newArr.length; i++) {
    textArr.push(String.fromCharCode(parseInt(newArr[i], 2)));
  }
  
  return textArr.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");