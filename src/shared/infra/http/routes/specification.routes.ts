import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const specificationRoutes = Router();
const createdSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuthenticated);

specificationRoutes.post("/", createdSpecificationController.handle);

export { specificationRoutes };
