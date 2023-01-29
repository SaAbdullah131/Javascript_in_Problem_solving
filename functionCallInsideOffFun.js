function foo(){
    console.log("foo");
}
function bar(){
    console.log("bar");
}
const inside =foo(bar());
console.log(inside);