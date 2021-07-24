import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });
  it("should be able to list cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi",
      description: "Carro bonito",
      daily_rate: 140,
      license_plate: "DEF-121s2",
      fine_amount: 100,
      brand: "Audi",
      category_id: "adf2f179-9188-44a9-8869-d9193cdd061a",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should by able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi",
      description: "Carro bonito",
      daily_rate: 140,
      license_plate: "DEF-121s2",
      fine_amount: 100,
      brand: "Car-brand_test",
      category_id: "adf2f179-9188-44a9-8869-d9193cdd061a",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car-brand_test",
    });

    expect(cars).toEqual([car]);
  });
});
