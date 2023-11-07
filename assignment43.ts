function make_great(magicianNames: string[]): string[] {
    const modifiedMagicians: string[] = magicianNames;
    console.log(modifiedMagicians)

    for (let i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = "the Great " + modifiedMagicians[i];
    }


    return modifiedMagicians;
}

function show_magicians(magicianNames: string[]): void {
    magicianNames.forEach((name: string) => {
        console.log(name);
    });
}

const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

const greatMagicians: string[] = make_great([...magicians]);

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);