// Odd and Even number using function..
// has parameter + no return 
function oddEven(number){
        if(number%2==0){
            console.log(number," is Even number");
        }else if(number%2==1){
            console.log(number,"is Odd Number");
        }else {
            console.log("It's not a valid Number");
        }
}
const number=31;
oddEven(number);

// function evenOdd(number){
//     if(number%2==0){
//         return number%2;
//     }else if(number%2==1){
//         return number%2
//     }else {
//     return number;
//     }
// }
// const number1=455;
// console.log(evenOdd(number1));
