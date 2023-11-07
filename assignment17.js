import { allGuest, guestNames } from "./assignment16.js";
console.log(`\n\nassignment 17 : Start Here \n`);
console.log(`The table for big dinner will not arriving that why I apologise for dinner big party\nHere I have space of 2 guest.`);
console.log(guestNames);
for (let i = 0; i < (guestNames.length); i++) {
    console.log(`We are sorry ${guestNames.pop()},that you would not be attend the party.`);
}
console.log(guestNames);
let a = guestNames.length;
console.log(guestNames.length);
for (let i = 0; i < a; i++) {
    console.log(`Who they are still invited for party : ${guestNames[0]}`);
    guestNames.shift();
}
console.log(`Guest List : ${guestNames}`);
export { allGuest, guestNames };
