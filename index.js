// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

function writeCards(namesArray, event) {
    let cards = []

    for (let i = 0; i < namesArray.length; i++) {
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return cards;
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function wrapGifts(gifts) {
    let i = 0; // the initialization moves outside the body of the loop!
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++; //iteration moves inside the body of the loop
    }
    return gifts;
}

wrapGifts(gifts);

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i--);
    }
}

