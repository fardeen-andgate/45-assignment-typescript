interface CarInfo {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function createCar(manufacturer: string, model: string, ...args: { [key: string]: any }  [] ) : CarInfo {
    const car: CarInfo = {
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