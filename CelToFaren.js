// Celsius to farenheit 
function celToFaren(Cel){
    let faren=(Cel*1.8)+32;
    return faren.toFixed(2);
}
let cel=39.44;
console.log(celToFaren(cel));