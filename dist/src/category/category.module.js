"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_1 = require("../shared/schema/user");
const app_1 = require("../shared/schema/app");
const mongoose_1 = require("@nestjs/mongoose");
const category_service_1 = require("./category.service");
const category_controller_1 = require("./category.controller");
const category_1 = require("../shared/schema/category");
const business_1 = require("../shared/schema/business");
let CategoryModule = class CategoryModule {
};
CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: app_1.App.name, schema: app_1.AppSchema },
                { name: user_1.User.name, schema: user_1.UserSchema },
                { name: category_1.Category.name, schema: category_1.CategorySchema },
                { name: business_1.Business.name, schema: business_1.BusinessSchema },
            ]),
        ],
        controllers: [category_controller_1.CategoryController],
        providers: [category_service_1.CategoryService, jwt_1.JwtService],
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;
//# sourceMappingURL=category.module.js.map