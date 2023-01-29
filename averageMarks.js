// Average marks using function in js..
function Average(sub1,sub2,sub3){
    const avg=(sub1+sub2+sub3)/3;
    return avg;
}
const sub1=80;
const sub2=87;
const sub3=71;
const avg=Average(sub1,sub2,sub3);
console.log("Average of your marks so far is: ",avg.toFixed(1));