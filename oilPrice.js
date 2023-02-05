function oilPrice (desel,petrol,octen){
    const deselPerLiter = 114;
    const petrolPerLiter = 130;
    const octenPerLiter = 135;
    let totalPriceOfDesel = desel * deselPerLiter;
    let totalPriceOfPetrol = petrol * petrolPerLiter;
    let totalPriceOfOcten = octen * octenPerLiter;
    let totalPrice = totalPriceOfDesel + totalPriceOfPetrol + totalPriceOfOcten;
    return totalPrice;
}
console.log(oilPrice(30,20,10));