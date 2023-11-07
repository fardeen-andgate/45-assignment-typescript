function orderSandwich(...item) {
    if (item.length === 0) {
        console.log(`You ordered an empty sandwich. Please add some ingredients.`);
    }
    else {
        console.log(`You ordered a sandwich with the following items:`);
        item.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Tikka", "fish", "Mayonnaise");
orderSandwich();
export {};
