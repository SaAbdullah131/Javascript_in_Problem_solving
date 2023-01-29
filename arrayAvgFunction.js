
var sum=0;
var count=0;
function make_avg(array){
    for(var i=0;i<array.length;i++){
        sum=sum+array[i];
        count++;
        
    }
    // console.log(count);
    return (sum/count);
}
const arr=[12,30,8,10,20,15];
const average =make_avg(arr);
console.log("Average is: ",average.toFixed(2));