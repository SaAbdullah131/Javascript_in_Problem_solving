// 1. feet to inch 
function feeToInch(feet) {
    let inch = feet*12;
    return inch;
}
let feet = 12;
console.log(feeToInch(feet));

//2,centimeter to meter...number return 
function centimeterTometer(centimeter){
    let meter = centimeter /100;
    return meter;
}
let centi =1000;
console.log(centimeterTometer(centi));

// 3 count paper 
// book1 -->100
// book2 -->200 
// book3 --300
function paperRequirements(){


}
let friend= ["sajid","mamun","juabeyer bin rashed","chinku"];
function bestFriend(friend) {
    let largest;
    let lgth=0;
    for(let i=0;i<friend.length;i++){
    if(friend[i].length> lgth){
        lgth = friend[i].length;
        largest = friend[i];
    }
    }
    return largest;
}
let bestF=bestFriend(friend);
console.log(bestF);

//5.[45,87,96,63,-56,71,28]// when negative loop stop jei gulo paichi oigula array hisebe return kore dibo..
function onlyPositive(){

}