import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUserCase } from "./CreateCategoryUserCase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUserCase);

    await createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
