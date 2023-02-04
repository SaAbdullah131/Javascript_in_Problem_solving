// word reverse 

function reversedWord(str) {
     const words = str.split(' ');
     const result = [];
    //  console.log(words);
    for(let i= words-1 ; i>=0;i--){
        result.push(words[i]);
    }
    const reversed = result.join(' ');
    return reversed;
}
const myString = "I am a good boy";
const reverse = reversedWord(myString);
console.log(reverse);