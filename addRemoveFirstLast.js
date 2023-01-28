// add and remove from first and last ..
var myFriends=["Shakibe","Mukter","Rion","Rafi","Hridoy","Kefayet"];
console.log("Add first Element in Above Array: \n");
var addFirst=myFriends.unshift("sumon");
console.log(addFirst);
var index=0;

while(index<myFriends.length){
    console.log(myFriends[index]);
    index++;
}
console.log("\n");
console.log("Remove First Element: \n");
myFriends.shift(1);
for(var i=0;i<myFriends.length;i++){
    console.log(myFriends[i]);
}
console.log("\n");
console.log("Add Element as the last into array\n");
myFriends.push("Sadikur Rahman");
for(var i=0;i<myFriends.length;i++) {
    console.log(myFriends[i]);
}
console.log("\n");
console.log("Remove Last element from an array\n");
myFriends.pop();// delete last element
for(var i=0;i<myFriends.length;i++){
    console.log(myFriends[i]);
}