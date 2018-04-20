var camelCase = function(input) {
  input = input.toLowerCase().split(' ');
  for (var i = 0; i < input.length; i++) {
    input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
  }
  input = input.join('');
  return input.charAt(0).toLowerCase() + input.slice(1);
};


console.log(camelCase("this is a string"));  //thisIsAString
console.log(camelCase("loopy lighthouse"));  //loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious"));  //supercalifragalisticexpialidocious