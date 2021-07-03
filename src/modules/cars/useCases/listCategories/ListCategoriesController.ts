import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUserCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(requset: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUserCase);

    const all = await listCategoriesUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };
