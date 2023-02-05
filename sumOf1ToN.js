function sumOfN(number){
    let sum =0;
    for(let i =1;i<=number;i++){
        sum = sum +i;
    }
    return sum;
}
let number = 55;
console.log(sumOfN(number));