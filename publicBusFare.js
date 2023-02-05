function publicBusFare (public) {
    let remainingPeopleAfterBus = public%50;
    let remainingPeopleAfterMicro = remainingPeopleAfterBus%11;
    let publicBusFare = remainingPeopleAfterMicro * 250;
    console.log(publicBusFare);
   

}
let people = 55;
let PubBusFare = publicBusFare(people);
console.log(PubBusFare);