import { allGuest, guestNames } from "./assignment14.js";
console.log(`Assignment 15 : Start Here \n`);
let notInvited = guestNames.pop();
console.log(`\n"Sorry to hear you can't make it, ${notInvited}. We'll miss your presence at the dinner party."\n`);
console.log(guestNames);
guestNames.push("hassan");
console.log(guestNames);
guestNames.map((guestNames) => {
    console.log(`"New invitation, A delightful dinner, ${guestNames} ! Let's create unforgettable memories together."`);
});
allGuest.push("hassan");
export { allGuest, guestNames };
