const deleteProperty =(arr) => {
let objectProperty = Object.keys(arr[0])[0];
let arrayProperty = arr[1];

if (objectProperty == arrayProperty){
    delete arr[0][objectProperty];
    return "YES"
} 
else {
    return "NO";
}
}
console.log(deleteProperty([{fname:"John"},"fname"]));
console.log(deleteProperty([{lastName:"Milthila",},"fname"]));