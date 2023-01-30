function leapYear(year){
    let leap_arr=[]
    for(let i=0;i<year.length;i++){
        if(year[i]%2==0 && year%100!==0 || year[i]%4===0){
           leap_arr.push(year[i]);
        }else {
            console.log(year[i],"is not leap year");
        }
    }
    return leap_arr;
}
let arr=[2023,2024,1986,1990,1876,1777,1520];
let leap = leapYear(arr);
for(index=0;index<leap.length;index++){
    console.log(leap[index],"is leap year");
}
console.log("\n");
console.log(leap);