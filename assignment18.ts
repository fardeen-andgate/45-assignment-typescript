let favCountry =["USA", "Russia","Canada", "Saudia","Netherland"];
console.log(favCountry);
console.log(`Sort assending order array alphabetically  : ${favCountry.sort()}`);
console.log(`Sort array in desending order              : ${favCountry.sort().reverse()}`);
console.log(`reverse order                              : ${favCountry.reverse()}`);
console.log(`Back to Original order                     : ${favCountry.reverse()}`);
console.log(`Sort assending order array alphabetically  : ${favCountry.sort()}`);
let reverseFavCountry =favCountry;
reverseFavCountry.reverse();
if (reverseFavCountry === favCountry){
    console.log(`\nThe order has been changed `);
    console.log(reverseFavCountry);
}