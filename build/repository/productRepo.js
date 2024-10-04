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
exports.ProductRepo = void 0;
const product_1 = require("../model/product");
class ProductRepo {
    save(product, imagePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield product_1.Product.create({
                    name: product.name,
                    description: product.description,
                    category_id: product.category_id,
                    image: imagePath,
                });
            }
            catch (error) {
                console.error("Error in save:", error);
                throw new Error("Failed to create product!");
            }
        });
    }
    update(product, imagePath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingProduct = yield product_1.Product.findOne({
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
                yield existingProduct.save();
            }
            catch (error) {
                console.error("Error in update:", error);
                throw new Error("Failed to update product!");
            }
        });
    }
    delete(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingProduct = yield product_1.Product.findOne({
                    where: {
                        id: productId,
                    },
                });
                if (!existingProduct) {
                    throw new Error("Product not found!");
                }
                yield existingProduct.destroy();
            }
            catch (error) {
                console.error("Error in delete:", error);
                throw new Error("Failed to delete product!");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield product_1.Product.destroy({ where: {}, truncate: true });
            }
            catch (error) {
                console.error("Error in deleteAll:", error);
                throw new Error("Failed to delete all products!");
            }
        });
    }
    retrieveById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingProduct = yield product_1.Product.findOne({
                    where: {
                        id: productId,
                    },
                });
                if (!existingProduct) {
                    throw new Error("Product not found!");
                }
                return existingProduct;
            }
            catch (error) {
                console.error("Error in retrieveById:", error);
                throw new Error("Failed to retrieve product!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield product_1.Product.findAll();
            }
            catch (error) {
                console.error("Error in retrieveAll:", error);
                throw new Error("Failed to retrieve products!");
            }
        });
    }
}
exports.ProductRepo = ProductRepo;
