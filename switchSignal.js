const signal ="green";

switch(signal){
    case "red":
        console.log("Dangerous to Cross the Road");
        break;
    case "yellow":
        console.log("You should stop");
        break;
    case "green":
        console.log("It's Time to Cross the Road!!");
        break;
    default:
        console.log("It's normal situation..You're not allow to cross the road");            
}    

// same problem using if else if

if(signal === "red"){
    console.log("Dangerous to Cross the Road");
}else if(signal === "yellow"){
    console.log("You should stop");
}else if(signal === "green"){
    console.log("It's Time to Cross the Road!!");
}else {
    console.log("It's normal situation..You're not allow to cross the road");
}