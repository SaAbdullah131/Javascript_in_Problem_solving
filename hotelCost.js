function hotelCost(days) {
    let cost = 0;

    for (let i = 1; i <=days; i++) {
        if (i <= 10) {
            cost += 500;
        }
        else if (i <= 20) {
            cost += 300;
        }
        else if (i <= 31) {
            cost += 100;
        }
    }
    return cost;

}
let days=21;
let TotalRentCost = hotelCost(days);
console.log(TotalRentCost);