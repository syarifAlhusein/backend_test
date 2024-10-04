"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updataCategoriesSchema = exports.createCategoriesSchema = void 0;
const zod_1 = require("zod");
exports.createCategoriesSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, { message: "Name must be greater than 1 characters!" }),
    }),
});
exports.updataCategoriesSchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z
        .object({
        name: zod_1.z.string().min(1, { message: "Name must be greater than 1 characters!" }),
    })
        .partial(),
});
