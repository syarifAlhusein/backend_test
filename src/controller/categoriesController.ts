import { Request, Response } from "express";
import { Categories } from "../model/categories";
import { CategoriesRepo } from "../repository/categoriesRepo";

class CategoriesController {
  async create(req: Request, res: Response) {
    try {
      const new_categories = new Categories();
      new_categories.name = req.body.name;

      await new CategoriesRepo().save(new_categories);

      res.status(201).json({
        status: "Created!",
        message: "Successfully add categorie!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      await new CategoriesRepo().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted categorie!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      let id = parseInt(req.params["id"]);
      const new_categories = await new CategoriesRepo().retrieveById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched categorie by id!",
        data: new_categories,
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
      const new_categories = await new CategoriesRepo().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all categorie data!",
        data: new_categories,
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
      const new_categories = new Categories();

      new_categories.id = id;
      new_categories.name = req.body.name;

      await new CategoriesRepo().update(new_categories);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated categorie data!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new CategoriesController();
