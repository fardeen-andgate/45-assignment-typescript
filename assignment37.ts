import inquirer from "inquirer";

console.log(`Please Select Size (small, medium, large) and \nTell us what should print on it you can give massage.`);

 const size = await inquirer.prompt({
    message : "Please Enter a Size",
    type : "input",
    name : "size"    
 })


function make_shirt(size : string, text_Massage : string ){
size = size.toLowerCase();
if (size === "large"){
    console.log(`Sorry in the Shirt Size is ${size}, we have Only text printed on it is : ${text_Massage}`);
} else {

console.log(`The Shirt Size is ${size}, Text printed on it is : ${text_Massage}`);
}
}
make_shirt("\n\nsmall","Ayeenn");
make_shirt("large","Theres no me");
make_shirt("medium","Women hahaha");