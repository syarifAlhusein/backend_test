import { Request, Response } from "express";
import { Product } from "../model/product";
import { ProductRepo } from "../repository/productRepo";

class ProductController {
  async create(req: Request, res: Response) {
    try {
      const { name, description, category_id } = req.body;
      const imagePath = req.file?.path;

      if (!category_id) {
        return res.status(400).json({
          status: "Bad Request!",
          message: "Category ID is required!",
        });
      }

      if (!imagePath) {
        return res.status(400).json({
          status: "Bad Request!",
          message: "Image file is required!",
        });
      }

      const new_product = new Product();
      new_product.name = name;
      new_product.description = description;
      new_product.category_id = category_id;
      new_product.image = imagePath;

      await new ProductRepo().save(new_product, imagePath);

      res.status(201).json({
        status: "Created!",
        message: "Successfully added product!",
        data: new_product,
      });
    } catch (err) {
      console.error("Error in create:", err);
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new ProductRepo().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted product!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async deleteAll(req: Request, res: Response) {
    try {
      await new ProductRepo().deleteAll();
      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted all products!",
      });
    } catch (err) {
      console.error("Error in deleteAll:", err);
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Failed to delete all products!",
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_product = await new ProductRepo().retrieveById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched product by id!",
        data: new_product,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const new_product = await new ProductRepo().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all product data!",
        data: new_product,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_product = new Product();

      new_product.id = id;
      new_product.name = req.body.name;
      new_product.description = req.body.description;

      if (req.body.category_id) {
        new_product.category_id = req.body.category_id;
      }

      // Cek jika ada file gambar yang diupload
      if (req.file) {
        new_product.image = req.file.filename; // Mengupdate path gambar
      }

      // Memperbarui produk di repository
      await new ProductRepo().update(new_product);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated product data!",
      });
    } catch (err) {
      console.error("Error in update:", err);
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new ProductController();
