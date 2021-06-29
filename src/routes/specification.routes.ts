import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  console.log("reload funcionando");
  return createSpecificationController.handle(request, response);
});

export { specificationRoutes };
