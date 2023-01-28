// 38 to 86 .stop when value is higher than 44..
console.log("Solve it using While loop\n");
var value=38;
while(value<=86){

    if(value>44){
        break;
    }
    console.log("Value is : ",value);
    value++;
}

console.log("\n");
console.log("Solve it using for loop\n");
for(var i=38;i<=86;i++){
    if(i>44){
        break;
    }
    console.log("Value is: ",i);
}