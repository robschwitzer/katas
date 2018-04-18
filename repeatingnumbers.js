var repeatNumbers = function(data) {
  var myArray = [];
  for (var i = 0; i < data.length; i++) {
    if (i > 0) {
      myArray += ', ';
    }
    for (var x = 0; x < data[i][1]; x++) {
      myArray += data[i][0];
    }
  }
  return myArray;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));