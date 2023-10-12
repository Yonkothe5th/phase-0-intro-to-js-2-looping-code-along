// Code your solutions in this file
const namearr = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
    const thankYouCards = [];

    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return thankYouCards;
}
writeCards();

function countDown(number){
while (number > -1){
  console.log (number--);
}
}
countDown(10);