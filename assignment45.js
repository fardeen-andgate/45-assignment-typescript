function createCar(manufacturer, model, ...args) {
    const car = {
        manufacturer,
        model,
    };
    args.forEach((arg) => {
        for (const key in arg) {
            if (arg.hasOwnProperty(key)) {
                car[key] = arg[key];
            }
        }
    });
    return car;
}
const carInfo = createCar("Toyota", "Camry", { color: "Blue" }, { year: 2023 });
console.log(carInfo);
export {};
