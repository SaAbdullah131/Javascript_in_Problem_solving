// Smallest Number Of an Array in js
function smallestNumberOfArray(numbers){
    let smallest = numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(smallest>numbers[i]){
            smallest=numbers[i];
        }
    }
    return smallest;
}
let myNumber=[10,35,2,5,8,202,323];
let smallNumber=smallestNumberOfArray(myNumber);
console.log(smallNumber);