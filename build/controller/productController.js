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
const product_1 = require("../model/product");
const productRepo_1 = require("../repository/productRepo");
class ProductController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { name, description, category_id } = req.body;
                const imagePath = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
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
                const new_product = new product_1.Product();
                new_product.name = name;
                new_product.description = description;
                new_product.category_id = category_id;
                new_product.image = imagePath;
                yield new productRepo_1.ProductRepo().save(new_product, imagePath);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully added product!",
                    data: new_product,
                });
            }
            catch (err) {
                console.error("Error in create:", err);
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
                yield new productRepo_1.ProductRepo().delete(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted product!",
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
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield new productRepo_1.ProductRepo().deleteAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted all products!",
                });
            }
            catch (err) {
                console.error("Error in deleteAll:", err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Failed to delete all products!",
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_product = yield new productRepo_1.ProductRepo().retrieveById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched product by id!",
                    data: new_product,
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
                const new_product = yield new productRepo_1.ProductRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all product data!",
                    data: new_product,
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
                const new_product = new product_1.Product();
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
                yield new productRepo_1.ProductRepo().update(new_product);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated product data!",
                });
            }
            catch (err) {
                console.error("Error in update:", err);
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
}
exports.default = new ProductController();
