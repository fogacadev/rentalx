import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();
const createdSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAuthenticated);

specificationRoutes.post("/", createdSpecificationController.handle);

export { specificationRoutes };
