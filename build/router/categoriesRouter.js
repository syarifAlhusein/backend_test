"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRouter_1 = __importDefault(require("./base/baseRouter"));
const validate_1 = __importDefault(require("../helper/validate"));
const categoriesSchema_1 = require("../schema/categoriesSchema");
const categoriesController_1 = __importDefault(require("../controller/categoriesController"));
class CategoriesRoutes extends baseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(categoriesSchema_1.createCategoriesSchema), categoriesController_1.default.create);
        this.router.patch("/:id", (0, validate_1.default)(categoriesSchema_1.updataCategoriesSchema), categoriesController_1.default.update);
        this.router.delete("/:id", categoriesController_1.default.delete);
        this.router.get("", categoriesController_1.default.findAll);
        this.router.get("/:id", categoriesController_1.default.findById);
    }
}
exports.default = new CategoriesRoutes().router;
