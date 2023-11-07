let city: string = 'Karachi';

console.log("Is city == 'Karachi'? I predict True.");
console.log(city == 'Karachi');

console.log("Is city != 'Lahore'? I predict True.");
console.log(city != 'Lahore');

let language: string = 'Urdu';

console.log("Is language == 'urdu'? I predict True.");
console.log(language.toLowerCase() == 'urdu');

console.log("Is language == 'English'? I predict False.");
console.log(language.toLowerCase() == 'English');

let population: number = 220892340;

console.log("Is population > 200 million? I predict True.");
console.log(population > 200_000_000);

console.log("Is population <= 100 million? I predict False.");
console.log(population <= 100_000_000);

let temperature2: number = 32;

console.log("Is temperature2 != 35? I predict True.");
console.log(temperature2 != 35);

console.log("Is temperature2 >= 30? I predict True.");
console.log(temperature2 >= 30);

let isMonsoon: boolean = true;
let isSunny: boolean = false; 

console.log("Is it monsoon and not sunny? I predict True.");
console.log(isMonsoon && !isSunny);

console.log("Is it monsoon or sunny? I predict True.");
console.log(isMonsoon || isSunny);

let cities: string[] = ['Karachi', 'Lahore', 'Islamabad'];

console.log("Is 'Lahore' in the cities array? I predict True.");
console.log(cities.indexOf('Lahore') !== -1);

console.log("Is 'Quetta' in the cities array? I predict False.");
console.log(cities.indexOf('Quetta') !== -1);

console.log("Is 'Peshawar' not in the cities array? I predict True.");
console.log(cities.indexOf('Peshawar') === -1);

console.log("Is 'Islamabad' not in the cities array? I predict False.");
console.log(cities.indexOf('Islamabad') === -1);