console.log(`Version A`);
let alien_color: string= `green`;
if (alien_color === `green`){
    console.log(`The player earned 5 points`);
}   else {
    if  (alien_color === `yellow`){
        console.log(`The player earned 10 points`);
    }   else{
        if  (alien_color === `red`){
            console.log(`The player earned 15 points`);
        }   
    }
}
console.log(`\nVersion B`);

alien_color = `yellow`;
if (alien_color === `green`){
    console.log(`The player earned 5 points`);
}   else {
    if  (alien_color === `yellow`){
        console.log(`The player earned 10 points`);
    }   else{
        if  (alien_color === `red`){
            console.log(`The player earned 15 points`);
        }   
    }
}
console.log(`\nVersion C`);
alien_color = `red`;
if (alien_color === `green`){
    console.log(`The player earned 5 points`);
}   else {
    if  (alien_color === `yellow`){
        console.log(`The player earned 10 points`);
    }   else{
        if  (alien_color === `red`){
            console.log(`The player earned 15 points`);
        }   
    }
}