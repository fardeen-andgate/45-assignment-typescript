const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

function show_magicians(magicianNames: string[]) {
    magicianNames.forEach((name: string) => {
        console.log(name);
    });
}
show_magicians(magicians);
export{show_magicians}