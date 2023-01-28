// Display Array OutPut
var learnt=["HTML","CSS","BOOTSTRAP",'A LITTLE BIT TAILWIND',"JAVASCRIPT"];

for(var i=0;i<learnt.length;i++){
    console.log("I Learnt : ",learnt[i]);
}
console.log("\n");
console.log("Now Using while Loop\n");

// solve it using while 
var learning=["HTML","CSS","BOOTSTRAP",'A LITTLE BIT TAILWIND',"JAVASCRIPT"];
console.log(learning.length,"\n");
var index=0;
while(index<learning.length){ // if i put <= that means it will go 5 and 5th number index nothing so it return undefined
    console.log("I Learnt :",learning[index]);
    index++;
}