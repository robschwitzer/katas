var conditionalSum = function(values, condition) {
  var even = 0;
  var odd = 0;
  for (var i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      even += values[i];
    }
    else if (values[i] % 2 === 1) {
      odd += values[i];
    }
  }
  if (condition === "even") {
    return even;
  }
  else if (condition === "odd") {
    return odd;
  }
  if (condition != "odd" || "even") {
    return (`${values}, condition undefined`);
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); //6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); //9
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));   //144
console.log(conditionalSum([], "odd")); //0