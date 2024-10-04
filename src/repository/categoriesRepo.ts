import { Categories } from "../model/categories";

interface ICategoriesRepo {
  save(categories: Categories): Promise<void>;
  update(categories: Categories): Promise<void>;
  delete(categorieId: number): Promise<void>;
  retrieveById(categorieId: number): Promise<Categories>;
  retrieveAll(): Promise<Categories[]>;
}

export class CategoriesRepo implements ICategoriesRepo {
  async save(categories: Categories): Promise<void> {
    try {
      await Categories.create({
        name: categories.name,
      });
    } catch (error) {
      throw new Error("Failed to create categorie!");
    }
  }
  async update(categories: Categories): Promise<void> {
    try {
      const new_categories = await Categories.findOne({
        where: {
          id: categories.id,
        },
      });
      if (!new_categories) {
        throw new Error("Categorie not found!");
      }
      new_categories.name = categories.name;

      await new_categories.save();
    } catch (error) {
      throw new Error("Failed to create categorie!");
    }
  }
  async delete(categorieId: number): Promise<void> {
    try {
      const new_categories = await Categories.findOne({
        where: {
          id: categorieId,
        },
      });
      if (!new_categories) {
        throw new Error("Categorie not found!");
      }

      await new_categories.destroy();
    } catch (error) {
      throw new Error("Failed to create categorie!");
    }
  }
  async retrieveById(categorieId: number): Promise<Categories> {
    try {
      const new_categories = await Categories.findOne({
        where: {
          id: categorieId,
        },
      });
      if (!new_categories) {
        throw new Error("Categorie not found!");
      }
      return new_categories;
    } catch (error) {
      throw new Error("Failed to create categories!");
    }
  }
  async retrieveAll(): Promise<Categories[]> {
    try {
      return await Categories.findAll();
    } catch (error) {
      throw new Error("Failed to create categories");
    }
  }
}
