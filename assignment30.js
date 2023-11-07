let userName = ["admin", "Fardeen", "Zohaib", "Kashir", "Ali"];
for (let i = 0; i < userName.length; i++) {
    if ((userName[i] === "admin")) {
        console.log(`Hello admin`);
    }
    else {
        console.log(`Hello ${userName[i]}, Thank you for logging in again !`);
    }
}
export {};
