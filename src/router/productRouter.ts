import BaseRoutes from "./base/baseRouter";
import validate from "../helper/validate";
import { createProductSchema, updateProductSchema } from "../schema/productSchema";
import ProductController from "../controller/productController";
import upload from "../helper/upload";

class ProductRoutes extends BaseRoutes {
  public routes(): void {
    // Rute untuk membuat produk
    this.router.post("", upload.single("image"), validate(createProductSchema), ProductController.create);
    this.router.patch("/:id", upload.single("image"), validate(updateProductSchema), ProductController.update);
    this.router.delete("/:id", ProductController.delete);
    this.router.delete("", ProductController.deleteAll);
    this.router.get("", ProductController.findAll);
    this.router.get("/:id", ProductController.findById);
  }
}

export default new ProductRoutes().router;
