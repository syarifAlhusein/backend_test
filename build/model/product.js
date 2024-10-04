"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const categories_1 = require("./categories"); // Pastikan path ini benar
let Product = class Product extends sequelize_typescript_1.Model {
};
exports.Product = Product;
Product.PRODUCT_TABLE_NAME = "product";
Product.PRODUCT_ID = "id";
Product.PRODUCT_NAME = "name";
Product.PRODUCT_DESCRIPTION = "description";
Product.PRODUCT_IMAGE = "image";
Product.CATEGORY_ID = "category_id";
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: Product.PRODUCT_ID,
    }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        field: Product.PRODUCT_NAME,
    }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: Product.PRODUCT_DESCRIPTION,
    }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        field: Product.PRODUCT_IMAGE,
    }),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => categories_1.Categories),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: Product.CATEGORY_ID,
    }),
    __metadata("design:type", Number)
], Product.prototype, "category_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => categories_1.Categories),
    __metadata("design:type", categories_1.Categories)
], Product.prototype, "category", void 0);
exports.Product = Product = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: Product.PRODUCT_TABLE_NAME,
    })
], Product);
