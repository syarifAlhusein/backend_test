"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRouter_1 = __importDefault(require("./base/baseRouter"));
const validate_1 = __importDefault(require("../helper/validate"));
const productSchema_1 = require("../schema/productSchema");
const productController_1 = __importDefault(require("../controller/productController"));
const upload_1 = __importDefault(require("../helper/upload"));
class ProductRoutes extends baseRouter_1.default {
    routes() {
        // Rute untuk membuat produk
        this.router.post("", upload_1.default.single("image"), (0, validate_1.default)(productSchema_1.createProductSchema), productController_1.default.create);
        // Rute untuk memperbarui produk, dengan menambahkan middleware upload
        this.router.patch("/:id", upload_1.default.single("image"), (0, validate_1.default)(productSchema_1.updateProductSchema), productController_1.default.update);
        // Rute untuk menghapus produk
        this.router.delete("/:id", productController_1.default.delete);
        // Rute untuk menghapus semua produk
        this.router.delete("", productController_1.default.deleteAll);
        // Rute untuk mendapatkan semua produk
        this.router.get("", productController_1.default.findAll);
        // Rute untuk mendapatkan produk berdasarkan ID
        this.router.get("/:id", productController_1.default.findById);
    }
}
exports.default = new ProductRoutes().router;
