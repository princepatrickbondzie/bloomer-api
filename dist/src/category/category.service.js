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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const mongoose_1 = require("mongoose");
const category_1 = require("../shared/schema/category");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async createCategory(createCategoryDto) {
        return await this.categoryModel.create(createCategoryDto);
    }
    async getAllCategories() {
        return await this.categoryModel.find();
    }
    async getSingleCategory(id) {
        return await this.categoryModel.findById(id);
    }
    async updateCategory(id, updateCategoryDto) {
        return await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, {
            new: true,
        });
    }
    async deleteCategory(id) {
        return await this.categoryModel.findByIdAndDelete(id);
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(category_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map