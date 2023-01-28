// Print Odd Number between 581 to 623;
console.log("First using for Loop\n");

for(var i=581;i<=623;i+=2){
    console.log("Odd Number is: ",i);
}
console.log("\n");
// another way 
for(var i=581;i<=623;i++){
    if(i%2!=0){
        console.log("Odd Number is: ",i);
    }
}
console.log("\n");
console.log("Odd number Using While loop\n");
var num=581;
while(num<=623){
    console.log("Odd Number is : ",num);
    num++;
}
    