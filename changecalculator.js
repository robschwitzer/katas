var calculateChange = function(total, cash) {
  var change = {};
  var denominations = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  var currencyName = ['Twenty', 'Ten', 'Five', 'Toonie', 'Loonie', 'Quarter', 'Dime', 'Nickel', 'Penny' ];
  var dueBack = cash - total;
  for (var i = 0; i <= denominations.length; i++) {
    if (dueBack - denominations[i] > 0) {
      change[`${currencyName[i]}`] = Math.floor(dueBack / denominations[i]);
      dueBack -= (Math.floor(dueBack / denominations[i]) * denominations[i]);
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));  //{ twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000));  //{ ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000));  //{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
