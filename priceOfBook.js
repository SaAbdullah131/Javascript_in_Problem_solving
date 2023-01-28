// price of book that you have .Display the prices which prices are lower than 200;

console.log("Solve this using While loop\n");
var priceOfBook=[1002,98,234,177,30,50,243,560,201,199,198,87];
var index=0;
while(index <priceOfBook.length){
    if(priceOfBook[index]>200){ // wants to skip higher values than 200
        continue;
    }
    console.log("Price of Book is: ",priceOfBook[index]);
    index++;
}
console.log("\n");
console.log("Book price under 200taka")
var priceOfBook=[1002,98,234,177,30,50,243,560,201,199,198,87];
for(var i=0;i<priceOfBook.length;i++){
    if(priceOfBook[i]>200){
        continue;
    }
    console.log("Value is: ",priceOfBook[i]);
}