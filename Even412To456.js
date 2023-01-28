// Print All Even Number to 412 to 456;

console.log("First Using for loop\n");
for(var i=412;i<=456;i+=2){
    console.log("Even number is: ",i);
}

console.log("Same Problem using if inside of for loop.\n");
for(var i=412;i<=456;i++){
    if(i%2==0){
        console.log("Even number is: ",i);
    }
}

console.log("Same Problem using While loop\n");
var num=412;
while(num<=456){
    console.log("Even Number is: ",num);
    num+=2;
}
