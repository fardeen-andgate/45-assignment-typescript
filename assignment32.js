const current_users = ['Husain', 'Khizar', 'Ali', 'Jamshed', 'Zubair'];
const new_users = ['Zahid', 'Khizar', 'Kamil', 'Noor', 'Jamshed'];
const currentUsers = current_users.map(user => user.toLowerCase());
const newUsers = new_users.map(user => user.toLowerCase());
console.log(currentUsers);
console.log(newUsers);
const finalListUseravailable = [];
for (const user of currentUsers) {
    if (!currentUsers.includes(user)) {
        finalListUseravailable.push(user);
    }
}
for (const user of newUsers) {
    if (!currentUsers.includes(user)) {
        finalListUseravailable.push(user);
    }
}
for (const user of newUsers) {
    if (finalListUseravailable.includes(user)) {
        console.log(`The username is available : ${user}`);
    }
    else {
        console.log(`The username is not available : ${user}`);
    }
}
export {};
