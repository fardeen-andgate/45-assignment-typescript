const magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
function show_magicians(magicianNames) {
    magicianNames.forEach((name) => {
        console.log(name);
    });
}
show_magicians(magicians);
export { show_magicians };
