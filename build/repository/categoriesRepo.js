"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepo = void 0;
const categories_1 = require("../model/categories");
class CategoriesRepo {
    save(categories) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield categories_1.Categories.create({
                    name: categories.name,
                });
            }
            catch (error) {
                throw new Error("Failed to create categorie!");
            }
        });
    }
    update(categories) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_categories = yield categories_1.Categories.findOne({
                    where: {
                        id: categories.id,
                    },
                });
                if (!new_categories) {
                    throw new Error("Categorie not found!");
                }
                new_categories.name = categories.name;
                yield new_categories.save();
            }
            catch (error) {
                throw new Error("Failed to create categorie!");
            }
        });
    }
    delete(categorieId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_categories = yield categories_1.Categories.findOne({
                    where: {
                        id: categorieId,
                    },
                });
                if (!new_categories) {
                    throw new Error("Categorie not found!");
                }
                yield new_categories.destroy();
            }
            catch (error) {
                throw new Error("Failed to create categorie!");
            }
        });
    }
    retrieveById(categorieId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_categories = yield categories_1.Categories.findOne({
                    where: {
                        id: categorieId,
                    },
                });
                if (!new_categories) {
                    throw new Error("Categorie not found!");
                }
                return new_categories;
            }
            catch (error) {
                throw new Error("Failed to create categories!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield categories_1.Categories.findAll();
            }
            catch (error) {
                throw new Error("Failed to create categories");
            }
        });
    }
}
exports.CategoriesRepo = CategoriesRepo;
