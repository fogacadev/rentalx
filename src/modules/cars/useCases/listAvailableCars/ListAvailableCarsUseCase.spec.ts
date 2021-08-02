import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
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

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should by able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi",
      description: "Carro bonito",
      daily_rate: 140,
      license_plate: "DEF-121s2",
      fine_amount: 100,
      brand: "Car-brand_test",
      category_id: "adf2f179-9188-44a9-8869-d9193cdd061a",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car-brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should by able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Carro bonito",
      daily_rate: 140,
      license_plate: "DEF-12345",
      fine_amount: 100,
      brand: "Car-brand_test",
      category_id: "adf2f179-9188-44a9-8869-d9193cdd061a",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car]);
  });

  it("should by able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Carro bonito",
      daily_rate: 140,
      license_plate: "DEF-12345",
      fine_amount: 100,
      brand: "Car-brand_test",
      category_id: "12345",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
