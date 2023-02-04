// second largest from an array 

function secondHighest(array) {
    let firstHighest = array[0];
    let secondHighest = array [0];
    for(let i=0;i<array.length;i++) {
        if(array[i]>firstHighest){
            secondHighest = firstHighest;
            firstHighest = array[i];
        }
    }
    return secondHighest;
}
let myNumber = [32,5,9,11,17,38];
let second = secondHighest(myNumber);
console.log(second);
