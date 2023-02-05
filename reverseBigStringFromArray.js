function bestLargeName (arr) {
    let largest ;
    let lgth =0;
    for(let i =0;i<arr.length;i++) {
    if(arr[i].length > lgth ) {
        lgth = arr[i].length;
        largest = arr[i];
    }
    }
    let reversed = ' ';
    reversed = largest.split(reversed);
    for(let i =largest.length -1;i>=0;i--) {
     reversed = reversed + largest[i];
    }
    return reversed;
} 
let fr = ["Sakib","Rion","Mukter","Saidur rahman moon","Tuser"];
console.log("Biggest is : ",bestLargeName(fr)," ");