import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return ListCategoriesController.handle(request, response);
});

export { categoriesRoutes };
