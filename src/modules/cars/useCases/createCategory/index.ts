import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUserCase } from "./CreateCategoryUserCase";

const categoriesRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUserCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
