import { Product } from "../model/product";

interface IProductRepo {
  save(product: Product, imagePath: string): Promise<void>; 
  update(product: Product, imagePath?: string): Promise<void>;
  delete(productId: number): Promise<void>;
  deleteAll(): Promise<void>;
  retrieveById(productId: number): Promise<Product>;
  retrieveAll(): Promise<Product[]>;
}

export class ProductRepo implements IProductRepo {
  async save(product: Product, imagePath: string): Promise<void> {
    try {
      await Product.create({
        name: product.name,
        description: product.description,
        category_id: product.category_id,
        image: imagePath,
      });
    } catch (error) {
      console.error("Error in save:", error);
      throw new Error("Failed to create product!");
    }
  }

  async update(product: Product, imagePath?: string): Promise<void> {
    try {
      const existingProduct = await Product.findOne({
        where: {
          id: product.id,
        },
      });

      if (!existingProduct) {
        throw new Error("Product not found!");
      }

      existingProduct.name = product.name;
      existingProduct.description = product.description;
      existingProduct.category_id = product.category_id;
      if (imagePath) {
        existingProduct.image = imagePath;
      }

      await existingProduct.save();
    } catch (error) {
      console.error("Error in update:", error);
      throw new Error("Failed to update product!");
    }
  }

  async delete(productId: number): Promise<void> {
    try {
      const existingProduct = await Product.findOne({
        where: {
          id: productId,
        },
      });

      if (!existingProduct) {
        throw new Error("Product not found!");
      }

      await existingProduct.destroy();
    } catch (error) {
      console.error("Error in delete:", error);
      throw new Error("Failed to delete product!");
    }
  }

  async deleteAll(): Promise<void> {
    try {
      await Product.destroy({ where: {}, truncate: true });
    } catch (error) {
      console.error("Error in deleteAll:", error);
      throw new Error("Failed to delete all products!");
    }
  }

  async retrieveById(productId: number): Promise<Product> {
    try {
      const existingProduct = await Product.findOne({
        where: {
          id: productId,
        },
      });

      if (!existingProduct) {
        throw new Error("Product not found!");
      }

      return existingProduct;
    } catch (error) {
      console.error("Error in retrieveById:", error);
      throw new Error("Failed to retrieve product!");
    }
  }

  async retrieveAll(): Promise<Product[]> {
    try {
      return await Product.findAll();
    } catch (error) {
      console.error("Error in retrieveAll:", error);
      throw new Error("Failed to retrieve products!");
    }
  }
}
