var fruits=["Apple","Banana","Orange"];
var bananaIndex=fruits.indexOf("Banana");
console.log("Index of Banana is: ",bananaIndex);
fruits[1]="Mango";
fruits.pop();// for remove last element 
fruits[2]="Watermelon";

console.log(fruits);