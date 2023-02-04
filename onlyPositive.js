function onlyPositive(number){
    let newArray = [];
    for(let i=0;i<number.length;i++) {
        if(number[i]<0){
        break;
    }
       else if(number[i]>0) {
        newArray.push(number[i]);
        }
    }
    return newArray;
}
let arr= [45,87,63,96,-56,71,28];
console.log(onlyPositive(arr));