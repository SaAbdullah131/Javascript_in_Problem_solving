var grandMaGive=1000;

var orangeQuan=1;
var MangoQuan=1;
var orangePrice=300;
var MangoPrice=400;
// total cost of bazar 
var totalCost =(orangePrice*orangeQuan)+(MangoPrice*MangoQuan);

// remaind money on hand..
var moneyRemaining = grandMaGive - totalCost;
console.log(moneyRemaining);