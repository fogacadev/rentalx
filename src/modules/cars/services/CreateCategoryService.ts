import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 * [X] - Definir retorno do erro
 * [X] - Alterar o retorno de erro
 * [X] - Acessar o repositorio
 */

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlredyExists = this.categoriesRepository.findByName(name);

    if (categoryAlredyExists) {
      throw new Error("Category alredy exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
