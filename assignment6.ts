const namewithWhitespace:string ="\t\n  Muhammad Fardeen  \t\n";

console.log("Name with whitespace:");
console.log(`${namewithWhitespace}`);

const strippedName:string = namewithWhitespace.trim();

console.log("Name after stripping:");
console.log(`"${strippedName}"`);