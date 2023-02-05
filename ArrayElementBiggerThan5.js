function biggerElementThanSpecific(arr) {
    let count = 0;
    for(let i =0;i<arr.length;i++) {
        if(arr[i]>5){
            count++;
        }
    }
    return count;
}
let array = [-1,2,-3,4,5,6,-7,8,-9,10];
console.log(biggerElementThanSpecific(array));