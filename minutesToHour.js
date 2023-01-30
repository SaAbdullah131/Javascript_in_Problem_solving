// mintues to hour using js function 

function mintuesToHour(mintues){
    let hour=mintues/60;
    return hour;
}
let min=240;
let hour=mintuesToHour(min);
console.log(min," mintues is :",hour);

// hour to minutes 
function hourToMintues(hour){
    const mintues=hour*60;
    return mintues;
}
let h=5;
let minutes=hourToMintues(h);
console.log(h,'hour is:',minutes);