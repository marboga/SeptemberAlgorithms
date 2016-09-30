function optimalPocket(amount) {
  function fn(r,array) {
    pocket[array[0]] = Math.floor(r/array[1]);
    return(r % array[1]);
  }
  var coins = [['dollars',1.00],
               ['half-dollars',0.50],
               ['quarters',0.25],
               ['dimes',0.10],
               ['nickels',0.05],
               ['pennies',0.01]
              ];
  var pocket = {};
  for (var i = 0; i < coins.length; i++){
    amount = fn(amount, coins[i]);
  }
  return(pocket);
}
console.log(optimalPocket(2.93))
