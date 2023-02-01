let rion ={
    name:"Rion",
    age:25,
    height:'5.8',
    fbFriend: {
        friend1: {name: "rinku",gender:"male"},
        friend2: {name: "salman",gender:"male"},
        friend3: {name: "jinia",gender:"female"},
        friend4: {name: "maria",gender: "female"},
        friend5: {name: "sharuk",gender: "male"}
    }
};
let properties = Object.keys(rion.fbFriend);
let propertiesLen = properties.length;
for(let i=0;i<propertiesLen;i++){
   let gender = rion.fbFriend[properties[i]].gender;
   if(gender == 'female'){
    console.log(gender);
}
}