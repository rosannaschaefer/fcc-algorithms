function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];
  for (let item of arr) {
    var equationTop = Math.pow((item.avgAlt + earthRadius), 3)
    var equationSqrt = Math.sqrt(equationTop/GM)
    var orbitalPeriod = Math.round(2 * Math.PI * equationSqrt)
    newArr.push({name: item.name, orbitalPeriod: orbitalPeriod});
  }
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])