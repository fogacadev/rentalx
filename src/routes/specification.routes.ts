import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();
const createdSpecificationController = new CreateSpecificationController();

specificationRoutes.post("/", createdSpecificationController.handle);

export { specificationRoutes };
