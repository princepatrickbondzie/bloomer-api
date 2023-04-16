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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const methods_1 = require("../shared/utility/methods");
const types_1 = require("../shared/utility/types");
const app_guard_1 = require("../guards/app.guard");
const type_guard_1 = require("../guards/type.guard");
const auth_user_guard_1 = require("../guards/auth-user.guard");
const category_service_1 = require("./category.service");
const create_category_dto_1 = require("./dto/create-category.dto");
const update_category_dto_1 = require("./dto/update-category.dto");
const swagger_1 = require("@nestjs/swagger");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async createCategory(createCategoryDto) {
        return await this.categoryService.createCategory(createCategoryDto);
    }
    async getAllCategories() {
        return await this.categoryService.getAllCategories();
    }
    async getSingleCategory(id) {
        return this.categoryService.getSingleCategory(id);
    }
    async updateCategory(id, updateCategoryDto) {
        return await this.categoryService.updateCategory(id, updateCategoryDto);
    }
    async deleteCategory(id) {
        return await this.categoryService.deleteCategory(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, methods_1.Type)([types_1.userType.SuperAdmin, types_1.userType.Admin, types_1.userType.CustomerService]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({ summary: 'create a new category' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(app_guard_1.AppGuard),
    (0, swagger_1.ApiOperation)({ summary: 'get all categories' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getAllCategories", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(app_guard_1.AppGuard),
    (0, swagger_1.ApiOperation)({ summary: 'get one category' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getSingleCategory", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, methods_1.Type)([types_1.userType.SuperAdmin, types_1.userType.Admin, types_1.userType.CustomerService]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({ summary: 'update category' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, methods_1.Type)([types_1.userType.SuperAdmin, types_1.userType.Admin, types_1.userType.CustomerService]),
    (0, common_1.UseGuards)(auth_user_guard_1.UserAuthGuard, type_guard_1.TypeGuard),
    (0, swagger_1.ApiOperation)({ summary: 'delete category' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteCategory", null);
CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    (0, swagger_1.ApiTags)('Category'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map