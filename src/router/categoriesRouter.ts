import BaseRoutes from "./base/baseRouter";
import validate from "../helper/validate";
import { createCategoriesSchema, updataCategoriesSchema } from "../schema/categoriesSchema";
import CategoriesController from "../controller/categoriesController";

class CategoriesRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("", validate(createCategoriesSchema), CategoriesController.create);
    this.router.patch("/:id", validate(updataCategoriesSchema), CategoriesController.update);
    this.router.delete("/:id", CategoriesController.delete);
    this.router.get("", CategoriesController.findAll);
    this.router.get("/:id", CategoriesController.findById);
  }
}

export default new CategoriesRoutes().router;
