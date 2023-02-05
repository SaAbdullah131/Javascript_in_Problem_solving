function reverseString (text) {
    let reversed ='';
    text.split(reversed);
    for(let i=text.length-1;i>=0;i--){
        reversed = reversed + text[i];
        // console.log(reversed,text[i]);
    }
    return reversed;
}
const myString = "I am a good boy";
const reversed = reverseString(myString);
console.log("reversed output: ",reversed);