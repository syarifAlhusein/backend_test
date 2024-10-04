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
const categories_1 = require("../model/categories");
const categoriesRepo_1 = require("../repository/categoriesRepo");
class CategoriesController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_categories = new categories_1.Categories();
                new_categories.name = req.body.name;
                yield new categoriesRepo_1.CategoriesRepo().save(new_categories);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully add categorie!",
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                yield new categoriesRepo_1.CategoriesRepo().delete(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted categorie!",
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_categories = yield new categoriesRepo_1.CategoriesRepo().retrieveById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched categorie by id!",
                    data: new_categories,
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_categories = yield new categoriesRepo_1.CategoriesRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all categorie data!",
                    data: new_categories,
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_categories = new categories_1.Categories();
                new_categories.id = id;
                new_categories.name = req.body.name;
                yield new categoriesRepo_1.CategoriesRepo().update(new_categories);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated categorie data!",
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
}
exports.default = new CategoriesController();
