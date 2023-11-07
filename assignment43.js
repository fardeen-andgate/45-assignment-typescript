function make_great(magicianNames) {
    const modifiedMagicians = magicianNames;
    console.log(modifiedMagicians);
    for (let i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = "the Great " + modifiedMagicians[i];
    }
    return modifiedMagicians;
}
function show_magicians(magicianNames) {
    magicianNames.forEach((name) => {
        console.log(name);
    });
}
const magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
const greatMagicians = make_great([...magicians]);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
export {};
