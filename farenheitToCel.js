// farenheit to Celsius
function fareToCel(faren) {
    let Celsius =(faren-32)/1.8;
    return Celsius.toFixed(2);
}
let far=103;
console.log(fareToCel(far));