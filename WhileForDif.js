// Difference between while loop and for loop...
console.log("1 to 100 using while loop\n");
var num=1;

while(num<=100){
    console.log("Number is: ",num);
    num++;
}
console.log("\n");
// while contain only condition inside of parenthesis .. and increase/decrease value inside of it..
// loop variable should be define before using while loop..

// for loop
console.log("1 to 1000 using for loop\n");
for(var num=1;num<=100;num++){
    console.log("Number is: ",num);
}
//initialize loop variable ,conditions and increase/decrease inside of it's parenthesis.. and if condition true it goes inside of it and execute that code..

/**
 * when we know the staring value and end value and also iteration that time we will use for loop is best use case..
 * when we don't know the number of iteration ...when don't know the staring and ending point
 */
var num1=534343;
while(num1>0){
    console.log("Reminder is :",num1%10);
    num1=parseInt(num1/10);
    console.log("Actual number:",num1);
}