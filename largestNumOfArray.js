// largest number of array in js.
function largestNumber(number) {
    let largest=number[0];
    for(let i=0;i<number.length;i++){
        if(largest<number[i]){
        largest=number[i];
        }
    }
    return largest;
}
let large=[10,35,5,99,6];
let largeResult=largestNumber(large);
console.log(largeResult);