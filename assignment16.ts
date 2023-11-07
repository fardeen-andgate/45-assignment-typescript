import {allGuest, guestNames } from "./assignment15.js";
console.log(`\n\nassignment 16 : Start Here \n`);
console.log(`Some Updates about Party : Now we are arranging a big party.`)
guestNames.unshift("Amjad");
allGuest.unshift("Amjad");
guestNames.splice(1,((guestNames.length)/2)+1,"Adil")
allGuest.splice(1,0,"Adil")
console.log(guestNames);

function append(guestNames: string[], index: number, value: string) {
    guestNames.splice(index, 0, value);
  }
append(guestNames , (guestNames.length) , "Qasim");
append(allGuest , 0 , "Qasim");

console.log(guestNames);
guestNames.forEach((value) => {
    console.log(`"Join me for a delightful dinner, ${value} ! Let's create unforgettable memories together."`);
});


export{allGuest,guestNames};